import { useState, useCallback, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Todo from "./components/Todo.jsx";
import getUsers from "./components/Users.js";

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
    // console.log(data.users);
    setUsers([...data.users]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("user State => ", users);
  return (
    <div>
      <Navbar handleTheme={handleTheme} />
      {/* <Todo
        theme={theme}
        todo={todo}
        todos={todos}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
      /> */}

      <section
        className={`text-gray-600 body-font ${
          theme === "dark" ? "bg-gray-700" : "bg-white"
        }`}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* ========================== */}
            {users.map((item) => {
              // console.log(item?.id)
              return (
                <div key={item?.id} className="xl:w-1/4 md:w-1/2 p-4 ">
                  <div
                    className={`bg-gray-100 p-6 rounded-lg  border-2 ${
                      theme === "dark" ? "bg-gray-700 border-white" : "bg-gray-700 border-black"
                    } `}
                  >
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={item?.image}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {item.company.title}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {item.company.name}
                    </h2>
                  </div>
                </div>
              );
            })}
            {/* ========================== */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
