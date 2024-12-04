export type T_ExternalMagazine = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  langcode: Array<{ value: string }>;
  type: Array<{ target_id: string; target_type: string; target_uuid: string }>;
  status: Array<{ value: boolean }>;
  created: Array<{ value: string }>;
  field_content: Array<{ value: string }>;
  field_display: Array<{ value: string }>;
  field_title: Array<{ value: string }>;
  endpoint_path: string;
};
