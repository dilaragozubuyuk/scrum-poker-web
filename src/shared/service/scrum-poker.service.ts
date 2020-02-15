import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScrumPokerService {
    private readonly url = 'http://localhost:3000';

    constructor(
        private http: HttpClient,
    ) { }

    get(): Observable<any> {
        return this.http.get<any>(`${this.url}/socket`);
    }
}
