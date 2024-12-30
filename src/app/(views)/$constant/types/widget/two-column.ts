type T_FieldMediaImage = {
  entity_type: any[];
  entity_bundle: any[];
  fid: any[];
  uuid: any[];
  langcode: any[];
  uid: Array<{
    path: Array<{ alias: null | string; pid: null | string; langcode: string }>;
  }>;
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
  field_media_image: Array<T_FieldMediaImage>;
};

type T_FieldParagraphs = {
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
  field_alignment: any[];
  field_content: Array<{ value: string }>;
  field_icon_cta_style: any[];
  field_image: Array<T_FieldImage>;
  field_primary_cta: Array<{
    uri: string;
    full_url: string;
    title: string;
    options: any[];
  }>;
  field_title: Array<{ value: string }>;
};
type T_VarianStyles = {
  entity_type: any[];
  entity_bundle: any[];
  nid: any[];
  uuid: any[];
  vid: any[];
  langcode: any[];
  type: any[];
  revision_timestamp: any[];
  revision_uid: any[];
  status: any[];
  uid: any[];
  title: any[];
  created: any[];
  changed: any[];
  promote: any[];
  sticky: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: any[];
  content_translation_source: any[];
  content_translation_outdated: any[];
  field_key: Array<{ value: string }>;
};
type T_FieldFirstColumn = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  parent_id: Array<{ value: string }>;
  parent_type: Array<{ value: string }>;
  parent_field_name: Array<{ value: string }>;
  content_translation_source: Array<{ value: string }>;
  content_translation_outdated: Array<{ value: boolean }>;
  content_translation_changed: Array<{ value: string; format: string }>;
  field_content: Array<{ value: string; format: string; processed: string }>;
  field_paragraphs: Array<T_FieldParagraphs>;
  field_title: Array<{ value: string }>;
  field_image: Array<T_FieldImage>;
  field_primary_cta: Array<{ uri: string; title: string; full_url: string }>;
};

type T_FieldSecondColumn = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  parent_id: Array<{ value: string }>;
  parent_type: Array<{ value: string }>;
  parent_field_name: Array<{ value: string }>;
  content_translation_source: Array<{ value: string }>;
  content_translation_outdated: Array<{ value: boolean }>;
  content_translation_changed: Array<{ value: string; format: string }>;
  field_content: Array<{ value: string; format: string; processed: string }>;
  field_paragraphs: Array<T_FieldParagraphs>;
  field_title: Array<{ value: string }>;
  field_image: Array<T_FieldImage>;
  field_primary_cta: Array<{ uri: string; title: string; full_url: string }>;
};

export type T_TwoColumn = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  parent_id: Array<{ value: string }>;
  parent_type: Array<{ value: string }>;
  parent_field_name: Array<{ value: string }>;
  content_translation_source: Array<{ value: string }>;
  content_translation_outdated: Array<{ value: boolean }>;
  content_translation_changed: Array<{ value: string; format: string }>;
  field_column_width: Array<{ value: string }>;
  field_first_column: Array<T_FieldFirstColumn>;
  field_second_column: Array<T_FieldSecondColumn>;
  field_web_variant_styles: Array<T_VarianStyles>;
};
