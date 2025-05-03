import { useState, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: false },
    { id: 3, title: "Todo 3", completed: false },
  ]);
  const handleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };
  const handleAddTodo = useCallback(() => {
    if (todo.trim() === "") return;

    const newTodos = [
      ...todos,
      {
        id: Date.now() * Math.floor(Math.random() + 9),
        title: todo.trim(),
        completed: false,
      },
    ];

    setTodos(newTodos);
    setTodo("");
  }, [todo, todos]);
  const handleDeleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((t) => t.id !== id));
    },
    [todos]
  );
  const handleToggleTodo = useCallback(
    (id) => {
      setTodos(
        todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    },
    [todos]
  );
  console.log("theme =>", theme);

  const users = fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then(console.log);

  return (
    <div>
      <Navbar handleTheme={handleTheme} />
      {/* ============================================ */}

      <Todo
        theme={theme}
        todo={todo}
        todos={todos}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default App;
