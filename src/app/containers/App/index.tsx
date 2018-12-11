import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { TodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';

import { omit } from 'app/utils';
import { Header, MainBody } from 'app/components';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
  (key) => TodoModel.Filter[key]
);


export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todos: RootState.TodoState;
    actions: TodoActions;
    filter: TodoModel.Filter;
  }
}

@connect(
  (state: RootState, ownProps): Pick<App.Props, 'todos' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || TodoModel.Filter.SHOW_ALL;
    return { todos: state.todos, filter };
  },
  (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
    actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props> {

  constructor(props: App.Props, context?: any) {
    super(props, context);
  }

  render() {
    
    const { topHeaderMenu, mainHeaderMenu, iconArray, options } = this.props.todos[0];

    return (
      <div className={style.normal}>
        <Header headerMenu={topHeaderMenu}/>
        <MainBody 
          headerMenu={mainHeaderMenu} 
          icons={iconArray}
          options={options} />
      </div>
    );
  }
}
