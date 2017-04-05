'use strict';

import { mergeWith } from 'lodash/object';

const initialState = {
  photos: {},
  topics: {},
  users: {},
  notifications: {}
};

function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return Array.from(new Set([...objValue.concat(srcValue)]));
  }
}

export default function entity(state = initialState, action) {

  if (action.entities) {
    return mergeWith({}, state, action.entity, customizer);
  }

  console.log(state);

  return state;
}