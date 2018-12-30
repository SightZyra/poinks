import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
  @Input() upsidedown = false;

  public diceNumber = 6;
  public rotateDice = false;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleDice() {
    this.rotateDice = !this.rotateDice;
    if (!this.rotateDice) {
      this.diceNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      console.log('test', this.diceNumber);
    }
  }

}
