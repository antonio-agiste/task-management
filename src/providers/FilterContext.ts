import { createContext } from "react";
import { PriorityLevel } from "../types/priority_level";
import { TaskStatus } from "../types/task_status";

export type FilterContextType = {
  search: string;
  setSearch: (search: string) => void;
  debouncedSearch: string;
  status: TaskStatus[];
  setStatus: (status: TaskStatus[]) => void;
  priority: PriorityLevel[];
  setPriority: (priority: PriorityLevel[]) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  sortOrder: string;
  setSortOrder: (sortOrder: string) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
) as React.Context<FilterContextType>;
