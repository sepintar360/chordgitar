
$(document).ready(function() {
$('#buttonsearchzz').click(function() {
$('#buttonsearchzz').show();
$('#buttonsearchzzwait').show();

var urloooo = "/js/dbkunci.js";
$.getScript( urloooo, function() {

		
	$( "#search" ).autocomplete(
	{
		source:data,
maxResults:500,
     minLength:3,
		select: function( event, ui ) {
			$( "#search" ).val( ui.item.P );
			return false;
		}
	}).data( "autocomplete" )._renderItem = function( ol, item ) { 
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( "<a href ='chord.html#" + (item.P.split("@")[0]) + "' onClick='window.location = \"chord.html#" + (item.P.split("@")[0]) + "\";location.reload();' ><strong style=\"color:#2988bc;\">&sung; " + (item.P.split("@")[1]) + "</strong></a>" )
			.appendTo("ol");
		};		
$('#buttonsearchzzwait').hide('slow');
$('#formsearch').show('slow');
});
		
document.getElementById("search").placeholder = " Cari Lagu...";
localStorage.setItem("Count_Ganalytics", "");
admob.rewardvideo.show();

		});
});
