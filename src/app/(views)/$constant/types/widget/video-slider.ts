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

type T_EntityVideo = {
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
  name: Array<{ value: string }>;
  thumbnail: any[];
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: any[];
  field_media_oembed_video: Array<{ value: string }>;
};

type T_EntityData = {
  entity_type: any[];
  entity_bundle: any[];
  id: Array<{ value: number }>;
  uuid: any[];
  parent_id: any[];
  parent_type: any[];
  parent_field_name: any[];
  content_translation_source: any[];
  content_translation_outdated: any[];
  content_translation_changed: any[];
  field_content: any[];
  field_image: any[];
  field_title: Array<{ value: string }>;
  field_video: Array<T_EntityVideo>;
};

type T_EntityCta = {
  uri: any[];
  full_url: string;
  title: any[];
  options: any[];
};

export type T_VideoSlider = {
  field_video_items: Array<T_EntityData>;
  field_title: Array<{ value: string }>;
  field_subtitle: Array<{ value: string }>;
  field_primary_cta: Array<T_EntityCta>;
  field_web_variant_styles: Array<T_VarianStyles>;
};
