import { useEffect, useState } from "react";
import "./App.css";
import Statuses from "./components/statusInTasks";
import DATA from "./API/API";

function App() {
  const [state, setState] = useState({
    todo: [],
    blocked: [],
    inProgress: [],
    done: [],
  });

  useEffect(() => {
    DATA.map((el) => {
      switch (el.status) {
        case "done": {
          return setState((prev) => {
            return { ...prev, done: [...prev.done, el] };
          });
          break;
        }
        case "blocked": {
          setState((prev) => {
            return { ...prev, blocked: [...prev.blocked, el] };
          });
          break;
        }
        case "todo": {
          setState((prev) => {
            return { ...prev, todo: [...prev.todo, el] };
          });
          break;
        }
        case "inProgres": {
          setState((prev) => {
            return { ...prev, inProgress: [...prev.inProgress, el] };
          });
          break;
        }
      }
    });
  }, []);

  return (
    <div className="App">
      {Object.keys(state).map((el) => (
        <Statuses key={el} el={el} task={state[el]} />
      ))}
    </div>
  );
}

export default App;
