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