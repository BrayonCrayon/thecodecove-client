import { RootReducer } from '../reducers/RootReducer'
import thunk from "redux-thunk";
import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {IStoreState} from "./StoreState";
import axios from "axios";
import {BaseUrl} from "../Constants";
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

export function configureStore() : Store<IStoreState> {
    const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
    return createStore(RootReducer, {}, composeEnhancers);
}

export const store = configureStore();

export const apiAxios = axios.create({
    baseURL: BaseUrl,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});
