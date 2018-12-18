import {Component, Input, OnInit} from '@angular/core';
import {PointCounterService} from './point-counter.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {
  @Input() upsidedown = false;
  public pointCounts = 50;

  constructor() {
  }

  ngOnInit() {
  }

  public minusCount(event) {
    this.pointCounts --;
  }

  public plusCount(event) {
    this.pointCounts ++;
  }
}
