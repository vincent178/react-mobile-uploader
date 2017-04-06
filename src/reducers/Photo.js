import {RECEIVE_PHOTO} from '../constants/ActionType';

const initialState = [];

export default function photoReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_PHOTO:
      return Object.assign([], state, Array.from(new Set([...state, ...action.photos])) );
    default:
      return state;
  }
}