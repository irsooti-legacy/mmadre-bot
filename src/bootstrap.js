const Telegraf = require('telegraf');
const env = require('dotenv');
const hears = require('./hears');
env.load();

const bot = new Telegraf(process.env.BOT_TOKEN);

hears.start(bot);

bot.start(ctx => ctx.reply("Apposto... ora i tirarici 'na siaggia! 💺"));

// bot.help(ctx => ctx.reply('Send me a sticker'));
// bot.on('sticker', ctx => ctx.reply
// bot.hears('hi', ctx => ctx.reply('Hey there'));
// bot.hears(/buy/i, ctx => ctx.reply('Buy-buy'));

bot.startPolling();
