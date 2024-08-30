function temp(Celcuis)
{ 
    var F=(9 * Celcuis / 5) + 32;
    return F;
}
var temperature=[38,24,-1];
document.getElementById("temp1").innerHTML=temp(temperature[0]);
document.getElementById("temp2").innerHTML=temp(temperature[1]);
document.getElementById("temp3").innerHTML=temp(temperature[2]);

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
document.getElementById("best_student").innerHTML=classification.slice(3,);

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
document.getElementById("course_title").innerHTML=course.title;
document.getElementById("category").innerHTML=course.categories[0];

function calculatePercentage(course){
    var totalReviews=course["5_stars_reviews"]+
                     course["4_stars_reviews"]+
                     course["3_stars_reviews"]+
                     course["2_stars_reviews"]+
                     course["1_stars_reviews"];
    var percentage=(course["5_stars_reviews"] / totalReviews)*100;
    return Math.round(percentage);
}
var percentage = calculatePercentage(course);
document.getElementById("percentage").innerHTML=percentage+"%";

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
console.log("Before changes: " +shoppingList);
shoppingList.unshift(shoppingList.pop());
console.log("After changes: " +shoppingList);
shoppingList.push("Cheese","eggs");
console.log("After Adding: "+shoppingList);
