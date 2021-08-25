import './Footer.scss'
import payment_method1 from '../../images/Western-union.png';
import payment_method2 from '../../images/Group 19.png';
import payment_method3 from '../../images/Paypal.png';
import payment_method4 from '../../images/visa.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';


function Footer(){

    return (

        <section className="footer">

            <div className="footer upper">
                <div className="footer_description"> 
                    <h3>RAKUTECH</h3> 
                    <div className="footer_text"> 
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Eum et doloribus perferendis aspernatur alias odio tempore at, 
                            assumenda consequuntur sed aliquam totam, 
                            expedita corrupti so    luta architecto. Eos quisquam vitae quidem? 
                        </p>
                    </div>
                </div>

                <div className="social_media">
                    
                    <h2> Follow Us </h2>
                    <p>Since the 1500, when an unkown printer took a gallery of type and scrambled.</p>
                    
                    <div className="smLogo">
                        <div className="webLogo 1"><FontAwesomeIcon icon={faFacebook}/></div>
                        <div className="webLogo 2"><FontAwesomeIcon icon={faTwitter}/></div>
                    </div>

                </div>

                <div className="contact">
                    
                    <h2>Contact Us</h2>
                    <p>My Company , 4578 Marmora Road, Glasgow <br/> D04 89GR <br/> Call us now: 0123-456-789 <br/> Email: support@whatever.com</p>
                
                </div>
            </div>

            <div className="footer lower">

                <ul className="footer_list information">
                    
                    <h4>Information</h4>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>

                </ul>

                <ul className="footer_list service">
                    
                    <h4>Services</h4>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>

                </ul>

                <ul className="footer_list extras">
                    
                    <h4>Extras</h4>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>

                </ul>

                <ul className="footer_list account">
                    
                    <h4>My Account</h4>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>

                </ul>

                <ul className="footer_list links">
                    
                    <h4>Useful Links</h4>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>

                </ul>

                <ul className="footer_list offers">
                    
                    <h4>Our Offers</h4>
                    <li>About Us</li>
                    <li>Information</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>

                </ul>

            </div>

            <div className="payment">

                <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>

                <ul className="payment__option">

                    <li><img src={payment_method1} alt=""/></li>
                    <li><img src={payment_method2} alt=""/></li>
                    <li><img src={payment_method3} alt=""/></li>
                    <li><img src={payment_method4} alt=""/></li>

                </ul>

            </div>

    </section>

    );

}

export default Footer;