import React from "react";

import "./TaskCard.css";
import { TaskItem } from "./types";


interface TaskProps extends TaskItem {
  onDelete: () => void; // Function to handle deletion
}




 const Task =(props:TaskProps)=>{
  return (
    <li className="TaskItem shadow-md border border-slate-100 flex justify-between items-center">
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {props.description}
      </p>
    </div>
    <button
        className="deleteTaskButton bg-red-500 text-white px-3 py-1 rounded"
        onClick={props.onDelete}
      >
        Delete
      </button>
    </li>
  );
 }
export default Task