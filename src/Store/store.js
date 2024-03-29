// store.js
import { createStore } from 'redux';

const initialState = {
  weather: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_WEATHER':
      return { ...state, weather: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;