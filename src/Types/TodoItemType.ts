import { TaskType } from './TaskType';

export interface TodoItemType {
    todo: TaskType
    deleteTask: (id: number) => void
    checkedTask: (id: number) => void
    theme: boolean
}