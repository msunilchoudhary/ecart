import React, { useContext, useEffect } from "react";
import "./signup.css"
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

function SignUp() {
  const {setIsHeaderFooterShow} = useContext(AppContext);

  useEffect(() => {
    setIsHeaderFooterShow(false)
  },[])

  return (
    <div className="login-wrap">
      <div id="login-box">
        <div className="left">
            <h1>Sign Up</h1>
            <div class="input">
                <div class="inputBox">
                    <label for="">Username</label>
                    <input type="text" />
                </div>
                <div class="inputBox">
                    <label for="">E-mail</label>
                    <input type="email" />
                </div>
                <div class="inputBox">
                    <label for="">Password</label>
                    <input type="password" />
                </div>
                <div class="inputBox">
                    <label for="">Confirm Password</label>
                    <input type="password" name="password2" />
                </div>
                <div class="inputBox">
                    <input type="submit" name="" value="Sign Up" /> 
                </div>
            </div>
        </div>

        <div className="right">
          <span className="loginwith">
            Sign up with<br />social network
          </span>
          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>

          <p style={{fontSize:"14px"}}>Are you existing user? <Link to="/signIn">Login now</Link></p>
        </div>
        <div className="or">OR</div>
      </div>
    </div>      
  );
}

export default SignUp;
