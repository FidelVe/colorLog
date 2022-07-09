const {alertMsg, warningMsg, successMsg } = require('../colorLog');

console.log('Tests for colorLog.js');
console.log(alertMsg('this is an alert msg'));
console.log(warningMsg('this is a warning msg'));
console.log(successMsg('this is a success msg'));
