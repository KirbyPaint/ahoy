// Require the necessary discord.js classes
import * as Discord from "discord.js";
import config from "./config.json" assert { type: "json" };

// Create a new client instance
const client = new Discord.Client({
  intents: [1, 2, 512, 4096, 32768],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Discord.Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Discord.Events.MessageCreate, async (msg) => {
  if (msg.content.toLowerCase().includes(`ahoy`) && !msg.author.bot) {
    msg.reply(`Ahoy!`);
  }
});

client.commands = new Discord.Collection();

// Log in to Discord with your client's token
client.login(config.token);
