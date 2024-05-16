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