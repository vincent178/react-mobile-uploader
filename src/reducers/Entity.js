import { mergeWith } from 'lodash/object';

const initialState = {
  photos: {},
  topics: {},
  users: {},
  notifications: {},
  galleries: {}
};

function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return Array.from(new Set([...objValue.concat(srcValue)]));
  }
}

export default function entityReducer(state = initialState, action) {

  if (action.entities) {
    return mergeWith({}, state, action.entities, customizer);
  }

  return state;
}