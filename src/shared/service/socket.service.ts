import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    private url = 'http://localhost:3000';
    private socket: any;

    public data = {};

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
                    type: 'developer'
                });
            } else {
                this.data[id] = { connectedUser: [{
                    id: 1,
                    name: 'Scrum Master ' + 1,
                    type: 'master'
                }]};
            }
        });

        this.socket.emit('joinRoom', id);

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
