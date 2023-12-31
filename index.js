import { Client, IntentsBitField } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (e) => {
  console.log(`${e.user.tag} esta online!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "Ola") {
    message.reply(`Ola você! ${message.author}`);
  }
});

client.login(process.env.TOKEN);
