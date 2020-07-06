import {User} from "./User";

export interface Post {
    id: number;
    name: string;
    content: string;
    user_id: number;
    user: User;
    created_at: Date;
    updated_at: Date;
}
