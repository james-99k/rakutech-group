import './BrandFilter.scss'

function BrandFilter(){

    return(

        <div className="brand">

            <div className="filter__brand">

                <h2>BRAND</h2>

                <div className="list_box">
                    <ul className="category__brand">

                        <li>Apple</li>
                        <li>LG</li>
                        <li>Samsung</li>
                        <li>Siemens</li>

                    </ul>

                    <ul className="category__count">

                        <li>99</li>
                        <li>99</li>
                        <li>99</li>
                        <li>99</li>

                    </ul>
                </div>
            </div>
        </div>

    )

}

export default BrandFilter;