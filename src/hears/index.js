const askIp = require('./askIp');
const usage = require('./usage');
const hearFns = [askIp, usage];

module.exports = {
  start: bot => {
    hearFns.forEach(hearFn => hearFn(bot));
  }
};
