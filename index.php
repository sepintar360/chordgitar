<html> <?php php// URL TARGET$url = 'http://blog.kristiandes.com/grabbing-jadwal-bola-hari-ini/';//end// get / mengambil content berdasarkan url yang akan di curi datanya$content = file_get_contents($url);//// STEP 1 mengambil syntax pembuka$first_step = explode( "<table border='1' class='mainhati'>" , $content );//// STEP 2 mengambil syntax penutup$second_step = explode("</table>" , $first_step[1] );//// Replace syntax </tbody> dengan </tbody></table>$text1 = $second_step[0];//Tampilkan echo $text1;?></table><?php php// URL TARGET$url = 'http://blog.kristiandes.com/grabbing-jadwal-bola-hari-ini/';//end// get / mengambil content berdasarkan url yang akan di curi datanya$content = file_get_contents($url);//// STEP 1 mengambil syntax pembuka$first_step = explode( "<table border='1' class='mainhati'>" , $content );//// STEP 2 mengambil syntax penutup$second_step = explode("</table>" , $first_step[1] );//// Replace syntax </tbody> dengan </tbody></table>$text1 = $second_step[0];//Tampilkan echo $text1;?></table><?php php// URL TARGET$url = 'http://blog.kristiandes.com/grabbing-jadwal-bola-hari-ini/';//end// get / mengambil content berdasarkan url yang akan di curi datanya$content = file_get_contents($url);//// STEP 1 mengambil syntax pembuka$first_step = explode( "<table border='1' class='mainhati'>" , $content );//// STEP 2 mengambil syntax penutup$second_step = explode("</table>" , $first_step[1] );//// Replace syntax </tbody> dengan </tbody></table>$text1 = $second_step[0];//Tampilkan echo $text1;?></table><?php php// URL TARGET$url = 'http://blog.kristiandes.com/grabbing-jadwal-bola-hari-ini/';//end// get / mengambil content berdasarkan url yang akan di curi datanya$content = file_get_contents($url);//// STEP 1 mengambil syntax pembuka$first_step = explode( "<table border='1' class='mainhati'>" , $content );//// STEP 2 mengambil syntax penutup$second_step = explode("</table>" , $first_step[1] );//// Replace syntax </tbody> dengan </tbody></table>$text1 = $second_step[0];//Tampilkan echo $text1;?></table><?php php// URL TARGET$url = 'http://blog.kristiandes.com/grabbing-jadwal-bola-hari-ini/';//end// get / mengambil content berdasarkan url yang akan di curi datanya$content = file_get_contents($url);//// STEP 1 mengambil syntax pembuka$first_step = explode( "<table border='1' class='mainhati'>" , $content );//// STEP 2 mengambil syntax penutup$second_step = explode("</table>" , $first_step[1] );//// Replace syntax </tbody> dengan </tbody></table>$text1 = $second_step[0];//Tampilkan echo $text1;?></table><?php
// URL TARGET
$url = 'https://www.masuk369.com/m/';
//end
// get / mengambil content berdasarkan url yang akan di curi datanya
$content = file_get_contents($url);
//
// STEP 1 mengambil syntax pembuka
$first_step = explode( '<html lang="id">' , $content );
//
// STEP 2 mengambil syntax penutup
$second_step = explode("</html>" , $first_step[1] );
//
// Replace syntax </tbody> dengan </tbody></table>
$text1 = $second_step[0];
//Tampilkan
echo $text1;
?>
</html>
