
// const API_URL="https://api.github.com/users/Aifa1234";
// async function handlePromise(){
//     try{

//         const data=await fetch(API_URL)

//         const jsonvalue= await data.json()//promise
//         console.log(jsonvalue)

//         ///fetch()=>Response which is object containing status ok..

//     }
//     catch(err){
//         console.log(err)
//     }
    
// }
// handlePromise()

///////////////HANDLE ERROR////////////////
////////////////TRY CATCH/////////////////

const API_URL="https://api.githu.com/users/Aifa1234";
async function handlePromise(){


        const data=await fetch(API_URL)

        const jsonvalue= await data.json()//promise
        console.log(jsonvalue)

        ///fetch()=>Response which is object containing status ok..

    }
    
    

handlePromise().catch((err)=>console.log(err))