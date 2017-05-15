var splitword;
var myword;

document.getElementById("submit1").addEventListener("click",function(){

     myword = document.getElementById("word").value;
     splitword = myword.split('');
     splitword.forEach(myFunction);
     
    });

document.getElementById("submit2").addEventListener("click",function(){

    var myletter = document.getElementById("letter").value;
    letterSearch(myletter);
    });

document.getElementById("submit3").addEventListener("click",function(){

    var mysolve = document.getElementById("solve").value;
   if (mysolve === myword) {
    alert("Congratulations! That is the correct answer.")
    reload();
    alert("Good work, let's play again champ...")
   } else {
    alert("Sorry! Your answer is incorrect.")
   }

    });

var guess = 2;
function letterSearch(myletter) {
	console.log(myletter);
	if (splitword.indexOf(myletter) > -1)        
	{
        
        for (var i = 0; i < document.getElementsByClassName(myletter).length; i++) {
            document.getElementsByClassName(myletter)[i].style.color= "black";
        }
          
	} else {
        if (guess === 2) {
            alert("you have 2 guesses remaining")
            guess -= 1
        } else if (guess === 1) {
            alert("your have 1 guess remaining")
            guess -= 1
        } else {
            alert("wrong, game over for you")
            reload();
            alert("Begin new game loser...")
        }

        }
	}


function myFunction(item) {

    var element = document.getElementById("container");


    var para = document.createElement("p");
    para.setAttribute("class",item);
    para.classList.add("letter");
    
    var node = document.createTextNode(item);
    para.appendChild(node);
    element.appendChild(para);
 					
    }


    function reload() {
    location.reload();
}