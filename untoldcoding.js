var i = 0;
var txt1 =
  "Hi Love.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always Special and intresting for me...!                     << I am somewhat nervous Because I can't lose uhhi dont have ability to live without uhh you are not someone for me you are my everything , you are mine and mine and Always mine, i love uhh the way prophet Mohammad sallallahu alaihi wasallam loves Khadija R.A...!                                                     > I Love my Parents so much than anything else in this world....!                    << Now You are the only person whom I love equally with my parents....<< Please Be forever with me jaan , i can't live without you bcha 🥺❤️, i love uhh more than you think i love and enjoy every single second that i spend with you❤️💋                                                       >I Love U Bche With My DeepHeart.....! |                  <<<< ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
