import { AsyncStorage } from 'react-native';
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
// defaults to localStorage AsyncStorage for react-native
// import storage from "redux-persist/es/storage";
import FolderReducer from "../reducer/FolderReducer";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const rootReducer = combineReducers({
    folder: FolderReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
};

export default configureStore;