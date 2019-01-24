import { Component, OnInit } from '@angular/core';
import {PointsService} from '../points/points.service';

@Component({
  selector: 'app-who-will-start',
  templateUrl: './who-will-start.component.html',
  styleUrls: ['./who-will-start.component.scss']
})
export class WhoWillStartComponent implements OnInit {
  public playerCountAsArray: number[] = [];
  public playerCount: number;

  constructor(private pointsService: PointsService) {
  }

  ngOnInit() {
    this.pointsService.changePlayerCountSubject
      .subscribe(count => {
        this.playerCount = count;
        this.createPlayerArray();
      });
  }

  private createPlayerArray() {
    this.playerCountAsArray = Array(this.playerCount).fill(1).map((x, i) => i + 1);
  }
}
