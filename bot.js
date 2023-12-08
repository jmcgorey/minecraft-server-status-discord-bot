const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

require("dotenv").config(); // Load environment variables from .env

client.on("ready", () => {
	// This function runs when the bot starts up
	console.log(`Bot logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
	// This function runs when any user posts a message in the chat (including this or another bot)
	console.log("Received a message: ", JSON.stringify(message));
});

// Initialize the bot by connecting to the server
client.login(process.env.DISCORD_TOKEN);
