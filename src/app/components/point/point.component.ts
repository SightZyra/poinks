import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent implements OnInit {
  @Input() upsidedown = false;
  public pointCounter = 50;

  constructor() { }

  ngOnInit() {
  }

}
