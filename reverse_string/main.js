const text = 'Hello World!';
console.log(text.length);
let char;
let newText = "";
let length = text.length ;
for(let i = 0; i <= text.length; i++){
    char = text.charAt(text.length - i);
    newText += char;
}
console.log(newText);