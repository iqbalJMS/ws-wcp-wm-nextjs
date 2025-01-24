/* eslint-disable no-console */
'use server';

import { T_FetchOptions } from './fetch.type';

const API_BASE_URL = process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT || '';

async function fetchData<T>(
  endpoint: string,
  options: T_FetchOptions = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const DEFAULT_HEADERS: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    cache: 'no-store',
    next:
      options.method !== 'POST'
        ? {
            revalidate: 0,
          }
        : {},
    headers: {
      ...(options.method !== 'POST' ? DEFAULT_HEADERS : {}),
      ...options.headers,
    },
    body: options?.body
      ? options.method !== 'POST'
        ? JSON.stringify(options.body)
        : options.body
      : null,
  });

  const contentType = response.headers.get('content-type');

  if (!response.ok) {
    const errorResponse = await response.json();
    if (response.status === 403) {
      console.error('403 Forbidden: ', errorResponse.message);
    }

    throw new Error(
      `Ups something went wrong, status: ${response.status ?? ''} - ${
        errorResponse.message ?? ''
      }, please reload ${url} ${options.method} ${JSON.stringify(options.body)}`
    );
  }

  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    throw new Error('Unexpected response type');
  }
}
export async function get<T>(
  endpoint: string,
  headers?: Record<string, any>
): Promise<T> {
  return fetchData<T>(endpoint, { method: 'GET', headers });
}

export async function post<T>(
  endpoint: string,
  body: any,
  headers?: Record<string, string>
): Promise<T> {
  return fetchData<T>(endpoint, { method: 'POST', headers, body });
}

export async function put<T>(
  endpoint: string,
  body: any,
  headers?: Record<string, string>
): Promise<T> {
  return fetchData<T>(endpoint, { method: 'PUT', headers, body });
}

export async function del<T>(
  endpoint: string,
  headers?: Record<string, string>
): Promise<T> {
  return fetchData<T>(endpoint, { method: 'DELETE', headers });
}
