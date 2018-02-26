import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {HistoryComponent} from './history/history.component';
import {MainComponent} from './main/main.component';
import {TopContentComponent} from './top-content/top-content.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'top-content',
        component: TopContentComponent
    },
    {
        path: 'settings',
        component: SettingsComponent,
    },
    {
        path: 'history',
        component: HistoryComponent,
    },
    {
        path: '',
        component: HistoryComponent,
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
