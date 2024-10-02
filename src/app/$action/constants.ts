export type T_IconList = {
  image: string;
  title: string;
  link: string;
  externalLink: boolean;
  active: boolean
};

export type T_CarouselMainProps = {
  title?: string
  description?: string
  button?: {
    name: string
    link: string
  }
  data: Array<{
    image: string;
    title: string;
    desc: string;
    subDesc?: string;
    button?: {
      name: string
      link: string
    };
  }>;
  variant: '01' | '02' | '03' | '04' | '05';
}

export type T_ContentMainProps = {
  title?: string
  data: Array<{
    image: string;
    title: string;
    desc: string;
    button?: {
      name: string
      link: string
    };
  }>;
  variant: '01' | '02' | '03' | '04' | '05';
}