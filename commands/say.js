module.exports = {
    name: 'say',
    description: "Makes the bot say something.",
    execute(message, args){
        if(!args[1]){
            return message.channel.send('Give me some text to say.')
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command.")
        let argument = args.slice(1).join(" ");
        message.delete().catch();
        message.channel.send(argument)
    }
}