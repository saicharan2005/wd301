// import React from 'react'
// import Task from './Task';

// import { TaskItem } from "./types";

// interface Props {
//   tasks: TaskItem[];
// }


// // eslint-disable-next-line @typescript-eslint/no-empty-object-type
// interface State {
//   // tasks: TaskItem[];
// }

// export default class TaskList extends React.Component<Props,State> {
//   // constructor(props:Props) {
//   //   super(props)
  
//   //   this.state = {
//   //     tasks: [],
//   //   }
//   // }
//   // componentDidMount() {
//   //   const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
//   //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   //   this.setState((state, props) => ({
//   //     tasks,
//   //   }));
//   // }

//   render() {
//     return this.props.tasks.map((task, idx) => <Task key={idx} title={task.title}   description={task.description} dueDate={task.dueDate}/>)
//   }
// }



// import React from 'react'
import Task from './Task';

import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}


const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      id={task.id} 
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      onDelete={() => props.deleteTask(idx)}
    />
  ));
  return <>{list}</>;
};


export default TaskList;


