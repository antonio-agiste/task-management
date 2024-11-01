import { useContext } from "react";
import { FilterContext } from "../providers/FilterContext";

export function useFilters() {
  return useContext(FilterContext);
}
