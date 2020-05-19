const Discord = require('discord.js');
const bot = new Discord.Client()
const config = require('../config.json');
const prefix = config.prefix;

module.exports = {
    name: 'help',
    description: "Shows list of commands.",
    execute(message, args){
        var helpEmbed = new Discord.RichEmbed()
        .setTitle('List of commands.')
        .setDescription('Prefix: `'+ prefix + '`')
        .setColor("#fcba03")
        .setThumbnail('https://cdn.discordapp.com/icons/694200946082709626/a7a364fc84d5b6491fd236ba24e823d5.webp?size=512')
        .addField('`avatar`, `av`', 'Shows your avatar.')
        .addField('`ban`', 'Bans a user.')
        .addField('`help`, `h`', 'Shows a list of commands.')
        .addField('`kick`', 'Kicks a user.')
        .addField('`members`', 'Shows how many human members are in the server.')
        .addField('`mock`', 'Mock someone or some text.')
        .addField('`stats`', 'Shows bot stats.')
        .addField('`ping`', 'Shows bot ping.')
        .addField('`poll`', 'Initiates poll.')
        .addField('`rps`, `rockpaperscissors`, `rock-paper-scissors`', 'Play rock paper scissors with the bot.')
        .addField('`say`, `talk`', 'Makes the bot say something.')
        .addField('`shame`', 'Shame someone (for the animal showcase).');
        message.channel.send(helpEmbed);
    }
}
