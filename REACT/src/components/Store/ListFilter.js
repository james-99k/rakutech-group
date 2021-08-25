import './ListFilter.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTh } from "@fortawesome/free-solid-svg-icons"

function ListFilter(){

    return(

        <div className="list__filter">

            <div className="container">

                <div className="filter__one">
                    <input type="text" placeholder="0" value=""/>
                    <p>Items</p>
                </div>

                <div className="filter__two">
                <p>Sort By</p>
                <select name="name_filter" id="name__filter" placeholder="Name">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                </select>
                </div>

                <div className="filter__three">
                <p>Show</p>
                <select name="name_filter" id="display__filter">
                    <option value="Option1">Option 1</option>
                </select>
                </div>

                <div className="filter__buttons">
                    <i><FontAwesomeIcon icon={faTh}/></i>
                    <i><FontAwesomeIcon icon={faBars}/></i>
                </div>
            </div>

        </div>

    );


}

export default ListFilter;