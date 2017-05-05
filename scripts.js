var splitword;

document.getElementById("submit1").addEventListener("click",function(){

     var myword = document.getElementById("word").value;
     splitword = myword.split('');
     splitword.forEach(myFunction);
     
    });

document.getElementById("submit2").addEventListener("click",function(){

    var myletter = document.getElementById("letter").value;
    letterSearch(myletter);
    });



function letterSearch(myletter) {
	console.log(myletter);
	if (splitword.indexOf(myletter) > -1)        
	{
        
        for (var i = 0; i < document.getElementsByClassName(myletter).length; i++) {
            document.getElementsByClassName(myletter)[i].style.color= "black";
        }
          
	} else {
            alert("Sorry, maybe next time...")
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