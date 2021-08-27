import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null) ;

  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    type: type })

    setTimeout(
      ()=>{
        setAlert(null)
      },1500)}
  
  
const toggleMode=()=>{
   if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0f132b' ;
      showAlert("Dark mode has been enable","success")
    }
    
    else{
      setMode('light')
      document.body.style.backgroundColor='white' ;
      showAlert("Light mode has been enable","success")
    }
  }

  return (
  
   <>
   {/* <Router> */}
    <Navbar title="TextUtils"  aboutText="About" mode={mode}  toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze."  mode={mode}/> 
    {/* <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About  showAlert={showAlert} mode={mode} />
          </Route>
       
      
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Enter the text to analyze."  mode={mode}/> 
          </Route>
      </Switch>
    </div>
   </Router> */}
    </>
  );
}

export default App;
