'use server';
import { get } from '@/api/common/fetch';
import { T_ResponGetHeaderLogoPrivate } from './api.get-header-logo.private.type';

const user = process.env.DRUPAL_AUTH;
const pass = process.env.DRUPAL_PASSWORD;

export async function API_GetHeaderLogoPrivate({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponGetHeaderLogoPrivate | null> {
  try {
    const response: T_ResponGetHeaderLogoPrivate = await get(
      '/config_pages/wealth_management_private?_format=json_recursive',
      { Authorization: `Basic ${btoa(`${user}:${pass}`)}` }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Footer Menu:', error);
    return null;
  }
}
