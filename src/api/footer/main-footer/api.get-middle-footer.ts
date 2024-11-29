'use server';
import { get } from '@/api/common/fetch';
import { T_ResponseGetMiddleFooterMenu } from './api.get-middle-footer.type';

const user = process.env.DRUPAL_AUTH;
const pass = process.env.DRUPAL_PASSWORD;

export async function API_GetMiddleFooterMenu({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMiddleFooterMenu> {
  try {
    const response: T_ResponseGetMiddleFooterMenu = await get(
      '/config_pages/wealth_management_footer?_format=json_recursive',
      { Authorization: `Basic ${btoa(`${user}:${pass}`)}` }
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Main Footer Menu:', error);
    return [];
  }
}

// const axios = require('axios');

// const response: T_ResponseGetMiddleFooterMenu = await get(
//   '/config_pages/wealth_management_footer?_format=json_recursive',
//   { headers }
// );

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'https://admin-bri-corpsite.dev-kjt.id/config_pages/wealth_management_footer?_format=json_recursive',
//   headers: {
//     Authorization: 'Basic Z3VtaW5pOnF5dEVVcjl5TTM5TmVCaw==',
//     Cookie:
//       'SESS389ab8a081a7b386c5dd97a8790ce7eb=qzBH5EqjlBpNl47AHQyBM0jr6zZEs7Tk0hhBzphxZwLtX903',
//   },
// };

// axios
//   .request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
