var os = require('os-utils');
const screenshot = require('desktop-screenshot');
const cloudinary = require('../services/cloudinaryInstance')

const rootFolder = process.cwd();

module.exports = bot =>
  bot.hears('usage', ctx => {
    os.cpuUsage(v => ctx.reply('🖥 CPU in uso (%): \t' + v));
    os.cpuFree(v => ctx.reply('🖥 CPU libera:\t' + v));

    screenshot('screenshot.jpg', function(error, complete) {
      if (error === null && complete) {
        cloudinary.uploader.upload(rootFolder + '/screenshot.jpg', function(
          result
        ) {
          ctx.replyWithPhoto(result.secure_url);
        });
      }
    });

    ctx.reply('Aspè! 🚦');
  });
