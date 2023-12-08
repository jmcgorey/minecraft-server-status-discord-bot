# Discord Bot Starter

## Overview

This repository contains the code you need to get started with creating a new Discord bot using the [discord.js](https://discord.js.org/#/) module. ([NPM page](https://www.npmjs.com/package/discord.js)) It contains a demo bot that will:

-   Log in
-   Write any messages that come through while it is logged in to console.log

From there, you can extend this bot out to fulfill your use case.

---

## Prerequisites

Before you begin, there are a few things you need to do first:

### Node JS

If you haven't already, you'll need to install Node.js on your computer. The version of `discord.js` that this repository uses requires Node.js 16.9.0 or higher. I recommend that you use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) so that you can easily switch node versions in the future, but you can also just install the version you need from the [nodejs website](https://nodejs.org/en/download/).

### Configuring Your Discord Bot

You will need to get your bot setup in the Discord developer portal and get up to the point where you have your bot's token before you can run the code in this repository. You can follow the guide that discord.js has created for this to get that set up: https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot

Beware, it is **VERY IMPORTANT** to keep this token value a secret. If someone else got a hold of your bot's token, they can use your bot as if it were theirs.

---

## Installation

Once you have completed the needed prerequisites, you can get stared with the code in this repo.

### Downloading and Installing Dependencies

To get set up to run the code:

-   Clone down this repo
-   Run `npm install` to install the dependencies from the `package.json` file (remember, Node v16.9.0 or greater is required)

### Setting Up Your Environment Variables

This repository uses the [dotenv](https://www.npmjs.com/package/dotenv) node module to store environment variables. These get loaded into `process.env` for your code to use while it runs.

Create a `.env` file at the root of your project. Inside of it, add a DISCORD_TOKEN key and put your token string in as the value. It should look like this (with your token replacing "YOUR_TOKEN_VALUE"):

```.env
DISCORD_TOKEN="YOUR_TOKEN_VALUE"
```

Save the file. The `.gitignore` file is already set up to ignore the `.env` file, so you won't have to worry about accidentally committing your token value to source control.

---

## Running The Bot

Once you've installed the dependencies and set up your `.env` file, you can run the bot by running the following command:

```sh
node bot.js
```

It will log a message stating "Bot logged in as YOUR_BOT_NAME!", and it will log every time a message comes across in a server the bot has been added to. Note, you will need to enable the [MessageContent](https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits#MessageContent) privileged intent in order to see the content of messages that your bot is not tagged in. Here is a [guide for enabling priveleged intents](https://stackoverflow.com/questions/64006888/discord-js-bot-disallowed-intents-privileged-intent-provided-is-not-enabled-o).

Your bot will also appear as "Online" on Discord while the command is running. You will have to stop the bot and restart it if you've made any changes that you want to show up. You can stop the command using `ctrl + c`.

## Extending the bot

From there, it's up to you what to do next! Discord.js has [an awesome guide](https://discordjs.guide/) with tons of information on pretty much anything you would need to know about writing a discord bot.
