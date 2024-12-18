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

type T_FieldRequirementItems = {
  field_label: Array<{ value: string }>;
  field_value: Array<{ value: string }>;
};

export type T_RequirementBox = {
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
  field_requirement_items: Array<T_FieldRequirementItems>;
  field_web_variant_styles: Array<T_VarianStyles>;
};
