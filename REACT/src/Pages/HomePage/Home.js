import Banner from '../../components/HomePage/Banner.js'
import Products from '../../components/HomePage/ProductsCatalogue.js'
import ProductList from '../../components/HomePage/ProductList.js'
import ProductBannerSub from '../../components/HomePage/ProductBannerSub.js'
import Services from '../../components/HomePage/Services.js'
import News from '../../components/HomePage/News.js'
import FeaturedProducts from '../../components/HomePage/FeaturedProducts/FeaturedProducts.js'
import PageSearch from '../../components/HomePage/PageSearch.js'
import Header from '../../components/HomePage/Header.js'
import Footer from '../../components/HomePage/Footer.js'
import data from '../../components/ProductPage/Data'
import { useState } from 'react'
import relatedproducts from '../../components/ProductPage/Data'

function Home(){

    const {relatedproduct} = data;
    const [cartItems, setCartItems] = useState([]);


    return(

        <div>
            <Header/>      
            <Banner/>
            <Products/>
            <ProductList />
            <ProductBannerSub name="iPhone 6"/>
            <Services/>
            <News />
            <FeaturedProducts />
            <PageSearch/>
            <Footer/>
            
        </div>
    )

}

export default Home;