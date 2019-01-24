import {Component, OnInit} from '@angular/core';
import {PointsService} from './points.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
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
