module.exports.run = (bot, message, args, Discord) => {
  let em = new Discord.RichEmbed()
  .setTitle("Corgi Bots Commands!")
  .setDescription("Hello! Please read the commands below to learn to use me!")
  .addField("help", "Displays this message!")
  .setColor("GREEN")
  .setFooter(`Requested by ${message.author.username}`)
}

module.exports.help = {
"name": "help"
}
