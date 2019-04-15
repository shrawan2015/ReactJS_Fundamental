import React from 'react'

const Contact = (props) => {
console.log(props)

setTimeout(() => {
    props.history.push('/about');
}, 2000);


    return( 
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo optio atque, consequuntur porro iure labore iste pariatur eveniet commodi? Consequatur possimus magnam doloribus eligendi fugit doloremque molestias repellat neque. Harum!</p>
        </div>

    )
}


export default Contact