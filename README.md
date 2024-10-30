---

# Discord Message Relay Bot

A simple Discord bot built with `discord.js` that automatically relays messages from a specified source channel to multiple target channels. This can be useful for mirroring announcements or important information across several channels.

## Features

- Relays messages from a **source channel** to one or more **target channels**.
- Supports both **guild** and **direct message** content.
- Auto-sharding enabled to optimize bot performance across multiple guilds.
  
## Prerequisites

- **Node.js** (v16.6 or higher) - Required for `discord.js` v14.
- **Discord Bot Token** - You must create a bot in the [Discord Developer Portal](https://discord.com/developers/applications) and add the token to your environment variables.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/discord-message-relay-bot.git
   cd discord-message-relay-bot
   ```

2. **Install Dependencies**

   ```bash
   npm install discord.js
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your bot token:

   ```env
   token=YOUR_DISCORD_BOT_TOKEN
   ```

4. **Configure Source and Target Channels**

   - Locate the `sourceChannelId` and `targetChannelIds` in the code:
     - Replace `'1085571725875499018'` with the ID of the **source channel**.
     - Replace the array `["1085571854032445470", "1085571889516269599"]` with the IDs of the **target channels**.

## Usage

To start the bot, run:

```bash
node index.js
```

When the bot is active, any message sent in the **source channel** will be automatically relayed to the specified **target channels**.

## Code Explanation

The bot uses `discord.js` v14 to listen for new messages:

- **Intents and Partials**: Configures the bot with necessary permissions and data to interact with messages, guilds, and direct messages.
- **Event Listeners**:
  - **ready**: Logs in and confirms the bot is connected.
  - **messageCreate**: Checks if a message is in the `sourceChannelId`; if so, it forwards that message to each `targetChannelIds`.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork the repository and create a new branch for any feature or bug fix. When ready, submit a pull request for review.

--- 

Replace `https://github.com/yourusername/discord-message-relay-bot.git` with the actual URL once it's hosted on GitHub. Let me know if you want to add any more details!
