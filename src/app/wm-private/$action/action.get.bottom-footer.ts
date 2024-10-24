"use server";

import { API_GetBottomFooterMenu } from "@/api/footer/bottom-footer/api.get-bottom-footer";
import { T_ResponseGetBottomFooterMenu } from "@/api/footer/bottom-footer/api.get-bottom-footer.type";

export async function ACT_GetBottomMenuFooter({
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetBottomFooterMenu> {
  const response = await API_GetBottomFooterMenu({ lang });
  return response;
}
