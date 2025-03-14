import React, { useEffect, useRef, useState } from 'react';
import InputText from './input.text';

import useOnClickOutside from '@/lib/hook/useOnClickOutside';
import Image from 'next/image';

export type T_InputTextOnChange = string | number;

type T_InputPhoneProps = {
  valueArea: string;
  valueDigit: string;
  placeholder?: string;
  onChangeArea?: (_value: T_InputTextOnChange) => void;
  onChangeDigit?: (_value: T_InputTextOnChange) => void;
};

type CountryCode = {
  code: string;
  flag: string;
  country: string;
};

const countryCodes: CountryCode[] = [
  {
    code: '+1',
    flag: '/web/wealth-management/images/why-us/bg-image.jpg',
    country: 'United States',
  },
  {
    code: '+44',
    flag: '/web/wealth-management/images/why-us/bg-image.jpg',
    country: 'United Kingdom',
  },
  {
    code: '+62',
    flag: '/web/wealth-management/images/why-us/bg-image.jpg',
    country: 'Indonesia',
  },
  {
    code: '+91',
    flag: '/web/wealth-management/images/why-us/bg-image.jpg',
    country: 'India',
  },
  {
    code: '+81',
    flag: '/web/wealth-management/images/why-us/bg-image.jpg',
    country: 'Japan',
  },
];

export default function InputPhone({
  valueArea,
  valueDigit,
  onChangeArea,
  onChangeDigit,
  placeholder,
}: T_InputPhoneProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [area, setArea] = useState(valueArea);
  const [digit, setDigit] = useState(valueDigit);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    countryCodes.find((country) => country.code === valueArea) ||
      countryCodes[0]
  );

  // Hook untuk mendeteksi klik di luar dropdown
  const element = useRef<HTMLDivElement>(null);
  useOnClickOutside(element, () => setIsDropdownOpen(false));

  // Fungsi untuk menangani perubahan kode area
  const handleSelect = (country: CountryCode) => {
    setArea(country.code);
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  // Sinkronisasi area ke parent
  useEffect(() => {
    if (onChangeArea) onChangeArea(area);
  }, [area, onChangeArea]);

  // Sinkronisasi digit ke parent
  useEffect(() => {
    if (onChangeDigit) onChangeDigit(digit);
  }, [digit, onChangeDigit]);

  return (
    <div ref={element} className="relative">
      <div className="absolute left-0 flex-none w-24 h-full z-20">
        <button
          type="button"
          className="w-full flex items-center justify-center h-full  bg-blue-900 text-white text-sm rounded-l-2xl"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <div className="flex items-center gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${selectedCountry.flag}`}
              alt="flag"
              width={20}
              height={15}
            />
            <span>{selectedCountry.code}</span>
          </div>
        </button>
        {isDropdownOpen && (
          <ul className="absolute bottom-full left-0 min-w-[500px] bg-white border shadow-md rounded-lg mt-1 py-2">
            {countryCodes.map((country) => (
              <li
                key={country.code}
                onClick={() => handleSelect(country)}
                className="flex items-center justify-left gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${country.flag}`}
                  alt={country.code}
                  width={20}
                  height={15}
                />
                <span className="font-medium">{country.country}</span>
                <span className="text-gray-400">{country.code}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <InputText
        value={digit}
        onChange={(value) => setDigit(value.toString())}
        type="text"
        placeholder={placeholder}
        forInputPhone
      />
    </div>
  );
}
