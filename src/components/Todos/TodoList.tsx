import TodoItem from "./TodoItem";
import type { Todo } from "../../app/types";

interface TodoListProps {
  todos: Todo[];
  onToggleTodoCompletion: (id: string) => void;
}

export default function TodoList({
  todos,
  onToggleTodoCompletion,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCompletion={onToggleTodoCompletion}
        />
      ))}
    </ul>
  );
}
