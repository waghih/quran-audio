import { combineReducers } from 'redux';
import { 
    FETCH_CHAPTERS,
    GET_FILES, 
    SELECTED_QARI, 
    MUSIC_PLAYER_SET_SELECTED_SONG_INDEX, 
    PLAY, 
    AUDIO_URL, 
    PAUSE,
    PLAY_PAUSE,
    UPDATE,
    FINISH
} from '../constants';

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
                ...state,
                data: action.data,
                index: action.index
            };
        default:
            return state;
    }
}

function audioplayer(state = [], action) {
    let audio = null
    switch(action.type) {
        case PLAY: {
            audio = new Audio(`${AUDIO_URL}/${action.relative_path}${action.audio_file.file_name}`)
            audio.play();
            return {
                ...state,
                playing: true,
                started: true,
                audio
            };
        }
        case PLAY_PAUSE: {
            action.audio.play();
            return {
                ...state,
                playing: true
            };
        }
        case PAUSE: {
            action.audio.pause();
            return {
                ...state,
                playing: false
            };
        }
        case UPDATE: {
            action.previousAudio.pause();
            audio = new Audio(`${AUDIO_URL}/${action.relative_path}${action.audio_file.file_name}`)
            audio.play();
            return {
                ...state,
                playing: true,
                started: true,
                audio
            };
        }
        case FINISH: {
            return {
                ...state,
                playing: false,
                started: false
            }
        }
        default: 
            return {
                ...state,
                playing: false,
                started: false,
                audio: null
            };
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