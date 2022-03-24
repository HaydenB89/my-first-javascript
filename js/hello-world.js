// function oldFunction() {
//     console.log("This is the old function.");
// }

// let newerFunction = function () {
//     console.log("The newer function.");
// }

// const newestFunction = () => {
//     console.log("The newest function.");
// }

// const add1 = (nbr) => {
//     console.log(`The result of nbr is ${nbr + 1}`);
// }

console.log("The script is being loaded");

 const loaded = (msg) => {
     console.log(`The html is loaded. Messsge id ${msg}`);
     let inputCtrl = document.getElementById("inp");
     inputCtrl.value = msg;
 }

 console.log("The script has been loaded"); 