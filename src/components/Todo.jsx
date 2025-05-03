import React from "react";

const Todo = ({
  theme,
  todo,
  todos,
  setTodo,
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
}) => {
  return (
    <div
      className={`h-[100vh] flex justify-center items-center ${
        theme === "dark" ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className={`max-w-md mx-auto mt-10 p-4 border rounded-md shadow-md ${
        theme === "dark" ? "border-2 border-white" : "border-2 border-black"
      }`}>
        <h1
          className={`text-3xl font-bold text-center mb-4 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Todo App
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a todo"
            className="flex-1 p-2 border border-gray-400 rounded-md"
          />
          <button
            onClick={handleAddTodo}
            disabled={todo.trim() === ""}
            className={`ml-2 px-4 py-2 rounded-md text-white ${
              todo.trim() === ""
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Add
          </button>
        </div>

        {todos.map((t) => (
          <div
            key={t.id}
            className={`flex items-center justify-between mb-2 p-2 border rounded-md ${
              theme === "dark" ? "bg-white text-black" : "bg-gray-400"
            }`}
          >
            <h2
              onClick={() => handleToggleTodo(t.id)}
              className={`flex-1 cursor-pointer text-lg ${
                t.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {t.title}
            </h2>
            <button
              onClick={() => handleDeleteTodo(t.id)}
              className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
