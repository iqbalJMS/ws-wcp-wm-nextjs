'use server';

import { get } from '@/api/common/fetch';
import { T_ResponGetHeaderLogoPriority } from './api.get-header-logo.priority.type';

const user = process.env.NEXT_PUBLIC_DRUPAL_AUTH || process.env.DRUPAL_AUTH;
const pass =
  process.env.NEXT_PUBLIC_DRUPAL_PASSWORD || process.env.DRUPAL_PASSWORD;

export async function API_GetHeaderLogoPriority(_: {
  lang?: string;
}): Promise<T_ResponGetHeaderLogoPriority | null> {
  try {
    const response: T_ResponGetHeaderLogoPriority = await get(
      '/config_pages/wealth_management_prioritas?_format=json_recursive',
      { Authorization: `Basic ${btoa(`${user}:${pass}`)}` }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get logo header priority:', error);
    return null;
  }
}
