import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CRoute from './Container/Custom-Route/Custom-Route'

import SignIn from "./Container/SignIn/SignIn";
import SignUp from "./Container/SignUp/SignUp";
import Admin from './Container/Admin/Admin';
import User from "./Container/User/User";
import unauthorised from "./Container/UnAuthorised/Unauthorised";
import NotFound from './Container/Not-Found/Not-found';
import View from './Container/Admin/View'
import Try from './Container/try'
import Header from './Container/Header/Header'
import P2 from './Container/Admin/P2'
import ViewStudent from './Container/Admin/VIewStudent'
import Call from './Container/Admin/Call'
import Placement from './Container/Admin/PLacement'
import Placed from './Container/Admin/Placed';
import Drive from './Container/Admin/Drive'
import Approve from './Container/Admin/Approve'
import Pending from './Container/Admin/Pending'

class App extends Component {
  render(){
    const admin="Admin";
    const user="User";
    const role=localStorage.getItem("role")
    console.log(role);
  return (
  <Router>
    <div  className="bg">
      {(role=='Admin')&&
    <Header></Header> 
      }
       
          <Switch>
            <CRoute exact cprivat crole={[admin]} path="/View" component={View} />
            <CRoute exact cprivat crole={[admin]} path="/Call" component={Call} />
            <CRoute exact cprivat crole={[admin]} path="/try" component={Try} />
            <CRoute exact cprivat crole={[admin]} path="/ViewStudent" component={ViewStudent}/>
            <CRoute exact cprivat crole={[admin]} path="/Placement" component={Placement} />
            <CRoute exact cprivat crole={[admin]} path="/Approve" component={Approve} />
            <CRoute exact cprivat crole={[admin]} path="/Approved" component={Pending} />
            <CRoute exact cprivat crole={[admin]} path="/Drive" component={Drive} />
            <CRoute exact path='/' component={SignIn} />
            <CRoute exact path='/SignIn' component={SignIn} />
            {/* <CRoute exact path="/SignIn" component={SignIn} />  */}
            <CRoute exact path="/SignUp" component={SignUp} />
            <CRoute exact cprivate  crole={[admin]}  path="/Admin" component={Admin} />
            <CRoute exact cprivate  crole={[admin]}  path="/Place" component={Placed} />
            <CRoute exact cprivate crole={[user]} path="/User" component={User} />
            <CRoute cprivate crole={[admin]} path='/P2' component={P2}></CRoute>

            <CRoute cprivate path='/unauthorised-access' component={unauthorised}></CRoute>
            <CRoute component={NotFound}></CRoute>        
          </Switch>
    </div>
  </Router>
 
 
  );
}
}
export default App;
