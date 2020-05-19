module.exports = {
    name: 'ban',
    description: "Bans a member.",
    execute(message, args){
        if (message.member.hasPermission("BAN_MEMBERS")) {
            var member= message.mentions.members.first();

            if(!message.mentions.members.first()) return message.channel.send('Mention a user.');
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully banned.");
        }).catch(() => {
            message.channel.send("You do not have permission to use this command.");
        });
        }else{
            message.channel.send("I was unable to ban the member.");
        }
        message.delete(1000);
    }
}