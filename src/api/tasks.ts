import { Task } from "../types/task";

// TODO: Figure out queries using json-server
export async function tasksGET(
  q?: string,
  orderBy: string = "title",
  order: string = "asc",
  statusFilters: string[] = [],
  priorityFilters: string[] = []
): Promise<Task[] | string> {
  try {
    const url = new URL("http://localhost:3000/tasks");

    if (statusFilters.length) {
      statusFilters.forEach((status) => {
        url.searchParams.append("status", status);
      });
    }

    if (priorityFilters.length) {
      priorityFilters.forEach((priority) => {
        url.searchParams.append("priority", priority);
      });
    }

    url.searchParams.append("_sort", `${order === "asc" ? "" : "-"}${orderBy}`);
    if (q) {
      url.searchParams.append("title", q);
      url.searchParams.append("description", q);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error("An error occurred");
    }

    const json = await response.json();

    return json;
  } catch (error) {
    return (error as Error).message ?? "An error occurred";
  }
}

export async function tasksCREATE(task: Task): Promise<Task | null> {
  try {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("An error occurred");
    }

    return task;
  } catch (error) {
    console.error("tasksCREATE", error);
    return null;
  }
}

export async function tasksUPDATE(task: Task): Promise<Task | null> {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("An error occurred");
    }

    return task;
  } catch (error) {
    console.error("tasksUPDATE", error);
    return null;
  }
}
