require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.TOKEN

const prefix = "!";

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('HYOOONK!');
    }
    if (!message.content.startsWith(prefix) || message.content.bot) return;

    const args = message.content.slice(prefix.length).trim().split(" ");

    const cmd = args.shift().toLowerCase();

    
  
    if (cmd === "add") {


      if (args.length !== 2) return message.reply("Please provide two numbers!");
  
      args.forEach((argument) => {

        if (isNaN(argument)) return message.reply(`${argument} is not a number!`);
      });
  
 
      const answer = parseInt(args[0]) + parseInt(args[1]);

      if (!isNaN(answer)) message.channel.send(`Answer: ${answer}`);
    }   else if (cmd === "sub") {


        if (args.length !== 2) return message.reply("Please provide two numbers!");
    
        args.forEach((argument) => {

          if (isNaN(argument)) return message.reply(`${argument} is not a number!`);
        });
    

        const answer = parseInt(args[0]) - parseInt(args[1]);

        if (!isNaN(answer)) message.channel.send(`Answer: ${answer}`);
      }    else if (cmd === "div") {


        if (args.length !== 2) return message.reply("Please provide two numbers!");
    
        args.forEach((argument) => {

          if (isNaN(argument)) return message.reply(`${argument} is not a number!`);
        });
    

        const answer = parseInt(args[0]) / parseInt(args[1]);

        if (!isNaN(answer)) message.channel.send(`Answer: ${answer}`);
      } else if (cmd === "mult") {


        if (args.length !== 2) return message.reply("Please provide two numbers!");
    
        args.forEach((argument) => {

          if (isNaN(argument)) return message.reply(`${argument} is not a number!`);
        });
    

        const answer = parseInt(args[0]) * parseInt(args[1]);

        if (!isNaN(answer)) message.channel.send(`Answer: ${answer}`);
      }     else if (cmd === "exponet") {

        if (args.length !== 2) return message.reply("Please provide two numbers!");
    
        args.forEach((argument) => {
        
          if (isNaN(argument)) return message.reply(`${argument} is not a number!`);
        });
    
        const answer = parseInt(args[0]) ** parseInt(args[1]);

        if (!isNaN(answer)) message.channel.send(`Answer: ${answer}`);
      }
    
  });

client.login(token);
