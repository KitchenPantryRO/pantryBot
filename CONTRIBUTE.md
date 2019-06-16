## How to Contribute

Welcome to the PantryBot repository!

To contribute -- please make a branch and make a PR

## Minimum System Requirements
* node 8.12.0
* npm 6.9.0
* Heroku CLI

## How to Run Locally
* clone this repository
* npm i
* Objtain the .ENV file from a fellow KitchenPantry Guildie
* Obtain your own BOT_ID by creating your own discord test bot through the KitchenPantry discord account
* Rename the env file in the root directory to .env
* run the following command to start the bot `npm run local`
* Have your own discord test server or be invited to the KP test server (ask Guild Leader)
* Invite your test bot using the oauth2 option by clicking the `bot` checkbox and providing at least 'managing channel/roles' permissions

## Creating Your First Command

Creating your first command should be fun -- index.js currently does all the heavy lifting with
tokenizing the incoming messages from discord.

### First, The Params
First let's discuuss what params the tokenizer will always provide you to your command. It will always be three arguments -- **but it will be up to you to check their correctness and to sanitize the input**.

#### cmd
- type: string
* Description:
  * this is the command that is passed to you as a string, i.e "$whenis woe", the cmd parameter would be"whenis"
#### argTokens
- type: string [ ]
- Description:
  - this is an object that contains an ordered set of arguments, i.e "$whenis woe", the argTokens paramater would just be ['woe']
#### message
- type: Discord message Object
* Description:
  *  message is the discord message object, you will be able to reply, see below for an example

### Steps in creating your command
1. Determine if you're command is an entirely new command or adds on to an existing set
2. If it's adding on to an existing command you may skip to step 5.
3. If it's a new command go to `commands/` and create your command file.
4. Export the functions of your own command file and import the file into index.js in `commands/index.js`
5. You will now be able to add your command into the index.js in the root directory `commands.subCommand.yourCommand(cmd, argTokens,message`
6. LASTLY AND MOST IMPORTANTLY: ADD YOUR COMMAND to list of commands in `tokenizer/tokenizer.js` in the `isCmd` function.
7. You may now run `npm run local` and test your command on your local discord server

### Examples

For examples of commands that have `no arguments` `one argument` or `multiple arguments` go to `commands/example.js` to see working test examples.

Happy devo-ing <3