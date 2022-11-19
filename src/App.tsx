import { FC } from "react";
import AddTask from "./components/AddTask";
import { demoTasks } from "./data/demo_tasks";
import Logo from "./subcomponents/Logo";

const App: FC = () => {
  return (
    <div className="container">
      <Logo />
      <div className="tasks_operations">
        <AddTask />
        <table>
          <tr className="header">
            <th>
              <input type="checkbox" />
            </th>
            <th>Task</th>
            <th>Status</th>
            <th>Operations</th>
          </tr>
          {demoTasks.map(({ status, task }, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{task}</td>
              <td>
                <div className={`${status} status`}>
                  <div className="ellipsis"></div>
                  <div>{status.toUpperCase()}</div>
                </div>
              </td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default App;
