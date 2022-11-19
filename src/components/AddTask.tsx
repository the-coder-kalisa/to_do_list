import { FC } from "react";
import Plus from "../assets/Plus";

const AddTask: FC = () => {
  return (
    <div className="add_task">
      <button className="add_task_button">
        <Plus />
        <span>Add New Task</span>
      </button>
    </div>
  );
};
export default AddTask;
