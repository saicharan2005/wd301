/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }
  // inputRef = React.createRef<HTMLInputElement>();
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
  
    if (id in this.state) {
      this.setState({
        [id]: value,
      } as unknown as TaskFormState);
    } else {
      console.error(`Unexpected input id: ${id}`);
      console.log("Valid state keys are:", Object.keys(this.state));
    }
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { title, dueDate } = this.state;
    if (!title || !dueDate) {
      alert("Title and Due Date are required!");
      return;
    }
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };
  render() {
    return (
      <form onSubmit={this.addTask} className="space-y-4">
        {/* <input type="text" ref={this.inputRef} /> */}
        <input
          type="text"
           id="title"
          placeholder="Title"
          value={this.state.title}
           onChange={this.handleInputChange}
          className="w-full p-2 border rounded"
          
        />
        <input
          type="date"
          id="dueDate"
          value={this.state.dueDate}
          onChange={this.handleInputChange}
          className="w-full p-2 border rounded"
         
        />
        <input
          type="text"
          id="description"
          placeholder="Description (optional)"
          value={this.state.description}
          onChange={this.handleInputChange}
          className="w-full p-2 border rounded"
          
        />
        <button     id="addTaskButton" type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add item
          </button>
      </form>
    );
  }
}
export default TaskForm;
