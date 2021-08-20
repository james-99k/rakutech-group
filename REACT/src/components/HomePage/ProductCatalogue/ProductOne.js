import '../ProductsCatalogue.scss'
import catalouge_img1 from '../../../images/iPhone6.png';

function ProductOne(){

    return(

        <div className="catalogue_item one">
                
        <div className="product_details">

            <h1>iPhone 6</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

            <h4>$399</h4>

        </div>

        <img src={catalouge_img1} alt=""/>

        </div>

    )

}

export default ProductOne;