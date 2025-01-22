type T_ComponentPropsFunc<T> = (_component: T) => Record<string, any>;

export type T_ComponentMapWidget<T = any> = {
  component: React.ComponentType<T>;
  props: T_ComponentPropsFunc<T>;
};

export type T_Widget =
  | 'slider'
  | 'dropdown_action'
  | 'personalized_shortcut'
  | 'image_slider'
  | 'subscription'
  | 'header'
  | 'multi_tab'
  | 'section'
  | 'two_column'
  | 'card3'
  | 'card4'
  | 'card5'
  | 'card6'
  | 'breadcrumb'
  | 'our_story'
  | 'quote_slider'
  | 'content_type'
  | 'video_slider'
  | 'requirement_box'
  | 'rich_text'
  | 'promo_widget'
  | 'external_magazine'
  | 'form'
  | 'location'
  | 'card_cta'
  | 'map'
  | 'content_type_items'
  | 'simulation';
