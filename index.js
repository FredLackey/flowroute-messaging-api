const sms = require('flowroute-sms-api');
const mms = require('flowroute-mms-api');

const send = (to, from, body, links, callbackUrl, accessKey, secretKey, done) => {
  if (typeof links === 'undefined' && typeof callbackUrl === 'undefined') {
    return sms.send.withoutCallback(to, from, body, accessKey, secretKey, done);
  }
  if (typeof links === 'undefined' && typeof callbackUrl !== 'undefined') {
    return sms.send.withCallback(to, from, body, callbackUrl, accessKey, secretKey, done);
  }
  if (typeof links !== 'undefined' && typeof callbackUrl === 'undefined') {
    return mms.send.withoutCallback(to, from, body, links, accessKey, secretKey, done);
  }
  if (typeof links !== 'undefined' && typeof callbackUrl !== 'undefined') {
    return mms.send.withCallback(to, from, body, links, callbackUrl, accessKey, secretKey, done);
  }

  module.exports = {
    send
  }
