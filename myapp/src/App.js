import React, { Component } from 'react';
import ShrawanNinja from './ShrawanNinja'
import AddNinja  from './AddNinja'



class App extends Component {
  state = {
    ninjas :[
      {name:"ShrawanNinja",age:26 , id:2},
      {name:"rahul",age:16 , id:22},
      {name:"pankaj",age:25 ,id:222},
      {name:"rahul",age:33 , id:233},
      {name:"rahul",age:44 , id:2234},
      {name:"rahul",age:12 , id:2212}
    ]
  }
  render() {
    return (
      <div className="App">
          <h1>This is the first web page in Reactjs</h1>
          <p>Welcome :)</p>
          {/* <ShrawanNinja name="shrawan" age="23" and size="2333"/> */}
          <ShrawanNinja ninjas={this.state.ninjas}/>
          <AddNinja />
      </div>
    );
  }
}

export default App;
