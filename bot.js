const Discord = require('discord.js');
const client = new Discord.Client();

const activities_list = [
    "https://discord.gg/HSNEcyj", 
    "Hi,Discord:HSNEcyj",
    "Armin", 
    "!help Vampire", 
    "Gaming Mode", 
    "Persian GAP", 
    "!invite", 
    "https://discord.gg/HSNEcyj"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); // Runs this every 10 seconds.
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.reply('https://discord.gg/HSNEcyj');
  }
});

client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('https://discord.gg/HSNEcyj');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
