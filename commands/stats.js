const Discord = require('discord.js');
const bot = new Discord.Client


module.exports = {
    name: 'stats',
    description: "Shows bot stats.",
    execute(message, args){
       let statsEmbed = new Discord.RichEmbed()
       .setColor("#32a852")
       .addField('❯ Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`)
       .addField('❯ Bot Uptime', `${Math.round(process.uptime())} Seconds!`)
       message.channel.send(statsEmbed)
    }
}