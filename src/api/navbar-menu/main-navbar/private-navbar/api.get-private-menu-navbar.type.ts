type T_MenuItemBase = {
  key: string;
  title: string;
  uri: string;
  alias: string | null;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  uuid: string | null;
  options: Array<unknown>;
};

type T_Items = T_MenuItemBase & {
  below: Array<T_Items>;
};

type T_Below = T_MenuItemBase & {
  below: Array<T_Items>;
};

export type T_ResponseGetPrivateMenuNavbar = Array<T_Below>;
