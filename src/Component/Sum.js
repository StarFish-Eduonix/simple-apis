import React,{useState} from "react";
import axios from "axios"; 

const Sum = () => {
   const [num1,setNum1]=useState("")
   const [num2,setNum2]=useState("")
   const [sum,setSum]=useState("")

     
   async function implementSum(e){
       e.preventDefault()

       try{
       const response = await axios.post("http://localhost:5000/sum",{
              num1:num1,
              num2:num2
         })

         console.log(response.data.sum)
        setSum(response.data.sum)
       } 
       catch(err){
           console.log(err)
       }
       
   }



    return(
        <div>
            <form onSubmit={implementSum}>
                <input type="text" placeholder="Enter first number" 
                onChange={(e)=>setNum1(e.target.value)} 
                />
                <input type="text" placeholder="Enter second number" 
                onChange={(e)=>setNum2(e.target.value)}
                />
                <button type="submit">Sum</button>
            </form>
            <h1>{sum}</h1>
        </div>
    )
}

export default Sum;