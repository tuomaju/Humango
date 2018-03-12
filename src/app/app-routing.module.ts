import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SettingsComponent} from './top-bar/top-content/settings/settings.component';
import {HistoryComponent} from './top-bar/top-content/history/history.component';
import {MainComponent} from './main/main.component';
import {TopContentComponent} from './top-bar/top-content/top-content.component';
import {MangotreeComponent} from './top-bar/mangotree/mangotree.component';
import {NewChallengeComponent} from './modal/new-challenge/new-challenge.component';
import {MotivationComponent} from './motivation/motivation.component';
import {InfoComponent} from './info/info.component';
import {CommentComponent} from './comment/comment.component';
import {AcceptedChallengeComponent} from './accepted-challenge/accepted-challenge.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'topContent',
        component: TopContentComponent,
        outlet: 'topOutlet',
        children: [
            {
                path: 'settings',
                component: SettingsComponent,
                outlet: 'historyOutlet'
            },
            {
                path: '',
                component: HistoryComponent,
                outlet: 'historyOutlet'
            },
            {
                path: 'history',
                component: HistoryComponent,
                outlet: 'historyOutlet'
            }
        ]
    },
    {
        path: 'mangotree',
        component: MangotreeComponent,
        outlet: 'topOutlet'
    },
    {
        path: 'motivation',
        component: MotivationComponent,
        outlet: 'topOutlet'
    },
    {
        path: 'newChallenge',
        component: NewChallengeComponent,
        outlet: 'modalOutlet'
    },
    {
        path: 'info',
        component: InfoComponent,
        outlet: 'modalOutlet'
    },
    {
        path: 'acceptedChallenge',
        component: AcceptedChallengeComponent,
        outlet: 'modalOutlet'
    },
    {
        path: 'comment',
        component: CommentComponent,
        outlet: 'modalOutlet'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
