const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter( file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name , command);
}
client.once('ready', () => {
	console.log('Tamo activo');
});
client.on('message', msg => {
    if (!msg.content.startsWith(prefix))return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command)return;
    try{
        command.execute( msg , args );
    }
    catch (error){
        console.error(error);
        msg.reply('error');
    }
    if (msg.content === '11'){
        msg.delete();
    }

});
client.login(token);
