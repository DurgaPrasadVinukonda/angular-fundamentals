import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CountingService {

  count: number = 0;

  private counterSubject = new BehaviorSubject<number>(this.count);

  counter$ = this.counterSubject.asObservable();

  constructor() { }

  increment() {
    this.counterSubject.next(++this.count);
  }
}
