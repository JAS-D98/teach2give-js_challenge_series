// 1. Sum of two numbers

let sum = (firstNumber, secondNumber)=>{
    let solution= firstNumber+secondNumber;
    
    return (solution);
}

sum(-3,5);

// 2. Return the next number from the number passed

let nextNumber =(number)=>{

    let followingNumber=number+1;
    return(`The next number is ${followingNumber}`);
    
    }
    
nextNumber(-2);

// 3. Find perimeter of a rectangle

let rectanglePerimeter =(length, width)=>{

    let perimeter=(length+width)*2;
    return perimeter;
}

rectanglePerimeter(2,5);

// 4. Return something to me

let returnSomethingToMe =(string)=>{

    return (`Something ${string}`)
}

returnSomethingToMe('beautiful is being made');

// 5. Bob's BMI vs Jane's BMI

let greaterBMI =(BobBMI, JaneBMI)=>{

    if (BobBMI > JaneBMI) {
        return ("Bob");
    }else if (BobBMI<JaneBMI){
        return ("Jane");
    }else{
        return ("Equal");
    }
}

greaterBMI(30,25);

// 6. Basketball points

let basketBallPoints=(TwoPointers,ThreePointers)=>{

    let totalTwoPointerPoints= TwoPointers*2;
    let totalThreePointerPoints= ThreePointers*3;
    let totalPoints=totalTwoPointerPoints+totalThreePointerPoints;

    return (totalPoints);
}

basketBallPoints(7,5);

// 7. Less than 100

let isSumMoreThan100=(firstNumber, secondNumber)=>{
    sum=firstNumber+secondNumber;
    if (sum>100) {
        return true;
    }else if(sum == 100){
        return (`Equal`);
    }else{
        return false;
    }
}

isSumMoreThan100(72,38);

// 8. Convert minutes to second

let convertToSeconds=(minutes)=>{

    let Seconds=minutes*60;

    return (`${Seconds} seconds`);
}

convertToSeconds(5);

// 9. Greater among the three

let greater=(firstNumber, secondNumber, thirdNumber)=>{

    if (firstNumber>= secondNumber && firstNumber>=thirdNumber) {
        return (firstNumber);
    }else if(secondNumber>=firstNumber && secondNumber>=thirdNumber){
        return (secondNumber);
    }else{
        return (thirdNumber);
    }
}

greater(2, 35, 9);

// 10. let Less among the three

let least=(firstNumber, secondNumber, thirdNumber)=>{

    if (firstNumber <= secondNumber && firstNumber <=thirdNumber) {
        return (firstNumber);
    }else if(secondNumber <=firstNumber && secondNumber <=thirdNumber){
        return (secondNumber);
    }else{
        return (thirdNumber);
    }
}

least(2, 35, 9);

// 11.  Football points

let footballPoints=(gamesWon, gamesDrawn, gamesLost)=>{

    let WonPoints=gamesWon*3;
    let DrawnPoints=gamesDrawn*1;
    let LossPoints=gamesLost*0;

    let totalPoints=WonPoints+DrawnPoints+LossPoints;
    return totalPoints;
}

footballPoints(5,0,2);

// 12. Even numbers question

let isEven =(num)=>{

    let evenNumberArray=[];
    let oddNumberArray=[];

    for (let i=num; i<=101; i++){
        if (i%2==0) {
            evenNumberArray.push(i);
        }else{
            oddNumberArray.push(i);
        }
    }
    console.log(evenNumberArray); 
    if (num%2==0) {
        return true;;
    }else{
        return false;;
    }
}

isEven(5);