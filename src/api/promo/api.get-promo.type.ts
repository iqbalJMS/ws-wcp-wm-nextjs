export type T_ResponGetPromo = {
  data: Array<{
    nid: Array<{
      value: number;
    }>;
    title: {
      value: string;
    }[];
    path: {
      alias: null;
      pid: null;
    }[];
    field_promo_category: Array<{ title: Array<{ value: string }> }>;
    field_promo_image: Array<{
      thumbnail: Array<{ uri: Array<{ url: string }> }>;
    }>;
    configurations: {
      total: number;
      totalPages: number;
      currentPage: number;
      isPrev: boolean;
      isNext: boolean;
    };
  }>;
};

export type T_PromoRequest = {
  limit: string;
  page: string;
};
