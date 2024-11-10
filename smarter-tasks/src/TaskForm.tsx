import React from "react";


interface TaskFormProps {
  
}
interface TaskFormState {
  title: string;
}




class TaskForm extends React.Component<TaskFormProps,TaskFormState>{
  constructor(props:TaskFormProps){
    super(props)
    this.state = {
      title: ""
    }
  }
  addTask: React.FormEventHandler <HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log(`Submitted the form! ${this.state.title}`);
  
};

inputRef = React.createRef<HTMLInputElement>();
titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ title: event.target.value });
};
  render(){
    return(

      <div className="max-w-md  mx-auto p-4">

      
         <form action="" className="bg-gray-100 p-8 mb-4  rounded-lg border  shadow text-center gap-4 grid  grid-row-2" onSubmit={this.addTask} >
      <input className="rounded-lg h-8" type="text" value={this.state.title} onChange={this.titleChanged}/>
      <button className="bg-green-400  rounded-lg border shadow p-1" type="submit">Add item</button>

     </form>

     </div>
    
    
    )
  }
}

export default TaskForm;
