

export interface IStatus {
    id: number,
    name: string,
    created_at: Date,
    updated_at: Date,
}

export class Status implements IStatus {
    created_at: Date = new Date();
    id: number = -1;
    name: string = "";
    updated_at: Date = new Date();
}