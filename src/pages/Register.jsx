import { useState } from "react";
import { createUser } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            const user = await createUser(email, password)
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
        <div className="container col-sm-12">
            
        <form action="submit" onSubmit={onSubmit}>
                <input type="text"
                    placeholder="eMail"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}

                />
                <button  >Register</button>
            </form>
        </div>
        </>
    )
}