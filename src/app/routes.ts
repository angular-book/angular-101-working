import { Routes } from "@angular/router";
import { ComponentCommunicationComponent, DisplayingDataComponent, GuideComponent } from './components';
import { ShowsComponent } from "./components/shows/shows.component";
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
        path: 'shows',
        component: ShowsComponent
    },
    {
        path: '**',
        redirectTo: 'guide'
    }
]