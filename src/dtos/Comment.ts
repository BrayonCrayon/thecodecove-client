import {User} from "./User";
import {Post} from "./Post";

export interface IComment {
    id: number,
    text: string,
    user_id?: User,
    user?: User,
    parent_id?: number,
    parent?: IComment,
    post_id?: number,
    post?: Post,
    comments: Array<IComment>
    created_at: Date,
    updated_at: Date,
}

export class Comment implements IComment {
    comments: Array<IComment> = [];
    created_at: Date = new Date();
    id: number = -1;
    parent?: IComment;
    parent_id: number = -1;
    post?: Post;
    post_id: number = -1;
    text: string = "";
    updated_at: Date = new Date();
    user?: User;
    user_id?: User;

}
