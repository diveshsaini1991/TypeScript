// let x:number=10
// console.log(x);



// const greet =(name:string)=>{
//     console.log("Hello "+name);
// }

// greet("Divesh Saini");



// const sum = (a: number, b: number):number => {
//     return a + b;
//     }

// let value = sum(10,3);
// console.log(value);



// const isLegal = (age:number):boolean=>{
//     if(age>=18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let sol:boolean = isLegal(20);
// console.log(sol);



const runAfter1s = (fn:()=>void) => {
    setTimeout(fn,1000);
}

runAfter1s(()=>{
    console.log("Hello World !!!");
});