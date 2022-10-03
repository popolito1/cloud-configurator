from utils import open_with_json
import json

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
    fileName = "psu"
    data = open_with_json("raw_data/"+fileName+'.json')
    print(data.keys())
    item_list = []
    for item in data['data']:
        new = item_data(item)
        item_list.append(new)
    with open("processed_data/"+fileName+"_cleaned.json",'w') as file:
        json.dump(item_list, file)