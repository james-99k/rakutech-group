import './PriceFilter.scss'

function PriceFilter(){

    return(

        <div className="price">

        <div className="filter__price">

            <h2>PRICES</h2>

            <div className="slider__header">

                <p>Ranger:</p>
                <p>$13.99 - $25.99</p>

            </div>

            <div className="slider">
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/>
            </div>

        </div>
        </div>

    )

}

export default PriceFilter;