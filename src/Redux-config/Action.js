import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth, set, ref, onValue, db, signOut } from "../Firebase/Firebase";
// import { collection , addDoc , db } from "../Firebase/Firebase"

const SignUpFun = (obj, Navigate, setloader) => {
  return (dispatch) => {
    setloader(true);
    createUserWithEmailAndPassword(auth, obj.Email, obj.pass)
      .then((userCredential) => {
        // Signed

        const user = userCredential.user;

        let uid = user.uid;
        obj.uid = uid;
        const refrence = ref(db, `/users/${obj.uid}`);
        set(refrence, obj);

        dispatch({
          type: "DataFromSignup",
          user,
        });

        Navigate("/")
        // const usersCollectionRef = collection(db, "users");

        // const {Email,name,number} = obj
        // addDoc(usersCollectionRef, {

        //  console.log("Document written with ID: ", docRef.id);

        // try {
        //   const usersCollectionRef = collection(db, "users");
        //   const docRef =  addDoc(usersCollectionRef, { name: "alidjs", age: Number(111) });
        //   console.log("Document written with ID: ", docRef.uid);
        // } catch (e) {
        //   console.error("Error adding document: ", e);
        // }

        //

        setloader(false);

        // Navigate("/")
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setloader(false);
        // ..
      });
  };
};

const LoginFirebase = (obj, Navigate, setloader) => {
  setloader(true);
  return (dispatch) => {
    signInWithEmailAndPassword(auth, obj.email, obj.pass)
      .then((succes) => {
        // console.log("User Sign In Successfully ", succes);
        const user = succes.user;
        const refrence = ref(db, `/users/${user.uid}`);

        onValue(refrence, (snapshot) => {
          if (snapshot.exists()) {
            let userObj = snapshot.val();
            const data = userObj.category === 'customer'
            dispatch({
              type: "DataFromLogin",
              userObj,
            });
          } else alert("User Not found-");

        });
        Navigate("/");
      })
      .catch((err) => {
        alert(err.message);
        setloader(false);
      });
  };
};

const logout = (navigate) => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        console.log("Sign out");

        dispatch({ type: "LogOutUser" });

        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const userData = (user) => {
  return (dispatch) => {
    const refrence = ref(db, `/users/${user.uid}`);
    onValue(refrence, (snapshot) => {
      if (snapshot.exists()) {
        let userObj = snapshot.val();
        console.log(userObj);

        dispatch({
          type: "DataFromLogin",
          userObj,
        })
        // Navigate("/");
      } else alert("User Not found-");
    });
  };
};

export { SignUpFun, LoginFirebase, logout, userData };
