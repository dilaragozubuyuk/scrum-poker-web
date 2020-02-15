import { Injectable } from '@angular/core';

@Injectable()

export class LocalStorageService {

    public getItem(item) {
        if (window.localStorage) {
            return window.localStorage.getItem(item);
        }

        return false;
    }

    public setItem(item, value) {
        window.localStorage.setItem(item, value);
    }

    public removeItem(item: any) {
        if (window.localStorage) {
            window.localStorage.removeItem(item);
        }
    }

    public clear() {
        if (window.localStorage) {
            window.localStorage.clear();
        }
    }
}
