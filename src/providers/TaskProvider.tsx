import { useEffect, useState } from "react";
import { Task } from "../types/task";
import { TaskContext } from "./TaskContext";
import { tasksCREATE, tasksGET, tasksUPDATE } from "../api/tasks";
import { TaskStatus } from "../types/task_status";
import { PriorityLevel } from "../types/priority_level";
import { useFilters } from "../hooks/useFilters";

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const filtersData = useFilters();

  const addTask = (task: Task) => {
    // Fire and forget using optimistic add
    tasksCREATE(task);
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask: Task) => {
    // Fire and forget using optimistic update
    tasksUPDATE(updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const getTasks = async (
    query?: string,
    sortBy?: string,
    order?: string,
    status?: TaskStatus[],
    priority?: PriorityLevel[]
  ) => {
    const response = await tasksGET(
      query ?? "",
      sortBy ?? "",
      order ?? "",
      status ?? [],
      priority ?? []
    );

    if (typeof response === "string") {
      alert(response);
      return;
    }

    setTasks(response);
  };

  // Can be done better
  useEffect(() => {
    getTasks(
      filtersData.debouncedSearch,
      filtersData.sortBy,
      filtersData.sortOrder,
      filtersData.status,
      filtersData.priority
    );
  }, [
    filtersData.debouncedSearch,
    filtersData.sortBy,
    filtersData.sortOrder,
    filtersData.status,
    filtersData.priority,
  ]);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
