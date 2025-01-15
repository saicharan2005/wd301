import React from 'react'
import Task from './Task'

import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface State {
  // tasks: TaskItem[];
}

export default class TaskList extends React.Component<Props,State> {
  // constructor(props:Props) {
  //   super(props)
  
  //   this.state = {
  //     tasks: [],
  //   }
  // }
  // componentDidMount() {
  //   const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   this.setState((state, props) => ({
  //     tasks,
  //   }));
  // }

  render() {
    return this.props.tasks.map((task, idx) => <Task key={idx} title={task.title} />)
  }
}
