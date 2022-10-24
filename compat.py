import os,json
from utils import open_with_json

fileName = "fiche_techniques/case.json"
 
data = open_with_json(fileName)

def save_with_json(path, data):
    with open(path,'w', encoding="utf8") as file:
        json.dump(data, file)


for product in data:
    product["compat"] = {
        "size": product["fiche"]["Principales caractéristiques"]["Format de carte mère"],
    }
save_with_json(fileName, data)

print(data[0]['compat'])