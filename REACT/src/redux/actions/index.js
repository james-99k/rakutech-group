
// //REDUX
// import {createStore} from 'redux'

// //ACTION 
// const increment = () =>{
//   return{
//     type:'INCREMENT'
//   }
// }
// const decrement = () =>{
//   return{
//     type:'DECREMENT'
//   }
// }

// //REDUCER
// const counter = (state=0, action) =>{

//   switch(action.type){
//       case 'INCREMENT':
//         return state + 1;
//       case 'DECREMENT':
//         return state - 1;
//   }

// };

// let store = createStore(counter);

// //DISPLAY
// store.subscribe(()=> console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());

export const increment = () => {

    return{
        type: 'INCREMENT'
    };

};

export const decrement = () => {

    return{
        type: 'DECREMENT'
    }

}