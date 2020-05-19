const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'shame',
    description: "Shame the idiots for the animal showcase.",
    execute(message, args){
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You do not have permission to use this command.");
        if(!message.mentions.members.first()) return message.channel.send('Mention a user.');
        let msgArgs = args.slice(2).join(" ");
        const reason = msgArgs
        message.channel.send(message.mentions.members.first() + ' (' + message.mentions.users.first().id + ')' + ' - ' + reason).then(messageReaction => {messageReaction.react("🤡")});
        message.delete(1000);
    }
}