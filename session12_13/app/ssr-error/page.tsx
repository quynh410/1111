import React from "react";

async function getSt() {
  const res = await fetch("https://jsonplaceholder.typicode.com/nonexistent-url");
  if (!res.ok) {
    console.error("Error fetching data");
    return null; // Return null if the fetch fails
  }
  const data = await res.json();
  return data;
}

export default async function Page() {
  const st = await getSt();

  if (!st || !Array.isArray(st)) {
    return (
      <div>
        <p>Xử lí lỗi với SSR</p>
        <p>Error loading data or incorrect data format.</p>
      </div>
    );
  }

  return (
    <div>
      <p>Xử lí lỗi với SSR</p>
      <ul>
        {st.map((item: any, index: number) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
