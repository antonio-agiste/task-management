export const PRIORITY_LEVEL = ["Low", "Medium", "High"] as const;
export type PriorityLevel = (typeof PRIORITY_LEVEL)[number];
