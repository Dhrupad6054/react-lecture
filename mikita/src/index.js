import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Leftsidebar from "./Components/Leftsidebar"
import Main from "./Components/Main"
import Rightsidebar from "./Components/Rightsidebar"
import Footer from "./Components/Footer"
import './index.css';
import Employee from "./Employee"
import Client from "./Client"
import App from "./App"
import Classupdatederived from "./Components/Update/CLassupdatederived";
import Shouldupdate from "./Components/Update/Shouldupadte";
import Componentdidupdate from "./Components/Update/Componentdidupdate";
import Container from "./Components/Container";

import reportWebVitals from "./reportWebVitals";
import Garage from "./Components/Garage";
import Events from "./Components/Events";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <div className='Main'>
   <>
   {/* <Employee/>
   <Client/>
    {/* <Header /> */}
    {/* <section>
    <Leftsidebar />
    <Main />
    </section>    
    <Rightsidebar /> */}
    {/* <Footer /> */}
    <App/>
   {/* < Classupdatederived oldName = "Vruta"/> */}
   {/* <Shouldupdate/>
   <Componentdidupdate username = "mikita12" /> */}
   {/* <Container/> */}
   {/* <Garage/> */}
   {/* <Events/> */}
    </> 
  // </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
