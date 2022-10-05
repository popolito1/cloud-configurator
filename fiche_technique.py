import time
from utils import open_with_json, save_with_json
import requests
from bs4 import BeautifulSoup, NavigableString

def get_soup(url: str):
    #get the soup based on the url
    r = requests.get(url)
    if r.status_code == 200:
        soup = BeautifulSoup(r.text,'html.parser')
        return soup

def get_data_compat(soup, *compats):
    table = soup.find("table", id="product-parameters")
    tr_list = table.find_all("tr")
    features = table.find_all("tr", class_="feature")
    for feature in features:
        for compat in compats:
            get_data(feature, *compat, tr_list, features)


def get_data(feature: NavigableString, featureName: str, labelName: str, tr_list: list, features: list):
    if feature_name(feature) == featureName:
        data = data_of_feature(feature, tr_list, features)
        for line in data:
            if tr_label(line) == labelName:
                trs = data_of_label(line, data)
                list_data = []
                for tr in trs:
                    if tr != '\n':
                        temp = data_of_tr(tr)
                        if not temp is None:
                            list_data.append(temp)
                print(list_data)
                break

def feature_name(feature: NavigableString):
    #return the name of the feature
    title = feature.find('td', class_="title")
    h2 = title.contents[0]
    return h2.contents[0]

def data_of_feature(feature: NavigableString, tr_list: list, features: list):
    #return the list of <tr> belonging to the feature in the fiche technique
    index = tr_list.index(feature)
    feature_index = features.index(feature)
    if feature_index+1 < len(features):
        next_index = tr_list.index(features[feature_index+1])
    else:
        next_index = -1
    data = tr_list[index:next_index]
    return data

def tr_label(line: NavigableString):
    #return the name of the label <tr> in a feature
    label = line.find("td", class_="label")
    if label is None:
        return ''
    else:
        h3 = label.contents[0]
        return h3.contents[0]

def data_of_label(label: NavigableString, tr_list: list):
    #return all the <tr> belonging to a label in a feature
    index = tr_list.index(label)
    if index == len(tr_list)-1:
        #the label is the last and so has only itself as elements
        return [tr_list[index]]

    for i,tr in enumerate(tr_list[index+1:]):
        if tr_label(tr):
            break
    if i < len(tr_list[index+1:])-1:
        end_index = index+1 + i
    elif tr_label(tr_list[i]): #here i should be the last element of the list so should be equivalent to -1
        end_index = index+1 + i+1
    else: end_index = -1

    return tr_list[index:end_index]

def data_of_tr(tr: NavigableString):
    td = tr.find("td", class_="checkbox")
    if not td is None:
        a = td.find("a")
        if not a is None:
            return a.contents[0].strip()
    return None

def get_data_compat_ram():
    data = open_with_json(f"processed_data/ram_cleaned.json")
    soup = get_soup(data[0]['url'])
    get_data_compat(soup, ("Format Mémoire", "Type de mémoire"))

def get_data_compat_processeurs():
    data = open_with_json(f"processed_data/processeurs_cleaned.json")
    soup = get_soup(data[0]['url'])
    get_data_compat(soup,
    ("Architecture", "Compatibilité chipset carte mère"),
    ("Contrôleur mémoire", "Contrôleur mémoire"),
    ("Architecture", "TDP")
    )

def get_data_compat_motherboards():
    data = open_with_json(f"processed_data/motherboards_cleaned.json")
    soup = get_soup(data[0]['url'])
    get_data_compat(soup, 
        ("Chipset", "Chipset"),
        ("Caractéristiques physiques", "Format de carte mère")
    )

def get_data_compat_graphic_cards():
    data = open_with_json(f"processed_data/graphic_cards_cleaned.json")
    soup = get_soup(data[0]['url'])
    get_data_compat(soup, ("Design", "Consommation"))

def get_data_compat_psu():
    data = open_with_json(f"processed_data/psu_cleaned.json")
    soup = get_soup(data[0]['url'])
    get_data_compat(soup, ("Puissance et Rendement", "Puissance"))

def get_fiche(soup: BeautifulSoup):
    table = soup.find("table", id="product-parameters")
    tr_list = table.find_all("tr")
    features = table.find_all("tr", class_="feature")
    out = {}
    for feature in features:
        labels = data_of_feature(feature, tr_list, features)
        label_dict = {}
        for label in labels:
            trs = data_of_label(label,tr_list)
            tr_data = [data_of_tr(tr) for tr in trs]
            if None in tr_data:
                continue
            tr_data = clean_data(tr_data)
            label_dict[tr_label(label)] = tr_data if len(tr_data) > 1 else tr_data[0]
        out[feature_name(feature)] = label_dict
    return out

def get_description(soup: BeautifulSoup):
    p = soup.find_all('p', class_="desc")[0]
    return p.contents[0]

def clean_data(data: list):
    out = []
    for el in data:
        if type(el) is str:
            temp = el.split(' ')
            new = [e for e in temp if e]
            cleaned = ' '.join(new)
            out.append(cleaned)
        else:
            out.append(el)
    return out



if __name__ == "__main__":
    import os
    list = os.listdir("processed_data/")
    for name in list:
        if not name in os.listdir("fiche_techniques/"):
            print(name)
            data = open_with_json(f"processed_data/{name}")
            new = []
            for i,el in enumerate(data):
                print(i)
                url = data[0]['url']
                soup = get_soup(url)
                desc = get_description(soup)
                out = get_fiche(soup)
                el['description'] = desc
                el['fiche'] = out
                new.append(el)
                save_with_json(new, f"fiche_techniques/{name}")
    
    