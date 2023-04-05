import { Routes } from "@angular/router";
import { ComponentCommunicationComponent, DisplayingDataComponent, GuideComponent } from './components';
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
        path: 'component-communication',
        component: ComponentCommunicationComponent
    },
    {
        path: '**',
        redirectTo: 'guide'
    }
]