"use server";
import { T_ResponseGetMainFooterMenu } from "./api.get-main-footer.type";

const ABSTRACTION_RESPONSE_DATA = {
  data: [
    {
      title: "Kantor Pusat BRI",
      listItem: [
        {
          name: "PT. Bank Rakyat Indonesia (Persero) Tbk",
          className:
            "lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-white",
        },
        {
          name: "Gedung BRI Jl. Jenderal Sudirman Kav.44-46. Jakarta 10210 Indonesia",
          className:
            "lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-white",
        },
      ],
    },
    {
      title: "Hubungi Kami",
      listItem: [
        {
          name: "BRI Premium Call Center (021) 575 8899/ 080 010 17017",
          icon: "call",
          url: "tel:1500017",
          className: "text-white"
        },
        {
          name: "Tinggalkan Pesan",
          icon: "email",
          url: "mailto:callbri@bri.co.id",
          className: "text-white"
        },
        {
          name: "Temukan BRI Prioritas",
          icon: "email",
          url: "mailto:callbri@bri.co.id",
          className: "text-white"
        },
      ],
    },
    {
      title: 'Terdaftar Dan Diawasi Oleh:',
      listImage: [
        {
          image: "ojk",
        },
        {
          image: "lps",
        },
      ],
    },
  ],
};
export async function API_GetMainFooterMenu({
  // TODO: used as a param - integration API
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<T_ResponseGetMainFooterMenu> {
  try {
    const response: T_ResponseGetMainFooterMenu = await new Promise(
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
    console.error("An error occurred during Get Main Footer Menu:", error);
    return { data: [] };
  }
}
