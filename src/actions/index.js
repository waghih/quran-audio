import { 
    FETCH_CHAPTERS, 
    GET_FILES, 
    SELECTED_QARI,
    PLAY,
    MUSIC_PLAYER_SET_SELECTED_SONG_INDEX
} from '../constants';

export function setChapters(data) {
    const action = {
        type: FETCH_CHAPTERS,
        data
    }
    return action;
}

export function setAudioFiles(data) {
    const action = {
        type: GET_FILES,
        data
    }
    return action;
}

export function setSelectedQari(data) {
    const action = {
        type: SELECTED_QARI,
        data
    }
    return action;
}

export function playAudio(audio_file, relative_path) {
    const action = {
        type: PLAY,
        audio_file,
        relative_path
    }
    return action;
}

export function setSelectedAudioIndex(data, index) {
    const action = {
        type: MUSIC_PLAYER_SET_SELECTED_SONG_INDEX,
        data,
        index
    }
    return action;
}