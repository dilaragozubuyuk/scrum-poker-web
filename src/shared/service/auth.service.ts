import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService {

    constructor(private localStorageService: LocalStorageService) {

    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public setToken(token: any) {
        this.localStorageService.setItem('token', token);
    }

    public removeToken() {
        this.localStorageService.removeItem('token');
    }

    // public isAuthenticated(): boolean {
    //     // get the token
    //     const token = this.getToken();
    //     // return a boolean reflecting
    //     // whether or not the token is expired
    //     return tokenNotExpired(null, token);
    // }
}
