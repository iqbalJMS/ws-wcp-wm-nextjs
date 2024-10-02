type T_MenuItemBase = {
  key: string;
  title: string;
  uri: string;
  alias: string | null;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  options: Array<unknown>;
  nid: string;
};

type T_Items = T_MenuItemBase & {
  below: Array<T_Items>;
};

type T_Below = T_MenuItemBase & {
  below: Array<T_Items>;
};

export type T_ResponseGetMainMenuNavbar = Array<T_Below>;
