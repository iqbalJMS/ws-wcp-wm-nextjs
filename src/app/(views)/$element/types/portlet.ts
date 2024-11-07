export type T_PortletProps = {
  bgImage: string;
  title?: string;
  subtitle?: string;
  textLink?: string;
  navigationLink?: string;
  listItems?: Array<{
    image: string;
    title: string;
    description: string;
    text: string;
  }>;
  buttonItems?: Array<{
    buttonText?: string;
    buttonLink?: string;
  }>;
  imageContent?: string;
  imageTitle?: string
  headerAlignment?: 'left' | 'center' | 'right';
  imageContentAlignment?: 'left' | 'center' | 'right';
  variant: '01' | '02' | '03';
};

export type T_PortletItemProps = {
  list_item: {
    image: string;
    text: string;
  };
};