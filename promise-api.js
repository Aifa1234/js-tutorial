// -------Promise.ALL----------
// ---input is iterable----
// ----output is iterable----
// --fail fast---


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P1 is successful"),1000)
//     // setTimeout(()=>reject("P1 is fail"),1000)
// })

// const p2=new Promise((resolve,reject)=>{
//     // setTimeout(()=>reject("P2 is fail"),2000)
//     setTimeout(()=>resolve("P2 is successful"),3000)
// })

// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("P3 is successful"),2000)
// })


// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res) 
// })
// .catch((err)=>{console.error(err)})





// -----Promise.allSettled-----
// --output is eeror and result---
// ---safe----------


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {resolve("p1 is succcessful")}, 1000);
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {resolve("p2 is succcessful")}, 2000);
// })


// const p3=new Promise((resolve,reject)=>{
//     // setTimeout(() => {resolve("p3 is succcessful")}, 3000);
//     setTimeout(() => {reject("p3 is fail")}, 3000);

// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })




//------Promise.race-----------
// ----output result according to executimg time--
// -----return first settled promise-----



// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("p1 is successful"),2000})
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("p2 is created"),5000})
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{resolve("p3 is created"),3000})
// })

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })



// -------Promise.any------
// ----output is first success promise----
// ----if all is filure rturn aggregate error--

const p1=new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve("p1 is successful"),2000})
    setTimeout(()=>{reject("p1 is rejected"),2000})

})

const p2=new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve("p2 is created"),5000})
    setTimeout(()=>{reject("p1 is rejected"),1000})

})
const p3=new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve("p3 is created"),3000})
    setTimeout(()=>{reject("p1 is rejected"),4000})

})

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
    console.log(err.errors)
})
