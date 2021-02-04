import {User} from "./User";
import {IComment} from "./Comment";

export interface IPost {
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

export class Post implements IPost {
    comments: Array<IComment> = [];
    content: string = "";
    created_at: Date = new Date();
    id: number = -1
    name: string = "";
    status_id: number = -1;
    updated_at: Date = new Date();
    user_id: number = -1;
    published_at?: Date = undefined;
}

