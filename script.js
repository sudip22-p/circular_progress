const circle=document.getElementById("circle");
const percentage=document.getElementById("percentage");
const userInput=document.getElementById("user-num");
const enter=document.getElementById("enter");
let presentValue=0;

enter.addEventListener("click",doChanges);
function doChanges(){
    if(validateNumber()){
        let startChanging=setInterval(()=>{
            let userValue=parseInt(userInput.value);
            if(presentValue>userValue){
                presentValue-=1;
            }else if(presentValue==userValue){
                presentValue=0;
                presentValue+=1;
            }else{
                 presentValue+=1;
            }
            changeValues(presentValue);
            if(presentValue==userValue){
                clearInterval(startChanging);
            }
        },25);
    } 
}
// enter.addEventListener("click",()=>{
//     if(validateNumber()){
//         userValue=userInput.value;
//         //0 to present value 
//         console.log(presentValue);
//         console.log(userValue);
//         if(userInput===presentValue){
//             console.log("equal ko ma");
//             setInterval(()=>{
//                 console.log(presentValue);
//                 console.log(userValue);
//                 while (userInput!=presentValue) {
//                     changeValues(presentValue);
//                     presentValue+=1;
//                 }
//             },100);
//         } else if(userInput>presentValue){
//             setInterval(()=>{
//                 while (userInput!=presentValue) {
//                     changeValues(presentValue);
//                     presentValue+=1;
//                 }
//             },100);
            
//         } else if(userInput<presentValue){
//             setInterval(()=>{
//                 while (userInput!=presentValue) {
//                     changeValues(presentValue);
//                     presentValue-=1;
//                 }
//             },100);

//         }
//     }
//     console.log("las ma fn sakyo aba");
//     console.log(presentValue);
//     console.log(userValue);
//     userInput.value="";
// });

//change fnc
function changeValues(num){
    console.log("change wala vitra num ko");
    console.log(num);
    percentage.innerHTML=num.toString()+"%";
    let fillUpto=num*3.6;//converting to degree
    circle.style.background="conic-gradient(greenyellow "+fillUpto.toString()+"deg ,rgb(227, 223, 223) 0deg)";
}


function validateNumber() {
    // Get the value of the input field
    let number = userInput.value;
  
    // Check if the field is empty
    if (number === "") {
        // Show an alert
        alert("Invalid input!!! Input number between 0 to 100");
        userInput.value="";
        userInput.focus();
        return false;
      }
  
    // Check if the number is between 0 and 100
    if (isNaN(number) || number < 0 || number > 100) {
        // Show an alert
        alert("Invalid input!!! Input number between 0 to 100");
        userInput.value="";
        userInput.focus();
        return false;
        }
  
    // The number is valid
    return true;
  }
  