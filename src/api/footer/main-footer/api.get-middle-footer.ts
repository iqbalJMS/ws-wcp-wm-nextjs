'use server';
import { get } from '@/api/common/fetch';
import { T_ResponseGetMainFooterMenu } from './api.get-middle-footer.type';

const user = process.env.DRUPAL_AUTH;
const pass = process.env.DRUPAL_PASSWORD;

export async function API_GetMainFooterMenu({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu | null> {
  try {
    const response: T_ResponseGetMainFooterMenu = await get(
      '/config_pages/wealth_management_footer?_format=json_recursive',
      { Authorization: `Basic ${btoa(`${user}:${pass}`)}` }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Footer Menu:', error);
    return null;
  }
}
