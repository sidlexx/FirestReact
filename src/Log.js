import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
export class Log extends Component {
    render() {
        return (
            <div>
               
<Jumbotron >
  <h1 class="pull-right">Welcome to my login page</h1>
  <p>
    Please provide your credentials below
  </p>
  <p>
    
  </p>
</Jumbotron>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="Add name"></input>
                    </div>
                    <div>
                        <label>Email </label>
                        <input type="email" placeholder="Add email"></input>
                    </div>
                    <div>
                    <select class="form-control">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </div>
                    <Button variant="primary" type="submit">Submit</Button> 
                    
                </form>
             
        
            </div>
        )
    }
}

export default Log
