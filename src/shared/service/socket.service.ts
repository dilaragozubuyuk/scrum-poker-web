import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { User } from 'src/app/class/user';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    private url = 'http://localhost:3000';
    private socket: any;

    public data = {
        user: new User()
    };

    connect() {
        this.socket = io(this.url);
    }

    setUser(id) {
        this.socket.emit('setUser', id);
    }

    createRoom(id: string) {
        this.socket.nsp = '/session';

        this.socket.on(id, (data) => {
           console.log(data);
        });

        this.socket.on('joined', (count) => {
            if (this.data && this.data[id] && this.data[id].connectedUser.length) {
                this.data[id].connectedUser.push({
                    id: count,
                    name: 'Voter ' + count,
                    type: 'developer',
                    point: 0
                });
            } else {
                this.data[id] = { connectedUser: [{
                    id: count,
                    name: 'Scrum Master ' + 1,
                    type: 'master',
                    point: 0
                }]};
            }

            this.data.user.id = count;
        });

        this.socket.emit('joinRoom', id);
    }

    sendPoint(point: number, id: string) {

        this.socket.on('point', (storyPoint) => {
            this.data[id].connectedUser.forEach(element => {
                if (element.id === this.data.user.id) {
                    element.point = storyPoint;
                }
            });
        });

        this.socket.emit('point', {point, id});
    }

    setFinalScore(finalScore: number, id: string) {
        this.socket.emit('point', {finalScore, id});
    }

    // connectRoom(id) {
    //     this.socket.nsp = '/channel';
    //     this.socket.to()
    // }

    sendMessage(message) {
        this.socket.nsp = '/session';
        this.socket.emit('message', message);
    }


    // receiveMessage() {
    //     return this.socket.fromEvent('message');
    // }

}
