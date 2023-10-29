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
    <div className="text-center max-w-xl mx-auto my-2 border-2 border-gray-800">
      <h1 className="text-4xl font-bold my-8 text-sky-500">Todo App</h1>
      <ul className=" h-[60vh] overflow-auto border-t-2 border-gray-700 bg-gradient-to-b from-yellow-600 to-white">
        {list.length == 0 ? (
          <h2 className="text-3xl my-20">Your todo list is empty</h2>
        ) : (
          list.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center capitalize px-2 my-4 text-xl bg-gradient-to-r from-sky-500 to-grey-800"
            >
              {todo.todo}
              <button
                className="bg-gradient-to-b from-red-400 to-red-800 px-6 py-1"
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
          className="bg-gradient-to-r from-gray-200 to-white p-3 w-full text-black ring-offset-0"
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
          className="bg-gradient-to-r from-sky-400 to-sky-700 py-3 px-6"
          onClick={() => addTodo(input)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
