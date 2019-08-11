import React, {Component} from 'react';
import './TodoInput.css';

class TodoInput extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind();
    }

        handleChange =(e)=>{
            this.setState({
                value: e.target.value,
            });
        }

        addTodo =(todo)=>{

            //ensure todoText is not empty
            if(todo.length > 0){
                this.props.addTodo(todo);
                this.setState({
                    value: ''
                })
            }
            
        }    

    render() {
        return (
             <div>
                 <input className="inputBox" type="text" value= {this.state.value} onChange={this.handleChange} />
                
                 <button className ="btn btn-primary" onClick ={()=>this.addTodo(this.state.value) }>Submit</button>
             </div>
        );
    }

}


export default TodoInput;



