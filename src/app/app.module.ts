import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointComponent } from './components/point/point.component';
import { PointsComponent } from './components/points/points.component';
import { WhoWillStartComponent } from './components/who-will-start/who-will-start.component';
import { DiceComponent } from './components/dice/dice.component';
import { PlayerMenuComponent } from './components/menu/player-menu/player-menu.component';
import { MainMenuComponent } from './components/menu/main-menu/main-menu.component';
import { WhoWillStartMenuComponent } from './components/menu/who-will-start-menu/who-will-start-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PointComponent,
    PointsComponent,
    WhoWillStartComponent,
    DiceComponent,
    PlayerMenuComponent,
    MainMenuComponent,
    WhoWillStartMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
