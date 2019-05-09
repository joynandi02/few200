import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as actions from '../actions/counter.action';

@Injectable()
export class CounterEffects {

  // @Effect({ dispatch: false }) lagAll$ = this.actions$
  //  .pipe(
  //    tap(a => console.log('Got anaction of type: ', a.type))
  //  );

  @Effect({ dispatch: false }) savecountBy$ = this.actions$
    .pipe(
      ofType(actions.SET_COUNT_BY),
      map(a => a as actions.CountBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    );

  @Effect() readCountBy$ = this.actions$
    .pipe(
      ofType(actions.LOAD_COUNT_BY),
      map(() => localStorage.getItem('by')),
      filter(by => by !== null),
      map(a => +a as 1 | 3 | 5),
      map(a => new actions.CountBySet(a))

    );
  constructor(private actions$: Actions) {

  }
}
