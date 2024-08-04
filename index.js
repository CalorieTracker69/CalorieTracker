let mealCount = 1;
let calories;
let fats = 0;
let carbs = 0;
let proteins = 0;
let fats2 = 0;
let carbs2 = 0;
let proteins2 = 0;
let fats3 = 0;
let carbs3 = 0;
let proteins3 = 0;
document.getElementById("Meal2").style.visibility = "hidden";
document.getElementById("Meal3").style.visibility = "hidden";
document.getElementById("plusBtn2").style.visibility = "hidden";

document.getElementById("myFatsSubmit").onclick = function() {
    fats = document.getElementById("myFatsText").value;
    fats = Number(fats);
    document.getElementById("totalFats").textContent = `fats: ${fats+fats2+fats3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`
}
document.getElementById("myCarbsSubmit").onclick = function() {
    carbs = document.getElementById("myCarbsText").value;
    carbs = Number(carbs); 
    document.getElementById("totalCarbs").textContent = `carbs: ${carbs+carbs2+carbs3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`
}
document.getElementById("myProteinsSubmit").onclick = function() {
    proteins = document.getElementById("myProteinsText").value;
    proteins = Number(proteins);
    document.getElementById("totalProteins").textContent = `proteins: ${proteins+proteins2+proteins3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`
}
document.getElementById("myFatsSubmit2").onclick = function() {
    fats2 = document.getElementById("myFatsText2").value;
    fats2 = Number(fats2);
    document.getElementById("totalFats").textContent = `fats: ${fats+fats2+fats3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`;
}
document.getElementById("myCarbsSubmit2").onclick = function() {
    carbs2 = document.getElementById("myCarbsText2").value;
    carbs2 = Number(carbs2); 
    document.getElementById("totalCarbs").textContent = `carbs: ${carbs+carbs2+carbs3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`;
}
document.getElementById("myProteinsSubmit2").onclick = function() {
    proteins2 = document.getElementById("myProteinsText2").value;
    proteins2 = Number(proteins2);
    document.getElementById("totalProteins").textContent = `proteins: ${proteins+proteins2+proteins3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`;
}
document.getElementById("myFatsSubmit3").onclick = function() {
    fats3 = document.getElementById("myFatsText3").value;
    fats3 = Number(fats3);
    document.getElementById("totalFats").textContent = `fats: ${fats+fats2+fats3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`;
}
document.getElementById("myCarbsSubmit3").onclick = function() {
    carbs3 = document.getElementById("myCarbsText3").value;
    carbs3 = Number(carbs3); 
    document.getElementById("totalCarbs").textContent = `carbs: ${carbs+carbs2+carbs3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`;
}
document.getElementById("myProteinsSubmit3").onclick = function() {
    proteins3 = document.getElementById("myProteinsText3").value;
    proteins3 = Number(proteins3);
    document.getElementById("totalProteins").textContent = `proteins: ${proteins+proteins2+proteins3}`;
    calories = Number(fats+fats2+fats3)*9+Number(carbs+carbs2+carbs3)*4+Number(proteins+proteins2+proteins3)*4;
    document.getElementById("totalCalories").textContent = `${calories}`;
}
document.getElementById("plusBtn").onclick = function() {
    document.getElementById("Meal2").style.visibility = "visible";
    document.getElementById("plusBtn2").style.visibility = "visible";
    document.getElementById("plusBtn").style.visibility = "hidden";
}
document.getElementById("plusBtn2").onclick = function() {
    document.getElementById("Meal3").style.visibility = "visible";
    document.getElementById("plusBtn2").style.visibility = "hidden";
}