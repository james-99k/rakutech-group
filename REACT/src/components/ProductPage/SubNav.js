import './SubNav.scss'
import { Link } from 'react-router-dom';

function SubNav(){

    return(
        <section>
            <div className="link-bar">
                <div className="link-bar__home">
                <Link to="/" className="links">Home</Link>
                </div>
                <div className="link-bar__slash">
                    /
                </div>
                <div className="link-bar__accessories">
                    Accessories
                </div>
                <div className="link-bar__slash">
                    /
                </div>
                <div className="link-bar__title">
                    Beat Solo2 on Ear Headphones - Black
                </div>
            </div>
        </section>

    )

}

export default SubNav;