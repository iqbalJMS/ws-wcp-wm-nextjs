"use server";
import { T_ResponseGetMainFooterMenu } from "./api.get-main-footer.type";

const ABSTRACTION_RESPONSE_DATA = {
  data: [
    {
      title: "Head Office BRI",
      list: [
        {
          name: "PT. Bank Rakyat Indonesia (Persero) Tbk",
          className:
            "lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black",
        },
        {
          name: "Gedung BRI Jl. Jenderal Sudirman Kav.44-46. Jakarta 10210 Indonesia",
          className:
            "lg:max-w-[11.563rem] px-24 lg:px-0 cursor-default text-black",
        },
      ],
    },
    {
      title: "Hubungi Kami",
      list: [
        {
          name: "14017 / 1500017",
          icon: "call",
          extern: true,
          url: "tel:1500017",
          className: "text-blue-01 ",
        },
        {
          name: "callbri@bri.co.id",
          icon: "email",
          extern: true,
          url: "mailto:callbri@bri.co.id",
          className: "text-blue-01 ",
        },
      ],
      social_media: [
        {
          name: "",
          icon: "facebook",
          url: "https://www.facebook.com/BRIofficialpage",
          className: "text-blue-01 ",
        },
        {
          name: "",
          icon: "instagram",
          url: "https://www.instagram.com/bankbri_id",
          className: "text-blue-01 ",
        },
        {
          name: "",
          icon: "twitter",
          url: "https://x.com/kontakbri",
          className: "text-blue-01 ",
        },
        {
          name: "",
          icon: "youTube",
          url: "https://www.youtube.com/channel/UCRHFE_ooDrkEiRRJbog3EjA",
          className: "text-blue-01 ",
        },
      ],
    },
    {
      title: "Tautan",
      list: [
        {
          name: "Produk BRI",
          url: "https://bri.co.id/bri-products",
          extern: true,
          className: "text-blue-01 ",
        },
        {
          name: "Deposit Interest",
          extern: true,
          url: "https://bri.co.id/deposit-interest",
          className: "text-blue-01 ",
        },
        {
          name: "Rates",
          url: "https://bri.co.id/kurs-detail",
          extern: true,
          className: "text-blue-01 ",
        },
        {
          name: "Loan Interest Rates",
          url: "https://bri.co.id/loan-interest-rates",
          extern: true,
          className: "text-blue-01 ",
        },
        {
          name: "Whistleblowing System",
          url: "https://whistleblowing-system.bri.co.id/",
          extern: true,
          className: "text-blue-01 ",
        },
        {
          extern: true,
          url: "https://bri.co.id/web/erecruitment",
          name: "Karier",
          className: "text-blue-01 ",
        },
      ],
    },
    {
      list: [
        {
          className: "lg:px-0 px-16 cursor-default text-blue-01",
          name: "BRI terdaftar dan diawasi oleh Otoritas Jasa Keuangan",
        },
        {
          className: "cursor-default text-blue-01",
          name: "BRI merupakan peserta penjamin LPS",
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
