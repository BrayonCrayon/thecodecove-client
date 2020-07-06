import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';
import {IStoreState} from "../store/StoreState";
import {blogReducer} from "./BlogReducer";

export const RootReducer = combineReducers<IStoreState>({
    authState: authReducer,
    blogState: blogReducer,
});

export type RootState = ReturnType<typeof RootReducer>;