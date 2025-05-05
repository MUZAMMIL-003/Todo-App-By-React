import { useState, useCallback, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Todo from "./components/Todo.jsx";
import getUsers from "./components/Users.js";
import UserCards from "./components/UserCards.jsx";
import Home from "./components/Home.jsx";
import UserDetails from "./components/UserDetails.jsx";

function App() {
  const [users, setUsers] = useState([]);
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

  const fetchData = async () => {
    const data = await getUsers();
    setUsers([...data.users]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className={`h-[100vh] ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}
    >
      <Navbar theme={theme} handleTheme={handleTheme} />

      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route
          path="/todo"
          element={
            <Todo
              theme={theme}
              todo={todo}
              todos={todos}
              setTodo={setTodo}
              handleAddTodo={handleAddTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
            />
          }
        />

        <Route path="/users">
          <Route index element={<UserCards users={users} theme={theme} />} />
          <Route path=":id" element={<UserDetails theme={theme} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
