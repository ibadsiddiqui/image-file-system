import { addFolder, addImageToRoot, setFolderName, addImageToFolder } from "../actions/FolderActions"

export const mapStateToProps = (state) => {
    return {
        currentPosition: state.folder.currentPosition,
        folderName: state.folder.folderName,
        foldersList: state.folder.foldersList,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        setFolderName: (name) => dispatch(setFolderName(name)),
        addFolder: (data) => dispatch(addFolder(data)),
        addImageToRoot: (data) => dispatch(addImageToRoot(data)),
        addImageToFolder: (data) => dispatch(addImageToFolder(data))
    }
}