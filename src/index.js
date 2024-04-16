require("dotenv").config();
const fetch = require("node-fetch");
const {
  Client,
  IntentsBitField,
  MessageEmbed,
  EmbedBuilder,
} = require("discord.js");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
client.on("ready", (c) => {
  console.log(`${c.user.username} is online!`);
});



//Messages

client.on("messageCreate",(message)=>{
  if( message.content ==="hey"){
    message.reply("hey kevin!")
  }
    //weather
    if(message.content.includes("_weather")){
      let city = message.content.split(" ")[1];
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
    .then(response => {return response.json()})
    .then(data =>{
      message.reply(`
                    Hey ${message.member.user}
                    
  The weather in ${city} is: 
  Current Temperature: ${Math.round(data.main.temp - 273.15)}°C
  Maximum Temperature is: ${Math.round(data.main.temp_max - 273.15)}°C
  Minimum Temperature is: ${Math.round(data.main.temp_min - 273.15)}°C `);

                  })
    .catch(error =>console.log(error));
    }
})

  //Interaction Commands


 client.on("interactionCreate", async (interaction) => {
   if (!interaction.isChatInputCommand()) return;
   //hey command
   if (interaction.commandName === "hey") {
     interaction.reply(`Hey! ${interaction.member.user}`);
   }
   //ping command
   if (interaction.commandName === "ping") {
     interaction.reply("Pong!");
   }
   if(interaction.commandName ==="embed"){
    const embed = new EmbedBuilder()
    .setTitle('Title')
    .setDescription('this is a description')
    .setColor('Random')
    .addFields({name: 'field title',value: 'some random value'});
    interaction.reply({embeds: [embed]})
   }
 });

client.login(process.env.TOKEN);
