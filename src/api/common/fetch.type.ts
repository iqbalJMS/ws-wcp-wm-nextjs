export type T_FetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
};

export type T_PostResponse<T> = {
  data: T;
};
