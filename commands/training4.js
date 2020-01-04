const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry jij kan dit niet doen");

    var training1 = new discord.RichEmbed()
        .setDescription("Police Training")
        .setColor("#8c8c8c")
        .addField("Host", message.author)
        .addField("Co-Host", args[1])
        .addField("Tijd", args[2])
        .addField("Datum", args[3]);

      var trainingChannel = message.guild.channels.find(`name`, "trainingen");
      if (!trainingChannel) return message.guild.send("Het kanaal is niet gevonden.");

    return (training1)
}

module.exports.help = {
    name: "training4",
    description: "Maak een politie training aan."
}