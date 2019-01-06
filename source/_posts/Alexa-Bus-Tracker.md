---
title: Bus Predictions with Alexa
tags:
  - Alexa
  - Python
  - AWS
  - API
keywords:
  - Bongo
  - API
  - Alexa
  - Bus
  - Alexa Skill
  - Skill
  - Python
  - AWS
comments: false
coverImage: >-
  https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive/v1546745048/Projects/Bongo/bongo.jpg
autoThumbnailImage: false
coverMeta: out
coverSize: partial
date: 2017-12-02 13:00:00
gallery:
---

During local hack day this December, I developed an Alexa skill for students to check bus times through campus transportation. It was a solo project I set out to complete in 10 hours, and as of January of 2019, over 30 students are still actively invoking the skill every week. 
</br></br>
<!-- More --> 

# Development

The process of building Alexa skills has changed a lot over time, but when this skill was created, the "Skill Builder" was [still in beta](https://developer.amazon.com/blogs/alexa/post/02d828b6-3144-46ea-9b4c-5ed2cbfadb9c/announcing-new-alexa-skill-builder-beta-a-tool-for-creating-skills). So instead, I just used an AWS Lambda function to control requests to our transportations API.
</br></br>
I never earned an API key, but luckily, using "XXXX" (the key that was used in the demonstration documentation page), allowed for unlimited requests :). In writing this post, I found their [developer facebook page](https://www.facebook.com/bongodevelopers/) and [API documentation](https://api.ebongo.org/), and they've acknowledged the public key and now encourage developers to use it.
</br>

# Interacting with the API ● [GitHub](https://github.com/bmitchinson/Bongo-Python/tree/master)
Below is the script I used to interact with the Bongo API. As of January 2019, it still works, so feel free to use it in your own projects!
The lambda function version I used for the Alexa Skill is also available as a separate script on the GitHub repo. It's a great beginners project because it could easily be turned into a full wrapper, and the skill has many more potential improvements, so feel free to make pull requests!
</br></br>

<div style="height:600px;overflow-y:scroll">
{% tabbed_codeblock stopInfoDemo.py https://github.com/bmitchinson/Bongo-Python/blob/master/stopInfoDemo.py %}
      <!-- tab python -->
import json, urllib.request
import string

def routeListing():
    with urllib.request.urlopen("http://api.ebongo.org/routelist?format=json&api_key=XXXX") as url:
            mainDict = json.loads(url.read().decode())

    mainList = mainDict['routes']

    for routeDict in mainList:
        routeInfoDict = routeDict["route"]
        print("ID: ",routeInfoDict["id"])

def predictions(stop = 1015):
    stopID = stop
    print("Searching for " + str(stopID))
    requestString = "http://api.ebongo.org/prediction?stopid=" + str(stopID) + "&api_key=XXXX"
    with urllib.request.urlopen(requestString) as url:
            mainDict = json.loads(url.read().decode())

    predictionsList = mainDict["predictions"]
    #print(predictionsList)
    
    if predictionsList == []:
        print("No predictions for stop " + str(stopID) +"."
              +" Busses must not be running right now.")

    else:
        less30 = True
        #i representing the amount of busses within 30 mintues
        i = 0

        while less30:
            if predictionsList[i]["minutes"] > 30:
                less30 = False
            else:
                print("Theres a",predictionsList[i]['title'],"in",predictionsList[i]['minutes'],"coming to stop ",stopID)
                i = i + 1

def main():
    stop = int(input("Please Enter Stop ID: "))  #1015 is currier bus stop near burge
    predictions(stop)
    
if __name__ == "__main__":
main()

      <!-- endtab -->
  {% endtabbed_codeblock %}
</div>