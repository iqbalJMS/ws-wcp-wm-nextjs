import clamp from "./src/lib/functions/global/clamp";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/element/global/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/functions/global/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "12px",
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },

    extend: {
      screens: {
        "1025-only": { max: "1024px" },
        "1025": "1025px",
        "1367": "1367px",
        mdmax: { max: "768px" },
        hoverable: { raw: "(hover: hover)" },
        unhoverable: { raw: "(hover: none)" },
      },
      fontSize: {
        // heading s
        "heading-s-bold": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: 700,
          },
        ],
        "heading-s-semibold": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: 600,
          },
        ],
        "heading-s-medium": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: 500,
          },
        ],
        "heading-s-regular": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: 400,
          },
        ],
        "heading-s-light": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: 300,
          },
        ],
        // heading m
        "heading-m-bold": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: 700,
          },
        ],
        "heading-m-semibold": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: 600,
          },
        ],
        "heading-m-medium": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: 500,
          },
        ],
        "heading-m-regular": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: 400,
          },
        ],
        "heading-m-light": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: 300,
          },
        ],
        // text xxl
        "xxl-bold": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: 700,
          },
        ],
        "xxl-semibold": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: 600,
          },
        ],
        "xxl-medium": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: 500,
          },
        ],
        "xxl-regular": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: 400,
          },
        ],
        "xxl-light": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: 300,
          },
        ],
        // text xl
        "xl-bold": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: 700,
          },
        ],
        "xl-semibold": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: 600,
          },
        ],
        "xl-medium": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: 500,
          },
        ],
        "xl-regular": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: 400,
          },
        ],
        "xl-light": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: 300,
          },
        ],
        // text l
        "l-bold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        "l-semibold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 600,
          },
        ],
        "l-medium": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 500,
          },
        ],
        "l-regular": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 400,
          },
        ],
        "l-light": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 300,
          },
        ],
        // text m
        "m-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 700,
          },
        ],
        "m-semibold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 600,
          },
        ],
        "m-medium": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 500,
          },
        ],
        "m-regular": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: 400,
          },
        ],
        "m-light": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: 300,
          },
        ],
        // text s
        "s-bold": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: 700,
          },
        ],
        "s-semibold": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: 600,
          },
        ],
        "s-medium": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: 500,
          },
        ],
        "s-regular": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: 400,
          },
        ],
        "s-light": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: 300,
          },
        ],
      },
      colors: {
        "blue-01": "#00549B",
        "blue-02": "#1078CA",
        "blue-03": "#DDEFFC",
        "orange-01": "#F87304",
        "orange-02": "#F0F8FF",
        "orange-03": "#FDCAA0",
        "orange-04": "#FEEDDF",
        "white-01": "#FFFFFF",
        "white-02": "#F5FBFF",
        "gray-01": "#292929",
        "gray-02": "#929393",
        "gray-03": "#EAEBEB",
        "gray-04": "#A3A3A3",
        "light-02": "#EAEBEB",
        "light-08": "#777777",
        "red-01": "#c70740",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, matchUtilities }) => {
      addComponents({
        ".body": {
          fontSize: clamp({
            minValue: 14,
            maxValue: 16,
            minViewport: 430,
            maxViewport: 1440,
          }),
        },
        ".wrapper-space": {
          "--wrapper-space": "0.75rem",
          "@media (min-width:1025px)": {
            "--wrapper-space": clamp({
              minValue: 960,
              maxValue: 1500,
              minViewport: 1024,
              maxViewport: 1600,
            }),
          },
        },
        ".wrapper": {
          "--wrapper-space": "0.75rem",
          paddingInline: "var(--wrapper-space)",
          width: "100%",
          marginInline: "auto",
          "@media (min-width:1025px)": {
            "--wrapper-space": clamp({
              minValue: 960,
              maxValue: 1500,
              minViewport: 1024,
              maxViewport: 1600,
            }),
            maxWidth: "var(--wrapper-space)",
            paddingInline: "0rem",
          },
        },
      });
      matchUtilities(
        {
          "w-clamp": (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size
              .split(" ")
              .map(Number);
            return {
              width: clamp({ minValue, maxValue, minViewport, maxViewport }),
            };
          },
          "text-clamp": (size) => {
            const [minValue, maxValue, minViewport, maxViewport] = size
              .split(" ")
              .map(Number);
            return {
              fontSize: clamp({ minValue, maxValue, minViewport, maxViewport }),
            };
          },
        },
        { values: { none: "0 0 0 0" } }
      );
    }),
  ],
};

export default config;
