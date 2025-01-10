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

export type T_ResponGetEmagazine = {
  rows: Array<{
    entity_type: Array<{ value: string }>;
    entity_bundle: Array<{ value: string }>;
    nid: Array<{ value: number }>;
    uuid: Array<{ value: string }>;
    vid: Array<{ value: number }>;
    langcode: Array<{ value: string }>;
    created: Array<{ value: string; format: string }>;
    title: Array<{ value: string }>;
    changed: Array<{ value: string }>;
    field_image: Array<T_FieldImage>;
    field_link: Array<{ full_url: string }>;
    field_text: Array<{ value: string }>;
  }>;
  pagination: {
    current_page: number;
    total_items: string;
    currentPage: number;
    total_pages: number;
    items_per_page: number;
  };
};

export type T_RequestMagazine = {
  page: string;
};
