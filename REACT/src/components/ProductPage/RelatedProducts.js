import Cards from '../../components/HomePage/ProductCards.js'
import relatedThumb_one from '../../images/products/ipad-2020-hero-landing.jpg'
import './RelatedProducts.scss'


function RelatedProducts(){

    return(

        <div className="related_products">
        
            <h4>RELATED PRODUCTS</h4>
            <div className="product_container">
            <Cards prod_img={relatedThumb_one} />
            <Cards prod_img={relatedThumb_one} /> 
            <Cards prod_img={relatedThumb_one} /> 
            <Cards prod_img={relatedThumb_one} /> 
            </div>
        </div>

    )

}

export default RelatedProducts;