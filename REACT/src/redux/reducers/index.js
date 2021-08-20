import counterReducer from "./counter";
import logged from "./islogged";
import cartReducers from "./cartReducers";
import { combineReducers } from "redux";



const reducers = combineReducers({

    counter: counterReducer,
    logged : logged,
    shop: cartReducers

});

export default reducers;