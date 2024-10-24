type FieldPrimaryCTA = {
  uri: string;
  title: string;
  options: any[];
};

export type T_ImageSlider = {
  field_title: Array<{ value: string }>;
  field_image_slider_items: Array<{
    field_primary_cta: Array<FieldPrimaryCTA>;
    field_image: Array<{
      field_media_image: Array<{
        uri: Array<{
          url: string;
        }>;
      }>;
    }>;
  }>;
};
