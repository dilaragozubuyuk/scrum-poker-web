import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interfaces';
import { User } from 'src/app/class/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user = new User();

    setUser(user) {
        this.user.id = user.id;
        this.user.name = user.name;
        this.user.type = user.type;
    }
}
