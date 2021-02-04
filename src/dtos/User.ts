import {IToken} from "./Token";

export interface IUser {
    id: number;
    name: string;
    email: string;
    emailVerified?: Date;
    avatar?: string,
    provider?: string,
    provider_id?: number,
    tokens?: Array<IToken>,
}

export class User implements IUser
{
    email: string = "";
    id: number = -1;
    name: string = "";
    emailVerified?: Date;
    avatar?: string;
    provider?: string;
    provider_id?: number;
    tokens?: Array<IToken>;

}