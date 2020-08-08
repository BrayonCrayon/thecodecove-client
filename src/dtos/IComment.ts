import {User} from "./User";
import {Post} from "./Post";

export interface IComment {
    id: number,
    text: string,
    user_id: User,
    user: User,
    parent_id?: number,
    parent: IComment,
    post_id?: number,
    post: Post,
    comments: Array<IComment>
    created_at: Date,
    updated_at: Date,
}
