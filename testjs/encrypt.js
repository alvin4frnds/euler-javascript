const CryptoJS = require('crypto-js');

const key = 'GjkgicwIVNuwSpqnIdUsHtG5XfLCYBFE';
const content = 'Hello, world!';
const iv = (new Date).getTime() + "";

const ecrypted = CryptoJS.AES.encrypt(content, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC
});

console.log("encrypted: ", ecrypted.toString(), iv);
