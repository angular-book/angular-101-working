import { Routes } from "@angular/router";
import { DisplayingDataComponent, GuideComponent } from './components';
export const routes: Routes = [
    {
        path: 'guide',
        component: GuideComponent,

    },
    {
        path: 'displaying-data',
        component: DisplayingDataComponent
    },
    {
        path: '**',
        redirectTo: 'guide'
    }
]