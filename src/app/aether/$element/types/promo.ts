import { ImageProps, StaticImageData } from 'next/image';
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MutableRefObject,
  ReactNode,
  RefObject,
} from 'react';

export type T_CardProps = {
  idx?: number;
  className?: string;
  // fixme later
  // @ts-ignore
  content: any;
};

export type T_ImperativeProps = {
  snapTo: (_idx: number | null | '+1' | '-1') => void;
};

export type T_ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type T_ButtonsProps = {
  attributeTargetId: string;
  attributeName: { range: string };
  tabViewController: RefObject<T_ImperativeProps>;
  className?: string;
};

export type T_ButtonsIdxProps = {
  attributeTargetId: string;
  attributeName: { activeRange: string; rangeLength: string };
  tabViewController: RefObject<T_ImperativeProps>;
  className?: string;
};

export type T_ButtonTabProps = {
  isActive?: boolean;
  children: ReactNode;
  activeRef: MutableRefObject<HTMLButtonElement | null>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type T_TabProps = {
  contents: Array<number>;
  options: Array<{
    title: string;
    informationText: string;
    showMore: {
      title: string;
      url: string;
    };
  }>;
  className?: string;
  tabViewController: RefObject<T_ImperativeProps>;
  attributeTargetId: string;
  attributeName: { active: string };
};

export type T_TabViewProps = {
  contents: Array<
    Array<{
      img: string;
      title: string;
      date: string;
      href: string;
      description: string;
    }>
  >;
  className?: string;
  attributeTargetId: string;
  attributeName: {
    active: string;
    range: string;
    activeRange: string;
    rangeLength: string;
  };
};

export type T_ImageProps = {
  wrapper?: HTMLAttributes<HTMLDivElement>;
  src?: string | StaticImageData;
  alt?: string;
} & Omit<ImageProps, 'src' | 'alt'>;
