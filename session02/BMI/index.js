let hCm = prompt("Enter your height (cm)");
let w = prompt("Enter your weight (kg)");
let hM = hCm/100;
let bmi = w/(hM**2);
let body = "Obese";
if(bmi < 16){
    body = "Severely underweight";       
}
else if(bmi < 18.5){
    body = "Underweight";
}
else if(bmi < 25){
    body = "Normal";
}
else if(bmi < 30){
    body = "Overweight";
}
alert(`Your BMI = ${bmi}\nYou are ${body}`);