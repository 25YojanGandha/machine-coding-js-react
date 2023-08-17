// call vs apply vs bind

// 1. Functions
// 2. Class

// function testFunc(a, b) {
//     console.log(a, b);

//     return {
//         name: this.name,
//     }
// }

// let obj = {
//     name: "Yojan",
//     lastName: "Gandha"
// }
// let check = testFunc();

// console.log("Call: ", testFunc.call(obj,"Gandha","Kashyap"));
// console.log("Apply: ", testFunc.apply(obj,["Gandha","Kashyap"]));

// console.log("Bind: ", testFunc.bind(obj,["Gandha","Kashyap"])());
// console.log("Bind: ", testFunc.bind(obj,...["Gandha","Kashyap"])());

// Question

let obj2 = {
    course: "B.Tech",
    filed: "CSE",
    college:  function (params) {
        (()=>{
            console.log(this.course);
        })()
    }
}

let obj3 = {
    course: "Swimming"
}

let fun = obj2.college;

fun.call(obj3);
// console.log(fun.bind(obj3)());