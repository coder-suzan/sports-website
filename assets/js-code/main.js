// timer function

// Set the date we're counting down to
var countDownDate = new Date("aug 21, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (10000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#timeOut").innerHTML = "is close";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".minutes").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
  }
}, 1000);


// delete player function
function poCloseFunction(){
    var poClose = document.getElementById("poClose");
    var poPlayer = document.getElementById("poPlayer");

    poClose.addEventListener("click", function(){
        poPlayer.style.display = 'none';
    });
}
poCloseFunction();


function mf1CloseFunction(){
    var mf1Close = document.getElementById("mf1Close");
    var mf1Player = document.getElementById("mf1Player");

    mf1Close.addEventListener("click", function(){
        mf1Player.style.display = 'none';
    });
}
mf1CloseFunction();


function mf2CloseFunction(){
    var mf2Close = document.getElementById("mf2Close");
    var mf2Player = document.getElementById("mf2Player");

    mf2Close.addEventListener("click", function(){
        mf2Player.style.display = 'none';
    });
}
mf2CloseFunction();


function mf3CloseFunction(){
    var mf3Close = document.getElementById("mf3Close");
    var mf3Player = document.getElementById("mf3Player");

    mf3Close.addEventListener("click", function(){
        mf3Player.style.display = 'none';
    });
}
mf3CloseFunction();


function mf4CloseFunction(){
    var mf4Close = document.getElementById("mf4Close");
    var mf4Player = document.getElementById("mf4Player");

    mf4Close.addEventListener("click", function(){
        mf4Player.style.display = 'none';
    });
}
mf4CloseFunction();


function df1CloseFunction(){
    var df1Close = document.getElementById("df1Close");
    var df1Player = document.getElementById("df1Player");

    df1Close.addEventListener("click", function(){
        df1Player.style.display = 'none';
    });
}
df1CloseFunction();


function df2CloseFunction(){
    var df2Close = document.getElementById("df2Close");
    var df2Player = document.getElementById("df2Player");

    df2Close.addEventListener("click", function(){
        df2Player.style.display = 'none';
    });
}
df2CloseFunction();

function df3CloseFunction(){
    var df3Close = document.getElementById("df3Close");
    var df3Player = document.getElementById("df3Player");

    df3Close.addEventListener("click", function(){
        df3Player.style.display = 'none';
    });
}
df3CloseFunction();

function df4CloseFunction(){
    var df4Close = document.getElementById("df4Close");
    var df4Player = document.getElementById("df4Player");

    df4Close.addEventListener("click", function(){
        df4Player.style.display = 'none';
    });
}
df4CloseFunction();

function at1CloseFunction(){
    var at1Close = document.getElementById("at1Close");
    var at1Player = document.getElementById("at1Player");

    at1Close.addEventListener("click", function(){
        at1Player.style.display = 'none';
    });
}
at1CloseFunction();

function at2CloseFunction(){
    var at2Close = document.getElementById("at2Close");
    var at2Player = document.getElementById("at2Player");

    at2Close.addEventListener("click", function(){
        at2Player.style.display = 'none';
    });
}
at2CloseFunction();