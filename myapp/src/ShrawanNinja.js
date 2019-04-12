import React from 'react';


//Function component
const ShrawanNinja =  (props) => {
    console.log(props);
    // const {name,age,size}  = this.props

    const{ninjas} = props;

    // const ninjaList = ninjas.map(ninja => {
    //   return (
    //     <div className="Ninja" key= {ninja.id}>
    //       <div >Name: {ninja.name} </div>
    //       <div >Age: {ninja.age} </div>
    //       <div >size: {ninja.size} </div>

    //     </div>

    //   )
    // }

    //Ternary operator
    const ninjaList = ninjas.map(ninja => {
      return ninja.age > 25 ? (
        <div className="Ninja" key= {ninja.id}>
          <div >Name: {ninja.name} </div>
          <div >Age: {ninja.age} </div>
          <div >size: {ninja.size} </div>

        </div>
      ) : null;
      } )
    return (
 <div className="ninja-list">
   {ninjaList}
    </div> )
}





//Class based container components

// class ShrawanNinja extends Component {
//   render() {
//     console.log(this.props);
//     // const {name,age,size}  = this.props

//     const{ninjas} = this.props;

//     const ninjaList = ninjas.map(ninja => {
//       return (
//         <div className="Ninja" key= {ninja.id}>
//           <div >Name: {ninja.name} </div>
//           <div >Age: {ninja.age} </div>
//           <div >size: {ninja.size} </div>

//         </div>

//       )
//     })
//     return (
//  <div className="ninja-list">
//    {ninjaList}
//     </div> )


//     //   {/* <div className="App">
//     //       <h1>My name is {this.props.name}</h1>
//     //       <p>Welcome to nesting component</p>
//     //       <p>My name is {name}</p>
//     //       <p>My age is {age}</p>

//     //   </div> */}
//     // );
//   }
// }

export default ShrawanNinja;
