import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/navbar'
import  DashBoard from '../src/components/dashboard/Dashboard'
import ProjectDetails from './components/projects/projectDetail'
import SignIn from './components/auth/signIn'
import SignOut from './components/auth/signOut'
import CreateProject from './components/projects/createProject'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch>
              <Route exact path='/' component={DashBoard} />
              <Route path='/project/:id' component={ProjectDetails} />
              <Route path='/signin' component={SignIn}/>
              <Route path='/signOut' component={SignOut}/>
              <Route path='/createProject' component={CreateProject}/>

          </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
