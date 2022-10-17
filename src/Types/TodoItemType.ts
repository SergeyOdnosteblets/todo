import { TaskType } from './TaskType';

export interface TodoItemType {
    todo: TaskType
    deleteTask: (e: number) => void
    checkedTask: (e: number) => void
    backGround: boolean
}