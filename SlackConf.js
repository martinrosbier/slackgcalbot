function inspireMe() {
	axios
		.get(
			"https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json"
		)
		.then((res) => {
			const quotes = res.data;
			const random = Math.floor(Math.random() * quotes.length);
			const quote = quotes[random].quote;
			const author = quotes[random].author;

			const params = {
				icon_emoji: ":male-technologist:",
			};

			bot.postMessageToChannel(
				"general",
				`:zap: ${quote} - *${author}*`,
				params
			);
		});
}

function calendarTest() {
	axios
		.get(
			"https://www.googleapis.com/calendar/v3/calendars/Y19tNDcybmkzZmc0cTQ3bGNoZG5oc2YxMnNoZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t/events"
		)
		.then((res) => {
			const response = res;

			const params = {
				icon_emoji: ":male-technologist:",
			};

			bot.postMessageToChannel("general", `:zap: ${response}`, params);

			console.log(response);
		});
}

function handleMessage(message) {
	if (message.includes(" inspire me")) {
		inspireMe();
		console.log(5);
	} else if (message.includes(" calendarTest")) {
		calendarTest();
		console.log(4);
		console.log(4);
	} else if (message.includes(" help")) {
		runHelp();
		console.log(3);
	}
	console.log(message);
}
