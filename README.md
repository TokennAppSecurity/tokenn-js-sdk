# Tokenn app security JS SDK

# Token is under construction, coming soon

This is the JS SDK for Tokenn. We help you secure your applications by letting you generate access tokens for them.

## Installation

### Node and Browserify
Simply install the library with ``` $ npm i --save tokenn-js-sdk ```

NOTE: Take into account that security problems may rise if you use this library in the browser, so we do not encourage, nor we make responsible for any data loss derived from the utilization of the library in the browser.

## The concept

Your app or API need security. Here's how it looks when you create an API:

![How it works](https://raw.githubusercontent.com/TokennAppSecurity/tokenn-js-sdk/master/repo/howitworks.png)

As you can see, intruders, as well as your clients and off course yourself can access your App/API.

One of the most common ways to give them security is to enable an API key system. With that system, you would avoid intruders in your application, by verifying if they have an API Key to use it.

In more technical words, with that API key system, you would validate that only permitted API keys can access your service. 

The following is how it looks after securing your app with an API key system:

![After installing](https://raw.githubusercontent.com/TokennAppSecurity/tokenn-js-sdk/master/repo/afterinstalling.png)

As you can see, now intruders, who do not have an Api Key for using your application cannot access it. Also, notice that we added Application Clients and Application Admin. With Tokenn, you can differentiate the applications that are going to access your app, and let other people create an API for your APP, Cool! So in this case, you would have your own API key for using your app, and you can generate as many API keys you want and give them to other people/apps/apis that are going to use your app.

Fortunately, there's Tokenn. With Tokenn you can easily get that API key system for your server, and validate each request made to your app, so it always stays secure.

## Utilization

Check before using Tokenn js sdk:
* You have a Tokenn app created
* You have a Tokenn apiKey

Are you missing anything? (support coming soon)

```js
// include the library
let Tokenn = require('tokenn-js-sdk').Tokenn;
Tokenn.initialize(YOUR_APP_ID, YOUR_TOKENN_API_KEY);
```

### Validating your client's api key:

```js
//first initialize the library

let yourApiUserAppId  = "13123";
let yourApiKeyForYourApp = "1231231";

Tokenn.validateApiKey(yourApiUserAppId, yourApiKeyForYourApp)
.then(function(validity){
  // validity = {valid:true|false}
  if(validity.valid){
    // then the request made to your app was valid
  } else {
    // the app request on your app was not valid
  }
}, function(error){
  // an error has occurred
})

```

## Credits

Thanks to FlatIcon for all the cool icons used in this documentation (http://flaticon.com)