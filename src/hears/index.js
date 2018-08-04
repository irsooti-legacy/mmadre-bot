const askIp = require('./askIp');
const usage = require('./usage');
const hears = [askIp, usage];

module.exports = {
  start: bot => {
    hears.forEach(hear => hear(bot));
  }
};
