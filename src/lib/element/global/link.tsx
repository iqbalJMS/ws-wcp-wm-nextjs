'use client';

import * as Linx from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { AnchorHTMLAttributes, RefAttributes } from 'react';

type T_LinkProps = Linx.LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
    target?: string;
    rel?: string;
    extern?: boolean;
    lang?: 'en' | 'id';
  };

const wildcard = ['http://', 'https://'];

export default function Link(prop: T_LinkProps) {
  const locales = useSearchParams().get('lang') ?? 'id';
  const { href = '#' } = prop;

  if (!href) {
    return (
      <Linx.default
        {...{
          ...prop,
          href: '/',
          target: prop.target,
          rel: prop.rel,
        }}
      >
        {prop.children}
      </Linx.default>
    );
  }

  let newHref = href;

  const isWildcard = wildcard.some((prefix) => href.startsWith(prefix));
  if (!isWildcard) {
    newHref = `${href}?lang=${locales}`;
  }

  if (prop.extern) {
    newHref = href;
  }

  return (
    <Linx.default
      {...{
        ...prop,
        href: newHref,
        target: prop.target,
        rel: prop.rel,
      }}
    >
      {prop.children}
    </Linx.default>
  );
}
