//Post.jsx
import React from "react";

function Post(props) {
  console.log(props);
  console.log(props.student);
  console.log(props.score);
  return (
    <>
      {/* <h2>Profile : {props.myId} </h2>
      <p>{props.children}</p> */}

      <p>Content from Post</p>
      <h2>Student Name : {props.student} </h2>
      <h3>Score : {props.score} </h3>
    </>
  );
}

export default Post;
