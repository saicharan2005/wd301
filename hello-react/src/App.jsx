import TaskCard from "./TaskCard";
import React from "react";

function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">Smarter Tasks</h1>
        <h3 className="text-xl text-gray-600 mb-6">
          Project: Graduation Final Year Project (Revamp College Website)
        </h3>

        {/* Grid Layout for Pending and Done */}
        <div className="grid grid-cols-2 gap-8">
          {/* Pending Section */}
          <div className="bg-white border-2 border-gray-400 rounded-2xl p-6 shadow-sm   ">
            <h2 className="text-xl font-bold mb-4 text-center  text-gray-600">Pending</h2>
            <div className="space-y-4">
              <TaskCard
                title="Build the website with static content"
                dueDate="10th April"
                assigneeName="Rohit S"
              />
              <TaskCard
                title="Add a blog"
                dueDate="22nd March"
                assigneeName="Rohit M"
              />
            </div>
            {/* New Task Input */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="+ New task"
                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-600"
              />
            </div>
          </div>

          {/* Done Section */}
          <div className="bg-white border-2 border-gray-400 rounded-2xl p-6 shadow-sm  ">
            <h2 className="text-xl font-bold mb-4 text-center  text-gray-600">Done</h2>
            <div className="space-y-4">
              <TaskCard
                title="Design the mockup"
                completedAtDate="10th April"
                assigneeName="Rohit M"
              />
              <TaskCard
                title="Get the approval from principal"
                completedAtDate="20th April"
                assigneeName="Ajay S"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
