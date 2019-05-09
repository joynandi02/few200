import * as actions from '../actions/task.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface TaskEntity {
  id: string;
  title: string;
}

export interface State extends EntityState<TaskEntity> {

}

const initialState: State = {
  ids: ['1'],
  entities: {
    1: {
      id: '1', title: 'Wash Cars'
    }
  }

};

export const adapters = createEntityAdapter<TaskEntity>();


export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.TITLE_ADDED: {
      const titleToAdd: TaskEntity = { id: action.id, title: action.title };
      return adapters.addOne(titleToAdd, state);
    }
    default: {
      return state;
    }
  }
}
