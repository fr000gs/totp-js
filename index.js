/*!
 * Two-factor authentication implementation in pure javascript.
 * One-time password generator (TOTP).
 *
 * @author   fr000gs <https://wuyanxin.com>
 * @license  MIT
 */

import "./dist/totp.min.js";

var $secret = document.getElementById('input_secret');
var $totp = document.getElementById('out_totp');
var $ttl = document.getElementById('ttl');

var b32_regex = /^[A-Z2-7]+=*$/;

function btmakepss() {
  var secre = $secret.value;
  if (secre.length % 8 === 0 &&
      b32_regex.exec(secre)) {
      window.setInterval(makettl, 1000);
      makepss();
  }
  else {
      alert("Secret invalid");
  }
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

document.getElementById("makepsbtn")
  .addEventListener("click", btmakepss, false);

function copyPassword() {
  var copyText = $totp.innerHTML;
  navigator.clipboard.writeText(copyText);
}

document.getElementById("copybtn")
  .addEventListener("click", copyPassword, false);
