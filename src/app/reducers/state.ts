import { TodoModel, LabelModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  router?: any;
  siteData?: RootState.siteState;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type siteState = LabelModel[];
} 