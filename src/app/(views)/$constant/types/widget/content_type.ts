type T_FieldItems = {
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
  field_title: Array<{ value: string }>;
  field_web_variant_styles: any[];
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

type T_field_reference_content = {
  field_article_category: Array<{ name: Array<{ value: string }> }>;
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  nid: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  vid: Array<{ value: number }>;
  langcode: Array<{ value: string }>;
  type: any[];
  revision_timestamp: Array<{ value: string; format: string }>;
  revision_uid: Array<{
    target_id: number;
    target_type: string;
    target_uuid: string;
    url: string;
  }>;
  status: Array<{ value: string }>;
  uid: Array<{
    target_id: number;
    target_type: string;
    target_uuid: string;
    url: string;
  }>;
  title: Array<{ value: string }>;
  created: Array<{ value: string; format: string }>;
  changed: Array<{ value: string; format: string }>;
  promote: Array<{ value: string }>;
  sticky: Array<{ value: string }>;
  default_langcode: Array<{ value: string }>;
  revision_translation_affected: Array<{ value: string }>;
  path: Array<{ alias: null | string; pid: null | string; langcode: string }>;
  content_translation_source: Array<{ value: string }>;
  content_translation_outdated: Array<{ value: string }>;
  field_header_variant: any[];
  field_image: Array<T_FieldImage>;
  field_items: Array<T_FieldItems>;
  field_summary: Array<{
    value: string;
    format: string;
    processed: string;
    summary: string;
  }>;
};

type T_content_type = {
  nid: Array<{ value: string }>;
  uuid: Array<{ value: string }>;
  vid: Array<{ value: string }>;
  langcode: Array<{ value: string }>;
  type: Array<{ type: string }>;
  uid: any[];
  title: Array<{ value: string }>;
  created: Array<{ value: string }>;
  path: Array<{ alias: string }>;
  body: Array<{ value: string }>;
  field_article_category: Array<{ name: Array<{ value: string }> }>;
  field_hero_image: any[];
  field_image: Array<T_FieldImage>;
  field_site_id: any[];
  field_summary: Array<{ value: string }>;
  field_items: Array<{ field_title: Array<{ value: string }> }>;
  field_phone: Array<{ value: string }>;
  field_coordinate: Array<{ value: string }>;
  field_text: Array<{ value: string }>;
  field_link: Array<{ uri: string }>;
  field_category: Array<{ value: string }>;
  field_site: Array<{ value: string }>;
};

export type T_Insight = {
  entity_type: any[];
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  parent_id: Array<{ value: string }>;
  parent_type: Array<{ value: string }>;
  parent_field_name: Array<{ value: string }>;
  content_translation_source: Array<{ value: string }>;
  content_translation_outdated: Array<{ value: boolean }>;
  content_translation_changed: Array<{ value: string; format: string }>;
  field_content_type: Array<T_content_type>;
  field_reference_content: Array<T_field_reference_content>;
  field_bri_location_type: Array<{ type_id: string; type_name: string }>;
  field_category_product: Array<{ value: string }>;
  field_site: Array<{ value: string }>;
};
