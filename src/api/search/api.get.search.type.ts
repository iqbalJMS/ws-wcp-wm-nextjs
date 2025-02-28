export type T_Search = {
  list: {
    id: string;
    title: string;
    content: string;
    sub_content: string;
    type: string;
    service_url: string;
    image: {
      fileId: string;
      url: string;
      base64: string;
    };
    parent: string;
    category: string;
    recordInfo: {
      created_at: string;
      updated_at: string;
      deleted_at: string;
    };
  }[];
  pagination: {
    totalData: number;
    totalPages: number;
    currentPage: number;
    isPrev: boolean;
    isNext: boolean;
  };
};

export type T_SearchRequest = {
  filter: string;
  category: string;
  parent: string;
  page: number;
};
