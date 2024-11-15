import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
  
}



// const TaskList = (props: Props) => {
//   return props.tasks.map((task, idx) => (
//     <Task
//       key={idx}
//       title={task.title}
//       description={task.description}
//       dueDate={task.dueDate}
//     />
//   ));
// };

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      onDelete={() => props.onDelete(idx)}
    />
  ));
  return <>{list}</>;
};


export default TaskList;


