import {
  emailRegex,
  nameRegex,
  numericOnlyRegex,
  phoneNumberRegex,
  nikRegex,
  textRegex,
  homePhoneNumberRegex,
  namePrimaryRegex,
  appReqNoRegex,
  zipCodeRegex,
} from '@/lib/functions/global/validate/regex';

const isEmpty = (value?: string): boolean => value?.trim() === '';

export const validateEmpty = (
  value?: string,
  label: string = 'field'
): string => {
  return isEmpty(value) ? (!label ? 'Wajib Diisi' : `Wajib Diisi`) : '';
};

export const validateText = (
  value?: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (value) {
    if (!textRegex.test(value)) return `${label} tidak valid`;
  }
  return '';
};

export const validateMin = (
  value?: number,
  label: string = 'Field',
  min: number = 1
): string => {
  return (value || 0) < min ? `${label} ${min}` : '';
};

export const validateMaxMinVariant = (
  value?: number,
  min: number = 1,
  max: number = 10
): string => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  };

  if (!value) return `Nilai tidak boleh kurang dari ${formatCurrency(min)}`;

  if (value < min) {
    return `Nilai tidak boleh kurang dari ${formatCurrency(min)}`;
  }
  if (value > max) {
    return `Nilai tidak boleh lebih dari ${formatCurrency(max)}`;
  }

  return '';
};

export const validateMaxMinVariant2 = (
  value?: number,
  min: number = 1,
  max: number = 10
): string => {
  if (!value) return `Nilai tidak boleh kurang dari ${min}`;

  if (value < min) {
    return `Nilai tidak boleh kurang dari ${min}`;
  }
  if (value > max) {
    return `Nilai tidak boleh lebih dari ${max}`;
  }

  return '';
};

export const validateMaxMin = (
  value?: number,
  label: string = 'Field',
  min: number = 1,
  max: number = 10
): string => {
  return (value || 0) < min || (value || 0) > max
    ? `${label} 
`
    : '';
};

export const validateMaxMinDuration = (
  value?: number,
  label: string = 'Field',
  min: number = 1,
  max: number = 10
): string => {
  return (value || 0) < min || (value || 0) > max ? `${label} ` : '';
};

export const validateEmptyArray = (
  value: Array<string | object>,
  label: string = 'field'
): string => {
  return !value.length ? `${label} tidak boleh kosong` : '';
};
export const validateFile = (value: File, label: string = 'field'): string => {
  return !value.name ? `${label} tidak boleh kosong` : '';
};

export const validateBoolean = (value: boolean, label: string): string => {
  return value ? '' : `${label} Harap centang bagian ini`;
};

export const validateName = (name: string, label: string = ''): string => {
  const emptyError = validateEmpty(name, label);
  if (emptyError) return emptyError;
  if (!nameRegex.test(name)) return `Harap masukkan karakter alfabet`;
  return '';
};

export const validatePrimaryName = (
  value: string,
  label: string = ''
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  return !namePrimaryRegex.test(value)
    ? !value
      ? `${label}`
      : `Harap masukkan karakter alfabet`
    : '';
};

export const validateEmail = (email: string): string => {
  const emptyError = validateEmpty(email, 'Email');
  if (emptyError) return emptyError;
  if (!emailRegex.test(email))
    return 'Silakan masukkan alamat email yang berlaku.';

  return '';
};

export const validatePassword = (password: string): string => {
  const emptyError = validateEmpty(password, 'Kata sandi');
  if (emptyError) return emptyError;
  // if (password.length < 1) return 'Password minimal 1 karakter'
  return '';
};

export const validateConfirmPassword = (
  confirmPassword: string,
  password: string
): string => {
  const emptyError = validateEmpty(password, 'Konfirmasi kata sandi');
  if (emptyError) return emptyError;
  return confirmPassword !== password
    ? 'Konfirmasi kata sandi tidak sesuai'
    : '';
};

export const validateNik = (nik: string): string => {
  const emptyError = validateEmpty(nik, 'NIK');
  if (emptyError) return emptyError;
  if (!numericOnlyRegex.test(nik) || nik.length !== 16)
    return 'NIK harus berisi 16 karakter dan hanya angka';
  return '';
};

export const validateNumeric = (
  value: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (!numericOnlyRegex.test(value)) return `${label} harus diisi dengan angka`;
  return '';
};
export const validateZipCode = (
  value: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (!zipCodeRegex.test(value)) return `${label} harus diisi dengan angka`;
  return '';
};

export const validateAddress = (
  value: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (value.length < 5) return `${label} harus lebih dari 5 Huruf`;

  if (value.length > 30) return `${label} tidak boleh lebih dari 30 Huruf`;

  if (value) {
    if (!textRegex.test(value)) return `${label} tidak valid`;
  }
  return '';
};

export const validateSallary = (
  value: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, value);
  if (emptyError) return emptyError;
  if (!numericOnlyRegex.test(value) || parseInt(value) < 36000001)
    return `${label} harus diisi dengan angka dan harus lebih dari 36.000.000`;
  return '';
};

export const validatePhone = (value: string, label: string = ''): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (!phoneNumberRegex.test(value))
    return `${label} harus terdiri dari 9 - 12 Karakter dan hanya angka saja`;
  return '';
};
export const validateHomePhone = (
  value: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (!homePhoneNumberRegex.test(value))
    return `${label} harus terdiri dari 8 Karakter dan hanya angka`;
  return '';
};
export const validateNPWP = (
  value: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (!numericOnlyRegex.test(value) || value.length != 15)
    return `${label} harus berisi 15 karakter dan hanya angka`;
  return '';
};
export const validateNIK = (value: string, label: string = 'field'): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  if (!nikRegex.test(value) || value.length != 16)
    return `${label} harus terdiri dari 16 Karakter`;

  return '';
};

export const validateAppReqNo = (
  value: string,
  label: string = 'field'
): string => {
  const emptyError = validateEmpty(value, label);
  if (emptyError) return emptyError;
  return !appReqNoRegex.test(value)
    ? !label
      ? `Field tidak valid`
      : `${label} tidak valid`
    : '';
};
