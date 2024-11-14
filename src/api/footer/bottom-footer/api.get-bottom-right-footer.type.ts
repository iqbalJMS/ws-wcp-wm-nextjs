type T_Field_media_image = {
  target_id: number;
  alt: string;
  title: string;
  width: number;
  height: number;
  target_type: string;
  target_uuid: string;
  url: string;
};

type T_Field_image = {
  mid: any[];
  uuid: Array<{ value: string }>;
  vid: any[];
  langcode: any[];
  bundle: any[];
  revision_created: any[];
  revision_user: any[];
  status: any[];
  uid: any[];
  name: Array<{ name: string }>;
  thumbnail: Array<T_Field_media_image>;
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: Array<{ alias: null | string }>;
  field_media_image: Array<T_Field_media_image>;
};

export type T_ResponseGetBottomRightFooter = Array<{
  key: string;
  title: string;
  uri: string;
  alias: null | string;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  uuid: boolean;
  options: Array<{ external: boolean }>;
  field_image: Array<T_Field_image>;
  icon: string;
}>;
