import {Action, Selector, State, StateContext} from '@ngxs/store';
import { ActionLogin, ActionJWT } from '../action/user-action';
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { UserStateModel } from './user-model';

@State<UserStateModel>({
    name: 'account',
    defaults: {
        token: '',
        user: new User
    }
})

@Injectable()
export class UserState {

    @Selector()
    static getToken(state: UserStateModel): string {
        return state.token;
    }

    @Selector()
    static getLogin(state: UserStateModel): string {
        return state.user.login;
    }

    @Selector()
    static getId(state: UserStateModel): number {
        if (state.user.idUser == null)
            return -1;
        return state.user.idUser;
    }

    @Selector()
    static getUser(state: UserStateModel): User {
        return state.user;
    }

    @Action(ActionJWT)
    ajoutJWT(
        {patchState}: StateContext<UserStateModel>,
        {payload}: ActionJWT
    ): void {
        patchState({
            token: payload
        });
    }

    @Action(ActionLogin)
    ajoutUtilisateur(
        {patchState}: StateContext<UserStateModel>,
        {payload}: ActionLogin
    ): void {
        patchState({
            user: payload,
        });
    }
}
