import React, { Component } from 'react'
import Sign from './Sign'

const Headerstyle={
    background:'yellow',
    color:'black',
    textAlign:'center',
    padding:'10px',
     
    }

export class Signinpage extends Component {
    render() {
        return (
            <div>
            <header style={Headerstyle}> Sign up!</header>
            <Sign/>
            </div>
        )
    }
}

export default Signinpage
