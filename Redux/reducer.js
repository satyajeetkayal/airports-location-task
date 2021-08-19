import {STORE_DATA} from './actionType';

const initialState = {
  oData: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA: {
      return {...state, oData: action.payload};
    }
  }
  return state;
};
export default storeReducer;
