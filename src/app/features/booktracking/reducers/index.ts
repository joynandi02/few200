import * as fromTasks from './tasks.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoItem } from '../models';

export interface State {
  tasks: fromTasks.State;

}

export const reducers = {
  tasks: fromTasks.reducer
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<State>('addbooksFeature');

// 2. A Selector for each "branch" of that feature.
const selectTasksBranch = createSelector(selectFeature, f => f.tasks);
// 3. "Helpers"

const { selectAll: selectAllTaskEntities } = fromTasks.adapters.getSelectors(selectTasksBranch);

// 4. Component Selector

// TodoItem[] (list component)

export const selectAllTodoItems = createSelector(selectAllTaskEntities, t => t as TodoItem[]);
