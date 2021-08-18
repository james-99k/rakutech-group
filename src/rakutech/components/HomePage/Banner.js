import './Banner.scss';
import banner_img from '../../images/iphone1.png';

function Banner(){

    return(

        <section className="product_banner">

            <div className="product_previous">

                <i className="fal fa-chevron-left"></i>

            </div>

            <div className="product_banner_text">

                <h1>iPhone X</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum eligendi placeat amet velit consequatur rem.</p>

                <a href="">MORE</a>

            </div>

            <div className="product_banner_image">

                <img src={banner_img} alt=""/>

            </div>

            <div className="product_next">

                <i className="fal fa-chevron-right"></i>

            </div>

        </section>


    );

}

export default Banner;
