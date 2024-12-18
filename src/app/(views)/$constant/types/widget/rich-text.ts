export type T_RichText = {
  entity_type: Array<{
    value: string;
  }>;
  entity_bundle: Array<{
    value: string;
  }>;
  id: Array<{
    value: number;
  }>;
  uuid: Array<{
    value: string;
  }>;
  parent_id: Array<{
    value: number;
  }>;
  parent_type: Array<{
    value: string;
  }>;
  parent_field_name: Array<{
    value: string;
  }>;
  content_translation_source: Array<{
    value: string;
  }>;
  content_translation_outdated: Array<{
    value: boolean;
  }>;
  content_translation_changed: Array<{
    value: string;
    format: string;
  }>;
  field_content: Array<{ value: string }>;
};
