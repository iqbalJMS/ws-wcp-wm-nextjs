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
  // | 'card2'
  | 'card3'
  | 'card4'
  | 'card5'
  | 'card6'
  // | 'carousel'
  | 'video_slider';
