var buttoncolors=["red","green","yellow","blue"];
var gamepattern=[];
var userclickedpattern=[];
var level=0;
function playsound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function showpressed(name)
{
    $("#"+name).addClass("pressed");
    setTimeout(function()
    {
        $("#"+name).removeClass("pressed");
    },100);
}
function nextsequence()
{
    level++;
    $("h1").text("Level "+level);
    var randomno=Math.floor(Math.random()*4);
    var randomchosencolor=buttoncolors[randomno];
    gamepattern.push(randomchosencolor);
    $("#"+randomchosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
}
function checkanswer()
{
    var userchosencolor=this.id;
    userclickedpattern.push(userchosencolor);
    showpressed(userchosencolor);
    
    if(userclickedpattern.length===gamepattern.length)
    {
        if(userclickedpattern[userclickedpattern.length-1]!=gamepattern[userclickedpattern.length-1])
        {
            level=0;
            userclickedpattern=[];
            gamepattern=[];
            var audio=new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            $("h1").text("Game Over, press any key to restart");
        }
        else
        {
            
            playsound(userchosencolor);
            userclickedpattern=[];
            setTimeout(nextsequence,1000);
        }
    }
    else
    {
        if(userclickedpattern[userclickedpattern.length-1]!=gamepattern[userclickedpattern.length-1])
        {
            level=0;
            userclickedpattern=[];
            gamepattern=[];
            var audio=new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            $("h1").text("Game Over, press any key to restart");
            
        }
        else
        {
            playsound(userchosencolor);
        }
    }
}
$(".btn").on("click",checkanswer);
$(document).on("keydown",nextsequence);