import './Pagination.scss'

function Pagination(){

    return(

        <div className="pagination">

            <div className="container">
                
                <button className="page">1</button>
                <button className="page">2</button>
                <button className="page active">3</button>
                <button className="page">4</button>
                <button className="page">5</button>
                
            </div>

        </div>

    )

}

export default Pagination;