export type T_Form = {
  entity_type: Array<{ value: string }>;
  entity_bundle: Array<{ value: string }>;
  id: Array<{ value: number }>;
  uuid: Array<{ value: number }>;
  revision_id: Array<{ value: number }>;
  langcode: Array<{ value: string }>;
  type: Array<{
    uuid: string;
    langcode: string;
    status: boolean;
    dependencies: any[];
    id: string;
    label: string;
    icon_uuid: boolean;
    icon_default: boolean;
    behavior_plugins: any[];
  }>;
  status: Array<{ value: string }>;
  parent_id: Array<{ value: number }>;
  parent_type: Array<{ value: string }>;
  parent_field_name: Array<{ value: string }>;
  default_langcode: Array<{ value: boolean }>;
  field_form: Array<{
    uuid: string;
    langcode: string;
    status: string;
    dependencies: [];
    open: null;
    close: null;
    weight: number;
    uid: number;
    template: boolean;
    archive: boolean;
    id: string;
    title: string;
    description: string;
    categories: any[];
    elements: string;
    css: string;
    javascript: string;
    settings: any[];
  }>;
  access: any[];
  webform_elements: {
    nama: any[];
    email: any[];
    telepon: any[];
    apakah_anda_nasabah_bri: any[];
    metode_kontak: any[];
    waktu_dihubungi: any[];
  };
};
