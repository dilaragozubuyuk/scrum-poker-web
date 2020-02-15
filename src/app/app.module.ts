import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { AuthService } from 'src/shared/service/auth.service';
import { LocalStorageService } from 'src/shared/service/local-storage.service';
import { ScrumMasterViewModule } from './scrum-master-view/scrum-master-view.module';
import { DeveloperViewModule } from './developer-view/developer-view.module';
import { PlanModule } from './plan/plan.module';
import { SessionService } from 'src/shared/service/session.service';
import { UtilsService } from 'src/shared/service/utils.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScrumMasterViewModule,
    DeveloperViewModule,
    PlanModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    SessionService,
    LocalStorageService,
    UtilsService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: TokenInterceptor,
  //     multi: true
  // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
