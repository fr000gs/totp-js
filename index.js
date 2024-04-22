/*!
 * Two-factor authentication implementation in pure javascript.
 * One-time password generator (HOTP/TOTP) with support for Google Authenticator.
 *
 * @author   wuyanxin <https://wuyanxin.com>
 * @license  MIT
 */

var $secret = document.getElementById('input_secret');
var $totp = document.getElementById('out_totp');
var $ttl = document.getElementById('ttl');

var b32_regex = /^[A-Z2-7]+=*$/;
var T = Math.floor((Date.now() / 1000 - 30) / timeStep);

function makepss() {
  var secre = $secret.value;
  if (secre.length % 8 === 0 &&
      b32_regex.exec(secre)) {
      var totp = new TOTP(secre);
  }
  else {
      alert("Secret invalid");
  }
  var code = totp.genOTP();
  $totp.innerHTML = code;
}

function startInterval() {
  setInterval(function () {
    var ttl = Math.floor(Date.now() / 1000 % 30);
    $ttl.innerHTML = 30 - ttl;
    if (ttl === 0) {
      refreshCode();
    }
  }, 1000);
}

function sync2NextSecond() {
  var ms2NextSecond = 1000 - (Date.now() % 1000);
  setTimeout(startInterval, ms2NextSecond);
}

sync2NextSecond();

document.getElementById("makepsbtn")
  .addEventListener("click", makepss, false);

function copyPassword() {
  var copyText = $totp.innerHTML;
  navigator.clipboard.writeText(copyText);
}

document.getElementById("copybtn")
  .addEventListener("click", copyPassword, false);
