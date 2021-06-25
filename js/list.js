document.addEventListener('deviceready', function() {
admob.interstitial.show();
}, false);


var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-6516367932506481/3924359468', interstitial: 'ca-app-pub-6516367932506481/5401092662'
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner:'ca-app-pub-6516367932506481/8614183863', interstitial:'ca-app-pub-6516367932506481/2567650262'
  }
}

document.addEventListener('deviceready', function() {

  admob.interstitial.config({
    id: admobid.interstitial,
    isTesting: false,
    autoShow: false
  })
  admob.interstitial.prepare();

}, false);
