module.exports.run = (bot, message, args, Discord) => {
let arg = args.join(" ")
let error = new Discord.RichEmbed()
  .setTitle("Corgi Number Generator Error")
  .addField("Error 404:", "Missing Args please do something like \"!rng 100\" to generate a number between 0 and 100")
  .setColor("RED")
  
let success = new Discord.RichEmbed()
  .setTitle("Corgi Number Generator Success!")
  .addField("Your number is:", Math.floor(math.random()* args))
  .setColor("GREEN")
  
  if(!arg) {
  message.channel.send({embed: error})
  } else {
  message.channel.send({embed: success})
  }
}

module.exports.help = {
"name": "rng"
}
