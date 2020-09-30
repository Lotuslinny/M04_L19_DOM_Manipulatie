//Deel 1 Elementen toevoegen aan de DOM

/* Maak een event-listener vast aan de buttons
Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons
wordt geklikt. Check dit met een console.log. Zorg dat het click event wordt doorgegeven aan deze functie.*/
/* const buttons = document.querySelectorAll('.big-five-button');

// alert ("Doet ie het?");
/* for (i = 0; i < buttons.length - 1; i++);
buttons[i].addEventlistener(click, function () {
  console.log("This is the BIGFive!:" + );
});
console.log("This is the BIGFive!:" + ); */

/* document.getElementById("parent-list").addEventListener("click",function(e) {
  // e.target is our targetted element.
              // try doing console.log(e.target.nodeName), it will result LI
  if(e.target && e.target.nodeName == "LI") {
      console.log(e.target.id + " was clicked");
  }
}); */
document.getElementById("big-five-list").addEventListener("click", function (event) {
  // event.target is our targetted element.
  // try doing console.log(event.target.nodeName), it will result LI
  if (event.target && event.target.nodeName == "BUTTON") {
    //add value in HTML.
    alert(event.target.value + " was clicked");
    console.log(event.target.value + " was clicked");
  }
});
var li = document.createElement("li");
var element = document.getElementById("spotted-animals-list");
element.appendChild(li);
var node = document.createTextNode("Lion");
li.appendChild(node);


//Deel 2 Elementen verwijderen uit de DOM
//Maak een eventlistener vast aan de button
const firstChild = document.getElementById("spotted-animals-list-item");
const spottedList = document.getElementById("spotted-animals-list");
document.getElementById("remove-first-item-button")
  .addEventListener("click", happening);
//console.log("hoor je wat?");
function happening() {
  // console.log("gaat dit goed?");
  spottedList.removeChild(firstChild);
}
// deel 3 Meerdere element verwijderen uit de DOM
//const everyChild = document.getElementById("spotted-animals-list-item");
//const spottedListAll = document.getElementById("spotted-animals-list");
document.getElementById("remove-all-button")
  .addEventListener("click", nextHappening);
console.log("hoor je wat?");
function nextHappening() {
  //console.log("gaat dit goed?");
  var node = document.getElementById("spotted-animals-list");
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}




/* while (spottedListAll.everyChild) {
  spottedListAll.removeChild(spottedListAll.everyChild);
} */