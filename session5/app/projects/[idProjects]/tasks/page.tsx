"use client";
import React from "react";

export default function Page(props: any) {
  const { params } = props;
  const task = [
    {
      idProjects: 1,
      idTask: 23565,
      title: "Task 1",
      completed: false,
    },
    {
      idProjects: 2,
      idTask: 1234,
      title: "Task 2",
      completed: true,
    },
    {
      idProjects: 2,
      idTask: 234567,
      title: "Task 3",
      completed: false,
    },
    {
      idProjects: 3,
      idTask: 234567,
      title: "Task 3",
      completed: false,
    },
  ];

  const taskFill = task.filter((item) => {
    return item.idProjects == params.idProjects;
  });

  console.log("Filtered Tasks:", taskFill);

  return (
    <div>
      Danh sách nhiệm vụ của dự án có ID: {params.idProjects}
      <ul>
        {taskFill.map((item, index) => (
          <li key={item.idTask}>{item.idTask}</li>
        ))}
      </ul>
    </div>
  );
}
