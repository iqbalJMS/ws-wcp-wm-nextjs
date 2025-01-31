type T_MenuItemBase = {
  key: string;
  title: string;
  uri: string;
  alias: string;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  uuid: string;
  options: Array<unknown>;
};

export type T_PriorityItems = T_MenuItemBase & {
  below: Array<T_PriorityItems>;
};

type T_Below = T_MenuItemBase & {
  below: Array<T_PriorityItems>;
};

export type T_ResponseGetPriorityMenuNavbar = Array<T_Below>;
