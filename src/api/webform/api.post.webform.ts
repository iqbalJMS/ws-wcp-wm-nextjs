'use server';

import { post } from '@/api/common/fetch';
import { T_FormGetInvitedRequest, T_FormResult } from './api.post.webform.type';
import { T_PostResponse } from '@/api/common/fetch.type';

// const token = async () => {
//   const response = await get('/session/token');
// };

export async function API_PostWebForm(request: T_FormGetInvitedRequest) {
  try {
    const formData = new FormData();
    Object.entries(request).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    const response = await post<T_PostResponse<T_FormResult>>(
      '/webform_rest/submit?_format=json_recursive',
      formData
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during POST Web Form:', error);
    return undefined;
  }
}
