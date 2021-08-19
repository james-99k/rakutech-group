import React from 'react';
import '../HomePage/ProductCards.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import localThumb1 from '../../images/products/airpods-max-hero-select-202011.jpg'
import localThumb2 from '../../images/products/iphone11-red-select-2019.png'
import localThumb3 from '../../images/products/50061505_575246.png'
import localThumb4 from '../../images/products/MJQJ3_AV3.png'
import localThumb5 from '../../images/products/ipad-2020-hero-landing.jpg'
import localThumb6 from '../../images/products/alu-silver-sport-white-s3-2up_gps_varend.png'
import localThumb7 from '../../images/products/macbook-air-space-gray-config-201810.jpg'
import localThumb8 from '../../images/products/MWP22.jpg'
import { Col } from 'react-bootstrap';

function LocalProducts(){

    const localproducts = [
        {
            id: 1,
            name: 'AirPods Max',
            originalPrice: '$359',
            discountedPrice: '$256',
            productImage: localThumb1
        },
        {
            id: 2,
            name: 'iPhone 11',
            originalPrice: '$796',
            discountedPrice: '$489',
            productImage: localThumb2
        },
        {
            id: 3,
            name: 'Apple Macbook Pro',
            originalPrice: '$599',
            discountedPrice: '$499',
            productImage: localThumb3
        },
        {
            id: 4,
            name: 'Magic Keyboard for iPad Pro 11-inch',
            originalPrice: '$359',
            discountedPrice: '$299',
            productImage: localThumb4
        },
        {
            id: 5,
            name: 'iPad (8th Generation)',
            originalPrice: '$1099',
            discountedPrice: '$829',
            productImage: localThumb5
        },
        {
            id: 6,
            name: 'Apple Watch',
            originalPrice: '$499',
            discountedPrice: '$399',
            productImage: localThumb6
        },
        {
            id: 7,
            name: 'Apple Macbook Air',
            originalPrice: '$529',
            discountedPrice: '$415',
            productImage: localThumb7
        },
        {
            id: 8,
            name: 'Air Pods Pro',
            originalPrice: '$599',
            discountedPrice: '$459',
            productImage: localThumb8
        },
    ] 

    const newproducts = localproducts.map(products => 

            <div class="col-md-4">
                    <div className="card">
                        <div className="card__image">
                            <img src={products.productImage} alt="" className="card__image--pic"/>
                        </div>
                        <div className="card__title">
                            {products.name}
                        </div>
                        <div className="card__rating">
                            <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                            <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                            <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                            <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                            <FontAwesomeIcon icon={faStar} className="card__rating--yellow"/>
                            <FontAwesomeIcon icon={faStar} className="card__rating--gray"/>
                        </div>
                        <div className="card__price">
                            <div className="card__price--discounted">
                                {products.discountedPrice}
                            </div>
                            <div className="card__price--original">
                                {products.original_price}
                            </div>
                        </div>
                    </div>
            </div>

    
        
        )

    return(
        <>{newproducts}</>
    )

}

export default LocalProducts;