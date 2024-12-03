type T_FieldMediaImage = {
  entity_type: any[];
  entity_bundle: any[];
  fid: any[];
  uuid: any[];
  langcode: any[];
  uid: any[];
  filename: any[];
  uri: Array<{ value: string; url: string }>;
  filemime: any[];
  filesize: any[];
  status: any[];
  created: any[];
  changed: any[];
};

type T_FieldLogo = {
  entity_type: any[];
  entity_bundle: any[];
  mid: any[];
  uuid: any[];
  vid: any[];
  langcode: any[];
  bundle: any[];
  revision_created: any[];
  revision_user: any[];
  status: any[];
  uid: any[];
  name: any[];
  thumbnail: Array<T_FieldMediaImage>;
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: Array<{ alias: any }>;
  field_media_image: any[];
};

type T_FieldType = {
  uuid: string;
  langcode: string;
  status: boolean;
  id: string;
  label: string;
  context: Array<{ show_warning: boolean }>;
  menu: Array<{ path: string; description: string }>;
};

export type T_ResponGetHeaderLogo = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  label: Array<{ value: string }>;
  type: Array<T_FieldType>;
  context: Array<{ value: string }>;
  changed: Array<{ value: string }>;
  field_logo: Array<T_FieldLogo>;
  field_logo_alternative: Array<T_FieldLogo>;
};
