const { prefix, token } = require('./config.json');
client.login(token)
const client = new Discord.Client();
const Discord = require('discord.js');

client.on('ready', () => {
  console.log(`Tamo activo!`);
});

client.on('message', msg => {
    console.log(msg.content);
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});