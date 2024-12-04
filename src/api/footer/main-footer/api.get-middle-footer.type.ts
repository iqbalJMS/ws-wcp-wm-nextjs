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

type T_FieldCompanyAddressIcon = {
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

export type T_ResponseGetMainFooterMenu = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: string }>;
  label: Array<{ value: string }>;
  type: any[];
  context: any[];
  changed: any[];
  options: Array<{ external: true }>;
  field_image: any[];
  icon: string;
  field_company_address: Array<{ value: string }>;
  field_company_address_icon: Array<T_FieldCompanyAddressIcon>;
  field_company_name: Array<{ value: string }>;
  field_copyright: Array<{ value: string }>;
  field_multiple_logo: Array<T_FieldCompanyAddressIcon>;
};
