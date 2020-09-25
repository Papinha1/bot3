const { Channel } = require("discord.js")

module.exports = {
    name :'tell', 
    description : 'backstreet bois',
    execute (message , args){
        if (args[0] === 'me'){
            message.channel.send('Ain\'t nothin\' but a heartache');
        }
    }
}