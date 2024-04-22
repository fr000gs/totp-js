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
//var T = Math.floor((Date.now() / 1000 - 30) / timeStep);

function btmakepss() {
  if (secre.length % 8 === 0 &&
      b32_regex.exec(secre)) {
      var totp = new TOTP(secre);
  }
  else {
      alert("Secret invalid");
  }
  window.setInterval(makettl, 1000);
  makepss();
}

function makepss() {
  var secre = $secret.value;
  var code = totp.genOTP();
  $totp.innerHTML = code;
}

/*
function startInterval() {
  setInterval(function () {
    var ttl = Math.floor(Date.now() / 1000 % 30);
    $ttl.innerHTML = 30 - ttl;
    if (ttl === 0) {
      makepss();
    }
  sync2NextSecond();
  }, 1000);
  
}



function sync2NextSecond() {
  var ms2NextSecond = 1000 - (Date.now() % 1000);
  setTimeout(makettl, 3); // ms2NextSecond);
}

sync2NextSecond();
*/



function makettl() {
    var ttl = Math.floor(Date.now() / 1000 % 30);
    $ttl.innerHTML = 30 - ttl;
    if (ttl === 0) {
      makepss();
    }
}


var x = 
/*
console.log(x);
console.log(makettl);

var a = window.setInterval(function() 
	{alert("a");}, 1000);
*/

document.getElementById("makepsbtn")
  .addEventListener("click", btmakepss, false);

function copyPassword() {
  var copyText = $totp.innerHTML;
  navigator.clipboard.writeText(copyText);
}

document.getElementById("copybtn")
  .addEventListener("click", copyPassword, false);
