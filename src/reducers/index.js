import { combineReducers } from 'redux';
import { FETCH_CHAPTERS, GET_FILES, SELECTED_QARI, MUSIC_PLAYER_SET_SELECTED_SONG_INDEX, PLAY } from '../constants';

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

function selectedIndex(state = [], action) {
    switch(action.type) {
        case MUSIC_PLAYER_SET_SELECTED_SONG_INDEX:
            return {
                data: action.data,
                index: action.index
            };
        default:
            return state;
    }
}

function audioplayer(state = [], action) {
    switch(action.type) {
        case PLAY: {
            console.log(action);
            // let file = {}
            // file = new Audio()
            return state;
        }
        default: 
            return state;
    }
}

const rootReducer = combineReducers({ 
    chapters,
    audio_files,
    qari,
    selectedIndex,
    audioplayer
 });
  

export default rootReducer;