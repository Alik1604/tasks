let amount = ['Cat','2','3','4'];
let user_arg = 1;
function remover (amount,user_arg){
    user_arg = prompt();
    if (amount.includes(user_arg) == true){
        amount.splice(amount.indexOf(user_arg),1) 
        console.log(amount)
    }else{
        console.log('Sorry, incorect argument')
    }
    
}
remover(amount,user_arg);

