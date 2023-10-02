
let myfrind=["nizar","rami","sharef","ibrahim","word"]


var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let myrandom=Math.floor(Math.random()*lowercaseLetters.length)
let genratedletter=lowercaseLetters[myrandom];
    console.log(genratedletter)
function chickthename(){

for (let i = 0; i< myfrind.length; i++) {
     if (myfrind[i][0]==genratedletter){
        

    
        console.log(`${i} this name   ${myfrind[i]} is starting the latter ${genratedletter}`); 

   
    
 
    } 
    
    }
}
    

chickthename();