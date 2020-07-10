import {Post} from "../dtos/Post";
import {getInitialPostObj} from "../store/StoreState";

export function findPostById(id: number, posts: Array<Post>) {
    const post = posts.find(p => p.id === id);
    return post ? post : getInitialPostObj();
}