const puppeteer = require('puppeteer');
const cloudinary = require('../services/cloudinaryInstance');
const rootFolder = process.cwd();

module.exports = bot =>
  bot.hears(new RegExp('screen'), ctx => {
    let text = ctx.update.message.text
      .toLowerCase()
      .split('screen')[1]
      .trim();

    if (!text.startsWith('http://')) text = `http://${text}`;

    puppeteer.launch().then(browser => {
      browser.newPage().then(page => {
        page.goto(text).then(() => {
          page.setViewport({
            width: 1980,
            height: 1080
          });
          page.screenshot({ path: 'screenpage.png' }).then(() => {
            cloudinary.uploader.upload(rootFolder + '/screenpage.png', function(
              result
            ) {
              ctx.replyWithPhoto(result.secure_url);
            });
          });
        });
      });
    });

    ctx.reply('🏜 Aspetta un secondo...');
  });
