import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    DashboardComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
