import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app)
const createUser = async (mail, password) => {
    await createUserWithEmailAndPassword(auth, mail, password)
        .then((res) => {
            try {
                const user = res.user
                const userUid = res.user.uid;
                console.log(user);
                return user
            } catch (error) {
                console.log(error);
            }
        })
}

const signIn = async (mail, password) => {
    await signInWithEmailAndPassword(auth, mail, password).then((res) => {
        const user = res.user
        const userUid = res.user.uid;
        console.log("sign", userUid);
        return user
    })
}

const signOutUser = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Çıkış yapılırken hata:", error);
        throw error;
    }
};

export { createUser, signIn, signOutUser, auth }