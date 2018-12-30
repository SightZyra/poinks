import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PointsService} from '../points/points.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,
              public pointsService: PointsService) {
  }

  ngOnInit() {
  }

  public showHome() {
    return this.router.url.indexOf('points') === -1;
  }

  public whoWillStart() {
    this.router.navigate(['/whoWillStart']);
  }

  public points() {
    this.router.navigate(['/points']);
  }
}
