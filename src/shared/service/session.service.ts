import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionInterface } from 'src/app/interfaces/session.interface';


@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private url = 'http://localhost:3000';
    session: SessionInterface;

    constructor(private http: HttpClient,
    ) { }

    // setList(list: Array<string>) {
    //     this.storyList = list;
    // }

    // getList(): Array<string> {
    //     return this.storyList;
    // }

    // setName(list: string) {
    //     this.name = list;
    // }

    // getName(): string {
    //     return this.name;
    // }

    // setNumberOfVoters(list: number) {
    //     this.numberOfVoters = list;
    // }

    // getNumberOfVoters(): number {
    //     return this.numberOfVoters;
    // }

    setSession(session: SessionInterface) {
        this.session = session;
    }

    getSession(sessionId: string) {
        return this.http.get<any>(`${this.url}/session/` + sessionId);
    }

    createSession(params): Observable<any> {
        return this.http.post<any>(`${this.url}/session`, params);
    }

}
