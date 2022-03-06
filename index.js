var buttonsArray = document.querySelectorAll ( ".drum" );
var i,
  lenght = buttonsArray.length,
  audioArray = [];
for (i = 0; i < lenght; i++) {
  audioArray.push ( new Audio ("sounds/audio" + i + ".mp3") );
  //detect button press
  buttonsArray[ i ].addEventListener ("click", function () {
    var clickedButton = this.innerText;
    playSound ( clickedButton );
    buttonAnimation ( clickedButton );
  });
}

//detect keyboard press
document.addEventListener ( "keydown", function (event) {
  var typedKey = event.key;
  playSound ( typedKey );
  buttonAnimation ( typedKey );
});

function playSound ( key ) {
  var audio;
  key.toLowerCase();
  switch ( key ) {
    case "k": audio = new Audio("sounds/audio0.mp3"); audio.play();//audioArray[ 0 ].play(); // audio = new Audio("sounds/audio0.mp3"); audio.play();
      break;
    case "l": audio = new Audio("sounds/audio1.mp3"); audio.play();//audioArray[ 1 ].play(); // audio = new Audio("sounds/audio1.mp3"); audio.play();
      break;
    case "j": audio = new Audio("sounds/audio2.mp3"); audio.play();//audioArray[ 2 ].play(); // audio = new Audio("sounds/audio2.mp3"); audio.play();
      break;
    case "w": audio = new Audio("sounds/audio3.mp3"); audio.play();//audioArray[ 3 ].play(); // audio = new Audio("sounds/audio3.mp3"); audio.play();
      break;
    case "a": audio = new Audio("sounds/audio4.mp3"); audio.play();//audioArray[ 4 ].play(); // audio = new Audio("sounds/audio4.mp3"); audio.play();
      break;
    case "s": audio = new Audio("sounds/audio5.mp3"); audio.play();//audioArray[ 5 ].play(); // audio = new Audio("sounds/audio5.mp3"); audio.play();
      break;
    case "d": audio = new Audio("sounds/audio6.mp3"); audio.play();//audioArray[ 6 ].play(); // audio = new Audio("sounds/audio6.mp3"); audio.play();
      break;

    default: console.log(key);
  }
}

function buttonAnimation ( key ) {
  if ( "kljwasd".includes(key) ) { // check if the typed key by user is on of the k l j w a s d keys, each representing different type of drum
    var activeButton = document.querySelector( "." + key );
    activeButton.classList.add("pressed");
    setTimeout ( function(){
      activeButton.classList.remove("pressed");
    }, 100 );
  }
}
