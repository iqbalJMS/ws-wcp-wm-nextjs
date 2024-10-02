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

export type T_Subscription = {
  field_content: HtmlContent[];
  field_image: FieldImage[];
};
