const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  
// Bad words 
 
  if (message.content === 'fuck you minion') {
      message.reply('(╯°□°）╯︵ ┻━┻');
  
  }

  if (message.content === 'ping') {
      message.reply('pong');
  
  }
});

//ZUM
client.on('message', message => {
    if (message.content === '=zum') {
    	message.reply('http://zum.com/#!/home');
    }
    if (message.content === '=Zum') {
    	message.reply('http://zum.com/#!/home');
    }
    if (message.content === '=ZUM') {
    	message.reply('http://zum.com/#!/home');
    }
    if (message.content === '=줌') {
    	message.reply('http://zum.com/#!/home');
  	}
 });

//NAVER
client.on('message', message => {
    if (message.content === '=naver') {
    	message.reply('https://www.naver.com/');
    }
    if (message.content === '=Naver') {
    	message.reply('https://www.naver.com/');
    }
    if (message.content === '=NAVER') {
    	message.reply('https://www.naver.com/');
    }
    if (message.content === '=네이버') {
    	message.reply('https://www.naver.com/');
  	}
 });
 
//DAUM
client.on('message', message => {
    if (message.content === '=daum') {
    	message.reply('https://www.daum.net/');
    }
    if (message.content === '=Daum') {
    	message.reply('https://www.daum.net/');
    }
    if (message.content === '=DAUM') {
    	message.reply('https://www.daum.net/');
    }
    if (message.content === '=다음') {
    	message.reply('https://www.daum.net/');
  	}
 });
 
//GOOGLE
client.on('message', message => {
    if (message.content === '=google') {
    	message.reply('https://www.google.com/');
    }
    if (message.content === '=Google') {
    	message.reply('https://www.google.com/');
    }
    if (message.content === '=GOOGLE') {
    	message.reply('https://www.google.com/');
    }
    if (message.content === '=구글') {
    	message.reply('https://www.google.com/');
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
    
    if (message.content === '=Q War_thunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=q war_thunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
});

//PUBG
client.on('message', message => {   
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
   
    if (message.content === '=Q Pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}

    if (message.content === '=q Pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');    
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
