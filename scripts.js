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
    alert("The answer is: " + myword + " and you answered: " + mysolve);

    });

var guess = 0;
function letterSearch(myletter) {
	console.log(myletter);
	if (splitword.indexOf(myletter) > -1)        
	{
        
        for (var i = 0; i < document.getElementsByClassName(myletter).length; i++) {
            document.getElementsByClassName(myletter)[i].style.color= "black";
        }
          
	} else {
        guess += 1;
        alert("Sorry, maybe next time. Guess number " + guess + " is incorrect!");
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