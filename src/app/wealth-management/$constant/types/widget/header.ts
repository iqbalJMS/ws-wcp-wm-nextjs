// todo
type FieldTitle = { value: string };
type FieldContent = { value: string };

type FieldPrimaryCTA = {
  uri: string;
  title: string;
};

type FieldImage = {
  field_media_image: {
    uri: { url: string }[];
  }[];
};

export type T_Header = {
  field_title: FieldTitle[];
  field_content: FieldContent[];
  field_primary_cta: FieldPrimaryCTA[];
  field_image: FieldImage[];
}