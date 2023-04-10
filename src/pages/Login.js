import React from 'react';
import "../styles/login.css";
import astu_logo from "../assets/astu.png";
// import svgback from "../assets/shape/svg-back5.png";

function Login() {
    return (
        <div className="insign">

            {/* <img src={svgback} className='svg-back' alt="svg-back"/> */}
            <div className='svg-back'></div>

            <img src={astu_logo} className='astu-logo' alt="astu-logo" height="100"/>

            <div className="screen">

                <div className="screen__content">

                    <form className="login_form">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="ID / Email"/>
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password"/>
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>

                    

                {/* Alternative */}
                    <div className="other-login">
                        <h5>No account?</h5>
                        <div className="social-icons">
                            <button className='register-button'> <a href="#" className="register-login__icon">Register</a></button>  
                        </div>
                    </div>

                </div>


            </div>

            
            
        </div>
    );
}

export default Login;