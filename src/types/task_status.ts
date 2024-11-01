export const TASK_STATUS = ["To-Do", "In Progress", "Done"] as const;
export type TaskStatus = (typeof TASK_STATUS)[number];
