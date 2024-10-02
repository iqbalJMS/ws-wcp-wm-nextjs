import { ImageLoader } from 'next/dist/client/image-component';
import {
  OnLoadingComplete,
  PlaceholderValue,
  StaticImport,
} from 'next/dist/shared/lib/get-img-props';
import * as Imagex from 'next/image';

type T_ImageProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  'height' | 'width' | 'loading' | 'ref' | 'alt' | 'src' | 'srcSet'
> & {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  loader?: ImageLoader | undefined;
  quality?: number | `${number}` | undefined;
  priority?: boolean | undefined;
  loading?: 'eager' | 'lazy' | undefined;
  placeholder?: PlaceholderValue | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  overrideSrc?: string | undefined;
  onLoadingComplete?: OnLoadingComplete | undefined;
  layout?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  lazyBoundary?: string | undefined;
  lazyRoot?: string | undefined;
  extern?: boolean;
} & React.RefAttributes<HTMLImageElement | null>;

export default function Image(prop: T_ImageProps) {
  const { src } = prop;
  let newSrc = `${src}`;
  if (!src) {
    newSrc = `/images/no-image.png`;
  }
  if (typeof src === 'string') {
    if (prop.extern) {
      newSrc = `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${src}`;
    }
  }
  return <Imagex.default {...{ ...prop, src: newSrc }} />;
}
