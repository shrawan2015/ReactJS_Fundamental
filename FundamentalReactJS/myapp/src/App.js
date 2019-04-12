import React, { Component } from 'react';
import ShrawanNinja from './ShrawanNinja'
import AddNinja  from './AddNinja'
import './ninjas.css'


class App extends Component {
  state = {
    ninjas :[
      {name:"ShrawanNinja",age:26 ,belt:"black", id:2},
      {name:"rahul",age:16 ,belt:"white", id:22},
      {name:"pankaj",age:25 ,belt:"green",id:222},
      {name:"rahul",age:33 , belt:"red",id:233},
      {name:"rahul",age:44 ,belt:"white", id:2234},
      {name:"rahul",age:12 ,belt:"yellow", id:2212}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas , ninja]
    this.setState({
      ninjas:ninjas
    })
  }


  deleteNinja = (id) => {
    console.log('the id is',id)

    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })

    this.setState({
      ninjas:ninjas
    })

  }

  render() {
    return (
      <div className="App">
          <h1>This is the first web page in Reactjs</h1>
          <p>Welcome :)</p>
          {/* <ShrawanNinja name="shrawan" age="23" and size="2333"/> */}
          <ShrawanNinja ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
          <AddNinja  addNewNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
