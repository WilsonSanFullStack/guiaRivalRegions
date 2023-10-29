import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";
import thunkMiddleware from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "guiaRivalRegions",
  storage,
  whiteList: [
    
  ], 
  blacklist: [],
};
const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persitedReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);
const persistor = persistStore(store);

export default store;
export { persistor };
