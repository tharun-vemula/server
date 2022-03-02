/*
* Controller.
* Scrapes the web for given url 
* returns a json object as response containing scraped tags
*/

 const request = require('request');
 const cheerio = require('cheerio');

exports.getData = (req, res, next) => {
 
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    //make a new request to the URL provided in the HTTP POST request
    request(req.body.url,  (error, response, responseHtml) => {
        var result = {};

        //if  error
        if (error) {
            res.end(JSON.stringify({error: 'Error !'}));
            return;
        }

        //create the cheerio object
         result  = {},
            //sets a reference to the document 
            $ = cheerio.load(responseHtml),
            //creates a reference to the meta elements
            $title = $('head title').text(),
            $desc = $('meta[name="description"]').attr('content'),
            $kwd = $('meta[name="keywords"]').attr('content'),
            $ogTitle = $('meta[property="og:title"]').attr('content'),
            $ogImage = $('meta[property="og:image"]').attr('content'),
            $ogkeywords = $('meta[property="og:keywords"]').attr('content'),
            $images = $('img');

        if ($title) {
            result.title = $title;
        }

        if ($desc) {
            result.description = $desc;
        }

        if ($kwd) {
            result.keywords = $kwd;
        }

        if ($ogImage && $ogImage.length){
            result.ogImage = $ogImage;
        }

        if ($ogTitle && $ogTitle.length){
            result.ogTitle = $ogTitle;
        }

        if ($ogkeywords && $ogkeywords.length){
            result.ogkeywords = $ogkeywords;
        }

        if ($images && $images.length){
            result.images = [];

            for (var i = 0; i < $images.length; i++) {
                result.images.push($($images[i]).attr('src'));
            }
        }

        //sends the response
        res.end(JSON.stringify(result));
    }) ;


  }

