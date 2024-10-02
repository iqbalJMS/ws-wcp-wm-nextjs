export type T_ResponseGetMainFooterMenu = {
  data: Array<{
    title?: string;
    list: Array<{
      name: string;
      className?: string;
      icon?: string;
      extern?: boolean;
      url?: string;
    }>;
    social_media?: Array<{
      name: string;
      icon: string;
      url: string;
    }>;
  }>;
};
