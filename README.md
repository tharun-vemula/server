# Web Scraping

This application scrapes an input URL and parse its metadata. If the page has OG parameters set exclusively, then it returns all the OG parameters. If they are not set, it parses the webpage to get relevant details such as title, description, images etc <br/>

### Demo
Follow the given link and give an URL as input. Upon submitting, input URL is scraped and its meta data would be parsed. <br/>
https://metaparser-server.herokuapp.com/

POST request is made to the server with appropriate headers.
```
POST /data
{
  "url" : "https://www.iiitkottayam.ac.in/#!/home"
}

```
 Server responds back by sending the parsed data.
```
{
  "title": "IIIT Kottayam",
  "description": "IIIT Kottayam",
  "images": [
        "data/images/main/logo.jpg",
        "data/images/main/logo.jpg",
        "data/images/main/logo.jpg",
        "data/images/info/new1.gif"
            ]

}
```
