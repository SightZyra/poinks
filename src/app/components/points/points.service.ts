import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private startpoints = 50;
  private startPlayerCount = 2;

  public resetPointsSubject = new BehaviorSubject(this.startpoints);
  public changePlayerCountSubject = new BehaviorSubject(this.startPlayerCount);

  constructor() {
  }

  public resetPoints() {
    this.resetPointsSubject.next(this.startpoints);
  }

  public changePlayerCount(value: number) {
    this.changePlayerCountSubject.next(value);
  }
}
