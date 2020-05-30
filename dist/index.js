"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var config = require("./../discord_auth_key.json");
var client = new Discord.Client();
client.on("ready", function () {
    console.log("I'm connected!");
});
client.on("message", function (message) {
    message.attachments.array().forEach(function (element) {
        console.log(element.attachment);
    });
});
client.login(config.token);
//# sourceMappingURL=index.js.map