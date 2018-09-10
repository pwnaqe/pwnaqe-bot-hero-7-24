const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Duyuru için herhangi bir şey yazmalısın.');
  message.delete();
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Duyuru')
    .addField('Yetkili:', message.author.username)
    .addField('Duyuru:', mesaj)
    return message.channel.sendEmbed(sohbetsilindi);
    message.send('Duyuru ' + message.member + ' tarafından Yapildi!'); 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'duyuru [yazdırmak istediğiniz şey]'
};
