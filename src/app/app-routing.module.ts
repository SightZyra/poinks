import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PointsComponent} from './components/points/points.component';
import {WhoWillStartComponent} from './components/who-will-start/who-will-start.component';
import {MainMenuComponent} from './components/menu/main-menu/main-menu.component';
import {PlayerMenuComponent} from './components/menu/player-menu/player-menu.component';
import {WhoWillStartMenuComponent} from './components/menu/who-will-start-menu/who-will-start-menu.component';

const routes: Routes = [

  {path: '', redirectTo: 'points', pathMatch: 'full'},
  {
    path: 'points',
    component: PointsComponent
  },
  {
    path: 'whoWillStart',
    component: WhoWillStartComponent
  },
  {
    path: '',
    outlet: 'menu',
    component: MainMenuComponent,
  },
  {
    path: 'mainMenu',
    outlet: 'menu',
    component: MainMenuComponent,
  },
  {
    path: 'playerMenu',
    outlet: 'menu',
    component: PlayerMenuComponent,
  },
  {
    path: 'whoWillStartMenu',
    outlet: 'menu',
    component: WhoWillStartMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
