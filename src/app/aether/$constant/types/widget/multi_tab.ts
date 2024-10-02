type T_FieldParagraph = Array<{
  field_carousel_items: Array<{
    field_image: Array<{
      field_media_image: Array<{ uri: Array<{ url: string }> }>;
    }>;
    field_title: Array<{ value: string }>;
    field_datetime: Array<{ value: string; end_value: string }>;
    field_content: Array<{ value: string }>;
    field_simple_text: Array<{ value: string }>;
    field_primary_cta: Array<{ full_url: string }>;
  }>;
  field_title_custom: Array<{ value: string }>;
}>;

export type T_MultiTab = {
  field_title_custom: Array<{ value: string }>;
  field_tab: Array<{
    value: string;
    field_title: Array<{ value: string }>;
    field_paragraphs: T_FieldParagraph;
    field_primary_cta: Array<{ title: string; full_url: string }>;
  }>;
};
