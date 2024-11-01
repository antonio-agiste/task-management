import { useState } from "react";
import { Task } from "./types/task";
import { TaskModal } from "./components/TaskModal";
import { TaskTable } from "./components/TaskTable";
import { TaskFilters } from "./components/TaskFilters";

function App() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-8">
      <TaskFilters />

      <hr className="my-4" />

      <div className="flex flex-col gap-8 py-4">
        <TaskTable
          onAddTask={() => setModalOpen(true)}
          onEditTask={(task) => {
            setSelectedTask(task);
            setModalOpen(true);
          }}
        />
      </div>

      {/* This ensures that the component is fully unmounted */}
      {modalOpen && (
        <TaskModal
          task={selectedTask}
          open={modalOpen}
          onClose={() => {
            setSelectedTask(null);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
