function leapYear (year){
    if ( year%4 == 0 && year%100 == 0){
        if(year%400){
            console.log("It is leap year")
        }
    } else if ( year%4 == 0){
        console.log("It is leap year")
    }
}

console.log(leapYear(2000))
//let iu = 200 % 4;
//console.log(iu)