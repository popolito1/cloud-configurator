from cgi import print_exception
from email.mime import image
import json, os
from locale import currency
from unicodedata import name

def open_with_json(path):
    if os.path.exists(path):
        with open(path,'r', encoding="utf8") as file:
            data = json.load(file)
    else:
        data = {}
    return data

def item_data(item):
    new = {}
    new['name'] = item['name']
    new['image'] = item['image']
    new['price'] = item['price']
    new['currency'] = item['currency']
    new['extendedName'] = item['extendedName']
    new['urlId'] = item['urlId']
    new['url'] = f"https://ldlc.com/fiche/{new['urlId']}.html"
    return new

if __name__ == "__main__":
    fileName = "aio_coolers"
    data = open_with_json(fileName+'.json')
    print(data.keys())
    item_list = []
    for item in data['data']:
        new = item_data(item)
        item_list.append(new)
    with open(fileName+"_cleaned.json",'w') as file:
        json.dump(item_list, file)