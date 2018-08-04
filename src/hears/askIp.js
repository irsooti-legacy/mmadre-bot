const axios = require('axios');

module.exports = bot =>
  bot.hears('ip', ctx => {
    axios
      .get(process.env.FUNCTIONS_IP)
      .then(resp => ctx.reply(resp.data.ip))
      .catch(reason => ctx.reply(reason));

    ctx.reply('🏜 Aspetta un secondo...');
  });
