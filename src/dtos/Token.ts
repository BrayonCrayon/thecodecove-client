export interface IToken {
    id: number,
    name: string,
    abilities: Array<string>,
    tokenable_id: number,
    tokenable_type: string,
    last_used_at: Date,
    updated_at: Date,
    created_at: Date,
}

export class Token implements IToken {
    abilities: Array<string> = [];
    created_at: Date = new Date();
    id: number = -1;
    last_used_at: Date = new Date();
    name: string = "";
    tokenable_id: number = -1;
    tokenable_type: string = "";
    updated_at: Date = new Date();

}