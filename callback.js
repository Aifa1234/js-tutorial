//  ------------------CALLBACK----------------------

// console.log("one")


// setTimeout(()=>{
// console.log("two")
// },5000)


// console.log("three")



// -----------CALLBACK HELL/PYRAMID OF DOOM-------------

// const cart=["shirt","pant","watch"]

// api.createOrder(cart,()=>{
//    api.payment(()=>{
//     api.show(()=>{
//         api.update()
//     })
//    })
// })
// // -------------  INVERSION OF CON  ROL-------------
// // ---------lose control of program--------------
// const cart1=["one","two","three"]
// create(cart,(OrderId)=>{
//     proceed(OrderId)
// })

// // ----------------using promise--------------------
// const promise=create(cart)
// // ----intially {data:undefined}---when data is available {data:orderId}----

// promise.then(function(OrderId){
//     proceed(OrderId)
// })

// const GITHUB_API="https://api.github.com/users/Aifa1234"

// const user=fetch(GITHUB_API)
// console.log(user)

// user.then(function(data){
//     console.log(data)
// })

// --promise is container for future value--
// --is an object representing the eventual completion or failure of async operation--



// -------HOW TO SOLVE CALLBACK HELL------------

// const cart=["shirt","pant","watch"]

// createOrder(cart,function (orderId){
//    payment(orderId,function(paymentInfo){
//     show(paymentInfo,function(){
//         update()
//     });
//    });
// });

// -----------using promise--------------
// ----------promise chaining------------

// createOrder(cart).then(function(oderId){
//     return payment(oderId)
// })
//  .then(function (paymentInfo){
//     return show(paymentInfo)
//  })
//  .then(function(paymentInfo){
//     return update(paymentInfo)
//  })

//  createOrder(cart)
//  .then((orderId)=> payment(oderId))
//  .then((paymentInfo)=>show(paymentInfo))
//  .then((paymentInfo)=> update(paymentInfo))


// ---------CONSUMING PROMISES--------
 
// const cart=["shirt","pant","watch"] 

// // const promise=createOrder(cart)//return orderId

// // console.log(promise)///return pending


// createOrder(cart)
// .then(function(orderId){
//     console.log(orderId)
//     return orderId;
// })


//if catch is here it only check createOrder function


// .then(function(orderId){
//     return payment(orderId)
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
// })
// .catch(function(err){
//     console.log(err.message)
// })  
// .then(function(OrderId){
//     console.log("it always work")
// })
// .catch(function(err){
//     console.log("its generic catch")
// })

// ///Producer
// function createOrder(cart){
//      const pr=new Promise(function(resolve,reject){
//         //createOrder
//         //validateCart
//         //OrderId

//         if(!validateCart(cart)){
//             const err=new Error("cart is not validate")
//             reject(err)
//         }
//         else{
//             const orderId="2345"
//             if(orderId){
//                 setTimeout(()=>resolve(orderId),5000)
//             }
//         }
//      })
//      return pr
// }

// function payment(orderId){
//     return new Promise(function(resolve,reject){
//         resolve("Payment successfull")
//     })
// }
// function validateCart(cart){
//     return true
// }  

// ----------PROMISE CHAINING---------------
// ---upper  should return any data or promise that can be resolve-- 
// --what we pass in chain should return in top of chain--- 
//--catch is attach to then  


// ------------EXAMPLE---------------
const cart=["shirt","pant","watch"]

createOrder(cart)
.then(function(orderId){    
    console.log(orderId)
    return orderId
})
.then(function(orderId){
    return proceedToPayment(orderId)
})
.then(function(orderId){
    console.log(orderId)
    return showSummary(orderId)
})
.then (function(summary){
    console.log(summary)
    return (summary)
})
.catch(function(err){
    console.log(err.message)
})


function createOrder(cart){
    const one=new Promise(function(resolve,reject){
        if(!validateOrder(cart)){
            const err=new Error("Invalid cart item")
            return reject(err)
        }
        const orderId="23450923"
        if(orderId){
            resolve(orderId)
        }
    })
    return one
}

function proceedToPayment(OrderId){
    return new Promise(function(resolve,reject){
        resolve("payment completed")
    })
}      
function validateOrder(OrderId){
    return true
}
function showSummary(OrderId){
    return new Promise(function(resolve,reject){
        resolve("proceed to diapatch")
    })
}