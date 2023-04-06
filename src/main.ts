import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routes } from './app/routes';
import { provideHttpClient } from '@angular/common/http';
import './mocks/browser';

bootstrapApplication(AppComponent,
    {
        providers: [provideRouter(routes), provideHttpClient()]
    }
)