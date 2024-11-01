import { Task } from "../types/task";

type TaskItemProps = {
  task: Task;
  onClickEdit: () => void;
};

export function TaskItem({ task, onClickEdit }: TaskItemProps) {
  return (
    <tr key={task.id}>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {task.title}
      </td>
      <td className="px-6 py-4">{task.description}</td>
      <td className="px-6 py-4">{task.status}</td>
      <td className="px-6 py-4">{task.priority}</td>
      <td className="px-6 py-4">
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => onClickEdit()}
        >
          Edit
        </a>
      </td>
    </tr>
  );
}
