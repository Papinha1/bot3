const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Tamo activo');
});
client.on('message', msg => {
    if (!msg.content.startsWith(prefix))
    if (msg.content.startsWith(`${prefix}ping`)){
        msg.channel.send('!pong');
    }
});
client.login(token);
