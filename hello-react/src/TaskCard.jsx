const TaskCard = (props) => {
  return (
    <div className="bg-gray-50 border border-gray-300 p-4 rounded-md shadow">
      <h2 className="text-lg font-semibold">{props.title}</h2>
      {props.dueDate && (
        <p className="text-sm text-gray-500">Due on: {props.dueDate}</p>
      )}
      {props.completedAtDate && (
        <p className="text-sm text-gray-500">
          Completed on: {props.completedAtDate}
        </p>
      )}
      <p className="text-sm text-gray-500">Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
