import './AccessoriesFilter.scss'

function AccessoriesFilter(){

    return(

        <div className="filter">

            <div className="filter__container">

                <div className="filter__header">
                    <h4>ACCESSORIES</h4>
                </div>
                <div className="filter__list">

                    <ul className="category">
                        <li><h6>Apple Car</h6></li>
                        <li><h6>Air port & wireless</h6></li>
                        <li><h6>Cables & Docks</h6></li>
                        <li><h6>Cases & Films</h6></li>
                        <li><h6>Charging Devices</h6></li>
                        <li><h6>Connected Home</h6></li>
                        <li><h6>Headphones</h6></li>
                    </ul>

                    <ul className="number">
                        <li><h6>2</h6></li>
                        <li><h6>48</h6></li>
                        <li><h6>14</h6></li>
                        <li><h6>15</h6></li>
                        <li><h6>23</h6></li>
                        <li><h6>1</h6></li>
                        <li><h6>95</h6></li>
                    </ul>

                </div>

            </div>

        </div>

    )

}

export default AccessoriesFilter;