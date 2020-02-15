import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class InitService {
    constructor(private http: HttpClient) {}

    private readonly url = 'http://localhost:3000';

    username: any;
    response: any;

    getInitData(): Observable<any> {
        return this.http.get<any>(`${this.url}/profile`);
    }

    init(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getInitData().subscribe(
                data => {
                    this.response = data;
                    console.log(this.response);
                    return resolve(data);
                }, err => {
                    return reject(err);
                }
            );
        });
    }
}
