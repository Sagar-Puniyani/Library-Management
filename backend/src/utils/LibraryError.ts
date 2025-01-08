export class unableToSaveError extends Error {
    constructor(message : string) {
        super (message );
    }
}

export class InvalidCredentialsError extends Error {
    constructor(message : string) {
        super (message );
    }
}
