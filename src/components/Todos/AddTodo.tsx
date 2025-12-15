import { useState } from "react";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submit logic here
  };

  return (
    <form>
      <label htmlFor="add-todo">New Todo</label>
      <input
        type="text"
        id="add-todo"
        value={newTodo}
        onChange={handleNewTodo}
      />
      <button type="submit" onClick={handleSubmit}>
        Add New Todo
      </button>
    </form>
  );
}
