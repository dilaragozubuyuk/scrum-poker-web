import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    private url = 'http://localhost:3000';
    private socket: any;

    connect() {
        this.socket = io(this.url);
    }

    createRoom(id: string) {
        this.listenRoomConnection();
        this.socket.nsp = '/session';
        this.socket.emit('joinRoom', id);
    }

    // connectRoom(id) {
    //     this.socket.nsp = '/channel';
    //     this.socket.to()
    // }

    sendMessage(message) {
        this.socket.nsp = '/channel';
        this.socket.emit('message', message);
    }

    listenRoomConnection() {
        this.socket.on('joinedRoom', (data) => {
            console.log(data);
        });
    }

    // receiveMessage() {
    //     return this.socket.fromEvent('message');
    // }

}
