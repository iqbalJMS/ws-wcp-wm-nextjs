"use server";

import { API_GetMainFooterMenu } from "@/api/footer/main-footer/api.get-main-footer";
import { T_ResponseGetMainFooterMenu } from "@/api/footer/main-footer/api.get-main-footer.type";

export async function ACT_GetMainMenuFooter({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu> {
  const response = await API_GetMainFooterMenu({ lang });
  return response;
}
