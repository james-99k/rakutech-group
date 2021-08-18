import './Services.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck, faHandHoldingUsd, faUserCog} from '@fortawesome/free-solid-svg-icons'

function Services(){

    return(

        <section className="services">

            <div className="container">
                <div className="details">
                    <div className="details__icon">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="details__title">
                        FREE SHIPPING
                    </div>
                    <div className="details__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum omnis maiores nihil dignissimos, in atque perspiciatis sapiente! Similique fugiat animi, doloremque nulla maiores error at tempora aspernatur illo veritatis!
                    </div>
                </div>
        
                <div className="details">
                    <div className="details__icon">
                    <FontAwesomeIcon icon={faHandHoldingUsd}/>
                    </div>
                    <div className="details__title">
                        100% REFUND
                    </div>
                    <div className="details__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum omnis maiores nihil dignissimos, in atque perspiciatis sapiente! Similique fugiat animi, doloremque nulla maiores error at tempora aspernatur illo veritatis!
                    </div>
                </div>
        
                <div className="details">
                    <div className="details__icon">
                        <FontAwesomeIcon icon={faUserCog}/>
                    </div>
                    <div className="details__title">
                        SUPPORT 24/7
                    </div>
                    <div className="details__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum omnis maiores nihil dignissimos, in atque perspiciatis sapiente! Similique fugiat animi, doloremque nulla maiores error at tempora aspernatur illo veritatis!
                    </div>
                </div>
            </div>

    </section>

    )

}

export default Services;