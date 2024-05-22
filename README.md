# Teach2Give-JS-Challenge-Series Solutions
This Markdown file contains solutions to the following JavaScript Exercises.

# Introduction to JavaScript

## Sum of two numbers
Create a function called sum that takes in two numbers as arguments and returns their sum.  
Examples:  
1. sum(3, 2) returns 5
1. sum(-4, -8) returns -12
1. sum(-3, 5) returns 2

## Return the next number from the number passed
Write a function called nextNumber that takes in a number as an argument, increments it by 1 to find the next number, and then returns the next number.  
Examples:
1. nextNumber(1) returns 2
1. nextNumber(0) returns 1
1. nextNumber(-2) returns -1

## Find perimeter of a rectangle
Write a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.  
Examples:
1. rectanglePerimeter(2, 5) returns 14
1. rectanglePerimeter(3, 5) returns 16
1. rectanglePerimeter(10, 20) returns 60

## Return something to me
Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function.
Examples:
1. returnSomethingToMe("is better than nothing") returns "something is better than nothing"
1. returnSomethingToMe("jack daniels") returns "something jack daniels"
1. returnSomethingToMe("pinocchio") returns "something pinocchio"

## Bob's BMI vs Jane's BMI
Bob and Jane want to know who has a bigger BMI than the other. Write a function called greaterBMI that will take in as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "Equal".  
Examples:  
1. greaterBMI(30, 25) returns the string "Bob"
1. greaterBMI(35, 40) returns the string "Jane"
1. greaterBMI(35, 35) returns the string "Equal"

## Basketball points
You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer. Write a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. This function returns the final points for the team.  
Examples:  
1. basketBallPoints(1, 1) returns 5
1. basketBallPoints(7, 5) returns 29
1. basketBallPoints(0, 5) returns 15

## Less than 100
Given two numbers, write a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100.  
Examples:  
1. isSumLessThan100(25, 55) returns false
1. isSumLessThan100(72, 38) returns true

## Convert minutes to second
Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent in the format ```x seconds``` e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1, then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"  
Examples:
1. convertToSeconds(5) returns 300 seconds
1. convertToSeconds(0) returns 0
1. convertToSeconds(1) returns 1 second (singular)

## Greater among the three
Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three. If they are all equal, it should return any of them.  
Examples:
1. greater(2, 35, 9) returns 35
1. greater(23, 23, 23) returns 23

## Less among the three
Write a function called least that takes in three numbers as arguments and returns the least among the three. If they are all equal, it should return any of them.  
Examples:
1. least(2, 35, 9) returns 9
1. least(23, 23, 23) returns 23

## Football points
Write a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for  every game lost.  
Examples:
1. footballPoints(5, 0, 2) returns 15
1. footballPoints(0, 0, 2) returns 0
1. footballPoints(5, 2, 0) returns 17

## Even numbers
Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.
