import { ADD_FOLDER_TO_ROOT, ADD_IMAGE_TO_ROOT, SET_FOLDER_NAME, ADD_IMAGE_TO_FOLDER } from "../types"

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

export const addImageToRoot = (data) => {
    return {
        type: ADD_IMAGE_TO_ROOT,
        payload: data
    }
}

export const addImageToFolder = (data) => {
    return {
        type: ADD_IMAGE_TO_FOLDER,
        payload: data
    }
}