type T_FormatTitle = {
  value: string;
  format: string;
  processed: string;
};
type T_WidgetVariant = {
  entity_type: string;
  entity_bundle: string;
  nid: any[];
  uuid: any[];
  vid: any[];
  type: any[];
  timestamp: any[];
  status: any[];
  title: any[];
  created: any[];
  changed: any[];
  promote: any[];
  sticky: any[];
  default: any[];
  langcode: any[];
  revision_translation_affected: any[];
  path: any[];
  content_translation_source: any[];
  content_translation_outdated: any[];
  field_key: Array<{ value: string }>;
};
type T_WidgetMedia = {
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
  thumbnail: Array<T_WidgetMedia>;
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: any[];
  field_media_image: Array<T_WidgetMedia>;
};

type T_FieldContent = {
  value: string;
  format: string;
  processed: string;
};

type T_WidgetColumn = {
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
  field_content: Array<T_FieldContent>;
  field_icon_cta_style: any[];
  field_image: Array<T_FieldImage>;
  field_maximum_lines: any[];
  field_primary_cta: any[];
  field_title: Array<{ value: string }>;
};

type T_FieldColumn = {
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
  field_content: Array<T_FieldContent>;
  field_icon_cta_style: any[];
  field_image: Array<T_FieldImage>;
  field_maximum_lines: any[];
  field_primary_cta: any[];
  field_title: Array<{ value: string }>;
  field_column: Array<T_WidgetColumn>;
};

export type T_CardVariant02 = {
  field_column: Array<T_FieldColumn>;
  field_formatted_title: Array<T_FormatTitle>;
  field_web_variant_styles: Array<T_WidgetVariant>;
};
