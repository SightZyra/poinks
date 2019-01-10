import { Component, OnInit } from '@angular/core';
import {PointsService} from '../../points/points.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(public pointsService: PointsService) { }

  ngOnInit() {
  }
  public whoWillStart() {
    // this.router.navigate(['/whoWillStart']);
  }
}
