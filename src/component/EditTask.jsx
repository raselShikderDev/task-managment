/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../Featers/Task/taskSlice";

const EditTask = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleSaveBtn = () => {
    console.log(`Before: ${JSON.stringify(task)}`);
    dispatch(editTask({ id: task.id, title, description, status }));
    console.log(`After: ${JSON.stringify(task)}`);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="absolute top-1/2 bg-white p-4 overflow-hidden z-10 border rounded-md shadow-md min-w-56">
          <h3 className="text-xl text-gray-800 pb-1 font-bold">Edit task</h3>
          <div className=" flex flex-col items-center w-full gap-5">
            <input
              type="text"
              name="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task Title"
              className="focus:outline-none border-2 rounded border-gray-300 bg-white w-full px-3 pb-0.5 "
            />
            <textarea
              name="taskDescription"
              id="task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="focus:outline-none border-2 rounded border-gray-300 bg-white px-3 pb-0.5 w-full"
              placeholder="Task Description"
              rows={3}
            ></textarea>
            <select
              className="focus:outline-none border-2 rounded border-gray-300 bg-white px-3 pb-0.5 w-full"
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="To Do">To Do</option>
              <option value="Inprogress">Inprogress</option>
              <option value="Completed">Completed</option>
            </select>
            <div className="flex gap-3">
              <button
                type="submit"
                onClick={handleSaveBtn}
                className="shadow bg-blue-600 rounded-sm text-white font-semibold hover:bg-blue-500 active:bg-blue-800 px-4 py-1"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className=" shadow bg-red-600 rounded-sm text-white font-semibold hover:bg-red-500 active:bg-blue-800 px-3 py-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-600 active:bg-blue-500 text-white font-semibold px-4 py-1 hover:scale-105 rounded-sm shadow-md"
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default EditTask;
