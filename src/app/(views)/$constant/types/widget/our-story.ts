type T_FieldMediaImage = {
  entity_type: any[];
  entity_bundle: any[];
  fid: any[];
  uuid: any[];
  langcode: any[];
  uid: any[];
  filename: any[];
  uri: Array<{ value: string; url: string }>;
  filemime: any[];
  filesize: any[];
  status: any[];
  created: any[];
  changed: any[];
};

type T_FieldImage = {
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
  thumbnail: Array<T_FieldMediaImage>;
  created: any[];
  changed: any[];
  default_langcode: any[];
  revision_translation_affected: any[];
  path: Array<{ alias: any }>;
  field_media_image: any[];
};

type T_FieldOurStory = {
  entity_type: any[];
  entity_bundle: any[];
  nid: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  vid: any[];
  langcode: any[];
  revision_timestamp: any[];
  type: any[];
  revision_uid: any[];
  status: any[];
  uid: Array<{
    target_id: string;
    target_type: string;
    target_uuid: string;
    url: string;
  }>;
  title: Array<{ value: string }>;
  created: any[];
  changed: any[];
  promote: any[];
  sticky: any[];
  default_langcode: any[];
  path: any[];
  content_translation_source: any[];
  content_translation_outdated: any[];
  body: Array<{
    value: string;
    format: string;
    summary: string;
    processed: string;
  }>;
  field_image: Array<T_FieldImage>;
  field_text: Array<{ value: string }>;
};

export type T_OurStory = {
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
  field_our_story: Array<T_FieldOurStory>;
};
