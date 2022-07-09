const TAGS = {
  reset: "\x1b[0m",
  colors: {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    default: "\x1b[39m"
  },
  bg: {
    default: "\x1b[49m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m"
  }
};

function alertMsg(msg) {
  //
  return `${TAGS.bg.red}${msg}${TAGS.bg.default}`;
}

function warningMsg(msg) {
  //
  return `${TAGS.bg.yellow}${msg}${TAGS.bg.default}`;
}

function successMsg(msg) {
  //
  return `${TAGS.bg.green}${msg}${TAGS.bg.default}`;
}

module.exports = {
  alertMsg,
  warningMsg,
  successMsg
};
