import * as Discord from "discord.js"


let config = require("./../discord_auth_key.json")
let client = new Discord.Client();

client.on("ready", () => {
    console.log("I'm connected!")
})

client.on("message", (message) =>{
    if (["559618190573830154"].includes(message.channel.id)){
    message.attachments.array().forEach(element => {
        console.log(element.attachment)
    });
}
})

client.login(config.token);