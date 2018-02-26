import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './top-bar/top-content/settings/settings.component';
import { HistoryComponent } from './top-bar/top-content/history/history.component';
import { TopContentComponent } from './top-bar/top-content/top-content.component';
import { MangotreeComponent } from './top-bar/mangotree/mangotree.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponent,
    SettingsComponent,
    HistoryComponent,
    TopContentComponent,
    MangotreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
