"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState("TodoList is empty");

  const addTodo = (todo) => {
    if (todo) {
      const newEntry = {
        id: Math.random(),
        todo: todo,
      };
      setList((prevList) => [...prevList, newEntry]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-bold my-8 text-sky-500">Todo App</h1>
      <ul className="my-6 h-[70vh] overflow-auto border-gray-800 border-2">
        {list.length == 0 ? (
          <h2 className="text-3xl my-20">Your todo list is empty</h2>
        ) : (
          list.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center capitalize p-2 my-4 text-xl"
            >
              {todo.todo}
              <button
                className="bg-red-600 px-6 py-1"
                onClick={() => deleteTodo(todo.id)}
              >
                x
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="text-xl font-semibold flex items-end">
        <input
          className="bg-gray-200 p-3 w-full text-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              addTodo(input);
            }
          }}
          placeholder="Add a task"
        />
        <button
          className="bg-green-700 py-3 px-6"
          onClick={() => addTodo(input)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
