import {Component, OnInit} from '@angular/core';
import {PointsService} from '../../points/points.service';

@Component({
  selector: 'app-player-menu',
  templateUrl: './player-menu.component.html',
  styleUrls: ['./player-menu.component.scss']
})
export class PlayerMenuComponent implements OnInit {

  constructor(private pointsService: PointsService) {
  }

  ngOnInit() {
  }

  public changeLayout(layout: number) {
    this.pointsService.changePlayerCount(layout);
  }
}
