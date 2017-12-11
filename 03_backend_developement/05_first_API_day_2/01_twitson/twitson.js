

const oauth = require("OAuth");

const OAuth = new oauth.OAuth(process.env.TWITTER_REQUEST_URL, process.env.TWITTER_ACCESS_URL, process.env.TWITTER_KEY, process.env.TWITTER_SECRET, "1.0A", null, "HMAC-SHA1");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const request = require("request");
const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const url_watson = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

function askTwitterAccount() {
  reader.question("Twitter account you want to analyze ? \n", handle => {
    if (handle === "q") {
      return reader.close();
    }

    const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${handle}`;


    // nytimes - realDonaldTrump

    OAuth.get(url, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
      if (error) {
        console.log(error);
      }
      else {
        const text = JSON.parse(data).map(function (tweet) {
          return (tweet.text + "\n");
        }).join();

        const uri = encodeURI(url_watson + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
        // console.log("uri:", uri);
        request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
          console.log("Tweets:", text);
          const result = JSON.parse(body);
          console.log((result.sentiment.document.label).toUpperCase());
          console.log("Tristesse :", parseInt(result.emotion.document.emotion.sadness * 100,10) + "%");
          console.log("Joie      :", parseInt(result.emotion.document.emotion.joy * 100,10) + "%");
          console.log("Peur      :", parseInt(result.emotion.document.emotion.fear * 100,10) + "%");
          console.log("Dégoût    :", parseInt(result.emotion.document.emotion.disgust * 100,10) + "%");
          console.log("Colère    :", parseInt(result.emotion.document.emotion.anger * 100,10) + "%");
          askTwitterAccount();
        });
      }
    });
  });
}

askTwitterAccount();
