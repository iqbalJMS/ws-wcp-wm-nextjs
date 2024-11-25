type T_FieldImageProfile = {
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

type T_FIeldQuote = {
  entity_type: any[];
  entity_bundle: any[];
  id: any[];
  uuid: any[];
  parent_id: any[];
  parent_type: any[];
  parent_field_name: any[];
  content_translation_source: any[];
  content_translation_outdated: any[];
  content_translation_changed: any[];
  field_content: Array<{ value: string; format: string; processed: string }>;
  field_image: Array<T_FieldImageProfile>;
  field_subtitle: Array<{ value: string }>;
  field_title: Array<{ value: string }>;
};

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

type T_FieldImage = {
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

export type T_CarouselV2 = {
  entity_type: any[];
  entity_bundle: any[];
  id: any[];
  uuid: any[];
  parent_id: any[];
  parent_type: any[];
  parent_field_name: any[];
  content_translation_source: any[];
  content_translation_outdated: any[];
  content_translation_changed: any[];
  field_image: Array<T_FieldImage>;
  field_quote: Array<T_FIeldQuote>;
  field_title: Array<{ value: string }>;
};
