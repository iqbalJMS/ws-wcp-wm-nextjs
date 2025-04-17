export type T_ResponGetLocation = {
  data: Array<{
    id: string;
    name: string;
    address: string;
    phone: number;
    category: string;
    tipe: string;
    lat: number;
    long: number;
    urlMaps: string;
    province: string;
    city: string;
    kodeAgen: boolean;
    site: string;
  }>;
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    isPrev: boolean;
    isNext: boolean;
  };
};

export type T_LocationRequest = {
  skip: string;
  limit: string;
  name?: string;
  tipe?: string;
  province?: string;
};

export type T_LocationRequestPromo = {
  limit: string;
  page: string;
};
