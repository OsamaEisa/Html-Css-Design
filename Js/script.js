/* global console, alert, prompt*/
/*
var
    myOldPrice = 2000,
    myNewPrice = 1800,
    myDiscount = myOldPrice - myNewPrice; // 2000 - 1800 = 200
document.getElementById("price").innerHTML = myDiscount;

var myName = "Osama",
    myAge = 23,
    myCountry = "Egypt";
document.getElementById("test").innerHTML =
    "<span style='color:red'>My Name Is: </span> <span style = 'color:blue'>" + myName + "</span> <br>" +
    "My Age Is: " + myAge + "<br>" +
    "My Country Is: " + myCountry;
------------------------------------------------
var age = prompt("What's ur age ? ");

if (age <= 18) {
    document.getElementById("test").innerHTML = "Sorry";
} else {
    document.getElementById("test").innerHTML = "Welcome"; 
} 
---------------------------------------------------
function myAgeInDays() {
    "use strict";
    var myAge = 52;
    return myAge * 365;
}
var ageCal = myAgeInDays();
document.getElementById("test").innerHTML = "ur age in days = " + ageCal + "days.";
------------------------------------------------
function myAgeInDays(myAge) {
    "use strict";
    return myAge * 365;
}
var ageCal = prompt("Whats ur age ? ");

document.getElementById("test").innerHTML = myAgeInDays(ageCal);
--------------------------------------------------
Self Invoke :
(function theName() {
.....................
..................
}());
--------------------------------------------------
var season = prompt("Whats the best season ? ");
switch (season) {
        
case "Winter":
    alert("winter is cold");
    break;
case "Summer":
    alert("summer is hot");
    break;
case "Autumn":
    alert("autumn is good");
    break;
case "Spring":
    alert("spring is amazing");
    break;
default:
    alert("u dindnot enter a season ");
    break;
}
--------------------------------------------------- 
Events : 
onload >> awl ma yft7 " window.onload = function () { } ".
onclick & ondblclick >> <button onclick="theName()"> ay kalam </button> 
onkeydown >> lma aro7 3al button
onkeyup >> lma ados 3al button w ashof *Sa7* 
onkeypress >> lma ados 3latol
onmouseover >> awl ma aro7 belmouse
onmouseout >> awl ma aro7 w ab3d belmouse
onchange >> awl ma ab3d 
**************************************
var myInput = document.getElementById("input"),
    myDiv = document.getElementById("div"),
    myCurr = document.getElementById("currency");
    // myButt = document.getElementById("button");

myCurr.onchange = function () {
    "use strict";
    
    myDiv.innerHTML = "Worth " + myInput.value * myCurr.value + " Egyption Pound";
};
----------------------------------------------------------
*/
// var myFriends = new Array("Osama","Mostafa","Ali","Mostafa","Eisa");
/* var myFriends2 = new Array (
        "Osama",
        "Mostafa",
        "Ali",
        "Mostafa",
        "Eisa"
        );
console.log(myFriends);
************************
var friends = new Array();
friends[0] = "Osama";
friends[1] = "Mostafa";
friends[2] = "Ali";
friends[3] = "Mostafa";
friends[4] = "Eisa";
------------------------------
var friends = [
    "ele1",
    "ele2"
];
------------------------------------
var one = ["element1", "ele2", "ele3"];
if (Array.isArray(one)) { // (one.constructor === Array)
    console.log("true");
} else {
    console.log("false");
}
console.log(one.length); // get length
one.length = 2; // set length
-------------------------------------------
var friends = [
    "Osama",
    "Mostafa",
    "Ali",
    "Mostafa",
    "Eisa"
];
console.log(friends[(friends.length) - 1]);

friends.push("Ahmed"); // by7otha 3ady fela5r 
console.log(friends);

friends.unshift("Nada"); // mby7rkhash mn elawl
console.log(friends);

friends.pop(); // delete a5r item

friends.shift(); // delet awl item

friends.sort(); // sort mn awl lel a5r

friends.reverse(); // by3ks mn a5r lel awl

friends.slice(start, end); // by2t3 mn start l7d end (- or +)

var allFriends = frinds1.concat(frinds2, friends3, .....); // Combine 2 arrays

var specialFriend = friends.indexOf("Eisa") // Search mn awl in array or ("", Start)

console.log(friends[specialFriend]);

friends.lastIndexOf("Osama", Start) // Search mn a5r 

friends.splice(4, 0, "She7ata", "name2", "name3"); // (index *hat7ot fin* , *htshil kam* , *eh el gdid* );
console.log(friends);

----------------------------------------------------
friends = friends.toString();
console.log(friends);

friends = friends.join("-" "*"); //bshof el fasla elly 3awzha

var myDate = new Date();
    myString = myDate.toLocaleDateString();
console.log(myDate);
console.log(myString);
-----------------------------------------------------------------------------------------------------------------
                                        //S t r i n g
var myString = "Iam Osama Mostafa Aly Mostafa Eisa";
    myWord = myString.search("Aly"); (/Mostafa/i) // regular exp y3ny m4 "sencitive"
    console.log(myWord);
*/



