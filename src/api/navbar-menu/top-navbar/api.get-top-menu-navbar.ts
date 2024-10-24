'use server';

// import { get } from "@/api/common/fetch";
import { T_ResponseGetTopMenuNavbar } from './api.get-top-menu-navbar.type';

export async function API_GetTopMenuNavbar({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetTopMenuNavbar> {
  try {
    // const response: T_ResponseGetTopMenuNavbar = await get(
    //   "/bricc-api/menu-items/top-navigation?_format=json",
    // );

    return [
      {
        alias: 'go-to-corporate-site',
        enabled: true,
        expanded: false,
        key: 'go-to-corporate-site',
        options: [],
        relative: '/',
        title: 'Go to corporate site',
        uri: '/',
        weight: '',
        icon: '',
      },
      {
        alias: 'cari',
        enabled: true,
        expanded: false,
        key: 'cari',
        options: [],
        relative: '/',
        title: 'Cari',
        uri: '/',
        weight: '',
        icon: '',
      },
      {
        alias: 'kalulator-finansial',
        enabled: true,
        expanded: false,
        key: 'kalulator-finansial',
        options: [],
        relative: '/',
        title: 'Kalkulator Finansial',
        uri: '/',
        weight: '',
        icon: '',
      },
    ];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('An error occurred during Get Top Menu Navbar:', error);
    return [];
  }
}
