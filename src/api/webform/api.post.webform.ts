'use server';

import { T_FormGetInvitedRequest } from './api.post.webform.type';

const user = process.env.NEXT_PUBLIC_DRUPAL_AUTH || process.env.DRUPAL_AUTH;
const pass =
  process.env.NEXT_PUBLIC_DRUPAL_PASSWORD || process.env.DRUPAL_PASSWORD;

const token = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/session/token`,
      { method: 'GET' }
    );

    return await response.text();
  } catch (_) {
    return null;
  }
};

export async function API_PostWebForm(
  request: T_FormGetInvitedRequest
): Promise<any | null> {
  try {
    const xcsrf: string | null = await token();
    let result: any | null = null;

    if (xcsrf) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}/webform_rest/submit?_format=json_recursive`,
        {
          method: 'POST',
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(`${user}:${pass}`)}`,
            'X-CSRF-Token': xcsrf,
          },
        }
      );

      return await response.json();
    }

    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during POST Web Form:', error);
    return null;
  }
}
