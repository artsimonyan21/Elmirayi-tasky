import React from "react";
import Task from "../task";

export default function Statuses({ el, task }) {
  console.log(task);

  return (
    <div className="statuses">
      <h3>{el}</h3>

      {task.map((el, index) => {
        return <Task key={index} {...el} />;
      })}
    </div>
  );
}
