"use server";
import { T_ResponseGetBottomFooterMenu } from "./api.get-bottom-footer.type";

const ABSTRACTION_RESPONSE_DATA = {
  data: [
    {
      value: "Privasi",
      url: "https://bri.co.id/privacy",
      extern: true,
    },
    {
      value: "Syarat & Ketentuan",
      url: "https://bri.co.id/term-of-use",
      extern: true,
    },
    {
      value: "Sitemap",
      url: "https://bri.co.id/sitemap",
      extern: true,
    },
    {
      value: "Karir",
      url: "https://bri.co.id/web/erecruitment",
      extern: true,
    },
    {
      value: "CMS BRI",
      url: "https://ibank.bri.co.id/cms/",
      extern: true,
    },
    {
      value: "E-form BRI",
      url: "https://eform.bri.co.id/",
      extern: true,
    },
  ],
};
export async function API_GetBottomFooterMenu({
  // TODO: used as a param - integration API
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetBottomFooterMenu> {
  try {
    const response: T_ResponseGetBottomFooterMenu = await new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve({
            data: ABSTRACTION_RESPONSE_DATA.data,
          });
        }, 500);
      },
    );
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("An error occurred during Get Bottom Footer Menu:", error);
    return { data: [] };
  }
}
