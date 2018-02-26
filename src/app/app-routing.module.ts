import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SettingsComponent} from './top-bar/top-content/settings/settings.component';
import {HistoryComponent} from './top-bar/top-content/history/history.component';
import {MainComponent} from './main/main.component';
import {TopContentComponent} from './top-bar/top-content/top-content.component';
import {MangotreeComponent} from './top-bar/mangotree/mangotree.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: '',
        component: TopContentComponent
    },
    {
        path: 'topContent',
        component: TopContentComponent,
        children: [
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: '',
                component: HistoryComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            }
        ]
    },
    {
        path: 'mangotree', component: MangotreeComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
