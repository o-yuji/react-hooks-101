export interface EventType {
  title: string;
  body: string;
  id: number;
}

export interface ActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  title?: string;
  body?: string;
  id?: number;
}
