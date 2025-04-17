'use server';

import { get } from '@/api/common/fetch';
import { T_ResponGetHeaderLogo } from './api.get-header-logo.type';

const user = process.env.NEXT_PUBLIC_DRUPAL_AUTH || process.env.DRUPAL_AUTH;
const pass =
  process.env.NEXT_PUBLIC_DRUPAL_PASSWORD || process.env.DRUPAL_PASSWORD;

export async function API_GetHeaderLogo(_: {
  lang?: string;
}): Promise<T_ResponGetHeaderLogo | null> {
  try {
    const response: T_ResponGetHeaderLogo = await get(
      '/config_pages/wealth_management_header?_format=json_recursive',
      { Authorization: `Basic ${btoa(`${user}:${pass}`)}` }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Footer Menu:', error);
    return null;
  }
}
