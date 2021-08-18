import './ProductsCatalogue.scss';
import ProductOne from '../HomePage/ProductCatalogue/ProductOne.js'
import ProductTwo from '../HomePage/ProductCatalogue/ProductTwo.js'
import ProductThree from '../HomePage/ProductCatalogue/ProductThree.js'


function Products(){

    return(

        <div className="product_catalogue">
            <ProductOne />
            <ProductTwo />
            <ProductThree />
        </div>
    );

}

export default Products;