import axios from "axios";
import React from "react";
async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log("gias trij res", res);
  return res.data;
}
getData();
export default async function page() {
  const users = await getData();
  return (
    <div>
      {users.map((item: any) => {
        return (
            <>
            <li key={item.id}>{item.name}</li>;
            <hr />
            </>
        )
      })}
    </div>
  );
}
