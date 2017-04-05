import {RECEIVE_PHOTO} from '../constants/ActionType';

const initialState = {
  items: []
};

export default function photoReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_PHOTO:
      return Object.assign({}, state, {
        items: Array.from(new Set([...state.items, ...action.photos]))
      });
    default:
      return state;
  }
}