import './ProductDetails.scss'
import productImage from '../../images/c04297141.png';
import productThumbnail1 from '../../images/_0053_rgb_MP582-RGB-bttm_V2.png';
import productThumbnail2 from '../../images/_0066_rgb_MNEN2-RGB-side_V2.png';
import productThumbnail3 from '../../images/Rectangle 5.png';
import productThumbnail4 from '../../images/151101_bbd_sodc_blk_06.png';
import productImagePink from '../../images/beats__1.png';
import productImageRed from '../../images/beat-red.png';
import Counter from './Counter.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faHeart} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';


const Product = ({productData}, {testMethodPass}) =>{

    //PRODUCT DISPLAYED 
    const TestProduct =[
    {
        id: 1,
        name: 'AirPods Max',
        originalPrice: '$359',
        discountedPrice: '$256',
        productImage: productImagePink
    },
]


    let productName = "Beats Solo2 On Ear Headphones - Black";
    let productPrice = "$599";
    let productDiscounted = "$499";

    const [prodName, setName] = useState(productName);
    const [prodDiscount, setDiscount] = useState(productDiscounted);
    const [prodPrice, setPrice] = useState(productPrice);
    const [prodImg, setImg] = useState(productImage);

    const ProxyProduct = TestProduct.map(products =>

    <div className="container-product">
    <div className="container-product__wrapper">
            <div className="product">
                <div className="product__image">
                    <img src={products.productImage} alt="" className="pic"/>
                    <div className="image-set">
                        <img src={productThumbnail1} alt="" className="image-set__item"/>
                        <img src={productThumbnail2} alt="" className="image-set__item"/>
                        <img src={productThumbnail3} alt="" className="image-set__item image-set__item--active"/>
                        <img src={productThumbnail4} alt="" className="image-set__item"/>
                    </div>
                </div>
                <div className="product__details">
                    <div className="product__details--title">
                        {products.name}
                    </div>
                    <div className="product__details--rating">
                        <div className="rating__star">
                        <FontAwesomeIcon icon={faStar} className="rating__star--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="rating__star--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="rating__star--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="rating__star--yellow"/>
                        <FontAwesomeIcon icon={faStar} className="rating__star--gray"/>

                        </div>
                        <div className="rating__reviews">
                            0 reviews
                        </div>
                        <div className="rating__button">
                            <a href="#">Submit a review</a>
                        </div>
                    </div>
                    <div className="product__details--price">
                        <div className="product__details--price-discounted">
                            {products.discountedPrice}
                        </div>
                        <div className="product__details--price-original">
                            {products.originalPrice}
                        </div>
                    </div>
                    <div className="product__details--summary">
                        <div className="availability">
                            <div className="availability__text">
                                Availability:
                            </div>
                            <div className="availability__detail">
                                In stock
                            </div>
                        </div>
                        <div className="category">
                            <div className="category__text">
                                Category:
                            </div>
                            <div className="category__detail">
                                Accessories
                            </div>
                        </div>
                        <div className="shipping">
                            Free shipping
                        </div>
                    </div>
                    <div className="product__details--color">
                        Select Color:
                        <div className="circle"></div>
                        <div className="circle__pink" ></div>
                        <div className="circle__red" ></div>
                        <div className="circle__black"></div>
                        <div className="circle__white"></div>
                        <div className="circle__brown"></div>
                    </div>
                    <div className="product__details--size">
                        Size: 
                        <select name="language_list" id="sizes">
                            <option value="extra-small">XS</option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                        </select>
                    </div>
                    <div className="options">
                        <Counter/>
                        <div className="buttons">
                            <button className="buttons__cart">
                                <i className="fas fa-shopping-cart buttons__cart--icon"></i>
                                Add To Cart
                            </button>
                            <div className="buttons__favorite">
                                <FontAwesomeIcon icon={faHeart}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social">
                <div className="social__facebook">
                    <i className="fab fa-facebook-f social__facebook--icon"></i>
                    Share on facebook
                </div>
                <div className="social__twitter">
                    <i className="fab fa-twitter social__twitter--icon"></i>
                    Share on Twitter
                </div>
            </div>
            <div className="info">
                <div className="info__nav">
                    <div className="info__nav--product">
                        <a href="" className="active"> Product Information</a>
                    </div>
                    <div className="info__nav--reviews">
                       <a href=""> Reviews </a> <input type="text" value="0" className="review__count"/>
                    </div>
                    <div className="info__nav--tab">
                        Another tab
                    </div>
                </div>
                <div className="info__text">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique
                    ut lectus.
                    Sed et lorem nunc.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean
                    eleifend laoreet congue.
                    Vivamus adipiscing nisl ut dolor dignissim semper.
                    Nulla luctus malesuada tincidunt. className aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos.
                    Integer enim purus, posuere at ultricies eu, placerat a felis.
                    Suspendisse aliquet urna pretium eros convallis interdum.
                    Quisque in arcu id dui vulputate mollis eget non arcu.
                    Aenean et nulla purus.
                    Mauris vel tellus non nunc mattis lobortis.
                    <br/><br/>
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique
                    ut lectus.
                    Sed et lorem nunc.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                </div>
            </div>
        </div>
    </div>)

    return(

        <>{ProxyProduct}</>

    );
}

export default Product;