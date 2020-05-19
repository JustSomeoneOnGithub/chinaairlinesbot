
module.exports = {
    name: 'ping',
    description: "Shows bot ping.",
    execute(message, args){
        message.channel.send(`Give me a second..`)
    .then(messageTime => {
      messageTime.edit(`*Bot Ping:* **${messageTime.createdTimestamp - message.createdTimestamp}ms**`) 
    });
    }
}