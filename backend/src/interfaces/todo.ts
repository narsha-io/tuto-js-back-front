export interface Todo {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    createdBy: string;
    isCompleted?: boolean;
}
