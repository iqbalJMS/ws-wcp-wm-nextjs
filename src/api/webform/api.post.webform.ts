'use server';

import { get, post } from '@/api/common/fetch';
import { T_FormGetInvitedRequest, T_FormResult } from './api.post.webform.type';
import { T_PostResponse } from '@/api/common/fetch.type';

const user = process.env.DRUPAL_AUTH;
const pass = process.env.DRUPAL_PASSWORD;

const token = async () => {
  const response = await get('/session/token');

  return response || null;
};

export async function API_PostWebForm(request: T_FormGetInvitedRequest) {
  try {
    const xcsrf: any = await token();

    const response = await post<T_PostResponse<T_FormResult>>(
      '/webform_rest/submit?_format=json_recursive',
      request,
      {
        Authorization: `Basic ${btoa(`${user}:${pass}`)}`,
        'X-CSRF-Token': xcsrf,
      }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during POST Web Form:', error);
    return undefined;
  }
}
