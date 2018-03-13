import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {MainComponent} from './main/main.component';
import {SettingsComponent} from './top-bar/top-content/settings/settings.component';
import {HistoryComponent} from './top-bar/top-content/history/history.component';
import {TopContentComponent} from './top-bar/top-content/top-content.component';
import {MangotreeComponent} from './top-bar/mangotree/mangotree.component';
import {MapComponent} from './map/map.component';
import {LogoBoxComponent} from './logo-box/logo-box.component';
import {ModalComponent} from './modal/modal.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NewChallengeComponent} from './modal/new-challenge/new-challenge.component';
import {MotivationComponent} from './motivation/motivation.component';
import {InfoComponent} from './info/info.component';
import {CommentComponent} from './comment/comment.component';
import {AcceptedChallengeComponent} from './accepted-challenge/accepted-challenge.component';
import {NewMapComponent} from './main/new-map/new-map.component';
import {PointsService} from './points.service';
import {FormsModule} from '@angular/forms';
import {MapService} from './map.service';
import {HaasteetService} from './haasteet.service';
import { ReversePipe } from './reverse.pipe';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MainComponent,
        SettingsComponent,
        HistoryComponent,
        TopContentComponent,
        MangotreeComponent,
        MapComponent,
        LogoBoxComponent,
        ModalComponent,
        NewChallengeComponent,
        MotivationComponent,
        InfoComponent,
        CommentComponent,
        AcceptedChallengeComponent,
        NewMapComponent,
        ReversePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        PointsService,
        MapService,
        HaasteetService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
