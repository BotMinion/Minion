const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});



client.on('message', message => {
  if (message.content === 'fuck you minion') {
      message.reply('(╯°□°）╯︵ ┻━┻');


  }
});

client.on('message', message => {
    if (message.content === '=Q warthunder')
    if (message.content === '=q warthunder')
    if (message.content === '=q Warthunder')
    if (message.content === '=Q Warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
