'use strict';

var Request = require("request");

function UmbracoHelper(){
}

UmbracoHelper.prototype.getEmployees = function(){
    Request.get("http://c13fd0d6.ngrok.io/api/values/bc84038723504616bc463ae70f1fd49e", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.log(`response: ${response}`);
        console.log(`body: ${body}`);
        return body;
    });
}

//run the async function
module.exports = UmbracoHelper;