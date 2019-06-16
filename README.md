# 🌿 PantryBot

| PantryBot helps a guild run WoE and its events.


### The repository has the following sturcture

index.js
- Entry point for PantryBot application, this is where we process commands from Discord and put

/commands
- where we put commands for the bot and export them through the index file

/tokenizer
- where we tokenize incoming messages and helpful functions for tokenizing

/services
- where we put our 3rd party services like Google and their corresponding secret tokens

Procfile
- this is for Heroku

### How to Deploy
- `git push heroku master`

## Commands Supported


Below you'll find a list of commands, their descriptions and examples.


- COMMAND: ```$help```
  - Description: This is the ```$help``` command
  - Supported options: none🐚
  - Example:```$help```

- COMMAND: ```$et```
  - Description: Shows MVP bosses for all ET floors.Use the arrow reacts to toggle between channels and the trashbin react to delete the message as soon as you're done
  - Supported options: none🐚
  - Example:```$et```

- COMMAND: ```$whenis [EVENT]```
  - Description: Provides time of [EVENT]
  - Supported [EVENTS]: woe, ufo, mvp
  - Example:```$whenis woe```

- COMMAND: ```$set @username#0123 role [ROLE]```
  - Description: This command sets your role on discord
  - Supported [ROLE]: shield,sword,heals
  - Example:```$set @username#0123 role sword```

- COMMAND: ```$unset @username#0123 role [ROLE]```
  - Description: This command unsets your role on discord
  - Supported [ROLE]: shield,sword,heals
  - Example:```$unset @username#0123 role sword```

- COMMAND: ```$set @username#0123 class [CLASS]```
  - Description:This command sets your class on discord
  - Supported [CLASS]:Acolyte,Archer,Mage,Swordsman,Thief or Merchant
  - Example:```$set @username#0123 class swordsman```

- COMMAND: ```$unset @username#0123 class [CLASS]```
  - Description:This command unsets your class on discord
  - Supported [CLASS]:Acolyte,Archer,Mage,Swordsman,Thief or Merchant
  - Example:```$unset @username#0123 class swordsman```

- COMMAND: ```$et```',
  - Description: Shows MVP bosses for all ET floors.Use the arrow reacts to toggle between channels and the trashbin react to delete the message as soon as you're done
  - Supported options: none🐚
  - Example:```$et```

