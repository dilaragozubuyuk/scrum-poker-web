import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { User } from 'src/app/class/user';
import { UserService } from './user.service';
import { UserInterface } from 'src/app/interfaces/user.interfaces';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    constructor(private userService: UserService) {

    }

    private url = 'http://localhost:3000';
    private socket: any;

    public data = {
        connectedUser: []
    };

    public isStoryUpdated = false;

    connect() {
        this.socket = io(this.url);
    }

    setIsStoryUpdated(value: boolean) {
        this.isStoryUpdated = value;
    }

    setUser(id) {
        this.socket.emit('setUser', id);
    }

    createRoom(id: string, maxUser: number) {
        this.socket.nsp = '/session';

        this.socket.on(id, (data) => {
            console.log(data);
        });

        this.socket.on('point', (data) => {
            this.data.connectedUser.forEach(element => {
                if (element.id === data.user.id) {
                    element.point = data.point;
                }
            });
        });

        this.socket.on('joined', (data) => {
            this.data.connectedUser.push({
                ...data.user,
                point: 0
            });
        });

        this.socket.emit('joinRoom', {id, user: this.userService.user, maxUser});
    }

    sendPoint(point: any, id: string) {
        this.socket.emit('point', { point, id, user: this.userService.user});
    }

    setFinalScore(finalScore: number, id: string) {
        this.socket.emit('point', { finalScore, id });
    }

    // connectRoom(id) {
    //     this.socket.nsp = '/channel';
    //     this.socket.to()
    // }

    sendMessage(message) {
        this.socket.nsp = '/session';
        this.socket.emit('message', message);
    }

    leaveRoom(id: string, user: UserInterface) {
        this.socket.on('leftRoom', (data) => {
            console.log(data.user.name + 'is left');
            this.data[id].connectedUser.forEach((key, value) => {
                console.log(key, value);
                // if (element.id === data.user.id) {
                //     element.point = storyPoint;
                // }
            });
        });

        this.socket.nsp = '/session';
        this.socket.emit('leaveRoom', {id, user});
    }


    // receiveMessage() {
    //     return this.socket.fromEvent('message');
    // }

}
