let amount = ['1','2','3','4'];
let user_arg;
function remover (amount,user_arg){
    user_arg = prompt();
    amount.splice(user_arg,1) 
    console.log(amount)
}
remover(amount,user_arg);