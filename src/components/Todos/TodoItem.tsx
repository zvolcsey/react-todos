import type { Todo } from "../../app/types";

interface TodoItemProps {
  todo: Todo;
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({
  todo,
  onToggleCompletion,
  onDelete,
}: TodoItemProps) {
  const { id, title, isCompleted } = todo;

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggleCompletion(id)}
      />
      <span>{title}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
