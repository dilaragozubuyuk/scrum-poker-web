import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    public getFibonacciList(count: number): number[] {
        const fibo = [];
        const list = [];

        fibo[0] = 0;
        fibo[1] = 1;

        for (let index = 2; index <= count; index++) {
            fibo[index] = fibo[index - 2] + fibo[index - 1];
            list.push(fibo[index]);
        }
        return list;
    }
}



