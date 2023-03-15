const { Client, GatewayIntentBits, Partials} = require("discord.js");
const { readdirSync } = require("fs")
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent],
  shards: "auto",
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember]
});

const token = process.env['token']

const sourceChannelId = '1085571725875499018';

const targetChannelIds = ["1085571854032445470", "1085571889516269599"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.channel.id === sourceChannelId) {
    targetChannelIds.forEach((channelId) => {
      const channel = client.channels.cache.get(channelId);
      if (channel) {
        channel.send(`${message.content}`);
      }
    });
  }
});
client.login(token);