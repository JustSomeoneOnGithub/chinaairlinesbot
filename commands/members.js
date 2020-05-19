const Discord = require('discord.js');

module.exports = {
    name: 'members',
        description: "Member Count",
        execute(message, args){
            message.channel.send(`This server has ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} human members!`);
        }
    }