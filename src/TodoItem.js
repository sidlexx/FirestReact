import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () =>{
        
        return{
            background:'#f4f4f4',
            padding:'20px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.td.completed ? 'line-through':'none'
        }
       
    }
    
    
     
    render() {
        
        const {id,title}=this.props.td;// destructuring 

        return (
            <div style={this.getStyle()}>
                <h2> <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} ></input>{' '}
                    {title}
                    <button onClick={this.props.deltodo.bind(this,id)} style={BtnStyle}> Del </button>
                    </h2>
            </div>
        )
    }

}

TodoItem.propTypes = {
    td: PropTypes.object.isRequired
  }
const BtnStyle={
    background:'#ff0000',
    color:'#fff',
    padding: '9px,9px',
    borderRadius:'100px',   // makes it round 
    cursor:'right',
    float:'right'  // helps in postioning
    

}

export default TodoItem
