import * as Discord from "discord.js"


let config = require("./../discord_auth_key.json")
let client = new Discord.Client();

client.on("ready", () => {
    console.log("I'm connected!")
})

client.on("message", (message) =>{
    message.attachments.array().forEach(element => {
        console.log(element.attachment)
    });
})

client.login(config.token);