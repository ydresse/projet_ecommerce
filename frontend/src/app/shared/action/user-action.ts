import { User } from "../model/user";

export class ActionLogin {
    static readonly type = '[User] Add Login';

    constructor(public payload: User) {
    }
}

export class ActionJWT {
    static readonly type = '[User] Add JWT';

    constructor(public payload: string) {
    }
}



