module.exports.run = (bot, message, args, Discord) => {
  let em = new Discord.RichEmbed()
  .setTitle("Corgi Bots Commands!")
  .setDescription("Hello! Please read the commands below to learn to use me!")
  .addField("help", "Displays this message!")
  .addField("rng", "Generates a random number between 0 and a number you specified.")
  .setColor("GREEN")
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send({embed: em})
}

module.exports.help = {
"name": "help"
}
