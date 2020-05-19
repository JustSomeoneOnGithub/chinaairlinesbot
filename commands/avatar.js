const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'avatar',
    description: "Shows your avatar.",
    execute(message, args){
        let user = message.mentions.users.first() || message.author
        const embed = new Discord.RichEmbed()
        .setImage(user.displayAvatarURL) 
              .setColor("#4287f5")
      message.channel.send({embed})
    }
}