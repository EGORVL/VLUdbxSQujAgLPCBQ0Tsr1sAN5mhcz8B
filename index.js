const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({
  disableEveryone: true
}
);
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online hoes!`);
  bot.user.setGame("with a dildo");
}
);

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dn") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (message.content === 'hi'){
      message.channel.send('Hi! :wave:')
  };
  if (message.content === 'hru'){
      message.channel.send('I am fine, you?')
  };
  if (message.content === 'same'){
      message.channel.send('good.')
  };
  if (message.content === 'I love shane'){
      message.channel.send('then i love you! :heart:')
  };
  if (message.content === 'what is my avatar?'){
      message.channel.send('Here is your avatar:');
      message.channel.send(message.author.avatarURL)
  };
  if (message.content === 'what avatar does this server use?'){
      message.channel.send('This:');
      message.channel.send(message.guild.iconURL)
  };
  if (message.content === 'where is my wig?'){
      message.channel.send('**LIVE**: On its way to asia.', {
        file: "https://pbs.twimg.com/media/DSEX2GeWsAEel_W.jpg"
  }
    )
  };
if (message.content === 'wig'){
    message.channel.send('**LIVE**: On its way to asia.', {
      file: "https://pbs.twimg.com/media/DSEX2GeWsAEel_W.jpg"
  }
    )
  };
});

bot.login(botconfig.token)

client.login(process.env.BOT_TOKEN);
