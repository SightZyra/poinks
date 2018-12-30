import {Component, Input, OnInit} from '@angular/core';
import {PointsService} from '../points/points.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {
  @Input() upsidedown = false;
  public pointCounts = 50;

  constructor(private pointService: PointsService) {
    this.pointService.resetPointsSubject.subscribe(resetPoints => {
      this.pointCounts = resetPoints;
    });
  }

  ngOnInit() {
  }

  public minusCount(event) {
    this.pointCounts--;
  }

  public plusCount(event) {
    this.pointCounts++;
  }
}
