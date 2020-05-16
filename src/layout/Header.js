import React  from 'react';
import {Link} from 'react-router-dom';

function Header(){
 return(
  <header style={headerstyle}>
      <h1> To Do List</h1>
      <Link style={LinkStyle} to="/"> Home </Link> | <Link style={LinkStyle} to ="/About">About</Link>
  </header>

 )   
}

const headerstyle={
background:'#F0FFFF',
color:'black',
textAlign:'center',
padding:'10px',
 
}

const LinkStyle={
    background:'none',
    textDecoration:'none',
    color:'black'
    
 
}

export default Header;
