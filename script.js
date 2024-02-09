

var messages = [
    "Pakka???",
    "Sochleee firrrr?",
    "NO WAYYYYYYYY",
    "KYA ITNA BHURAA HUUN MAI MAA",
    "SHUTTTT UPPPP"
];

// Function to show a random message when the button is clicked
function showRandomMessage() {
    // Get a random index from the messages array
    var randomIndex = Math.floor(Math.random() * messages.length);
    // Get the button element
    var x = document.getElementById("messageButton");
    // Set the button text content to the random message
    x.innerText = messages[randomIndex];
   var button = document.getElementById("resizableButton");
    var currentWidth = button.offsetWidth;
   var currentHeight = button.offsetHeight;
   var currentTop=button.offsetTop;
   var currentLeft=button.offsetLeft;
    button.innerText="YES"
    
    // Increase size of the button
    button.style.width = (currentWidth + 20) + "px";
   button.style.height = (currentHeight + 10) + "px";
   button.style.top=(currentTop - 10) +"px";
   button.style.left=(currentLeft - 10)+"px";
   
  

}
function msg(){
    var btn1=document.getElementById("messageButton");
    var btn2=document.getElementById("resizableButton");
    btn2.style.width = 200+"px";
    btn2.style.height = 100+"px";
    btn2.style.top=55+"%";
    btn2.style.left=40+"%";

    btn2.innerText="Abb mai itna b kuch khas nahi...."
    btn1.innerText="Huhh!!"

}