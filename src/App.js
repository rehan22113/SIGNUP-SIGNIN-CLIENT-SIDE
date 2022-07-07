import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom"
import Home from './Pages/Home';
import SignIn from './Pages/SignIn'
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Error from './Pages/404';
import Contact from './Pages/Contact';
import Logout from './Pages/logout';

const App = ()=>{
  return(
    <>
  <Switch>
  <Route path="/" component={Home} exact />
  <Route path="/signin" component={SignIn} />
  <Route path="/register" component={Register} />
  <Route path="/dashboard" component={Dashboard} />
  <Route path="/contact" component={Contact} />
  <Route path="/logout" component={Logout} />
  <Route component={Error} />
  </Switch>
    </>
  )
}

export default App;