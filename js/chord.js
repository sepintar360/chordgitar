var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-6516367932506481/3924359468', interstitial: 'ca-app-pub-6516367932506481/5401092662', rewardvideo: 'ca-app-pub-6516367932506481/7341192765'
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner:'ca-app-pub-6516367932506481/8614183863', interstitial:'ca-app-pub-6516367932506481/2567650262', rewardvideo: 'ca-app-pub-6516367932506481/8622625356'
  }
}

document.addEventListener('deviceready', function() {
  admob.banner.config({
    id: admobid.banner,
    isTesting: false,
    autoShow: true,
	bannerAtTop: true
  })
  admob.banner.prepare();
}, false);



$(document).ready(function(){
var dtnow_reward = new Date();
var tmnow_reward = dtnow_reward.getTime();
var tmnext_reward = dtnow_reward.getTime()+900000;

var tmnext_rewardfreeOneHourAccess = dtnow_reward.getTime()+900000;
if (!localStorage.getItem("freeOneHourAccess_reward") || localStorage.getItem("freeOneHourAccess_reward") == '') 
{ localStorage.setItem("freeOneHourAccess_reward", tmnext_rewardfreeOneHourAccess);}

if ((!sessionStorage.getItem("admobOnceTime_reward") || sessionStorage.getItem("admobOnceTime_reward") < tmnow_reward) && localStorage.getItem("freeOneHourAccess_reward") < tmnow_reward && localStorage.getItem("freeOneHourAccess_reward") > 1000) 
{
sessionStorage.setItem("admobOnceTime_reward", tmnext_reward); 

document.addEventListener('deviceready', function() {
  admob.rewardvideo.config({
    id: admobid.rewardvideo
  })
  admob.rewardvideo.prepare();
}, false);


}
});