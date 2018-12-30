import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PointsComponent} from './components/points/points.component';
import {WhoWillStartComponent} from './components/who-will-start/who-will-start.component';

const routes: Routes = [

  {path: '', redirectTo: 'points', pathMatch: 'full'},
  {
    path: 'points',
    component: PointsComponent
  },
  {
    path: 'whoWillStart',
    component: WhoWillStartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
