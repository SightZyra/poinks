import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointComponent } from './components/point/point.component';
import { MenuComponent } from './components/menu/menu.component';
import { PointsComponent } from './components/points/points.component';
import { WhoWillStartComponent } from './components/who-will-start/who-will-start.component';
import { DiceComponent } from './components/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    PointComponent,
    MenuComponent,
    PointsComponent,
    WhoWillStartComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
