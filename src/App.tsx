import { FC } from "react";
import AddTask from "./components/AddTask";
import Logo from "./subcomponents/Logo";

const App: FC = () => {
  return (
    <div className="container">
      <Logo />
      <AddTask />
      <div className="tasks_operations"></div>
    </div>
  );
};
export default App;
