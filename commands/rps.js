module.exports = {
    name: 'rps',
    description: "Rock paper scissors.",
    execute(message){
        if (message.author.bot) return;
        const prefix = config.prefix;
        const config = require('./config.json');
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
            let replies = ['rock', 'paper', 'scissors'];
            let result = Math.floor((Math.random() * replies.length));
    
            let uReply = args[0];
            if (!uReply) return message.channel.send(`Please specify one of the following responses: \`${replies.join(', ')}\`\nUse "${prefix}rps <choice>".`);
            if (!replies.includes(uReply)) return message.channel.send(`Only these responses are accepted: \`${replies.join(', ')}\`\n(Must be lowercase).`);
    
            if (replies[result] === uReply) {
                return message.channel.send('It\'s a tie! We had the same choice.');
            } else if (uReply === 'rock') {
                if (replies[result] === 'paper') return message.channel.send('I won!');
                else return message.channel.send('You won!');
            } else if (uReply === 'scissors') {
                if (replies[result] === 'rock') return message.channel.send('I won!');
                else return message.channel.send('You won!');
            } else if (uReply === 'paper') {
                if (replies[result] === 'scissors') return message.channel.send('I won!');
                else return message.channel.send('You won!');
            }
    }
}