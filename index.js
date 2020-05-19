const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
const PREFIX = config.prefix;

const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
bot.on('ready', () =>{
    const event = require("./events/ready.js").execute(bot);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX) || message.author.bot) return; // Here is the line that stopped my mental stress.

    let msg = message.content;
    switch (args[0].toLowerCase()) {
        // 1
        case "h":
            bot.commands.get('help').execute(message, args);
        break;
        case "help":
            bot.commands.get('help').execute(message, args);
        break;
        // 1
        case "stats":
            bot.commands.get('stats').execute(message, args);
        break;
        case "ping":
            bot.commands.get('ping').execute(message, args);
        break;
        case "shame":
            bot.commands.get('shame').execute(message, args);
        break;
        case "members":
            bot.commands.get('members').execute(message, args);
        break;
        case "kick":
            bot.commands.get('kick').execute(message, args);
        break;
        case "ban":
            bot.commands.get('ban').execute(message, args);
        break;
        case "mock":
            bot.commands.get('mock').execute(message, args);
        break;
        case "poll":
            bot.commands.get('poll').execute(message, args);
        break;
        // 2
        case "say":
            bot.commands.get('say').execute(message, args);
        break;
        case "talk":
            bot.commands.get('say').execute(message, args);
        break;
        // 2
        // 3
        case "avatar":
            bot.commands.get('avatar').execute(message, args);
        break;
        case "av":
            bot.commands.get('avatar').execute(message, args);
        break;
        // 3
        // 4
        case "rps":
            bot.commands.get('rps').execute(message);
        break;
        case "rockpaperscissors":
            bot.commands.get('rps').execute(message);
        break;
        case "rock-paper-scissors":
            bot.commands.get('rps').execute(message);
        break;
        // 4
    }
});

bot.login(config.TOKEN);