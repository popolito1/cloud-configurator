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
    name = item['name']
    image = item['image']
    price = item['price']
    currency = item['currency']
    extendedName = item['extendedName']
    print(f"{name=}\n{image=}\n{price=}\n{currency=}\n{extendedName=}")

if __name__ == "__main__":
    data = open_with_json("processeurs.json")
    print(data.keys())
    first_item = data["data"][0]
    item_data(first_item)