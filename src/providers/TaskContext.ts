import { createContext } from "react";
import { Task } from "../types/task";

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
  setTasks: (tasks: Task[]) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
) as React.Context<TaskContextType>;
