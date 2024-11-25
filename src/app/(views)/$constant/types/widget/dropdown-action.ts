type FieldMenuList = {
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
  field_links: any[];
};

export type T_DropdownAction = {
  field_menu_list: FieldMenuList[];
  field_primary_cta: any[];
  field_title: { value: string }[];
};
