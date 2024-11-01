import { PriorityLevel } from "./priority_level";
import { TaskStatus } from "./task_status";

export type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: PriorityLevel;
};
