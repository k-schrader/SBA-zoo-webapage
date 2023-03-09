//Callback functions to ask a user for their age before donation
//and check that they are an adult
function agePopup(age) {
    if (age < 18) {
        alert('Please ask a parent for help!');
        
    }
}
function ageInput(callback) {
    const age = Number(prompt("Please enter your age"));
    callback(age);
}
//Displays the number of each type of ticket selected through the
//dropdown ticket selector 
function displayMessage() {
    let adult = document.getElementById("atickets").value;
    let student = document.getElementById("stickets").value;
    let child = document.getElementById("ctickets").value;
    const buyb = document.getElementById("buybutton");
    if (buyb.value === "Purchase") {
        buyb.value = "You're going to the zoo!";
    } document.querySelector(".ticketPrice").innerHTML += '<li>' + "You have bought tickets for " + adult + ", " + student + ", and " + child + "." + '</li>'
}
//Checks to see which radio button was selected
//Changes button to display the selected value on button click
function displayResult() {
    let x = document.getElementsByName("pick");
    const vb = document.getElementById("votebutton");
    for (i = 0; i < x.length; i++) {
        if (x[i].checked) {
            vb.value = "You've voted for the " + x[i].value + "!";
        }
    }
}
//Changes sign up button to say that you have already signed up
//Displays the email given in an alert on button click
function changesButton() {
    let email = document.getElementById("myEmail").value;
    const sb = document.getElementById("signbutton");
    if (sb.value === "Sign up!") {
        sb.value = "Thank you for signing up!";
    } else {
        sb.value = "You have already signed up!";
    } alert("Newsletter sent to " + email);
}
//Calls function to check age before donation, adds $5 to the donation on
//each button click
let five = 0;
function donate() {
    ageInput(agePopup);
    five += 5;
    document.querySelector('.donate').innerHTML
        += '<li>' + "Thanks for donating " + five + " dollars!" + '</li>'
}
//Iterates through list of reasons to come to the zoo on button click
function facts() {
    let reasons = ["Bond with your family", "Gain environmental awareness", "Let children expolre their curiosity", "Get your steps in", "Go on a polution-free outing"];
    for (i = 0; i < reasons.length; i++) {
        document.querySelector('.why').innerHTML
            += '<li>' + reasons[i] + '</li>'
    }
}
//Displays fun facts about animals, both called in HTML
function lion() {
    alert("Did you know: Lions can run up to 50mph!");
}
function kangaroo() {
    alert("Did you know: A group of kangaroos is called a mob!");
}