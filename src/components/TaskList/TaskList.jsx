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
          return <AcceptTask key={Date()}/>
        }
        if(elem.newTask){
          <NewTask key={Date()}/>
        }
        if(elem.completed){
          <CompleteTask key={Date()}/>
        }
        if(elem.failed){
          <FailedTask key={Date()}/>
        }
      })}
    </div>
  );
};

export default TaskList;
