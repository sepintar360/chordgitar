
$(document).ready(function() {
				$('head').append("<title>Chord Gitar "+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"</title>");
				

				$('#judulchord').append(""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"");	
				$('#listensong').append(""+localStorage.getItem('advertisechord')+"");
				/********************/
				cmprsstr = tampilchord[idchord]['isi'];
				
				
cmprsstr = cmprsstr.replace(/Gb/g,"F#");
cmprsstr = cmprsstr.replace(/Ab/g,"G#");
cmprsstr = cmprsstr.replace(/Bb/g,"A#");
cmprsstr = cmprsstr.replace(/Db/g,"C#");
cmprsstr = cmprsstr.replace(/Eb/g,"D#");
				
				
cmprsstr = cmprsstr.replace(/A:s1:([a-z])/g, "a:s1:$1");
cmprsstr = cmprsstr.replace(/:([A-Z])(.*?):/g, ":<span style=\"color:#800000;font-weight:bold;\">$1$2</span>:");

/*************************************/
chordposition = cmprsstr.replace(/<\/span>(.*?)<span style=\"color:#800000;font-weight:bold;\">/g, " ");
chordposition = chordposition.replace(/(.*?)<span style=\"color:#800000;font-weight:bold;\">/g, " ");
chordposition = chordposition.replace(/<\/span>(.*?)$/g, " ");

Array.prototype.removeDuplicate = function(){
   var result = [];
   for(var i =0; i < this.length ; i++){
       if(result.indexOf(this[i]) == -1) result.push(this[i]);
   }
   return result;
}
var chordposition = chordposition;
chordposition = chordposition.replace(/[\/]/g," ").split(" ").removeDuplicate().join(":after::before:")+":after:";
chordposition = chordposition.replace(/#/g, "kr3s");
chordposition = chordposition.replace(/:before:(.*?):after:/g, "<img src='diagram/$1.png' style='width:24%'>");
chordposition = chordposition.replace(/(:before:|:after:)/g, "");

cmprsstr = cmprsstr.replace(/http(.*?):x/g, ":x");
/**************************************/

cmprsstr = cmprsstr.replace(/:s10:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s9:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s8:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s7:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s6:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s5:/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s4:/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s3:/g, "&nbsp;&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s2:/g, "&nbsp;&nbsp;");
cmprsstr = cmprsstr.replace(/:s1:/g, "&nbsp;");
cmprsstr = cmprsstr.replace(/:x5:/g, "<br><br><br><br><br>");
cmprsstr = cmprsstr.replace(/:x4:/g, "<br><br><br><br>");
cmprsstr = cmprsstr.replace(/:x3:/g, "<br><br><br>");
cmprsstr = cmprsstr.replace(/:x2:/g, "<br><br>");
cmprsstr = cmprsstr.replace(/:x1:/g, "<br>");

if(cmprsstr == '' || !cmprsstr || 0 === cmprsstr.length) { cmprsstr = '<br><br><br><br><center>Not Found!<br>Please Update Your Apps<br>To The Latest Version!<br><Br><hr>Or Contact Us<br>Support@ms-room.com</center>'; }
				/********************/
			    $('#stage').append("<span class=\"chord\">"+cmprsstr+"<br><br><hr>"+chordposition+"</span>");
				$('body').append('<div class="homehome"><span id="box-links"><a href="#endchord"><span id="scrollit" class="afterfirst"> Scroll </span></a></span> <span id="box-links-1"> <a href="#"><span id="stopscrollit" class="afterfirst"> Stop </span></a></span> <style>[data-tip] {position:relative;}[data-tip]:after { 	display:none; 	content:attr(data-tip); 	position:absolute; 	top:-60px; 	left:-120px; 	padding:5px 8px; 	background:#1a1a1a; 	color:#fff; 	z-index:9; 	font-size: 10px; 	height:18px; 	line-height:18px; 	-webkit-border-radius: 3px; 	-moz-border-radius: 3px; 	border-radius: 3px; 	white-space:nowrap; 	word-wrap:normal; border:solid 1px orange; } [data-tip]:hover:before, [data-tip]:hover:after { 	display:block; } #xspeedscroll {width:30px;font-size:10px;margin:0px;padding:2px;} #xspeedscroll:hover {width:55px; padding: 10px;font-size:24px; }</style><span data-tip="<10: Faster | =10: Normal | >10: Slower"><input  style="" type="number" id="xspeedscroll" onchange="scrlF(this.value)"></span> </div><script>/*$(document).ready(function(){$("#box-links").localScroll({target:"body"});});*/$(document).ready(function() {$("#box-links").click(function() {$("#box-links").hide("slow");$("#box-links-1").show("slow");});$("#box-links-1").click(function() {$("#box-links-1").hide("slow");$("#box-links").show("slow");});});</script>');
				
});


var content_chord = {
    'Am'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|___||e',
	'A#m' : '|___|___|___|___|___||E\n|___|___|___|___|_*_||A\n|___|___|_*_|___|___||D\n|___|___|_*_|___|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|_*_||e',
	'Bm'  : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|_*_|___|___|___||G\n|___|___|_*_|___|___||B\n|___|___|___|_*_|___||e',
	'Cm'  : '|___|___|___|___|___||E\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|_*_|___|___|___|___||G\n|___|_*_|___|___|___||B\n|___|___|_*_|___|___||e',
	'C#m' : '___|___|___|___|___|___||E\n___|___|_*_|___|___|___||A\n_*_|___|___|___|___|___||D\n_*_|___|___|___|___|___||G\n___|_*_|___|___|___|___||B\n___|___|_*_|___|___|___||e',
	'Dm'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|_*_|___|___||B\n|___|___|___|___|_*_||e',
	'D#m' : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|_*_||D\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'Em'  : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|___|___|___||e',
	'Fm'  : '|___|___|___|___|_*_||E\n|___|___|_*_|___|___||A\n|___|___|_*_|___|___||D\n|___|___|___|___|_*_||G\n|___|___|___|___|_*_||B\n|___|___|___|___|_*_||e',
	'F#m' : '|___|___|___|_*_|___||E\n|___|_*_|___|___|___||A\n|___|_*_|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'Gm'  : '|___|___|_*_|___|___||E\n|_*_|___|___|___|___||A\n|_*_|___|___|___|___||D\n|___|___|_*_|___|___||G\n|___|___|_*_|___|___||B\n|___|___|_*_|___|___||e',
	'G#m' : '___|___|_*_|___|___|___||E\n_*_|___|___|___|___|___||A\n_*_|___|___|___|___|___||D\n___|___|_*_|___|___|___||G\n___|___|_*_|___|___|___||B\n___|___|_*_|___|___|___||e',
	'A'   : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'A#'  : '|___|___|___|___|___||E\n|___|___|___|___|_*_||A\n|___|___|_*_|___|___||D\n|___|___|_*_|___|___||G\n|___|___|_*_|___|___||B\n|___|___|___|___|_*_||e',
	'B'   : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|_*_|___|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'C'   : '|___|___|___|___|___||E\n|___|___|_*_|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|___||e',
	'C#'  : '___|___|___|___|___|___||E\n___|___|_*_|___|___|___||A\n_*_|___|___|___|___|___||D\n_*_|___|___|___|___|___||G\n_*_|___|___|___|___|___||B\n___|___|_*_|___|___|___||e',
	'D'   : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|_*_|___|___||B\n|___|___|___|_*_|___||e',
	'D#'  : '|___|___|___|___|___|xE\n|___|___|___|___|___|xA\n|___|___|___|___|___|xD\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|_*_|___|___||e',
	'E'   : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|___|___|___||B\n|___|___|___|___|___||e',
	'F'   : '|___|___|___|___|_*_||E\n|___|___|_*_|___|___||A\n|___|___|_*_|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|_*_||e',
	'F#'  : '|___|___|___|_*_|___||E\n|___|_*_|___|___|___||A\n|___|_*_|___|___|___||D\n|___|___|_*_|___|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'G'   : '|___|___|_*_|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|___|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|_*_|___|___||e',
	'G#'  : '___|___|_*_|___|___|___||E\n_*_|___|___|___|___|___||A\n_*_|___|___|___|___|___||D\n___|_*_|___|___|___|___||G\n___|___|_*_|___|___|___||B\n___|___|_*_|___|___|___||e',
	'A7'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'B7'  : '|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|___|___|___|_*_||D\n|___|___|___|_*_|___||G\n|___|___|___|___|___||B\n|___|___|___|_*_|___||e',
	'C7'  : '|___|___|___|___|___||E\n|___|___|_*_|___|___||A\n|___|___|___|_*_|___||D\n|___|___|_*_|___|___||G\n|___|___|___|___|_*_||B\n|___|___|___|___|___||e',
	'D7'  : '|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|_*_||B\n|___|___|___|_*_|___||e',
	'E7'  : '|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|_*_|___|___||B\n|___|___|___|___|___||e',
	'G7'  : '|___|___|_*_|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|___|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|___|___|_*_||e',
	'AMaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'BMaj7':'|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'CMaj' :'|___|___|___|___|___|XE\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|___|_*_|___|___|___||G\n|_*_|___|___|___|___||B\n|___|___|_*_|___|___||e',
	'DMaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'EMaj7':'|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|_*_|___|___|___||G\n|___|_*_|___|___|___||B\n|___|_*_|___|___|___||e',

	'Amaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|_*_||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'Bmaj7':'|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|___|_*_|___|___||G\n|___|_*_|___|___|___||B\n|___|___|___|_*_|___||e',
	'Cmaj' :'|___|___|___|___|___|XE\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|___|_*_|___|___|___||G\n|_*_|___|___|___|___||B\n|___|___|_*_|___|___||e',
	'Dmaj7':'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|_*_|___||e',
	'Emaj7':'|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|_*_|___|___|___||G\n|___|_*_|___|___|___||B\n|___|_*_|___|___|___||e',

	'E5'   :'|___|___|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'F5'   :'|___|___|___|___|_*_||E\n|___|___|_*_|___|___||A\n|___|___|_*_|___|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'F#5'  :'|___|___|___|_*_|___||E\n|___|_*_|___|___|___||A\n|___|_*_|___|___|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'G5'   :'|___|___|_*_|___|___||E\n|_*_|___|___|___|___||A\n|_*_|___|___|___|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'G#5'  :'___|___|_*_|___|___|___||E\n_*_|___|___|___|___|___||A\n_*_|___|___|___|___|___||D\n___|___|___|___|___|___|xG\n___|___|___|___|___|___|xB\n___|___|___|___|___|___|xe',
	'A5'   :'|___|___|___|___|___||E\n|___|___|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'A#5'  :'|___|___|___|___|___|xE\n|___|___|___|___|_*_||A\n|___|___|_*_|___|___||D\n|___|___|_*_|___|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'B5'   :'|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|_*_|___|___|___||D\n|___|_*_|___|___|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'C#'   :'|___|___|___|___|___|xE\n|___|___|_*_|___|___||A\n|_*_|___|___|___|___||D\n|_*_|___|___|___|___||G\n|___|___|___|___|___|xB\n|___|___|___|___|___|xe',
	'C#5'  :'___|___|___|___|___|___|xE\n___|___|_*_|___|___|___||A\n_*_|___|___|___|___|___||D\n_*_|___|___|___|___|___||G\n___|___|___|___|___|___|xB\n___|___|___|___|___|___|xe',
	'D5'   :'                  5    \n|___|___|___|___|___xE\n|___|___|___|___|_*_|A\n|___|___|_*_|___|___|D\n|___|___|_*_|___|___|G\n|___|___|___|___|___xB\n|___|___|___|___|___xe',
	'D#5'  :'                  6    \n|___|___|___|___|___xE\n|___|___|___|___|_*_|A\n|___|___|_*_|___|___|D\n|___|___|_*_|___|___|G\n|___|___|___|___|___xB\n|___|___|___|___|___xe',

	'A/C#': '|___|___|___|___|___||E\n|___|_*_|___|___|___||A\n|___|___|___|_*_|___||D\n|___|___|___|_*_|___||G\n|___|___|___|_*_|___||B\n|___|___|___|___|___||e',
	'D/F#': '|___|___|___|_*_|___||E\n|___|___|___|___|___||A\n|___|___|___|___|___||D\n|___|___|___|_*_|___||G\n|___|___|_*_|___|___||B\n|___|___|___|_*_|___||e',
	'E/G#': '|___|_*_|___|___|___||E\n|___|___|___|_*_|___||A\n|___|___|___|_*_|___||D\n|___|___|___|___|___|xG\n|___|___|___|___|___||B\n|___|___|___|___|___||e',
	'G/B' : '|___|___|___|___|___|xE\n|___|___|___|_*_|___||A\n|___|___|___|___|___||D\n|___|___|___|___|___||G\n|___|___|___|___|___||B\n|___|___|_*_|___|___||e'
}
$(document).ready(function(){
$.each(content_chord, function(key, value) {
    $('#mySelect').append($("<option/>", {
        value: value,
        text: key
    })); 
});
});

function changeFunc($i) {
    alert($i);
   };
   
   $(document).ready(function(){
		$('#box-loadload').delay(1500).fadeOut('fast');
				sessionStorage.setItem("refpage", tampilchord[idchord]['id']); 

		});

var message=""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"";




var halamanchordcccckey = "cccc"+tampilchord[idchord]['id'];



$('#bookmarkya').click(function() {
if(halamanchordcccckey in localStorage){
localStorage.removeItem(halamanchordcccckey);
$('#bm1').show('slow');
$('#bm2').hide('slow'); } else {
	$('#bm1').hide('slow');
	$('#bm2').show('slow');
localStorage.setItem(halamanchordcccckey, message); }
	
/*****************
	$('#bm1').hide('slow');
if (!localStorage.getItem("cccc"+tampilchord[idchord]['id'])){
	$('#bm2').show('slow');
localStorage.setItem("cccc"+tampilchord[idchord]['id'], ""+tampilchord[idchord]['nama_band']+" - "+tampilchord[idchord]['judul']+"");
}
else
{
localStorage.removeItem("cccc"+tampilchord[idchord]['id']);
$('#bm1').show('slow');
$('#bm2').hide('slow');
}
********************/
});

$(document).ready(function() { 
if(halamanchordcccckey in localStorage){
$('#bm1').hide('slow');
$('#bm2').show('slow'); } else {
$('#bm1').show('slow');
$('#bm2').hide('slow'); }
	
/*******
if (!localStorage.getItem("cccc"+tampilchord[idchord]['id'])){
$('#bm1').show('slow');
$('#bm2').hide('slow');
}
else
{
$('#bm1').hide('slow');
$('#bm2').show('slow');
}
*******/
});






var match;
var chords =
    ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B','C','Db','D','D#','E','F','Gb','G','G#','A','A#','B'];
var chordRegex = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B/g;

$('#transposeUp').click(function() {
    $('.chord').each(function() {
        var currentChord = $(this).html();
		var currentChord = currentChord.replace(/kr3s/g, "#");
        var output = "";
        var parts = currentChord.split(chordRegex);
        var index = 0;
        while (match = chordRegex.exec(currentChord))
        {
            var chordIndex = chords.indexOf(match[0]);
            output += parts[index++] + chords[chordIndex+1];
        };
        output += parts[index];
output = output.replace(/Gb/g,"F#");
output = output.replace(/Ab/g,"G#");
output = output.replace(/Bb/g,"A#");
output = output.replace(/Db/g,"C#");
output = output.replace(/Eb/g,"D#");
		output = output.replace(/<img(.*?)#(.*?)>/g, "<img$1kr3s$2>");

        $(this).html(output);
    });
});

$('#transposeDown').click(function() {
    $('.chord').each(function() {
        var currentChord = $(this).html();
		var currentChord = currentChord.replace(/kr3s/g, "#");
        var output = "";
        var parts = currentChord.split(chordRegex);
        var index = 0;
        while (match = chordRegex.exec(currentChord))
        {
            var chordIndex = chords.indexOf(match[0],1);
            output += parts[index++] + chords[chordIndex-1];
        };
        output += parts[index];
output = output.replace(/Gb/g,"F#");
output = output.replace(/Ab/g,"G#");
output = output.replace(/Bb/g,"A#");
output = output.replace(/Db/g,"C#");
output = output.replace(/Eb/g,"D#");
		output = output.replace(/<img(.*?)#(.*?)>/g, "<img$1kr3s$2>");

        $(this).html(output);
    });
});



$(document).ready(function(){
   
	if(!localStorage.getItem("scrl")) { localStorage.setItem("scrl", "10"); };
	document.getElementById("xspeedscroll").value = localStorage.getItem("scrl");
	
	
	
	$('#box-links').click(function() {
	var xspeedscroll = document.getElementById("xspeedscroll").value;
	if(xspeedscroll < 1 || xspeedscroll > 100) { var xspeedscroll = 10; };
	
	var $elem = $('body');
	var speed = (xspeedscroll * 10000 *5);
                $('body,html').animate({ scrollTop: $elem.height()}, speed, 'linear');
                return false;
	
	});
    
    
});

function scrlF(valscrl) { 
if(valscrl < 1 || valscrl > 100) { valscrl = 10; };
localStorage.setItem("scrl", ""+valscrl+"");	
};
