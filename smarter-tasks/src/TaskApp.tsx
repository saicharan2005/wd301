import React ,{ useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


interface TaskAppState {
  tasks: TaskItem[];
}

import { useLocalStorage } from "./hooks/useLocalStorage";



const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  useEffect(() => {
    document.title = `You have ${taskAppState.tasks.length} items`;
  }, [taskAppState.tasks]);

  
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };

  const deleteTask = (index: number) => {
    const updatedTasks = [...taskAppState.tasks];
    updatedTasks.splice(index, 1);
    setTaskAppState({ tasks: updatedTasks });
  };
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks }  onDelete={deleteTask}/>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;