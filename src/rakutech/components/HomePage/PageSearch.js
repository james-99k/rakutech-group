import './PageSearch.scss'

function PageSearch(){

    return(

    <div className="page_search">

    <input type="text" placeholder="Search query..." name="search" className="page_search_box"/>
    <button type="submit" className="search_button">SEARCH</button>

    </div>

    )

}

export default PageSearch;