import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Cards from '../../components/HomePage/ProductCards.js'
import ProductThree from '../../components/HomePage/ProductCatalogue/ProductThree.js'
import '../../components/HomePage/ProductsCatalogue.scss'
import './Promo.scss'

function Promo(){

    return(

        <div className="promo">
            <h3 className="best-seller">BEST SELLER</h3>
            <Cards original_price="$599" discounted_price="$499" prod_name="Apple MacBook Pro" style={{height: 100}}/>
            <ProductThree/>
        </div>

    )

}

export default Promo;