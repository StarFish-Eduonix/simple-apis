import React,{useState, useEffect} from "react";
import axios from "axios";


const Hello=()=>{
   const [greet,setGreet]=useState("")

//    function getGreet1(){
         
//       axios.get("http://localhost:5000/hello")
//       .then(res =>  setGreet(res.data.message))
//       .catch(err => console.log(err))

//     }

  useEffect(()=>{
       getGreet2()
  },[])


    async function getGreet2(){
       
     try{
      const response = await axios.get("http://localhost:5000/hello")
      console.log(response.data.message)
      setGreet(response.data.message)
     }

     catch(err){
         console.log(err)
     }


    }


    return(
        <div>
            {/* <button onClick={getGreet2}>Get Greet Message</button> */}
            <h1>{greet}</h1>
        </div>
    )
}

export default Hello;