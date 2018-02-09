const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

// JOKE

client.on('message', message => {
  
// Bad words 
 
  if (message.content === 'fuck you minion') {
      message.reply('(╯°□°）╯︵ ┻━┻');
  
// Just Joke
  if (message.content === 'ping') {
    	message.reply('pong');
  	}

  }
});

client.on('message', message => {
    if (message.content === '=Q warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=q warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=q Warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=Q Warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=Q 워썬더') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=Q 워선더') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=q 워썬더') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=q 워선더') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
