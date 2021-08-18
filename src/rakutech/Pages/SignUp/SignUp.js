import {Link } from 'react-router-dom'

function SignUp(){

    return(

        <section className="background">

            <div className="main_container">

                <div className="non_form">

                    <div className="company_logo">
                        <Link to="/"><a className="home__link"><h1 className="first">RAKU</h1><h1>TECH</h1></a></Link>
                    </div>
                    <div className="bar"></div>
                    <p>Browse from over 500 devices in your area.</p>

                </div>

                <div className="form__side">
                    <div className="form__container">
                        <div className="form__container--inside">
                        <div className="header__container">
                            <h1>Sign Up</h1>
                            <div className="log_in">
                                <p>Already have an account? </p>
                                <Link to="/SignIn"><a > Log In</a></Link>
                            </div>
                        </div>
                        <div className="input__name">
                            <label for="name">Full Name</label>
                            <input type="text" name= "name" className="user__name"/>
                        </div>
                        <div className="input__email">
                            <label for="email">Email</label>
                            <input type="text" name= "email" className="user__email"/>
                        </div>
                        <div className="input__password">
                            <label for="password">Password</label>
                            <input type="password" name= "password" className="user__password" placeholder="Must have at least 6 characters"/>
                        </div>
                        <div className="mailer">
                            <input type="checkbox" className="user__mailer"/> 
                            <p>Sign up for email updates.</p>
                        </div>
                        <input type="submit" className="sign__up" value="SIGN UP"/>
                        <p className="terms_agreement">By continuing, you agree to accept our Privacy Polic & Terms of Service.</p>
                        
                        <div id="demo"></div>

                    </div>
                </div>
            </div>
            </div>

</section>

    )

}

export default SignUp;