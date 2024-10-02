export type T_ResponseGetTopMenuNavbar = Array<{
  key: string;
  title: string;
  uri: string;
  alias: string | null;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  options: Array<any>;
  icon?: string;
}>;
