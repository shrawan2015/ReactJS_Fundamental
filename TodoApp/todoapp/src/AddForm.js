import React, {Component} from 'react'


class AddTodo extends Component{

    state = {
        content : ''
    }
    handleChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    handelSubmit =(e) =>{
        e.preventDefault();
        // console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
    }
    render(){
        return (
             <div>
             <form onSubmit={this.handelSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
             </form>

              </div>
        )
       
    }
}

export default AddTodo