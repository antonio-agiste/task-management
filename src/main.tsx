import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TaskProvider } from "./providers/TaskProvider.tsx";
import { FilterProvider } from "./providers/FilterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </FilterProvider>
  </StrictMode>
);
