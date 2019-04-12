import React from 'react';


//Function component
const ShrawanNinja =  ({ninjas,deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
     return ninja.age > 25 ? (
        <div className="Ninja" key= {ninja.id}>
          <div >Name: {ninja.name} </div>
          <div >Age: {ninja.age} </div>
          <div >Belt: {ninja.belt} </div>
          <div >size: {ninja.size} </div>
          <button onClick={ () => {deleteNinja(ninja.id)}} >Delete button</button>
        </div>
      ) : null;
      } )
    return (
 <div className="ninja-list">
   {ninjaList}
    </div> )
}
export default ShrawanNinja;

//deleteNinja(ninja.id) this fire everytime so we need to 
//make the anonymous fucntion



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

