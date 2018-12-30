import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private startpoints = 50;

  public resetPointsSubject = new BehaviorSubject(this.startpoints);

  constructor() {
  }

  public resetPoints() {
    this.resetPointsSubject.next(this.startpoints);
  }
}
