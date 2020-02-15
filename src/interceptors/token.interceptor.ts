import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from '../shared/service/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,
              public router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.auth.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });
      //return next.handle(request);
    }


    return next.handle(request).do((event: HttpEvent<any>) => {
    }, (response: any) => {
      if (response.status) {
        if (response.status === 504 || response.status === 502) {
          console.log(response);
        } else {
          if (response instanceof HttpErrorResponse) {
            if (response.error && response.error.code === 401) {
              this.router.navigate(['/login']);
            }
          }
        }
      }
    });
  }
}
