import type { Todo } from "../../app/types";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { title, isCompleted } = todo;

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={() => {}} />
      <span>{title}</span>
      <button>Delete</button>
    </li>
  );
}
