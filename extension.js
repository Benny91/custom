(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "Benny91";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }
      /*  
	//create iframe
	var domain = 'https://cytu.be/r/plughax';
	$('<iframe id="myFrame" src="' + domain + '"></iframe>').appendTo('body');

	// Get reference to the iframe element
	var iframe = $('#myFrame').get(0).contentWindow;
	console.log(iframe);
	
	//periodical message sender
	setInterval(function(){
		var message = 'Hello!  The time is: ' + (new Date().getTime());
		console.log('blog.local:  sending message:  ' + message);
		iframe.postMessage(message,domain); //send the message and target URI
	},6000);
	
	//listen to holla back
	$(window).on('message',function(event) {
		console.log(event.origin);
		if(event.origin !== 'https://plug.dj/chillination') return;
		event.source.postMessage('send back', event.origin)
		console.log('received response:  send back',event.data);
	});
	
	$(window).on("message", function(event){
		console.log(event.origin);
		if (event.origin !== domain) return;
		console.log(event.data); // Logs {name: "Someone", avatar: "url.jpg"}
	});
	
*/	function timeRoulette() {
		setTimeout(function() {
        		API.sendChat("!roulette");
        		timeRoulette();
		}, 30 * 60000);
	}
	timeRoulette();
/*
	var repans = rra = rraan = rraand = rras = rrasla = rradash = rradasp = rratta = rraora = rraorb = rracom = rraspa = null;

        function triviaAdd() {
	        $.ajax({
	        	url: 'http://jservice.io/api/random?count=1',
	        	type: 'GET',
	        	data: {},
	        	dataType: 'json',
	        	success: function(data) {
	        		console.log(data);
	        		clearTimeout(TRIVIA);
				dzero = data[0];
				dqst = dzero.question;
	        		if (dqst === '' || dqst.match(/seen here/i) || dqst.match(/heard here/i) || dqst.match(/depicted here/i) || dqst.length > 175 || dqst === '=') {
	        			TRIVIA = setTimeout(function() {
	        				triviaAdd();
	        			}, 1);
	        			return;
	        		}
                    		dval = dzero.value;
	        		if (dval === null) {
	        			qval = 100;
	        		} else {
	        			qval = dval;
	        		}
	        		API.sendChat('[CATEGORY] ' + dzero.category.title + ' for :heavy_dollar_sign:' + qval)
	        		API.sendChat('[QUESTION] ' + dqst)
                		dans = dzero.answer;
	        		repans = $('<div>').html(dans.replace(/"|\\|\b^the\b|\b^The\b|\b^its\b|\b^Its\b|\b^a\b|\b^A\b|\b^an\b|\b^An\b|(\([^\)]+\))/ig,'')).text().trim();
	        		rra = new RegExp(repans, 'i');
                		rraan = new RegExp(repans.replace(/and/ig, '&'), 'i');
                		rraand = new RegExp(repans.replace(/&/g, 'and'), 'i');
                		rrasl = new RegExp(repans.replace(/^.+\//g, ''), 'i');
                		rrasla = new RegExp(repans.replace(/\/.+/g, ''), 'i');
                		rradash = new RegExp(repans.replace(/-/g, ''), 'i');
                		rradasp = new RegExp(repans.replace(/-/g, ' '), 'i');
                		rratta = new RegExp(repans.replace(/things that are /ig, ''), 'i');
                		rraora = new RegExp(repans.replace(/ or .+/g, ''), 'i');
                		rraorb = new RegExp(repans.replace(/^.+ or /g, ''), 'i');
                		rracom = new RegExp(repans.replace(/,/g, ''), 'i');
                		rraspa = new RegExp(repans.replace(/\s/g, ''), 'i');
	        		corans = $('<div>').html(dans.replace(/\\/g, '')).text().trim();
                		TIMESUP = setTimeout(function() {
	        			API.sendChat('[ANSWER] ' + corans + ' - :heavy_dollar_sign:' + qval);
	        			TRIVIA = setTimeout(function() {
	        				return triviaAdd();
	        			}, 30000);
	        		}, 120000);
	        	},
	        	error: function(data) {
	        		console.log(data);
                		API.sendChat('Trivia is offline :(');
	        		TRIVIA = setTimeout(function() {
	        			return triviaAdd();
	        		}, 30000);
	        	}
	        });
        }

	//triviaAdd();

        // Example code for a bot command:
        bot.commands.answerCommand = {
        	command: 'a ',  // The command to be called. With the standard command literal this would be: !bacon
        	rank: 'user', // Minimum user permission to use the command
        	type: 'startsWith', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
        	functionality: function (chat, cmd) {
			if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
			if (!bot.commands.executable(this.rank, chat)) return void (0);
			else {
				msg = chat.message;
				aatxt = msg.substr(3);
				if (aatxt.length === 0) return void (0);
				GUESSED = false;
				if (!GUESSED && (aatxt.match(rra) || aatxt.match(rraan) || aatxt.match(rradasp) || aatxt.match(rraand) || aatxt.match(rrasl) || aatxt.match(rraspa) || aatxt.match(rrasla) || aatxt.match(rradash) || aatxt.match(rratta) || aatxt.match(rracom) || aatxt.match(rraora) || aatxt.match(rraorb))) {
			        	clearTimeout(TIMESUP);
			        	GUESSED = true;
			        	user = basicBot.userUtilities.lookupUser(chat.uid);
					NAMEFOUND = false;
					POINTSARRAY = basicBot.settings.pointsarray;
					for (var q = 0; q < POINTSARRAY.length; q++) {
						if (POINTSARRAY[q][0] === user) {
							NAMEFOUND = true;
							POINTSARRAY[q][1] = parseInt(POINTSARRAY[q][1]) + qval;
							newtotal = POINTSARRAY[q][1];
						}
						if (q === POINTSARRAY.length - 1 && !NAMEFOUND) {
							POINTSARRAY.push([user, qval]);
							newtotal = qval;
							break;
						}
					}
					basicBot.settings.pointsarray = POINTSARRAY;
					console.log(POINTSARRAY);
					API.sendChat('[CORRECT] ' + corans + ' is correct! @' + user + ' won :heavy_dollar_sign:' + qval + ' with a new total of :heavy_dollar_sign:' + newtotal)
					TRIVIA = setTimeout(function() {
						return triviaAdd();
					}, 30000);
				}
			}
        	}
        };
*/
        // Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      pointsarray: [['Bennyboobies', 0]],
      botName: "ChillinBot",
      language: "english",
      chatLink: "https://rawgit.com/Benny91/source/master/lang/en.json",
      scriptLink: "https://rawgit.com/Benny91/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 1, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: false, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: false,
      voteSkipLimit: 10,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 20,
      autodisable: true,
      commandCooldown: 30,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["theme", "This song does not fit the room theme. "],
      ["op", "This song is on the OP list. "],
      ["history", "This song is in the history. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: 5,
      motd: "Temporary Message of the Day",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: [],
      messageInterval: 5,
      songstats: true,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/Benny91/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/Benny91/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/Benny91/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Benny91/source/master/basicBot.js", extend);

}).call(this);
