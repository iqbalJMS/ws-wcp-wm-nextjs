export type T_ResponseGetMenuItemNavbar = Array<{
  key: string;
  title: string;
  uri: string;
  alias: string | null;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  icon: string;
  uuid: string | null;
  options: Array<any>;
  alt: string;
  url: string;
  field_theme_color: Array<{ value: string }>;
  field_image: Array<any>;
}>;
