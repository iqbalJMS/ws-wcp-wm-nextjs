"use server";
import { T_ResponseGetBottomFooterMenu } from "./api.get-bottom-footer.type";

const ABSTRACTION_RESPONSE_DATA = {
  data:
  {
    listItem: [
      {
        value: "Privasi",
        url: "https://bri.co.id/privacy",
        extern: true,
      },
      {
        value: "Ketentuan Pengguna",
        url: "https://bri.co.id/term-of-use",
        extern: true,
      },
    ],
    socialMedia: [
      {
        icon: "facebook",
        url: "https://www.facebook.com/BRIofficialpage",
      },
      {
        icon: "instagram",
        url: "https://www.instagram.com/bankbri_id",
      },
      {
        icon: "twitter",
        url: "https://x.com/kontakbri",
      },
      {
        icon: "youTube",
        url: "https://www.youtube.com/channel/UCRHFE_ooDrkEiRRJbog3EjA",
      },
    ],
  }
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
    return { data: {} };
  }
}
