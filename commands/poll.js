module.exports = {
    name: 'poll',
    description: "Initiates poll.",
    execute(message, args){
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You do not have permission to use this command.");
              let msgArgs = args.slice(1).join(" ");
              if (!args[1]) return message.channel.send(`Give me a question!`);
            message.channel.send("📋 " + "**" + msgArgs + "**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
            messageReaction.react("🤷‍♂️");
            message.delete(1000).catch(console.error);
            //message.channel.send(`@everyone`);
            });
    }
}