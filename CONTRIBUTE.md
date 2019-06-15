##How to Contribute

Welcome to the PantryBot repository!

If you would like to add an entirely new category of commands -- feel free to create a new file in the
commands folder to reflect that, otherwise feel free to add commands to existing categories.

## How to Run Locally
* clone this repository
* npm i
* Objtain the BOT_TOKEN from a fellow KitchenPantry member
* Rename the env file in the root directory to .env
* Put the correct value to the associated "BOT_TOKEN" key in the .env file
* run the following command to start the bot `npm run local`
* Invite PantryBot to your test server
* You will be able to see the commands live from your termina

So far we have
* help
  * This is the help command to provide users a list of commands of PantryBot
* events
  * These commands currently deal with what time an event is
* eggs
  * These are commands just for fun :)

##Creating Your First Command

Creating your first command should be fun -- index.js currently does all the heavy lifting with
tokenizing the incoming messages from discord.

The tokenizer will always provide you with three
arguments -- but it will be up to you to check their correctness.

* cmd
* argTokens
* message

* cmd
  * this is the command that is passed to you as a string, i.e "$whenis woe", the cmd parameter would be"whenis"
* argTokens
  * this is an object that contains an ordered set of arguments, i.e "$whenis woe", the argTokens paramater would just be ['woe']
* message
  * message is the discord message object, you will be able to reply, see below for an example

```
const whenIs = (cmd, argTokens, message) => {
  const cmdToken = cmd.toLowerCase();
  if (cmdToken === 'whenis') {
    const event = argTokens[0].toLowerCase();
    if (event === 'woe') {
      message.reply(
        '```WoE happens every Thursday and Sunday at the following times\n\n8PM Pacific Time\n8PM Arizona Time\n9PM Mountain Time\n10PM Central Time\n11PM Eastern Time```'
      );
    }
  }
};
```
Happy devo-ing <3