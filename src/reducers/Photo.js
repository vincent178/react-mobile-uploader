import {RECEIVE_PHOTO, REMOVE_PHOTO} from '../constants/ActionType';
import * as _ from 'lodash';

const initialState = [];

export default function photoReducer(state = initialState, action) {

  switch(action.type) {

    case RECEIVE_PHOTO:
      return Array.from(new Set([...state, ...action.photos]));

    case REMOVE_PHOTO:
      return _.remove(state, (uuid) => uuid === action.uuid);

    default:
      return state;
  }
}