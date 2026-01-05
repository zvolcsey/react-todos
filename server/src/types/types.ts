export type ApiSucessResponse<T> = {
  success: true;
  data: T;
};

export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateTodoRequest = {
  title: string;
  isCompleted: boolean;
};

export type Params = {
  id: string;
};

export type UpdateTodoRequest = Partial<{
  title: string;
  isCompleted: boolean;
}>;
