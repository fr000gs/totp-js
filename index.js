/*!
 * Two-factor authentication implementation in pure javascript.
 * One-time password generator (HOTP/TOTP) with support for Google Authenticator.
 *
 * @author   wuyanxin <https://wuyanxin.com>
 * @license  MIT
 */

//var HOTP = require('./lib/hotp.js')
define(['require', './lib/hotp.js', './lib/totp.js'], function (require) {
  var HOTP = require('./lib/hotp.js');
  var TOTP = require('./lib/totp.js');
});
//var TOTP = require('./lib/totp.js')

TOTP.HOTP = HOTP;

module.exports = TOTP;
/*
function makepss() {
  var text = sha512(document.getElementById("psw").value +
    document.getElementById("usr").value);
  var value = '';
  for (var i = 0; i < text.length; i++) {
    if (i % 8 == 0) {
      value = value + text[i];
    }
  }
  document.getElementById("pswd").innerHTML = value + "@A";
}
*/

var b32_regex = /^[A-Z2-7]+=*$/;
var T = Math.floor((Date.now() / 1000 - t0) / timeStep);

function makepss() {
  var secre = document.getElementById("input_secret").value;
  if (secre.length % 8 === 0 &&
      b32_regex.exec(secre)) {
      const totp = new TOTP(secre);
  }
  else {
      alert("Secret invalid");
  }
  var code = totp.genOTP();
  document.getElementById("out_totp").innerHTML = code;
}


document.getElementById("makepsbtn")
  .addEventListener("click", makepss, false);

function copyPassword() {
  var copyText = document.getElementById("pswd").innerHTML;
  navigator.clipboard.writeText(copyText);
}

document.getElementById("copybtn")
  .addEventListener("click", copyPassword, false);
