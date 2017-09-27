import { combineReducers } from 'redux';
import { FETCH_CHAPTERS, GET_FILES, SELECTED_QARI } from '../constants';

function chapters(state = [], action) {
    switch(action.type) {
      case FETCH_CHAPTERS:
        return action.data;
      default:
        return state;
    }
}

function audio_files(state = [], action) {
    switch(action.type) {
        case GET_FILES:
            return action.data;
        default:
            return state;
    }
}

function qari(state = [], action) {
    switch(action.type) {
        case SELECTED_QARI:
            return action.data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ 
    chapters,
    audio_files,
    qari
 });
  

export default rootReducer;