import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {useEffect} from "react";
import { auth } from "./Firebase"
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

//loads stripe and stores it into a promise
const promise = loadStripe("pk_test_51Hrbt3BcPkps6lUongd9cg7Dl3DxLjAIRoHJDrC8JZeythiTk1XuoD0BawgJCHrJxU5RBUb1DRjBQfsopDLR5Bcz00f9Hyj7F8");



function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      if(authUser){
        //user just logged in or user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser

        })
      }else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout />
            </Route>
            <Route path="/" exact>
              <Header/>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;