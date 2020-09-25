module.exports = {
    name : 'test',
    aliases : ['t'],
    description : 'Test!',
    execute(message , args){
        message.react('⏮');
        message.react('⏪');
        message.react('⏹');
        message.react('▶');
        message.react('⏩');
        message.react('⏭');
    }


}