"use strict";
var superagent = require('superagent');
var Tokenn = (function () {
    function Tokenn() {
    }
    Tokenn.initialize = function (tokennAppId, tokennApiKey) {
        Tokenn.tokennAppId = tokennAppId;
        Tokenn.tokennApiKey = tokennApiKey;
    };
    Tokenn.validateApiKey = function (clientAppId, clientApiKey) {
        return new Promise(function (resolve, reject) {
            superagent
                .get("https://tokenn.herokuapp.com/api/tokennapps/" + Tokenn.tokennAppId + "/clientapps/" + clientAppId + "/validity/apiKey/" + clientApiKey)
                .set('x-tokenn-apikey', Tokenn.tokennApiKey)
                .set('Accept', 'application/json')
                .end(function (err, res) {
                if (err)
                    console.error(err);
                if (res.error)
                    console.error(err);
                resolve(res.body);
            });
        });
    };
    return Tokenn;
}());
exports.Tokenn = Tokenn;
