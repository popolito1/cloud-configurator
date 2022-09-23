from utils import open_with_json
import requests
from bs4 import BeautifulSoup

def get_soup(url: str):
    r = requests.get(url)
    if r.status_code == 200:
        soup = BeautifulSoup(r.text,'html.parser')
        return soup

def get_data(soup: BeautifulSoup):
    table = soup.find("table", id="product-parameters")
    print(table)

if __name__ == "__main__":
    pass