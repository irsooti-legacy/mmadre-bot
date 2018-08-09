const askIp = require('./askIp');
const usage = require('./usage');
const screenpage = require('./screenpage');

const hearFns = [askIp, usage, screenpage];

module.exports = {
  start: bot => {
    hearFns.forEach(hearFn => hearFn(bot));
  }
};
