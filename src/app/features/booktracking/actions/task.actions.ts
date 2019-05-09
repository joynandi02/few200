import { Action } from '@ngrx/store';

let maxId = 99;

export const TITLE_ADDED = 'title added';
export class AddedTask implements Action {
  readonly type = TITLE_ADDED;
  id: string;
  constructor(public title: string) {
    this.id = 'T' + (maxId++).toString();
  }
}


export type All =
  AddedTask;
