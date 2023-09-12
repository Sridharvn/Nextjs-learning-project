import React from "react";

const NewUserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return <div>NewUserPage</div>;
};

export default NewUserPage;
