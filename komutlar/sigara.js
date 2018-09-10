const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send(':smoking::cloud::cloud::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send(':smoking::cloud::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send(':smoking::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send(':smoking:')
  message.channel.bulkDelete (1);
  message.channel.send(':japanese_goblin: :dash: :cloud:')
  message.channel.bulkDelete (1);   
  message.channel.send(':japanese_goblin: :dash: :cloud::cloud:') 
  message.channel.bulkDelete (1);  
  message.channel.send(':japanese_goblin: :dash: :cloud::cloud::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send(':smoking::cloud::cloud::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send(':smoking::cloud::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send(':smoking::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send(':smoking:')
  message.channel.bulkDelete (1);
  message.channel.send(':japanese_goblin: :dash: :cloud:')
  message.channel.bulkDelete (1);   
  message.channel.send(':japanese_goblin: :dash: :cloud::cloud:') 
  message.channel.bulkDelete (1);  
  message.channel.send(':japanese_goblin: :dash: :cloud::cloud::cloud:')
  message.channel.bulkDelete (1);
  message.channel.send('**NOT:**Tatlis bot sigaranin zararli ve icilmemsini onerior !!') 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sigara',
  description: 'sigara icersiniz .',
  usage: 'sigara'
};
