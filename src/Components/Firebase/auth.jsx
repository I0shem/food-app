import { useState, useEffect } from "react";
import s from "./auth.module.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
import User from "../Images/user.svg";
import { ReactSVG } from "react-svg";

const Authentication = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(firebaseApp);
  const googleAuthProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user != null) {
        setUser(user);
      }
    });
    return unsub;
  }, [auth]);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user);
  return (
    <div>
      <ReactSVG
        onClick={handleSignIn}
        src={User}
        beforeInjection={(svg) => {
          svg.classList.add("svg-class-name");
          svg.setAttribute("style", "width: 50px", "height: 50px");
        }}
      />
      {user != null ? (
        <div className={s.Authentication}>
          <img src={user.photoURL} alt="" onClick={handleSignOut} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Authentication;
