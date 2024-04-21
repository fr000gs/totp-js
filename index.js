/*!
 * Two-factor authentication implementation in pure javascript.
 * One-time password generator (HOTP/TOTP) with support for Google Authenticator.
 *
 * @author   wuyanxin <https://wuyanxin.com>
 * @license  MIT
 */

var HOTP = require('./lib/hotp')
var TOTP = require('./lib/totp')

TOTP.HOTP = HOTP

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

let b32_regex = /^[A-Z2-7]+=*$/;

function makepss() {
  var secre = document.getElementById("input_secret").value;
  if (secre.length % 8 === 0 &&
      b32_regex.exec(secre)) {
      const totp = new TOTP(secre);
  }
  else {
      alert("Secret invalid");
  }




document.getElementById("makepsbtn")
  .addEventListener("click", makepss, false);

function copyPassword() {
  var copyText = document.getElementById("pswd").innerHTML;
  navigator.clipboard.writeText(copyText);
}

document.getElementById("copybtn")
  .addEventListener("click", copyPassword, false);
