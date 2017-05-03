import { mergeWith } from 'lodash/object';
import * as types from "../constants/ActionType";
import * as _ from 'lodash';

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

function updateEntity(state, type, key, data) {
  const newEntity = _.merge({}, state[type][key], data);
  return mergeWith({}, state, {[type]: {[key]: newEntity}}, customizer());
}

export default function entityReducer(state = initialState, action) {

  if (action.entities) {
    return mergeWith({}, state, action.entities, customizer);
  }

  if (action.type === types.UPDATE_GALLERY) {
    return updateEntity(state, 'galleries', action.slug, action.data);
  }

  if (action.type === types.USER_UPDATE) {
    return updateEntity(state, 'users', action.id, action.data);
  }

  return state;
}

