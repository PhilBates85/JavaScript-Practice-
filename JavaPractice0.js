/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

var weightMark, weightJohn, heightMark, heightJohn, bmiMark, bmiJohn;
weightMark = 61;
weightJohn = 79;
heightMark = 1.67;
heightJohn = 1.88;

bmiMark = weightMark / (heightMark * heightMark);
bmiJohn = weightJohn / (heightJohn * heightJohn);

var doesMark = bmiMark > bmiJohn;
var doesJohn = bmiJohn > bmiMark;

console.log('does mark have a higher bmi than john?' + doesMark);
*/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)


var nameJohn ='John\'s team';
var nameMike ='Mike\'s team';

var avgJohn = (89+120+103)/3;
var avgMike = (116+94+123)/3;

console.log(nameJohn + ' game average ' +avgJohn);
console.log(nameMike + ' game average ' +avgMike);

//if else statements to compared

if (avgJohn > avgMike) {
  console.log('John\'s team wins with an average of ' +avgJohn +' points!');
} else if (avgMike > avgJohn) {
  console.log('Mike\'s team wins with an average of ' +avgMike +' points!');
} else {
  console.log('There was a draw between ' + nameJohn + ' and ' + nameMike);
}
*/
