import React from "react"
import TaskCard from "./TaskCard"

function App() {
 

  return (

    <div className="max-w-3xl mx-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">Smarter Tasks</h1>
        <p className="text-sm text-gray-500">Project: Graduation Final Year Project (Revamp College Website)</p>
      </div>
  
    <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h1 className="text-lg font-semibold mb-4">pending</h1>
         <TaskCard title="Build the website with static content"
         date="Due Date: 10th April"
         assign="Assignee: Rohit S"/>

         <TaskCard title="Add a blog"
          date="Due Date: 20th April"
          assign="Assignee: Rohit m" />
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h1 className="text-lg font-semibold mb-4">Done</h1>
          <TaskCard  title="Design the mockup"
           date="Completed Date: 10th April"
           assign="Assignee: Rohit M" />
          <TaskCard title="Get the approval from principal" 
           date="Due Date: 20th April"
           assign="Assignee: Ajay S"/>
         
        </div>

    </div>
    </div>
  )
}



export default App
