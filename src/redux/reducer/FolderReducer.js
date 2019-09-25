import { ADD_FOLDER_TO_ROOT, SET_FOLDER_NAME } from "../types";

const initialState = {
    currentPosition: "",
    folderName: "",
    foldersList: {}
}

const FolderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLDER_NAME:
            return {
                ...state,
                folderName: action.payload
            }
        case ADD_FOLDER_TO_ROOT:
            return {
                ...state,
                foldersList: { ...action.payload }
            }
        default:
            return state;
    }
};

export default FolderReducer;