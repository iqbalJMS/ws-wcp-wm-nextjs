'use client';
import React from 'react';
import CE_BreadcrumbPrivate from './client.breadcrumb-private';
import CE_BreadcrumbHome from './client.breadcrumb-home';
import CE_BreadcrumbPriority from './client.breadcrumb-priority';

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
      {variant === 'wm-prioritas-main-navigation' && (
        <CE_BreadcrumbPriority data={data} />
      )}
    </>
  );
}
