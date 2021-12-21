import "./App.css";
import AppRouter from "./ReactRouter/Router";
import { useSelector, useDispatch } from "react-redux";
import FooterOwn from "./Components/Nav&Footer/Footer";
import { auth } from "./Firebase/Firebase";
import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { userData } from "./Redux-config/Action";
import Login from "./Screens/Login"
// import SingleCard from "./Components/SingleCard"
import Loader from "react-loader-spinner";
import Navbar from "./Components/Nav&Footer/Navbar";
// const { Header, Footer,Content } = Layout; 










function App() {
  const [user, setUser] = useState();
  const [loader, setloader] = useState(false);
  const dispatch = useDispatch();

  // if(user){
  //   alert("han")
  // }else(alert("nahi"))
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const fn = async () => {
          setloader(true);

          await dispatch(userData(user));

          setloader(false);
        };

        fn();
        // ...
      }
    });
  }, [user]);



  const state = useSelector((e) => e);
  console.log(state);

  return (
    <div className="App">
     
        <header className="app_header" >

          <Navbar />
        </header>

        <body className="app_body">
          <AppRouter user={user} />
        </body>

        <footer className="app_footer">
          <FooterOwn   />
        </footer>
    

      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        visible={loader}
      />
    </div>
  );
}

export default App;
