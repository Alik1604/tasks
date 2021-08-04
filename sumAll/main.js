function sumAll (num1,num2){
    let num4 = 0;
    const amountOfNumbers = (num2 - num1)-1;
    for(i=0; i < amountOfNumbers; i++){
        num1 += 1;
        num4 = num4 + num1;   
    }
    return num4
}
console.log(sumAll(2,6))