
$(document).ready(function(){
$('head').append("<title>ALBUM - "+decodeURIComponent(okehash[2])+"</title>");
var textpret = "";
for (i = 0; i < dataalbumlist.length; i++) { 
if(dataalbumlist[i].id_band == okehash[1]) {
    textpret += "<a id=\""+ dataalbumlist[i].id +"\" href=\"chord.html#"+ dataalbumlist[i].id +"\"><h4>"+ dataalbumlist[i].judul + "</h4></a>";
}};
document.getElementById("hasillist").innerHTML = textpret;
});
var message='Album - '+decodeURIComponent(okehash[2])+'';
