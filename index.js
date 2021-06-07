const SlackBot = require("slackbots");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const gAPI = require("./GoogleAPI");
const slackConf = require("./SlackConf");

const bot = new SlackBot({
	token: `${process.env.BOT_TOKEN}`,
	name: "test",
});

bot.on("error", (err) => {
	console.log(err);
});

bot.on("start", () => {});

// Message Handler
bot.on("message", (data) => {
	if (data.type !== "message") {
		return;
	}
	handleMessage(data.text);
});
