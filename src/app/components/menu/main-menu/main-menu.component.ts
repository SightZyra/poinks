import {Component, OnInit, AfterViewInit} from '@angular/core';
import {PointsService} from '../../points/points.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, AfterViewInit {
  public showMenu: boolean = false;
  private splitterElement: Element;

  constructor(public pointsService: PointsService) {
  }

  ngOnInit() {
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMenu ? this.addClass() : this.removeClass();
  }

  private addClass() {
    this.splitterElement.classList.add('show-menu');
    this.splitterElement.classList.remove('hide-menu');
  }

  private removeClass() {
    this.splitterElement.classList.remove('show-menu');
    this.splitterElement.classList.add('hide-menu');
  }

  public ngAfterViewInit(): void {
    this.splitterElement = window.document.getElementById('splitter-container');
  }
}
