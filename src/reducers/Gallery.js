import * as types from "../constants/ActionType";

const initialState = [];


export default function galleryReducer(state = initialState, action) {

  switch(action.type) {

    case types.RECEIVE_GALLERY:
      return Array.from(new Set([...state, action.topics]));

    case types.GALLERY_COMMENTS_LIST:
      return {
        ...state,
      };

    default:
      return state;
  }
}