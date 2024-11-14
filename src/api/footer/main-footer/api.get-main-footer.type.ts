export type T_ResponseGetMainFooterMenu = {
  data: Array<{
    title?: string;
    listItem?: Array<{
      name: string;
      icon?: string;
      extern?: boolean;
      url?: string;
      className?: string
    }>;
    listImage?: Array<{
      image: string
      extern?: boolean
    }>
    socialMedia?: Array<{
      name?: string;
      icon: string;
      url: string;
    }>;
  }>;
};
