// import React from "react";
// import './TaskCard.css'
// interface TaskProp{
//   title:string;
//   description: string;
//   dueDate: string;
// }
// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//       <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//       <p className="text-sm text-slate-500">
//         Due Date: {this.props.dueDate}
//       </p>
//       <p className="text-sm text-slate-500">
//         Description: {this.props.description||  "No description"}
//       </p>
//     </div>
//     )
//   }
// }

// export default Task;

import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps extends TaskItem {
  onDelete: () => void;
}
const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        
        onClick={props.onDelete}
      >
        Delete Task
      </button>
    </div>
  );
};

export default Task;
