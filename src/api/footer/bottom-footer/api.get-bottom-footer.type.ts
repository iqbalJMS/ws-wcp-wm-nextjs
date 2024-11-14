export type T_ResponseGetBottomFooterMenu = {
  data: {
    listItem?: Array<{
      value: string;
      url: string;
      extern: boolean;
    }>;
    socialMedia?: Array<{
      name?: string;
      icon: string;
      url: string;
    }>;
  }
};
