import { ADD_FOLDER_TO_ROOT, ADD_IMAGE_TO_FOLDER, ADD_IMAGE_TO_ROOT, MOVE_FOLDER_FROM_ROOT_TO_LVL1, MOVE_IMAGE_FROM_ROOT_TO_LVL1, SET_FOLDER_NAME } from "../types";

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
        case MOVE_IMAGE_FROM_ROOT_TO_LVL1:
            const imageToMoveIDData = { ...state.foldersList.data.find(item => item.id == action.payload.imageToMoveID) }
            return {
                ...state,
                foldersList: {
                    ...state.foldersList,
                    data: state.foldersList.data
                        .filter((item, idx) => item.id !== action.payload.imageToMoveID)
                        .map((item, idx) =>
                            item.id === action.payload.moveToFolderID ?
                                item.data.length === 0 ?
                                    {
                                        ...item,
                                        data: [imageToMoveIDData]
                                    }
                                    :
                                    {
                                        ...item,
                                        data: [`...item.data`, imageToMoveIDData]
                                    }
                                : item
                        )
                }
            }
        case MOVE_FOLDER_FROM_ROOT_TO_LVL1:
            const folderToMoveIDData = { ...state.foldersList.data.find(item => item.id == action.payload.folderToMoveID) }
            return {
                ...state,
                foldersList: {
                    ...state.foldersList,
                    data: state.foldersList.data
                        .filter((item, idx) => item.id !== action.payload.folderToMoveID)
                        .map((item, idx) =>
                            item.id === action.payload.moveToFolderID ?
                                item.data.length === 0 ?
                                    {
                                        ...item,
                                        data: [folderToMoveIDData]
                                    }
                                    :
                                    {
                                        ...item,
                                        data: [...item.data, folderToMoveIDData]
                                    }
                                : item
                        )
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
        case ADD_IMAGE_TO_FOLDER:

            return {
                ...state,
                foldersList: {
                    ...state.foldersList,
                    data: state.foldersList.data.map(item => {
                        if (item.id === action.payload.folderID) {
                            return item.data.length === 0 ?
                                {
                                    ...item,
                                    data: [action.payload.imageData]
                                } :
                                {
                                    ...item,
                                    data: [...item.data, action.payload.imageData]
                                }
                        } else {
                            return item
                        }
                    })
                }
            }
        default:
            return state;
    };
}
export default FolderReducer;