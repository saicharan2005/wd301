import React from "react";


interface TaskProps{
  title:string;
}



class Task extends React.Component<TaskProps>{
  render(){
    return <div className="text-lg text-center bg-sky-500">{this.props.title}</div>
  }
}


export default Task