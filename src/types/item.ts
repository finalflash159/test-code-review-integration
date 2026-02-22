export type Item = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};

export type CreateItemBody = {
  title: string;
};

export type UpdateItemBody = {
  title?: string;
  completed?: boolean;
};
