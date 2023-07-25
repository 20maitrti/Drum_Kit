var numOfButtons =document.querySelectorAll(".drum").length;
for (i=0;i< numOfButtons ;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
     { var buttonInnerHTML= this.innerHTML;
         switch(buttonInnerHTML)
         {
            case "w":
                var audio= new Audio('kick-bass.mp3');
                audio.play();
                break;
                case "a":
                    var audio= new Audio('tom-1.mp3');
                    audio.play();
                    break;
                    case "s":
                        var audio= new Audio('crash.mp3');
                        audio.play();
                        break;
                        case "d":
                            var audio= new Audio('tom-2.mp3');
                            audio.play();
                            break;
                            case "j":
                                var audio= new Audio('snare.mp3');
                                audio.play();
                                break;
                                case "k":
                                    var audio= new Audio('tom-3.mp3');
                                    audio.play();
                                    break;
                                    case "l":
                                        var audio= new Audio('tom-4.mp3');
                                        audio.play();
                                        break;
                default: console.log( buttonInnerHTML);
         }
      
    buttonAnimation(buttonInnerHTML);

    });
}

    document.addEventListener("keydown", function(event)
{
var keypressed =    event.key 
switch(keypressed)
{
   case "w":
       var audio= new Audio('kick-bass.mp3');
       audio.play();
       break;
       case "a":
           var audio= new Audio('tom-1.mp3');
           audio.play();
           break;
           case "s":
               var audio= new Audio('crash.mp3');
               audio.play();
               break;
               case "d":
                   var audio= new Audio('tom-2.mp3');
                   audio.play();
                   break;
                   case "j":
                       var audio= new Audio('snare.mp3');
                       audio.play();
                       break;
                       case "k":
                           var audio= new Audio('tom-3.mp3');
                           audio.play();
                           break;
                           case "l":
                               var audio= new Audio('tom-4.mp3');
                               audio.play();
                               break;
       default: console.log( keypressed);
}
buttonAnimation(event.key);
});

function buttonAnimation(currentkey)
{
var activeButton= document.querySelector("."+currentkey);
activeButton.classList.add("pressed");
setTimeout(function()
{activeButton.classList.remove("pressed");}, 100);
}