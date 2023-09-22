import { useState, useEffect } from "react";
import { auth, signOutUser } from "../services/Firebase";
import { Link, useNavigate } from "react-router-dom";
export default function Home() {

    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(item => {
            setUser(item)

        });

        // useEffect içerisinde geri dönüş (cleanup) fonksiyonu olarak dinleyiciyi kaldırıyoruz.
        return () => unsubscribe();

    }, [user])

    const signOut = async () => {
        await signOutUser()
        navigate("/")

    }
    


    return (
        <>
            <div className="container col-sm-12 m-5">
                <h2>Anasayfa</h2>
                <hr />
            {user ? <button className="  btn btn-danger" onClick={signOut} >Çıkış</button> :
            <>
            <div className="btn-group">
            <Link to="/register" ><button className=" btn btn-warning">Register</button></Link>
            <Link to="/login" ><button className=" btn btn-primary">Login</button></Link>
            </div>
            </>
            
           }
            </div>

        </>
    )
}