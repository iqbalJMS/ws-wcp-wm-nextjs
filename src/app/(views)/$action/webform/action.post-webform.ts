'use server';

import { API_PostWebForm } from '@/api/webform/api.post.webform';
import { T_FormGetInvitedRequest } from '@/api/webform/api.post.webform.type';

export async function ACT_PostWebForm(request: T_FormGetInvitedRequest) {
  return await API_PostWebForm(request);
}
