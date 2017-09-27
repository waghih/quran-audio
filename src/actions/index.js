import { FETCH_CHAPTERS, GET_FILES, SELECTED_QARI } from '../constants';

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