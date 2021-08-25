import './SignIn.scss'
import {Link } from 'react-router-dom'

function SignIn(){

    return(

<section className="background">

    <div className="main_container">

        <div className="non_form">

            <div className="company_logo">
            <Link to={"/"}><a className="home__link"><h1 className="first">RAKU</h1><h1>TECH</h1></a></Link>
            </div>
            <div className="bar"></div>
            <p>Browse from over 500 devices in your area.</p>

        </div>

        <div className="form__side">
            <div className="form__container">
                <div className="form__container--inside">
                <div className="header_container">
                    <h1>Sign In</h1>
                </div>
                <input type="submit" className="sign__in--apple" value="SIGN IN WITH APPLE" />
                <input type="submit" className="sign__in--facebook" value="SIGN IN WITH FACEBOOK" />
                    <div className="divider">
                    <p> OR </p> 
                    </div>
                <div className="input__email">
                    <label for="email">Email</label>
                    <input type="text" name= "email" className="user__email" />
                </div>
                <div className="input__password">
                    <label for="password">Password</label>
                    <input type="password" name= "password" className="user__password" placeholder="Must have at least 6 characters" />
                </div>
                <input type="submit" className="sign__up" value="SIGN IN"/>
                <p className="terms_agreement">By continuing, you agree to accept our Privacy Polic & Terms of Service.</p>

                <p className="registration">Don't have an account? <Link to={"SignUp"}><a >Create new account</a></Link></p>
            </div>
            </div>
        </div>
    </div>

</section>

    )

}

export default SignIn;