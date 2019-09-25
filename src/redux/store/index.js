import { combineReducers, createStore } from "redux";

// import { persistStore, persistReducer } from "redux-persist";
// defaults to localStorage AsyncStorage for react-native
// import storage from "redux-persist/lib/storage"; 

import FolderReducer from "../reducer/FolderReducer";

const rootReducer = combineReducers({
    folder: FolderReducer,
});

const configureStore = () => {
    let store = createStore(rootReducer);
    return { store };
};

export default configureStore;