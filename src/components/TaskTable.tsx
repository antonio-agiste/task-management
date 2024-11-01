import { useTasks } from "../hooks/useTasks";
import { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

type TaskTableProps = {
  onEditTask: (task: Task) => void;
  onAddTask: () => void;
};

export function TaskTable({ onEditTask, onAddTask }: TaskTableProps) {
  const { tasks } = useTasks();

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Description</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Status</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Priority</div>
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((e) => {
              return (
                <TaskItem
                  key={e.id}
                  task={e}
                  onClickEdit={() => onEditTask(e)}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => onAddTask()}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
