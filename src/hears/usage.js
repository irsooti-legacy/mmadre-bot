var os = require('os-utils');

module.exports = bot =>
  bot.hears('usage', ctx => {
    os.cpuUsage(v => ctx.reply('CPU in uso (%): \t' + v));
    os.cpuFree(v => ctx.reply('CPU libera:\t' + v));

    ctx.reply('Aspè! 🚦')
  });
