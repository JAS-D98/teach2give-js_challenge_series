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