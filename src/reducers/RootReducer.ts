import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';
import {IStoreState} from "../store/StoreState";
import {blogReducer} from "./BlogReducer";
import {aboutMeReducer} from "./AboutMeReducer";

export const RootReducer = combineReducers<IStoreState>({
    authState: authReducer,
    blogState: blogReducer,
    aboutMeState: aboutMeReducer,
});

export type RootState = ReturnType<typeof RootReducer>;