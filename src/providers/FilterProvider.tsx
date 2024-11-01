import { useState } from "react";
import { useDebounce } from "use-debounce";
import { PriorityLevel } from "../types/priority_level";
import { TaskStatus } from "../types/task_status";
import { FilterContext } from "./FilterContext";

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 500);

  const [status, setStatus] = useState<TaskStatus[]>([]);
  const [priority, setPriority] = useState<PriorityLevel[]>([]);

  const [sortBy, setSortBy] = useState<string>("title");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        debouncedSearch,
        status,
        setStatus,
        priority,
        setPriority,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
