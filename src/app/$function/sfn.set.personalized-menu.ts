"use server";

import { getSecureCookie, setSecureCookie } from "@/lib/functions/global/cookies";
import { generateUniqueKey } from "@/lib/functions/global/key";
import { Dragon } from "@strix/server";
import { T_IconList } from "@/app/$action/constants";

export async function SFN_SetPersonalizedMenu(
  type: 'set' | 'get',
  cookiesName: string,
  data?: T_IconList[],
): Promise<any> {
  switch (type) {
    case 'set':
      const keySet = generateUniqueKey();
      await setSecureCookie(cookiesName, keySet);

      await Dragon.set(keySet, JSON.stringify(data));
      break;
    case 'get':
      const keyGet = await getSecureCookie(cookiesName);
      if (keyGet) {
        return await Dragon.get(keyGet);
      }
      break;

  }

}
