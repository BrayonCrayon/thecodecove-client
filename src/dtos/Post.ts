import {User} from "./User";
import {IComment} from "./IComment";

export interface Post {
    id: number;
    name: string;
    content: string;
    status_id: number;
    published_at?: Date;
    user_id: number;
    user?: User;
    comments: Array<IComment>
    created_at: Date;
    updated_at: Date;
}
