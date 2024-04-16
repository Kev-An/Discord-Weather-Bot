require("dotenv").config();
const {REST,Routes} = require("discord.js")

//Register interaction commands here
const commands = [
    {
        name: "hey",
        description: "replies with hey",
    },
    {
        name: "ping",
        description: "pong",
    },
    {
        name: 'embed',
        description: "sends an embed"
    },
    {
        name: 'add',
        description: 'adds two numbers'
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log("regstering commands...");
       await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID,process.env.GUILD_ID),
        {body: commands}
       )
       console.log("commands were registered"); 
    }catch(error){
        console.error(`you have an an error - ${error}`);

    }
})();