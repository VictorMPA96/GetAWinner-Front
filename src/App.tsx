import React from 'react';
import Main from './components/main';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/users/login';
import Signup from './components/users/signup';


function App() {

  return (
    <Router>
      <div id='content'>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/competitors" element={<CompetitorsPage />} />
        </Routes>
      </div>
    </Router>
  )
  
}

function LoginPage(){
  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  )  
}

function RegisterPage(){
  return (
    <React.Fragment>
       <Signup />
    </React.Fragment>
  )
}

function CompetitorsPage(){
  return (
    <React.Fragment>
       <Main />
    </React.Fragment>
  )
}




export default App;
