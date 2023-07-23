import React from "react";
import "./Home.css";
import { TodoWrapper } from "../../Components/ToDoList/TodoWrapper";

const Home = () => {
  return (
    <div className="main_Container">
      <TodoWrapper />
    </div>
  );
};

export default Home;
