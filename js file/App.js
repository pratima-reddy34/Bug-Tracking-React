/*import React from 'react';
import {useSelector} from 'react-redux'
import Login from './Views/Login/login'
import {BrowserRouter} from 'react-router-dom'
import sidebar from './Views/sidebar/sidebar'
//import ViewBugPage from "./Views/Pages/viewBugs";


function App() {
  const { auth } = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> :
        <>
          <sidebar />
      
        </>
      }  
    
    </Router>
  );
}

export default App; */
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Views/Login/login';
import Sidebar from './Views/sidebar/sidebar';

function App() {
  const { auth } = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> : <Sidebar />}
    </Router>
  );
}

export default App;
