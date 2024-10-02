"use server";

import { get } from "@/api/common/fetch";
import { T_ResponseGetMainMenuNavbar } from "./api.get-main-menu-navbar.type";

export async function API_GetMainMenuNavbar({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainMenuNavbar> {
  try {
    const response: T_ResponseGetMainMenuNavbar = await get(
      "/bricc-api/menu-items/main?_format=json",
    );

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("An error occurred during Get Main Menu Navbar:", error);
    return [];
  }
}
