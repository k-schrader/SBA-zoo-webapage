function displayMessage() {
    document.getElementById("button").innerHTML = "Congrats! You're going to the zoo!";
  }


function changeButton(){
const voteb = document.getElementById("votebutton");
    if(voteb.value === "Cast your vote!"){
        voteb.value = "Thank you for voting!";
    }else{
        voteb.value= "You have already voted!";
    }
}
function changesButton(){
    const sb = document.getElementById("signbutton");
        if(sb.value === "Sign up!"){
            sb.value = "Thank you for signing up!";
        }else{
            sb.value= "You have already signed up!";
        }
    }
function donate(){
    let five = 5;
        document.querySelector('.donate').innerHTML
        +='<li>' + "Thanks for donating " + five + " dollars!"+'</li>'
        
    }

    function facts(){
        let reasons = ["Bond with your family", "Gain environmental awareness", "Let children expolre their curiosity", "Get your steps in", "Go on a polution-free outing"];
        for(i=0; i<reasons.length;i++){
            document.querySelector('.why').innerHTML
        +='<li>'+ reasons[i]+'</li>'
        }
    }
