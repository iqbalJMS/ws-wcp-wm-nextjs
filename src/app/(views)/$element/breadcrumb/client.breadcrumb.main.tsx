'use client';
import React from 'react';
import CE_BreadcrumbPrivate from './client.breadcrumb-private';
import CE_BreadcrumbHome from './client.breadcrumb-home';

export default function CE_BreadcrumbMain({
  variant,
  data,
}: {
  variant: any;
  data: Array<{
    title: string;
    url: string;
  }>;
}) {
  return (
    <>
      {variant === 'wm-main-navigation' && <CE_BreadcrumbHome data={data} />}
      {variant === 'wm-private-main-navigation' && (
        <CE_BreadcrumbPrivate data={data} />
      )}
    </>
  );
}
