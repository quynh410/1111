"use client"
import React from "react";
import useSWR from "swr";
import axios from "axios";

 const getData = (url: string) => {
  return axios.get(url).then((res) => res.data);
};
export default function Page() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    getData
  );

  if (error) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  console.log("Fetched data:", data);

  return (
    <div>
      Fetch data with SWR
      {data.map((user: { id: number; name: string }) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
