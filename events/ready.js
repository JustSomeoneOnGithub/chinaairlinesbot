const Discord = require('discord.js');
const bot = new Discord.Client();
const package = require('../package.json')

module.exports = {
    execute(bot){
        console.log(`${bot.user.username} is up and running!`);
    bot.user.setActivity('`*help` | V' + package.version, {type: 'LISTENING'});
    }
}
