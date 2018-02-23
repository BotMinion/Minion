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
client.on('message', message => {
    if (message.content === '=lol minion') {
    	message.reply('https://giphy.com/gifs/laughing-despicable-me-minions-ZqlvCTNHpqrio');
    }

//NAMUWIKI
client.on('message', message => {
    if (message.content === '=namuwiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=Namuwiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=NAMUWIKI') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=Namu_Wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=Namu_wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=namu_wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=namu_Wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=나위') {
    	message.reply('https://namu.wiki');
  	}
    if (message.content === '=나무위키') {
    	message.reply('https://namu.wiki');
  	}
 });

//op.gg
client.on('message', message => {
    if (message.content === '=op.gg') {
    	message.reply('http://www.op.gg/');
    }
    if (message.content === '=OP.GG') {
    	message.reply('http://www.op.gg/');
    }
    if (message.content === '=오피.지지') {
    	message.reply('http://www.op.gg/');
    }
    if (message.content === '=Op.gg') {
    	message.reply('http://www.op.gg/');
    }
    if (message.content === '=op.GG') {
    	message.reply('http://www.op.gg/');
  	}
    if (message.content === '=오지') {
    	message.reply('http://www.op.gg/');
    }
    if (message.content === '=오피점지지') {
    	message.reply('http://www.op.gg/');
    }
    if (message.content === '=오점지') {
    	message.reply('http://www.op.gg/');
    }
    
 });

//Twitter
client.on('message', message => {
    if (message.content === '=twitter') {
    	message.reply('https://twitter.com/');
    }
    if (message.content === '=Twitter') {
    	message.reply('https://twitter.com/');
    }
    if (message.content === '=TWITTER') {
    	message.reply('https://twitter.com/');
    }
    if (message.content === '=짹짹') {
    	message.reply('https://twitter.com/');
    }
    if (message.content === '=트위터') {
    	message.reply('https://twitter.com/');
  	}
    if (message.content === '=트윗') {
    	message.reply('https://twitter.com/');
    }
    if (message.content === '=트윗트윗') {
    	message.reply('https://twitter.com/');
    }
    if (message.content === '=파랑새') {
    	message.reply('https://twitter.com/');
    }
 });

//FACEBOOK
client.on('message', message => {
    if (message.content === '=facebook') {
    	message.reply('https://www.facebook.com/');
    }
    if (message.content === '=FaceBook') {
    	message.reply('https://www.facebook.com/');
    }
    if (message.content === '=Facebook') {
    	message.reply('https://www.facebook.com/');
    }
    if (message.content === '=FACEBOOK') {
    	message.reply('https://www.facebook.com/');
    }
    if (message.content === '=페이스북') {
    	message.reply('https://www.facebook.com/');
  	}
    if (message.content === '=페북') {
    	message.reply('https://www.facebook.com/');
    }
    if (message.content === '=얼굴책') {
    	message.reply('https://www.facebook.com/');
    }
 });

//INSTAGRAM
client.on('message', message => {
    if (message.content === '=instagram') {
    	message.reply('https://www.instagram.com/');
    }
    if (message.content === '=Instagram') {
    	message.reply('https://www.instagram.com/');
    }
    if (message.content === '=INSTAGRAM') {
    	message.reply('https://www.instagram.com/');
    }
    if (message.content === '=인스타그램') {
    	message.reply('https://www.instagram.com/');
  	}
    if (message.content === '=인스타') {
    	message.reply('https://www.instagram.com/');
  	}
    if (message.content === '=인스') {
    	message.reply('https://www.instagram.com/');
  	}
 });

//YOUTUBE
client.on('message', message => {
    if (message.content === '=youtube') {
    	message.reply('https://www.youtube.com');
    }
    if (message.content === '=Youtube') {
    	message.reply('https://www.youtube.com');
    }
    if (message.content === '=YOUTUBE') {
    	message.reply('https://www.youtube.com');
    }
    if (message.content === '=유튜브') {
    	message.reply('https://www.youtube.com');
  	}
    if (message.content === '=유튭') {
    	message.reply('https://www.youtube.com');
  	}
 });

//NAMUWIKI
client.on('message', message => {
    if (message.content === '=namuwiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=Namuwiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=NAMUWIKI') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=Namu_Wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=Namu_wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=namu_wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=namu_Wiki') {
    	message.reply('https://namu.wiki');
    }
    if (message.content === '=나위') {
    	message.reply('https://namu.wiki');
  	}
    if (message.content === '=나무위키') {
    	message.reply('https://namu.wiki');
  	}
 });

//NATE
client.on('message', message => {
    if (message.content === '=nate') {
    	message.reply('http://www.nate.com/');
    }
    if (message.content === '=Nate') {
    	message.reply('http://www.nate.com/');
    }
    if (message.content === '=NATE') {
    	message.reply('http://www.nate.com/');
    }
    if (message.content === '=네이트') {
    	message.reply('http://www.nate.com/');
  	}
 });

//BING
client.on('message', message => {
    if (message.content === '=bing') {
    	message.reply('https://www.bing.com/');
    }
    if (message.content === '=Bing') {
    	message.reply('https://www.bing.com/');
    }
    if (message.content === '=BING') {
    	message.reply('https://www.bing.com/');
    }
    if (message.content === '=빙') {
    	message.reply('https://www.bing.com/');
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
    if (message.content === '=I warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=i warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    
    if (message.content === '=I Warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=i Warthunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    
    if (message.content === '=I 워썬더') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}

    if (message.content === '=i 워썬더') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    
    if (message.content === '=I War_thunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
    if (message.content === '=i war_thunder') {
    	message.reply('http://store.steampowered.com/app/236390/War_Thunder/');
  	}
});

//PUBG
client.on('message', message => {   
    if (message.content === '=I 배그') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    if (message.content === '=i 배그') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
    }
   
    if (message.content === '=i 배틀그라운드') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    if (message.content === '=I 배틀그라운드') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}

    if (message.content === '=I PUBG') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
    if (message.content === '=i PUBG') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
   
    if (message.content === '=I pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}

    if (message.content === '=i pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');    
  	}
   
    if (message.content === '=I Pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
       
    if (message.content === '=I 펍지') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}
   
    if (message.content === '=i ') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');
  	}

    if (message.content === '=i Pubg') {
    	message.reply('http://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/');    
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
