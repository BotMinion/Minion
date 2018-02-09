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
  
  }

  if (message.content === 'ping') {
      message.reply('pong');
  
  }
});
//WarThunder
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

    if (message.content === '=q 워썬더') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}

});
//PUBG
client.on('message', message => {
    if (message.content === '=Q PLAYERUNKNOWN'S BATTLEGROUNDS') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    if (message.content === '=q PLAYERUNKNOWN'S BATTLEGROUNDS') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    
    if (message.content === '=q 배그') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    if (message.content === '=Q 배그') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
    }
   
    if (message.content === '=q 배틀그라운드') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    if (message.content === '=Q 배틀그라운드') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}

    if (message.content === '=Q PUBG') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    if (message.content === '=q PUBG') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
   
    if (message.content === '=Q pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}

    if (message.content === '=q pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');    
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
