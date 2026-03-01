import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);
  
  return (
    <div
      id="tasklist"
      className=" flex items-center justify-start gap-5 flex-nowrap h-[55%] py-5 w-full mt-10 overflow-x-auto"
    >
      {data.tasks.map((elem)=> {
        if(elem.active){
          return <AcceptTask key={Math.random()} data={elem} />
        }
        if(elem.newTask){
          <NewTask key={Math.random()} data={elem} />
        }
        if(elem.completed){
          <CompleteTask key={Math.random()} data={elem} />
        }
        if(elem.failed){
          <FailedTask key={Math.random()} data={elem} />
        }
      })}
    </div>
  );
};

export default TaskList;
