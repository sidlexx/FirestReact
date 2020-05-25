import React, { Component } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {sign_in} from './Action/Action'
import Button from 'react-bootstrap/Button'
import increment from './Action/Increment'
import decrement from './Action/decrement'

 function Sign() {
    
            const logged=useSelector(state=>state.islogged);
            const dispatch=useDispatch();
            const counter =useSelector(state=>state.counter);

        return (
            
            <div>
              <form >
              <label class='pull-right'>Email</label> <br/>
              <input type="email" class="form-control" placeholder="Email"></input><br/>
              <label>Password</label>  
              <input type="password" class="form-control" placeholder="Password"></input><br/>
              <Button onClick={()=>dispatch(sign_in())} variant="primary" type="submit" >Sign in</Button><br/><br/>
             <Button onClick={()=>dispatch(increment())}>+</Button>      <Button onClick={()=>dispatch(decrement())}>-</Button>
              </form>
            </div>
        )
    }


export default Sign

