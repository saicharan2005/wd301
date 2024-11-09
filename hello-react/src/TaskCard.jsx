import "./TaskCard.css"


const TaskCard = (props) =>{
  return (
    <div className="bg-white p-4 mb-4 rounded-lg border">
    <h1 className=" font-medium ">{props.title}</h1>
    <p className="text-sm text-gray-500">{props.date}</p>
    <p className="text-sm text-gray-500">{props.assign}</p>
  </div>
  )

}

export default TaskCard