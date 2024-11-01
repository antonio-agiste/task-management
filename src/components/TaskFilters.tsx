import { useFilters } from "../hooks/useFilters";
import { PRIORITY_LEVEL } from "../types/priority_level";
import { TASK_STATUS } from "../types/task_status";

export function TaskFilters() {
  const {
    search,
    setSearch,
    status,
    setStatus,
    priority,
    setPriority,
    setSortBy,
    setSortOrder,
  } = useFilters();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-8">
        <div>
          <h1>Status</h1>
          {TASK_STATUS.map((e) => {
            return (
              <div key={e}>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={status.includes(e)}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setStatus([...status, e]);
                    } else {
                      setStatus(status.filter((s) => s !== e));
                    }
                  }}
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {e}
                </label>
              </div>
            );
          })}
        </div>

        <div>
          <h1>Priority</h1>

          {PRIORITY_LEVEL.map((e) => {
            return (
              <div key={e}>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={priority.includes(e)}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setPriority([...priority, e]);
                    } else {
                      setPriority(priority.filter((s) => s !== e));
                    }
                  }}
                />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {e}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className=" whitespace-nowrap">Sort By</p>

          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="status">Status</option>
            <option value="priority">Priority</option>
          </select>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
}
