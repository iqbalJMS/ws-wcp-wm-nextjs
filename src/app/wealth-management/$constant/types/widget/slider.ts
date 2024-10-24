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
  field_primary_cta: any[];
  field_title: any[];
};

export type T_Slider = {
  field_slider_items: Array<T_EntityData>;
};
