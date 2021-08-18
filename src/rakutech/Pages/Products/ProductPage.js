import ProductDetails from '../../components/ProductPage/ProductDetails.js'
import SubNav from '../../components/ProductPage/SubNav.js'
import Promo from '../../components/ProductPage/Promo.js'
import './ProductPage.scss'
import RelatedProducts from '../../components/ProductPage/RelatedProducts.js'
import Header from '../../components/HomePage/Header.js'
import Footer from '../../components/HomePage/Footer.js'
import {connect} from 'react-redux'

const Products = ({products}) =>{

    return(

        <div>
            <Header/>
            <SubNav />

            <div className="products product_details">

                <ProductDetails />

        
            <div className="promo_container">
                <Promo />
            </div>
            </div>
            <RelatedProducts/>
            <Footer/>
        </div>

    )

};

export default Products;