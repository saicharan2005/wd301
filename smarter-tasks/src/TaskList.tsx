import React from "react";
import Task from "./Task";

import TaskItem from "./types";


interface Props{
  tasks:TaskItem[]}


interface state{
  
}

class TaskList extends React.Component<Props,state>{
  constructor(props:Props){
    super(props);
    this.state={
      tasks:[
      
      ],
    };
  }
  componentDidMount(): void {
 const tasks = [ {title:"pay rent"},
      {title:"pay bill"},
      {title:"buy grocery"},
      {title: "go gardening"}]

    this.setState(
      (_state)=>({tasks})
      )
  }

  // componentDidMount(): void {
    
  //   this.setState(
  //     {tasks: [ {title:"pay rent"},
  //     {title:"pay bill"},
  //     {title:"buy grocery"},
  //     {title: "go gardening"}]}
  //     )
  // }

  //nothing wil display
  // componentDidMount(): void {
  //   this.State={
  //     {tasks: [ {title:"pay rent"},
  //     {title:"pay bill"},
  //     {title:"buy grocery"},
  //     {title: "go gardening"}]}
  //   }
  // }
  render(){
    return( <>
    {this.props.tasks.map((task,idx) =>(
      <Task key={idx} title={task.title}/>
    )
  )}
    </>
    ) 
  }
}


export default TaskList;