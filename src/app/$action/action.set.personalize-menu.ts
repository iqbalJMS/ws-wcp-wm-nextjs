'use server';

// import { SFN_SetPersonalizedMenu } from "@/app/$function/sfn.set.personalized-menu";
// import { SFN_CookieIcon } from "@/app/$function/sfn.cookie.icon";
import { T_IconList } from "./constants";

export async function ACT_SetPersonalizeMenu(cookiesName: string, data: T_IconList[]) {
    //eslint-disable-next-line no-console
    console.log(cookiesName, data)
    // console.log(cookiesName)
    // console.log(data)
    // await SFN_SetPersonalizedMenu(cookiesName, data)
    // const cookiesPersonalized = await SFN_CookieIcon(cookiesName, data);
    // if (!cookiesPersonalized.get()) {
    //     console.log('empty')
    //     cookiesPersonalized.set()
    // }
    // console.log(check.get())
    //   const response = await API_GetPersonalizeMenu();
    //   return response;
}
