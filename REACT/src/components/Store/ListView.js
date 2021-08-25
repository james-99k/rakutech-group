import './ListView.scss';
import React, { useState, useEffect } from 'react';
import LocalProducts from '../ProductPage/LocalProducts';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function ListView(){

    const[data,setData] = useState([]);

    useEffect(() => {

         fetch('https://fakestoreapi.com/products/')
         .then(response=>response.json())
         .then((data)=>setData(data.splice(0,10)));  

        // (async () =>{
        //     const response = await fetch('https://fakestoreapi.com/products/');
        //     const data = await response.json;
        // })();
    },[]);

    return(

        <div className="list__view">
{/* 
            <div className="list__view">
            <LocalProducts/>
            </div> */}

            {data.map((item)=>{
                return <div className="container" key={item.id}>

                 <div className="image__container"> 
                    <img src={item.image}/>
                </div>

                <div className="detail__container">

                    <h2 className="product__name">{item.title}</h2>
                    
                    <div className="review__container">

                        <div className="stars">

                        <FontAwesomeIcon icon={faStar} className="yellow"/>
                        <FontAwesomeIcon icon={faStar} className="yellow"/>
                        <FontAwesomeIcon icon={faStar} className="yellow"/>
                        <FontAwesomeIcon icon={faStar} className="yellow"/>
                        <FontAwesomeIcon icon={faStar} className="gray"/>

                        </div>

                        <div className="review__number">
                            <input type="text" placeholder="0" value="0"></input>
                            <p>reviews</p>
                        </div>

                        <button className="submit__review">Submit a review</button>

                    </div>

                    <div className="price__container">
                        <span className="discounted">${item.price}</span>
                        <span className="original">$599</span>

                    </div>

                    <div className="product__details">
                        {item.description}
                    </div>

                    <div className="product__buttons">

                        <button type="submit" className="cart__button"><div className="button__content"><i><FontAwesomeIcon icon={faShoppingCart}/></i>Add to cart</div></button>
                        <button type="submit" className="fav__button"><div className="button__content"><i><FontAwesomeIcon icon={faHeart}/></i></div></button>

                    </div>

                </div>
            </div>
            })}     
        </div> 

    );

}

export default ListView;