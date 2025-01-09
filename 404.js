
window.onload = function(){
    let navActive = false;
    nav_btn = document.querySelector('#nav-btn');
    nav = document.querySelector('#nav');
    nav_btn.addEventListener('click',function () {
        navActive = !navActive;
        if (navActive){
            nav.className ='active';
        }
        else{
            nav.className ='';
        }
    })
};
var text = "Hi there!<br> I'm Young Ed,<br> a junior developer located in United States.<br> Let's build your website together!";
var punctSlowDownArr = ["!", ".", "?"];
var newLine = "<br>";

function automaticTyping(){
  var index = 0;
  var el = document.getElementById("automatic-typing");
  typing();
  function typing() {
    if (index > text.length - 1)
      return;

    var char = text.charAt(index);

    if(char == "<" && text.substring(index, index + 4) == newLine)
      {
        el.innerHTML += newLine;
        index += 4;
        setTimeout(typing, Math.floor((Math.random() * 300) + 200));
      }
    else
      {
        el.innerHTML += char;
        if (punctSlowDownArr.indexOf(char) > -1)
          setTimeout(typing, Math.floor((Math.random() * 250) + 150));
        else
          setTimeout(typing, Math.floor((Math.random() * 70) + 30));
        index++;
      }
    }
  }

automaticTyping();
