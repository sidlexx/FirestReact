import React, { Component } from 'react'

export class AddTo extends Component {

    state={
        title:''
    }

    onChange = (e) =>this.setState({[e.target.name]: e.target.value});//e.target. gets updated for any variable with a difffertent name

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTo(this.state.title); // sends the title to app.js
        this.setState({title:''});//set the state back to blank
    }
    render() {
        return (
            <form  onSubmit={this.onSubmit} style={{display: 'flex '}}>
                <input
                type="text" name="title" style={{flex:'10', padding:'5px '}} placeholder="Add ..."
                value={this.state.title}
                onChange={this.onChange}
                >
                </input>                
                <input
                type="submit" value="add task"  className="btn" style={{flex:'1'}}>
                </input>
            
            </form>
        )
    }
}

export default AddTo;
