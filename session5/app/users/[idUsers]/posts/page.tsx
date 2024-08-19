"use client";
import React from "react";

export default function page(props: any) {
  const { params } = props;
  const posts = [
    {
      idUsers: 1,
      idPost: 123,
      title: "Bài viết 1",
      content: "Nội dung bài viết 1",
      author: "Tác giả 1",
    },
    {
      idUsers: 2,
      idPost: 126,
      title: "Bài viết 2",
      content: "Nội dung bài viết 2",
      author: "Tác giả 2",
    },
    {
      idUsers: 3,
      idPost: 163,
      title: "Bài viết 3",
      content: "Nội dung bài viết 3",
      author: "Tác giả 3",
    },
  ];

  let postFilter = posts.filter((item) => {
    return item.idUsers == params.idUsers;
  });
  console.log(postFilter);

  return (
    <div>
      Danh sách bài viết của user có id là : {params.idUsers}
      <br />
      {postFilter.map((item, index) => {
        return <li key={item.idPost}>{item.content}</li>;
      })}
    </div>
  );
}
