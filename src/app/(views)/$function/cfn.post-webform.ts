'use client';

import { T_PostResponse } from '@/api/common/fetch.type';
import {
  validateBoolean,
  validateEmail,
  validateEmpty,
  validatePhone,
  validatePrimaryName,
} from '@/lib/functions/global/validate';
/* eslint-disable no-unused-vars */

import * as yup from 'yup';
import { Arrival, Call, Departure } from '@strix/client';

import {
  T_FormResult,
  T_FormGetInvitedRequest,
} from '@/api/webform/api.post.webform.type';
import { ACT_PostWebForm } from '@/app/(views)/$action/webform/action.post-webform';

export function CFN_PostWebForm(
  transit: Call,
  data: T_FormGetInvitedRequest,
  onSuccess?: (data: T_PostResponse<T_FormResult> | undefined) => void
) {
  transit(async () => {
    const actionResult = await ACT_PostWebForm(data);
    if (onSuccess) {
      onSuccess(actionResult);
    }
  });
}

export function CFN_MapToWebFormPayload(
  form: T_FormGetInvitedRequest
): T_FormGetInvitedRequest {
  return {
    webform_id: form.webform_id,
    nama: form.nama,
    email: form.email,
    telepon: form.telepon,
    apakah_anda_nasabah_bri: form.apakah_anda_nasabah_bri,
    metode_kontak: form.metode_kontak,
    waktu_dihubungi: form.waktu_dihubungi,
    saya_ingin: form.saya_ingin,
    pesan: form.pesan,
    pilih_provinsi: form.pilih_provinsi,
    pilih_lokasi: form.pilih_lokasi,
  };
}

export function CFN_ValidateCreateWebFormFields(
  name: keyof T_FormGetInvitedRequest,
  value: any
): string {
  switch (name) {
    case 'nama':
      return validatePrimaryName(value);
    case 'email':
      return validateEmail(value);
    case 'telepon':
      return validatePhone(value);
    case 'apakah_anda_nasabah_bri':
      return validateBoolean(value, 'Harap centang bagian ini');
    case 'metode_kontak':
      return validateBoolean(value, 'Harap centang bagian ini');
    case 'waktu_dihubungi':
      return validateEmpty(value, 'Wajib di isi');
    case 'saya_ingin':
      return validateEmpty(value, 'Wajib di isi');
    case 'pesan':
      return validateEmpty(value, 'Wajib di isi');
    case 'pilih_provinsi':
      return validateEmpty(value, 'Wajib di isi');
    case 'pilih_lokasi':
      return validateEmpty(value, 'Wajib di isi');
    case 'webform_id':
      return '';
    default:
      return '';
  }
}
