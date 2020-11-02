export interface Todo {
  id: number;
  createdAt: Date;
  name: string;
  endDate: Date;
  description: string;
  priority: number;
}

export enum Priority {
  'Low' = 0,
  'Middle' = 1,
  'High' = 2
}
