import Cards from '../../components/HomePage/ProductCards.js'
import relatedThumb_one from '../../images/products/ipad-2020-hero-landing.jpg'
import './RelatedProducts.scss'
import LocalProducts from '../ProductPage/LocalProducts'

function RelatedProducts(){

    return(

        <div className="related_products">
        
            <h4>RELATED PRODUCTS</h4>
            <div className="product_container">
                <LocalProducts/>
            </div>
        </div>

    )

}

export default RelatedProducts;