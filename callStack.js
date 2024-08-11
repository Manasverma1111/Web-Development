// function hello() {
//     console.log("inside hello fxn");
//     console.log("hello");
// }

// function demo () {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fxn");
// demo();


// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


//synchronous nature, single threading

// setTimeout( () =>{
//     console.log("Welcome!");
// }, 2000);

// setTimeout( () =>{
//     console.log("back");
// }, 2000);

// console.log("Hello there...");

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise ( (resolve, reject) =>{
        setTimeout( () =>{
            let num = Math.floor(Math.random() *10) +1;

            if(num>5){
                reject("promise was rejected");
            }

            h1.style.color = color;
            resolve("color changed!");
           }, delay);
    });
}

async function demo() {
    try{
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("yellow", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }
    
    let a =4;
    console.log(a);
    console.log(a+3);
}

// changeColor("red", 1000)
// .then( () =>{
//     console.log("color was changed to red");
//     return changeColor("orange", 1000);
// })
// .then( () =>{
//     console.log("color was changed to orange");
//     return changeColor("blue", 1000);
// })
// .then( () =>{
//     console.log("color was changed to blue");
//     return changeColor("green", 1000);
// })
// .then( () =>{
//     console.log("color was changed to green");
// })
// .catch( () =>{
//     console.log("color was not changed");
// })

//callback nesting -> callback hell
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () =>{
//         changeColor("green", 1000, () =>{
//             changeColor("yellow", 1000, () =>{
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });

// changeColor("orange", 2000);
// changeColor("green", 3000);

// setTimeout( () =>{
//     h1.style.color = "red";
// }, 1000);

// setTimeout( () =>{
//     h1.style.color = "orange";
// }, 2000);


// setTimeout( () =>{
//     h1.style.color = "green";
// }, 3000);

