from bs4 import BeautifulSoup
import requests

def main():
    results = scrape()

def scrape():
    page = requests.get("http://www.morcmtb.org/forums/trailconditions.php")
    soup = BeautifulSoup(page.content, 'html.parser')
    test = soup.find_all('table', class_="forumbits")
    print('test')

if __name__ == "__main__":
    main()