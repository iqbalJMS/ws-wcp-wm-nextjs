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
  full_url: any[];
  title: any[];
  options: any[];
};

export type T_VideoSlider = {
  field_video_items: Array<T_EntityData>;
  field_title: Array<{ value: string }>;
  field_subtitle: Array<{ value: string }>;
  field_primary_cta: Array<T_EntityCta>;
};
