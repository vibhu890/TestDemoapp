// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { importProvidersFrom, inject, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      
    ),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    CookieService,
    JwtHelperService,
    {
      provide: JWT_OPTIONS,
      useFactory: () => ({
        tokenGetter: () => inject(CookieService).get('access_token'),
        
      })
    }, provideAnimationsAsync()
  ]
});
