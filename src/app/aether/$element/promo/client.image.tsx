"use client";

import NextImage from "next/image";
import { T_ImageProps } from "@/app/aether/$element/types/promo";

export default function CE_Image(props: T_ImageProps) {
  const {
    wrapper,
    src = "/images/no-image.png",
    alt = "placeholder",
    className,
    ...rest
  } = props;
  const { className: wrapperClassName, ...restWrapper } = wrapper || {};

  return (
    <div
      {...restWrapper}
      className={["relative h-full w-full isolate", wrapperClassName].join(" ")}
    >
      <NextImage
        {...rest}
        sizes="100%"
        className={["object-contain z-0", className].join(" ")}
        fill
        src={src}
        alt={alt}
      />
    </div>
  );
}
