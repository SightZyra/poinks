import {Component, ElementRef, Input, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit, AfterViewInit {
  @Input() upsidedown = false;
  private dice;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dice = this.elementRef.nativeElement.querySelector('.dice');
  }

  public rotateDice() {
    const min = 1;
    const max = 24;
    const xRand = this.getRandom(max, min);
    const yRand = this.getRandom(max, min);

    this.dice.style.webkitTransform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    this.dice.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
  }

  private getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }
}
