import json, os
def open_with_json(path):
    if os.path.exists(path):
        with open(path,'r', encoding="utf8") as file:
            data = json.load(file)
    else:
        data = {}
    return data

def save_with_json(path, data):
    with open(path,'w', encoding="utf8") as file:
        json.dump(data, file)

categories = [el for el in os.listdir() if el.endswith(".json")]
for category in categories:
    name = category.rstrip(".json")
    data = open_with_json(category)
    for product in data:
        product["category"] = name
    save_with_json(category, data)
