const Discord = require('discord.js');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

module.exports = {
    name: 'mock',
    description: "Mock some text.",
    execute(message, args){
        if(!args[1]){
            return message.channel.send('Bruh, give me some text to mock.')
        }

        let mockEmbed = new Discord.RichEmbed()
        .setColor("#ddf542")
        .setTitle(args.map(randomizeCase).slice(1))
        .setImage("https://cdn.discordapp.com/attachments/424889733043191810/425242569325150208/mock.jpg")
    
        message.channel.send(mockEmbed)
    
        message.delete();
    }
}