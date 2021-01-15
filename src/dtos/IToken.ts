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