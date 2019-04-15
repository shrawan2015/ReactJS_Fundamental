import React, { Component } from 'react';
import Navbar from './components/Navbar'

import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Favourite from  './components/Favourite'

import './App.css'

class App extends Component {

  state = {
    favouriteList:[]
  }



favouriteList = (movie) => {
  console.log(movie)
      let favouriteList =  [...this.state.favouriteList,movie];
      console.log(favouriteList.length);
      this.setState({
          favouriteList:favouriteList
      })
}


  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route exact path='/'  render={(props) => <Home {...props} favouriteFunc={this.favouriteList} /> } />
          <Route path='/favourite'  render={(props) => <Favourite {...props} favouriteFunc={this.state.favouriteList} /> } />
          <Route path='/about' component={About} />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
