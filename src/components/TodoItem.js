import React, {Component} from 'react';
import './TodoItem.css'
import {Animated} from "react-animated-css";

class TodoItem extends Component {
    constructor(props){
        super(props)
    }

    removeTodo=(id) =>{
        this.props.removeTodo(id)
    }

        render() {
          return (
            <Animated animationIn="bounceInDown" animationOut="fadeOutLeft" isVisible={true}>
            <div className ="todoliWrapper">
                <button className ="btn btn-danger" onClick={(e)=> this.removeTodo(this.props.id) }>Delete</button>
                {this.props.todo.text}
            </div>
            </Animated>
          )
        };
}

export default TodoItem;