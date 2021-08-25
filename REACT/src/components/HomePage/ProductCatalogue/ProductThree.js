import '../ProductsCatalogue.scss'
import catalouge_img3 from '../../../images/50051823_540375.png';

function ProductThree(){

    return(

    <div className="catalogue_item three">

    <div className="product_details">
        <h2>GoPro Hero 6</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>$299</p>
    </div>

    <img src={catalouge_img3} alt=""/>
    
    </div>


    )

}

export default ProductThree;