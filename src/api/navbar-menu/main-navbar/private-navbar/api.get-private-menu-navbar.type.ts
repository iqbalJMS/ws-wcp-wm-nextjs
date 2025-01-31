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

export type T_PrivateItems = T_MenuItemBase & {
  below?: Array<T_PrivateItems>;
};

type T_Below = T_MenuItemBase & {
  below?: Array<T_PrivateItems>;
};

export type T_ResponseGetPrivateMenuNavbar = Array<T_Below>;
