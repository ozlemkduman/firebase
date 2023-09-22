
import { useState,useEffect } from "react"
import { signIn } from "../firebase/Firebase"
import { useNavigate } from "react-router-dom";
export default function Login(){

    const navigate=useNavigate()

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const onSubmit= async (e)=>{
        try {
            e.preventDefault()
        const user = await signIn(email,password)
        navigate("/")

        } catch (err) {
            navigate("/register")
        }
    }
    
 
return(
    <>
       <div className="container col-sm-12">
       <form action="submit" onSubmit={onSubmit}>
            <input type="text"
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            
            <input type="text"
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
             />

             <button >Login</button>

        </form>
       </div>
    </>
)

}