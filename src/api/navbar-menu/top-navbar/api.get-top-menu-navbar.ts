"use server";

import { get } from "@/api/common/fetch";
import { T_ResponseGetTopMenuNavbar } from "./api.get-top-menu-navbar.type";

export async function API_GetTopMenuNavbar({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetTopMenuNavbar> {
  try {
    const response: T_ResponseGetTopMenuNavbar = await get(
      "/bricc-api/menu-items/top-navigation?_format=json",
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("An error occurred during Get Top Menu Navbar:", error);
    return [];
  }
}
