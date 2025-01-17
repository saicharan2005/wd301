// import React from "react";
// import { TaskItem } from "./types";
// interface TaskFormProps {
//   addTask: (task: TaskItem) => void;
// }
// interface TaskFormState {
//   title: string;
//   description: string;
//   dueDate: string;
// }
// class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
//   constructor(props: TaskFormProps) {
//     super(props);
//     this.state = {
//       title: "",
//       description: "",
//       dueDate: "",
//     };
//   }
//   // inputRef = React.createRef<HTMLInputElement>();
//   handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = event.target;

//     if (id in this.state) {
//       this.setState({
//         [id]: value,
//       } as unknown as TaskFormState);
//     } else {
//       console.error(`Unexpected input id: ${id}`);
//       console.log("Valid state keys are:", Object.keys(this.state));
//     }
//   };

//   addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
//     event.preventDefault();
//     const { title, dueDate } = this.state;
//     if (!title || !dueDate) {
//       alert("Title and Due Date are required!");
//       return;
//     }
//     const newTask = {
//       title: this.state.title,
//       description: this.state.description,
//       dueDate: this.state.dueDate
//     };
//     this.props.addTask(newTask);
//     this.setState({ title: "", description: "", dueDate: "" });
//   };
//   render() {
//     return (
//       <form onSubmit={this.addTask} className="space-y-4">
//         {/* <input type="text" ref={this.inputRef} /> */}
//         <input
//           type="text"
//            id="title"
//           placeholder="Title"
//           value={this.state.title}
//            onChange={this.handleInputChange}
//           className="w-full p-2 border rounded"

//         />
//         <input
//           type="date"
//           id="dueDate"
//           value={this.state.dueDate}
//           onChange={this.handleInputChange}
//           className="w-full p-2 border rounded"

//         />
//         <input
//           type="text"
//           id="description"
//           placeholder="Description (optional)"
//           value={this.state.description}
//           onChange={this.handleInputChange}
//           className="w-full p-2 border rounded"

//         />
//         <button     id="addTaskButton" type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//           Add item
//           </button>
//       </form>
//     );
//   }
// }
// export default TaskForm;

import React from "react";
import { TaskItem } from "./types";
import { v4 as uuidv4 } from "uuid";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
 
  title: string;
  description: string;
  dueDate: string;
}
const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });

  //   const [title, setTitle] = React.useState("");
  // const [description, setDescription] = React.useState("");
  // const [dueDate, setDueDate] = React.useState("");

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }

    const newTask: TaskItem = {
      id: uuidv4(),
      ...formState,
    };

    props.addTask(newTask);
    setFormState({ title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={addTask}>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoTitle"
            name="todoTitle"
            type="text"
            value={formState.title}
            onChange={titleChanged}
            className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="todoTitle"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Todo Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDescription"
            name="todoDescription"
            type="text"
            value={formState.description}
            onChange={descriptionChanged}
            className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="todoDescription"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="todoDueDate"
            name="todoDueDate"
            type="date"
            value={formState.dueDate}
            onChange={dueDateChanged}
            className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="todoDueDate"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Due Date
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Add item
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
