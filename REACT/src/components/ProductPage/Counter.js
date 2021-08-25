import './ProductDetails.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus,} from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../../redux/actions';

function Counter(){

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return(

        
        <>
        
        <div className="counter">
            <div className="counter__button">
                <div className="counter__button--minus" onClick={() => dispatch(decrement())}>
                    <FontAwesomeIcon icon={faMinus}/>
                </div>
                <div className="counter__button--count" >
                    <input type="text" className="counter__button--counter" value={counter}/>
                </div>
                <div className="counter__button--plus" onClick={() => dispatch(increment())}>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </div>
        </div>

        </>

    )

}

export default Counter;