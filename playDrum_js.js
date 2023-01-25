function beat1(beat){
  
  if (beat=="drum1")
  {
    document.getElementById("audio1").play()
  }
  if (beat=="drum2")
  {
    document.getElementById("audio2").play()
  }
  if (beat=="drum3")
  {
    document.getElementById("audio3").play()
    
  }
  if (beat=="drum4")
  {
    document.getElementById("audio4").play()
  
  }
  if (beat=="drum5")
  {
    document.getElementById("audio5").play()
  
  }
  if (beat=="drum6")
  {
    document.getElementById("audio6").play()
    
  }
  if (beat=="drum7")
  {
    document.getElementById("audio7").play()
  }
}

function opacity_apply(id){
  var op_set = document.getElementById(id);
  op_set.classList.add("opacity");

  setTimeout(
    function (){
      op_set.classList.remove("opacity");
    },150
  );
}


var key_event=document.addEventListener("keypress",function(press_key){
  sound_key(press_key.key);
});


function sound_key(key)
{
  if(key=="w" || key=="W")
  {
    document.getElementById("audio1").play();
    opacity_apply("drum1");
  }
  if(key=="a"||key=="A" )
  {
    document.getElementById("audio2").play();
    opacity_apply("drum2");
  
  
  }
  if(key=="s"||key=="S" )
  {
    document.getElementById("audio3").play();
    opacity_apply("drum3");
  
  
  }
  if(key=="d"||key=="D" )
  {
    document.getElementById("audio4").play();
    opacity_apply("drum4");
  
  
  }
  if(key=="j"||key=="J" )
  {
    document.getElementById("audio5").play();
    opacity_apply("drum5");
  
  
  }
  if(key=="k"||key=="K" )
  {
    document.getElementById("audio6").play();
    opacity_apply("drum6");
  
  
  }
  if(key=="l"||key=="L" )
  {
    document.getElementById("audio7").play();
    opacity_apply("drum7");

  }
}