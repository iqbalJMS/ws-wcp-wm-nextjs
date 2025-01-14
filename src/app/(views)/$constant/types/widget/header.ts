// todo
type FieldTitle = { value: string };
type FieldContent = { value: string };

type FieldPrimaryCTA = {
  uri: string;
  title: string;
  full_url: string;
};

type FieldImage = {
  field_media_image: {
    uri: { url: string }[];
  }[];
};
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

export type T_Header = {
  field_title: FieldTitle[];
  entity_bundle: Array<{ value: string }>;
  field_content: FieldContent[];
  field_primary_cta: FieldPrimaryCTA[];
  field_image: FieldImage[];
  field_web_variant_styles: Array<T_VarianStyles>;
};
