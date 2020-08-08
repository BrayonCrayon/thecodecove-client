
export interface User {
    id: number;
    name: string;
    email: string;
    emailVerified?: Date;
    avatar?: string,
    provider?: string,
    provider_id?: number,
}
