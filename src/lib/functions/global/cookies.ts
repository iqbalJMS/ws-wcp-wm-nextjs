import { Crypt } from "@strix/server";
import { cookies } from "next/headers";
import { hashWithSHA512 } from "./crypto-util";
const SECRET = process.env.CLIENT_SECRET || "";

const encryptValue = (value: string): string => {
  return Crypt.AesClient(SECRET).encrypt(value);
};

const decryptValue = (encryptedValue: string): string | undefined => {
  return Crypt.AesClient(SECRET).decrypt(encryptedValue);
};

export const setSecureCookie = async (
  name: string,
  value: string,
  options: { days?: number } = {},
) => {
  const { days = 7 } = options;
  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  const encryptedValue = encryptValue(value);
  const hashedName = await hashWithSHA512(name);

  const cookieStore = cookies();
  cookieStore.set(hashedName, encryptedValue, {
    secure: true,
    httpOnly: true,
    expires: expires,
    sameSite: "strict",
  });
};

export const getSecureCookie = async (
  name: string,
): Promise<string | undefined> => {
  const cookieStore = cookies();
  const hashedName = await hashWithSHA512(name);
  const encryptedValue = cookieStore.get(hashedName)?.value;
  return encryptedValue ? decryptValue(encryptedValue) : undefined;
};

export const deleteSecureCookie = async (name: string) => {
  const cookieStore = cookies();
  const hashedName = await hashWithSHA512(name);
  cookieStore.set(hashedName, "", {
    secure: true,
    httpOnly: true,
    expires: new Date(0),
    sameSite: "strict",
  });
};
