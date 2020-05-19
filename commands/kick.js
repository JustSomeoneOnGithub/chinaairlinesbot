module.exports = {
    name: 'kick',
    description: "Kicks a member.",
    execute(message, args){
        if (message.member.hasPermission("KICK_MEMBERS")) {
            var member= message.mentions.members.first();

            if(!message.mentions.members.first()) return message.channel.send('Mention a user.');
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked.");
        }).catch(() => {
            message.channel.send("You do not have permission to use this command.");
        });
        }else{
            message.channel.send("I was unable to kick the member.");
        }
        message.delete(1000);
    }
}