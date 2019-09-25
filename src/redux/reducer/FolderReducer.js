import { ADD_FOLDER_TO_ROOT, ADD_IMAGE_TO_ROOT, SET_FOLDER_NAME } from "../types";

const initialState = {
    currentPosition: "",
    folderName: "",
    foldersList: {
        name: "root",
        path: '/',
        type: "folder",
        data: []
    }
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
                foldersList: {
                    ...state.foldersList,
                    data: [...state.foldersList.data, action.payload]
                }
            }
        case ADD_IMAGE_TO_ROOT:
            return {
                ...state,
                foldersList: {
                    ...state.foldersList,
                    data: [...state.foldersList.data, action.payload]
                }
            }
        default:
            return state;
    };
}
export default FolderReducer;