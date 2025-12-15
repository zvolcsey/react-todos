import { useState } from "react";
import AddTodo from "./components/Todos/AddTodo";
import TodoList from "./components/Todos/TodoList";
import type { Todo } from "./app/types";

const todoData: Todo[] = [
  { id: "t1", title: "Learn React", isCompleted: false },
  { id: "t2", title: "Learn TypeScript", isCompleted: false },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(todoData);

  let todosContent = <p>No todos yet - create a new one above!</p>;
  if (todos.length != 0) {
    todosContent = <TodoList todos={todos} />;
  }

  const handleDeleteTodo = (id: string) => {
    // Delete todo logic here
  };

  return (
    <>
      <header>
        <h1>React Todos</h1>
      </header>
      <main>
        <AddTodo />
        <section>
          <h2>Todos</h2>
          {todosContent}
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Zoltán Völcsey. MIT License.</p>
      </footer>
    </>
  );
}
