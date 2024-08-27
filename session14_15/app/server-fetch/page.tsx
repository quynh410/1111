import React from "react";
/**
dung fetch lay du lieu va render du lieu phia server 

 */
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  return data;
}
export default async function page() {
  const users = await getData();
  return (
    <div>
      tim nap du lieu server vs fetch !
      {users.map ((item: any) => {
        return <li>{item.name}</li>;
      })}
    </div>
  );
}