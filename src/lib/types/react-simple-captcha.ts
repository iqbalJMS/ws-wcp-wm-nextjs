/* eslint-disable no-unused-vars */
declare module 'react-simple-captcha' {
  import { ComponentType } from 'react';

  type T_CaptchaProps = {
    onChange: (captcha: string) => void;
    width?: number;
    height?: number;
    bgColor?: string;
    fgColor?: string;
    fontSize?: number;
    randomWords?: boolean;
  };

  export const Captcha: ComponentType<T_CaptchaProps>;
  export const loadCaptchaEnginge: (numberOfCharacters: number) => void;
  export const LoadCanvasTemplate: ComponentType;
  export const LoadCanvasTemplateNoReload: ComponentType;
  export const validateCaptcha: (userInput: string) => boolean;
}
