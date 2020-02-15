import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private readonly url = 'http://localhost:3000';

    constructor(
        private http: HttpClient,
    ) { }

    login(params): Observable<any> {
        return this.http.post<any>(`${this.url}/auth/login`, params);
    }
}
