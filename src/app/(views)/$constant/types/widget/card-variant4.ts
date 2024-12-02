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
  field_primary_cta: Array<{ full_url: string }>;
  field_title: any[];
  field_formatted_title: Array<{ value: string }>;
};

export type T_CardVariant04 = {
  field_card_items: Array<T_EntityData>;
};
