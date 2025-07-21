/*
**waht is async?
**always return /promise
**if its return a value it must wrap in a promise
*/

/*
async function getData() {
    return "Namasthe"
}
const dataPromise=getData()
console.log(dataPromise)//retuen promise
dataPromise.then((res)=>console.log(res))//return data wrap in promise

*/
/*


------------return a promise-----------

const p =new Promise((resolve,reject)=>{
    resolve("p is resolved")
})
async function getData() {
    return p
}
const promiseData=getData()
promiseData.then((res)=>console.log(res))
*/




/*-------------async and await-------------
----------------handle promise-------------
*/ 

// -------------without await----------------
/*const p=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Promise resolved after 2s")
   },2000)
})
function getData(){
    p.then((res)=>console.log(res))
    console.log("hello")//hello will print first
}
getData()
*/

// --------------with await-------------
// -----------await only use inside  async function-------

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise will resolve")
    },5000)

})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise second is resolved")
    },10000)
})

async function handlePromise() {
    console.log("world")
    const val=await p1//IMPORTANT


/* ------------------------------------------
    --------SUSPEND EXECUTION OF FUNCTION IN CALLSTACK-----
    --------when another await function resolve execution start from where it end
*/

    
// -----------IMPORTANT-----------------
// -----------js engine will wait to resolve await promise-----
    console.log(val)
    console.log("hello")

    const val2=await p2
    console.log(val2)
}
handlePromise() 
  