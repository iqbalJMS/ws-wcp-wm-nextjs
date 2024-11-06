type T_EntityData = {
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
  field_content: any[];
  field_image: any[];
  field_title: any[];
  field_video: any[];
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
