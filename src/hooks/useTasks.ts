import { useContext } from "react";
import { TaskContext } from "../providers/TaskContext";

export function useTasks() {
  return useContext(TaskContext);
}
