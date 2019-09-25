import { SET_FOLDER_NAME, ADD_FOLDER_TO_ROOT } from "../types"

export const setFolderName = (name) => {
    return {
        type: SET_FOLDER_NAME,
        payload: name
    }
}

export const addFolder = (data) => {
    return {
        type: ADD_FOLDER_TO_ROOT,
        payload: data
    }
}