const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Tamo activo`);
});
client.on('message', async message => {
  if (!message.guild){
    mesg.reply("uwu");
  }
  if (message.content === "/join"){
    if (message.member.voice.channel){
      // const connection = await message.member.voice.channel.join();
      // connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));
    }
  }
    else {
      message.reply("Tiene que entrar a un canal primero po rey");
    }
  
});
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NzUzNjM1NzY5ODU5NDQwNzkx.X1pEAQ.njljBcL3DezYdr-PoOS1BA-UO1k');