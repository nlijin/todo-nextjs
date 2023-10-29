"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTodo = (todo) => {
    const newEntry = {
      id: Math.random(),
      todo: todo,
    };
    setList((prevList) => [...prevList, newEntry]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="flex flex-col items-center justify-start  ">
      <h1 className="text-2xl font-bold my-4 border-red-600">TodoList</h1>
      <div className="text-xl font-semibold max-w-md flex flex-nowrap">
        <input
          className="bg-gray-500 p-3 min-w-min"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              addTodo(input);
            }
          }}
        />
        <button
          className="bg-green-500 p-3 w-30%"
          onClick={() => addTodo(input)}
        >
          Add
        </button>
        <ul className="my-6">
          {list.map((todo) => (
            <li key={todo.id} className="flex justify-between p-2 my-4">
              {todo.todo}
              <button
                className="bg-red-400 px-3"
                onClick={() => deleteTodo(todo.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
