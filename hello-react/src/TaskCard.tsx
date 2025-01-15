import React from "react";


interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}


const TaskCard : React.FC<TaskCardProps> = ({ title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="bg-gray-50 border border-gray-300 p-4 rounded-md shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      {dueDate && (
        <p className="text-sm text-gray-500">Due on: {dueDate}</p>
      )}
      {completedAtDate && (
        <p className="text-sm text-gray-500">
          Completed on: {completedAtDate}
        </p>
      )}
      <p className="text-sm text-gray-500">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
