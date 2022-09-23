from utils import open_with_json
import requests
from bs4 import BeautifulSoup, NavigableString

def get_soup(url: str):
    #get the soup based on the url
    r = requests.get(url)
    if r.status_code == 200:
        soup = BeautifulSoup(r.text,'html.parser')
        return soup

def get_data(soup: BeautifulSoup):
    table = soup.find("table", id="product-parameters")
    tr_list = table.find_all("tr")
    features = table.find_all("tr", class_="feature")
    for feature in features:
        if feature_name(feature) == "Architecture":
            data = data_of_feature(feature, tr_list, features)
            for line in data:
                if tr_label(line) == "Compatibilité chipset carte mère":
                    trs = data_of_label(line, data)
                    for tr in trs:
                        print(data_of_tr(tr))
                    break
        if feature_name(feature) == "Contrôleur mémoire":
            data = data_of_feature(feature, tr_list, features)
            for line in data:
                if tr_label(line) == "Contrôleur mémoire":
                    trs = data_of_label(line, data)
                    for tr in trs:
                        print(data_of_tr(tr))
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
    next_index = tr_list.index(features[feature_index+1])
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
        return tr_list[index]

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
    a = td.find("a")
    return a.contents[0].strip()

if __name__ == "__main__":
    fileName = "processeurs"
    data = open_with_json(f"processed_data/{fileName}_cleaned.json")
    soup = get_soup(data[0]['url'])
    get_data(soup)