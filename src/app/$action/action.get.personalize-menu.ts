'use server';

import { API_GetPersonalizeMenu } from "@/api/personalize-menu/api.get.personalize-menu";
import { T_PersonalizeMenu } from "@/api/personalize-menu/api.get.personalize-menu.type";

export async function ACT_GetPersonalizeMenu(): Promise<T_PersonalizeMenu[]> {
  const response = await API_GetPersonalizeMenu();
  return response;
}
