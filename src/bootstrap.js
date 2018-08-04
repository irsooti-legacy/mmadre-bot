const Telegraf = require('telegraf');
const env = require('dotenv');
const hears = require('./hears');
env.load();
// const screenshot = require('desktop-screenshot');


// screenshot('screenshot.png', (complete, error) => {
//   if (error) {
//     console.log(__filename + '/fb.png')
//     console.log('Screenshot failed', error);
//   } else {
//     console.log(__dirname__ + '/fb.png');
//     // ctx.replyWithPhoto(__dirname__ + '/fb.png');
//   }
// });

// screenshot("screenshot.jpg", {width: 400, height: 300, quality: 60}, function(error, complete) {
//   if(error)
//       console.log("Screenshot failed", error);
//   else
//       console.log("Screenshot succeeded");
// });

const bot = new Telegraf(process.env.BOT_TOKEN);

hears.start(bot);

bot.start(ctx => ctx.reply("Apposto... ora i tirarici 'na siaggia! 💺"));

// bot.help(ctx => ctx.reply('Send me a sticker'));
// bot.on('sticker', ctx => ctx.reply
// bot.hears('hi', ctx => ctx.reply('Hey there'));
// bot.hears(/buy/i, ctx => ctx.reply('Buy-buy'));

bot.startPolling();
