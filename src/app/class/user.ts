import { UserInterface } from '../interfaces/user.interfaces';

export class User implements UserInterface {
    name: string;
    id: string;
    type: string;
}
