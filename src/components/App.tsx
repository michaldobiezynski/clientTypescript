import React from "react";
import { connect } from "react-redux";
import { fetchTodos, Todo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hi there!</div>;
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
