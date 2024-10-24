export type T_ResponseGetBottomFooterMenu = {
  data: {
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
  }
};
