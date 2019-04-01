module.exports.run = (bot, message, args, Discord) => {
  let reason = args.slice(1).join(" ")
  let member = message.mentions.members.first();
  //Person your kicking and reason
  let faillop = new Discord.RichEmbed()
  .setTitle("Corgi Bot Error")
  .addField("Error 785:", "You don't have permission to kick members")
  .setColor("RED")
  
  let failnm = new Discord.RichEmbed()
  .setTitle("Corgi Bot Error")
  .addField("Error 404:", "You dident mention anyone to kick.")
  .setColor("RED")

  let success = new Discord.RichEmbed()
  .setTitle("Corgi Bot Kick")
  .addField(`Successfuly kicked ${member}, good riddens.`)
  
  if(!member) {
  message.channel.send({embed: failnm}).then(return;)
  } else if(!message.member.hasPermission(["KICK_MEMBERS"])) {
  message.channel.send({embed: faillop})
  } else {
  message.channel.send({embed: success})
  }
}

module.exports.help = {
"name": "kick"
}
