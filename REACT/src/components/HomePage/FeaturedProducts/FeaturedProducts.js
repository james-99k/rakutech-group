import './FeaturedProducts.scss'
import featuredThumb1 from '../../../images/c04297141.png'
import featuredThumb2 from '../../../images/PR-104-0015-002-8A.png'
import featuredThumb3 from '../../../images/50050995_530579.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function FeaturedProducts(){

    return(

        <section className="featured_products"> 
        <h3>FEATURED PRODUCTS</h3> 

        <div className="container">
            <div className="featured">
                <div className="featured__image-beats">
                    <img src={featuredThumb1} alt=""/>
                </div>
                <div className="featured__details">
                    <div className="featured__details--title">
                        Beats Solo 2 On Ear Headphones - Black
                    </div>
                    <div className="featured__details--rating">
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--gray"/>
                    </div>
                    <div className="featured__details--price">
                        <div className="featured__details--price-discounted">
                            $499
                        </div>
                        <div className="featured__details--price-orignal">
                            $599
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured">
                <div className="featured__image-tvtray">
                    <img src={featuredThumb2} alt=""/>
                </div>
                <div className="featured__details">
                    <div className="featured__details--title">
                        H-Squared tvTray
                    </div>
                    <div className="featured__details--rating">
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--gray"/>
                    </div>
                    <div className="featured__details--price">
                        <div className="featured__details--price-discounted">
                            $499
                        </div>
                        <div className="featured__details--price-orignal">
                            $599
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured">
                <div className="featured__image-netatmo">
                    <img src={featuredThumb3} alt=""/>
                </div>
                <div className="featured__details">
                    <div className="featured__details--title">
                        Netatmo Rain Gauge
                    </div>
                    <div className="featured__details--rating">
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="card__rating--gray"/>
                    </div>
                    <div className="featured__details--price">
                        <div className="featured__details--price-discounted">
                            $499
                        </div>
                        <div className="featured__details--price-orignal">
                            $599
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    )

}

export default FeaturedProducts;