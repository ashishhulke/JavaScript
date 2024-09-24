// Qs2. Write a code which can give grades to students according to their scores:
//  80-100, A
//  70-89, B
//  60-69, C
//  50-59, D
//  0-49, F

let scores = prompt("Enter your scores");

if(scores >= 90 && scores <= 100){
    console.log("Grade of the student is A ");
}
else if(scores >= 70 && scores <= 89){
    console.log("Grade of the student is B ");
}
else if(scores >= 60 && scores <= 69){
    console.log("Grade of the student is C ");
}

else if(scores >= 50 && scores <= 59){
    console.log("Grade of the student is D ");
}
else{
    console.log("Grade of the student is F ");
}