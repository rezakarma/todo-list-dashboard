import Dexie, { Table } from 'dexie';
export type TodoStaus =  'done' | 'inProgress' | 'notDone';
export interface Todo {
  id?: number;
  title: string;
  status: TodoStaus
}

export class TodoDB extends Dexie {
  todos!: Table<Todo>;

  constructor() {
    super('TodoDatabase');
    this.version(1).stores({
      todos: '++id, title, status',
    });
  }
}

export const db = new TodoDB();