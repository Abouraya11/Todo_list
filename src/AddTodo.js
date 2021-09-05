import React, {Component} from 'react'

class AddTodo extends Component{

state ={
    content:''
}

handleChange =(e)=>{
    this.setState({
        content: e.target.value
    })
}
handleSubmit=(e)=>{
  this.props.addTodo(this.state)
  e.preventDefault()
}

render(){

return(
    <div><form onSubmit={this.handleSubmit}>
    <label>Add new Todo:</label>
    <input type="text" onChange={this.handleChange}></input>

    </form>
    </div>
    
)}

}
export default AddTodo