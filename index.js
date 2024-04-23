/*!
 * Two-factor authentication implementation in pure javascript.
 * One-time password generator (HOTP/TOTP) with support for Google Authenticator.
 *
 * @author   wuyanxin <https://wuyanxin.com>
 * @license  MIT
 */

import "./dist/totp.min.js";

var $secret = document.getElementById('input_secret');
var $totp = document.getElementById('out_totp');
var $ttl = document.getElementById('ttl');

var b32_regex = /^[A-Z2-7]+=*$/;

function btmakepss() {
  if (secre.length % 8 === 0 &&
      b32_regex.exec(secre)) {
  }
  else {
      alert("Secret invalid");
  }
  window.setInterval(makettl, 1000);
  makepss();
}

function makepss() {
  var secre = $secret.value;
  var totp = new TOTP(secre);
  var code = totp.genOTP();
  $totp.innerHTML = code;
}

function makettl() {
    var ttl = Math.floor(Date.now() / 1000 % 30);
    $ttl.innerHTML = 30 - ttl;
    if (ttl === 0) {
      makepss();
    }
}

window.setInterval(makettl, 1000);

document.getElementById("makepsbtn")
  .addEventListener("click", makepss, false);

function copyPassword() {
  var copyText = $totp.innerHTML;
  navigator.clipboard.writeText(copyText);
}

document.getElementById("copybtn")
  .addEventListener("click", copyPassword, false);
