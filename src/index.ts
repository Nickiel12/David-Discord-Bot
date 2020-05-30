import * as Discord from "discord.js"


let config = require("./../discord_auth_key.json")
let client = new Discord.Client();

client.on("ready", () => {
    console.log("I'm connected!")
})

client.login(config.token);