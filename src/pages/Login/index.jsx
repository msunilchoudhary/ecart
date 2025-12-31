import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'

function Login() {
    const {setIsHeaderFooterShow} = useContext(AppContext);

    useEffect(()=>{
        setIsHeaderFooterShow(false)
    },[])
  return (
    <div className="login-wrap">
        <div class="form">
            <h1>Sign In</h1>
            <div class="input">
                <div class="inputBox">
                    <label for="">Username</label>
                    <input type="text" />
                </div>
                <div class="inputBox">
                    <label for="">Password</label>
                    <input type="password" />
                </div>
                <div class="inputBox">
                    <input type="submit" name="" value="Sign In" /> 
                </div>
            </div>
            <p class="forgot">Forgot Password? <a href="#">Click Here</a></p>
            <div class="social">
                <button className="social-signin facebook">Log in with facebook</button>
                <button className="social-signin twitter">Log in with Twitter</button>
                <button className="social-signin google">Log in with Google+</button>
            </div>
        </div>
    </div>
    
  )
}

export default Login