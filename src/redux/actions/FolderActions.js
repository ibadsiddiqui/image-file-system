import { ADD_FOLDER_TO_ROOT, ADD_IMAGE_TO_FOLDER, ADD_IMAGE_TO_ROOT, MOVE_FOLDER_FROM_ROOT_TO_LVL1, MOVE_IMAGE_FROM_ROOT_TO_LVL1, SET_FOLDER_NAME } from "../types"

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

export const moveImageToLvl1 = (data) => {
    return {
        type: MOVE_IMAGE_FROM_ROOT_TO_LVL1,
        payload: data
    }
}

export const moveFolderToLvl1 = (data) => {
    return {
        type: MOVE_FOLDER_FROM_ROOT_TO_LVL1,
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