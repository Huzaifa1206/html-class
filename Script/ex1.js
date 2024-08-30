console.log("This is ex1.js");

var firstName = "Huzaifa";
var lastName = "Ahmed";
var yearOfBirth = 2002;
var currentYear = 2024;
var age = currentYear-yearOfBirth;
document.getElementById("student_message").innerHTML="Hi, my name is "+firstName+" "+lastName+", I'm "+age+" years old and I am Learning Javascript";

var num1 = document.getElementById("black_box1").innerHTML;
var num2 = document.getElementById("black_box2").innerHTML;
var division = num1 / num2;
document.getElementById("black_box3").innerHTML=division.toFixed(2);

function isValidPhoneNumber(phone) {
    let phoneStr = phone.toString();
    return /^\d{9}$/.test(phoneStr);
}
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
console.log(`Phone1 (${phone1}): ${isValidPhoneNumber(phone1)}`); 
console.log(`Phone2 (${phone2}): ${isValidPhoneNumber(phone2)}`);
console.log(`Phone3 (${phone3}): ${isValidPhoneNumber(phone3)}`); 


var power = Math.pow(32,6);
console.log(power);

var NAME; //valid
var $num1; //valid
// var typeof; //invalid because it is a reserved word
// var first-name; //invalid because it has dash
var attempt_2; //valid
// var 2ndAttempt;  // invalid because it starts with a number
// var full name;  // invalid because it contains a white space

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);

var url = "www.udemy.com";
console.log( url.replace( "" , "https://" ) ); 
var url = "https://www.google.com";
console.log( url.replace( "https://" , "" ) );
