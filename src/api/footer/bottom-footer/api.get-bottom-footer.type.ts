export type T_ResponseGetBottomFooterMenu = {
  data: Array<{
    list: Array<{
      value: string;
      url: string;
      extern: boolean;
    }>;
    social_media: Array<{
      name: string;
      icon: string;
      url: string;
      className: string;
    }>;
  }>;
};
