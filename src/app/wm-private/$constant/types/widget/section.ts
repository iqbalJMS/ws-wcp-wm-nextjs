type HtmlContent = {
  value: string;
  format: string;
  processed: string;
};

type FieldImage = {
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
  name: any[];
  thumbnail: any[];
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: any[];
  field_media_image: any[];
};

type FieldPrimaryCTA = {
  uri: string;
  title: string;
  options: any[];
};

export type T_Section = {
  field_content: HtmlContent[];
  field_formatted_title: HtmlContent[];
  field_image: FieldImage[];
  field_margin_left: { value: string }[];
  field_note: any[];
  field_primary_cta: FieldPrimaryCTA[];
  field_column: Array<{
    field_image: any;
    field_content: any;
  }>;
};
