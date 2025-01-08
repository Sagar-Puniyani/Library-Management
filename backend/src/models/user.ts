export interface IUser {
    type : 'ADMIN' | 'EMPLOYEE' | 'PATRON';
    name: string;
    email: string;
    password: string;
}