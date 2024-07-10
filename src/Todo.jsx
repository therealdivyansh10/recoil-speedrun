import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./assets/recoil/todos";

const Todo = () => {

  return (
    <div>
      <TodoCard id={1} />
      <TodoCard id={2} />
    </div>
  )
};

export default Todo;

const TodoCard = ({id}) => {
  const current = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
    <h3>{current.title}</h3>
    <h2>{current.description}</h2>
  </div>
  )
}