"use server";
import { T_ResponseGetBottomFooterMenu } from "./api.get-bottom-footer.type";

const ABSTRACTION_RESPONSE_DATA = {
  data:
  {
    list: [
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
    ],
    social_media: [
      {
        name: "",
        icon: "facebook",
        url: "https://www.facebook.com/BRIofficialpage",
        className: "text-white ",
      },
      {
        name: "",
        icon: "instagram",
        url: "https://www.instagram.com/bankbri_id",
        className: "text-white ",
      },
      {
        name: "",
        icon: "twitter",
        url: "https://x.com/kontakbri",
        className: "text-white ",
      },
      {
        name: "",
        icon: "youTube",
        url: "https://www.youtube.com/channel/UCRHFE_ooDrkEiRRJbog3EjA",
        className: "text-white ",
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
    return { data: [] };
  }
}
