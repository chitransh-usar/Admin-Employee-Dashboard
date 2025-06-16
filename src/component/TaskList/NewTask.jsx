import React from "react";

const newTask = ({data}) => {
    return(
        <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 p-4 rounded-xl">
                <div className="flex justify-between item-center">
                    <h3 className="bg-red-700 px-3 py-1 rounded-xl text-sm">{data.category}</h3>
                    <h4 className="text-sm">{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-bold">{data.taskTitle}</h2>
                <p className="text-sm mt-2 ">{data.taskDescription}</p>
          <div className="mt-4">
            <button className="w-full bg-blue-700 rounded-xl py-1">Accept Task</button>

          </div>
            </div>     
    )
}

export default newTask;