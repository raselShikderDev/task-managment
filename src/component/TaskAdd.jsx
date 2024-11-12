import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../Featers/Task/taskSlice";


const TaskAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch()

  const handelSubmit = (e) => {
   
    e.preventDefault()
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      status: status,
    };
    dispatch(addTask(newTask))
    setTitle("")
    setDescription("")
    setStatus("")
  };

  return (
    <div className="space-y-1">
      <h3 className="text-2xl text-gray-800 font-bold">Add New Task</h3>
      <div>
        <form onSubmit={handelSubmit}>
          <div className=" flex flex-col items-center w-full gap-5">
            <input
              type="text"
              name="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task Title"
              className="focus:outline-none border-2 rounded border-gray-300 bg-white w-full px-3 pb-0.5 "
              required
            />
            <textarea
              name="taskDescription"
              id="task"
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
              className="focus:outline-none border-2 rounded border-gray-300 bg-white px-3 pb-0.5 w-full"
              placeholder="Task Description"
              rows={3}
              required
            ></textarea>
            <select
              className="focus:outline-none border-2 rounded border-gray-300 bg-white px-3 pb-0.5 w-full"
              name="status"
              id="status"
              value={status}
              onChange={(e)=> setStatus(e.target.value)}
              required
            >
              <option value="To Do">To Do</option>
              <option value="Inprogress">Inprogress</option>
              <option value="Completed">Completed</option>
            </select>
            <button
              type="submit"
              className="block shadow bg-blue-600 rounded-sm text-white font-semibold hover:bg-blue-500 active:bg-blue-800 w-full py-1"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskAdd;
