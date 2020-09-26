module.exports = {
    name : 'test',
    aliases : ['t'],
    description : 'Test!',
    execute(message , args){
        message.react('752683406063829000');
        message.react('⏮');
        message.react('⏪');
        message.react('⏹');
        message.react('▶');
        message.react('⏩');
        message.react('⏭');
        const reaction = message.guild.emojis.cache.find( emoji => emoji.name === 'monkaS');
        message.react(reaction);
        if (args[0] === 'd'){
             message.reactions.removeAll().catch(error => console.error('uwu', error ));
        }
    }


}