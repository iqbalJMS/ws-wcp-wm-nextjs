'use server';

import { ACT_GetPersonalizeMenu } from '@/app/$action/action.get.personalize-menu';
import { CE_IconMain } from './client.icon.main';
import { T_IconList } from '@/app/$action/constants';

// import { SFN_CookieIcon } from "@/app/$function/sfn.cookie.icon";
// import { ACT_SetPersonalizeMenu } from "@/app/$action/action.set.personalize-menu";
import { SFN_SetPersonalizedMenu } from '@/app/$function/sfn.set.personalized-menu';

type T_IconMainProps = {
  maxListShow?: number;
  cookiesName: string;
};

export default async function SE_IconMain({
  maxListShow = 5,
  cookiesName = '__persolized-menu',
}: // cookiesName,
T_IconMainProps) {
  const cookies = await SFN_SetPersonalizedMenu('get', cookiesName);
  const iconCookies: T_IconList[] = cookies ? JSON.parse(cookies) : [];
  const initialIcon = await ACT_GetPersonalizeMenu();

  const icons: T_IconList[] = initialIcon.map((iconItem, index) => {
    const iconCookie = iconCookies.find(
      (item) => item.title === iconItem.title
    );
    return {
      title: iconItem.title,
      link: iconItem.relative,
      externalLink: Array.isArray(iconItem.options)
        ? false
        : iconItem.options.external,
      image: iconItem.icon,
      active: iconCookie
        ? iconCookie.active
        : index < maxListShow
          ? true
          : false,
    };
  });

  return (
    <CE_IconMain
      list={icons}
      maxListShow={maxListShow}
      cookiesName={cookiesName}
    />
  );
}
