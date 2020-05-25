import React, { Component } from 'react';
import Log from './Log'

const Headerstyle={
    background:'yellow',
    color:'black',
    textAlign:'center',
    padding:'10px',
     
    }
export class Loginpage extends Component {
    render() {
        return (
            <div>
            <header style={Headerstyle}> Login page</header>
            <Log/>
          
            </div>
        )
    }
   
}

export default Loginpage
