/* eslint-disable no-unused-vars */
import { useState } from "react";

export type T_FormErrors<T> = {
  [K in keyof T]?: string;
};

type T_Validator<T> = (
  name: keyof T,
  value: string | boolean | number,
) => string;

const updateNestedField = <T>(obj: T, path: (keyof T)[], value: any): T => {
  if (path.length === 0) return obj;
  const [first, ...rest] = path;
  if (rest.length === 0) {
    return { ...obj, [first]: value };
  }
  return {
    ...obj,
    [first]: updateNestedField(obj[first] as any, rest, value),
  };
};

type T_NestedObject = { [key: string]: any };

function getObjectValue<T>(obj: T_NestedObject, path: string): T | undefined {
  const keys = path.split(".");
  let result: any = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }

  return result as T;
}

const useForm = <T extends Record<string, any>, B extends Record<string, any>>(
  initialState: B,
  validateField: T_Validator<T>
) => {
  const [form, setForm] = useState<B>(initialState);
  const [formError, setFormError] = useState<T_FormErrors<T>>({});

  const onFieldChange = (
    name: keyof T,
    value: string | boolean | number,
    withValidation = true
  ) => {
    if (withValidation) {
      const error = validateField(name as keyof T, value);
      setFormError({
        ...formError,
        [name]: error,
      });
    }

    const pathArray = name.toString().split(".");

    const newForm = updateNestedField<B>(form, pathArray as (keyof B)[], value);

    setForm(newForm);
  };

  const validateForm = (): boolean => {
    const errors: T_FormErrors<T> = {};

    for (const key in form) {
      const error = validateField(key as keyof T, form[key] as string);
      if (error) {
        errors[key as keyof T] = error;
      }
    }

    setFormError(errors);

    return !Object.values(errors).some((error) => error);
  };

  const validationForm = (data: (keyof T)[]): boolean => {
    const errors: T_FormErrors<T> = {};
    data.forEach((key) => {
      const error = validateField(
        key as keyof T,
        getObjectValue(form, key as string) as string,
      );
      if (error) {
        errors[key as keyof T] = error;
      }
    });
    setFormError(errors);
    return !Object.values(errors).some((error) => error);
  };

  const resetForm = () => {
    setForm(initialState);
    setFormError({});
  };
  const resetFormError = () => {
    setFormError({});
  };

  return {
    form,
    formError,
    onFieldChange,
    validateForm,
    setForm,
    resetForm,
    setFormError,
    validationForm,
    resetFormError,
  };
};

export default useForm;
