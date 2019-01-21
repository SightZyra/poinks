import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  public playerCountAsArray: number[] = [];
  public playerCount = 3;

  constructor() {
  }

  ngOnInit() {
    this.playerCountAsArray = Array(this.playerCount).fill(1).map((x, i) => i + 1);
  }

}
