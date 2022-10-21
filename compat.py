import os,json
from utils import open_with_json

fileName = "fiche_techniques/aio_coolers.json"
 
data = open_with_json(fileName)

def save_with_json(path, data):
    with open(path,'w', encoding="utf8") as file:
        json.dump(data, file)


for product in data:
    product["compat"] = {
        "TDP": product["fiche"]["Spécifications techniques"]["TDP Max. CPU"],
    }
save_with_json(fileName, data)

print(data[0]['compat'])