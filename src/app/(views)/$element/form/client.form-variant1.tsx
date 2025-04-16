'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { RefreshIcon } from '@/lib/element/global/refresh-icon';
import { useDictionary } from '@/get-dictionary';
import {
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import InputText from '@/lib/element/global/form/input.text';
import {
  CFN_MapToWebFormPayload,
  CFN_PostWebForm,
  CFN_ValidateCreateWebFormFields,
} from '@/app/(views)/$function/cfn.post-webform';
import useForm from '@/lib/hook/useForm';
import {
  T_FormGetInvitedRequest,
  T_FormResult,
} from '@/api/webform/api.post.webform.type';
import InputError from '@/lib/element/global/form/input.error';
import DropDown from '@/lib/element/global/dropdown';
import { ACT_GetProvince } from '@/app/(views)/$action/province/action.get-province';
import { T_ResponGetProvince } from '@/api/province/api.get-province.type';
import {
  // T_LocationRequest,
  T_ResponGetLocation,
} from '@/api/location/api.get-location.type';
import {
  ACT_GetLocation,
  // ACT_GetLocationGetInvited,
} from '@/app/(views)/$action/location/action.get-location';
// import {
//   CFN_GetLocation,
//   CFN_MapToLocationPayload,
//   CFN_ValidateGetLocationFields,
// } from '../../$function/cfn.get-location';

type Option = {
  label: string;
  value: string;
};

export default function CE_FormVariant1({ variant }: { variant: string }) {
  const [selectedProvince, setSelectedProvince] = useState<Option | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Option | null>(null);

  const [provinceData, setProvinceData] =
    useState<T_ResponGetProvince | null>();

  const [locationData, setLocationData] =
    useState<T_ResponGetLocation | null>();

  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [] = useState({
    webform_id: true,
    nama: true,
    email: true,
    telepon: true,
    apakah_anda_nasabah_bri: true,
    metode_kontak: true,
    waktu_dihubungi: true,
    saya_ingin: true,
    pesan: true,
    pilih_provinsi: true,
    pilih_lokasi: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_FormGetInvitedRequest,
    T_FormGetInvitedRequest
  >(
    CFN_MapToWebFormPayload({
      nama: '',
      email: '',
      telepon: '',
      apakah_anda_nasabah_bri: '',
      metode_kontak: '',
      pesan: '',
      pilih_lokasi: '',
      pilih_provinsi: '',
      saya_ingin: '',
      waktu_dihubungi: '',
      webform_id: 'get_invited',
    }),
    CFN_ValidateCreateWebFormFields
  );

  const [result, setResult] = useState<T_FormResult>();
  const handleSubmit = async (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return <></>;
    }
    try {
      CFN_PostWebForm(transiting, { ...form }, (data) => {
        setResult(data?.data);
        if (button) {
          setIsResult(true);
        }
      });
    } catch (error) {}
  };

  const dictionary = useDictionary('id');
  const [captcha, setCaptcha] = useState({
    form: '',
    error: '',
  });

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const onSubmit = async (e: Event) => {
    setLoading(true);

    if (validateCaptcha(captcha.form) == false) {
      e.preventDefault();
      setCaptcha({
        ...captcha,
        error:
          dictionary?.field.track.validateCaptcha || 'Captcha Tidak Sesuai',
      });
      setLoading(false);
      return;
    }

    try {
      // eslint-disable-next-line no-console
      console.log('upload success');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Upload or registration failed', error);
    }
    setLoading(false);
  };

  let colorTheme = '';
  if (variant === 'wm-private-main-navigation') {
    colorTheme = 'white';
  } else if (variant === 'wm-prioritas-main-navigation') {
    colorTheme = 'prioritycolor';
  } else {
    colorTheme = 'wmcolor';
  }
  let textColor = '';
  if (variant === 'wm-private-main-navigation') {
    textColor = 'black';
  } else {
    textColor = 'white';
  }

  const getProvince = async () => {
    // eslint-disable-next-line no-unused-vars
    const province = await ACT_GetProvince({
      lang: 'en',
    });
    setProvinceData(province);
  };

  const getLocation = async (province: string) => {
    // eslint-disable-next-line no-unused-vars
    const location = await ACT_GetLocation({
      limit: '50',
      name: '',
      tipe: '',
      skip: '0',
      province: province,
    });
    setLocationData(location?.data);
  };

  useEffect(() => {
    getProvince();
  }, [form.pilih_lokasi]);

  useEffect(() => {}, [result, isResult]);

  return (
    <>
      <div className="hidden"></div>
      <div className="w-full h-full flex flex-col lg:flex-row-reverse ">
        <div className="w-full h-full p-5 py-10 xl:p-10 flex justify-center items-center">
          <form className="w-5/12 ">
            <section className="text-white space-y-3 pb-5">
              <h1 className=" text-black text-2xl font-bold">HUBUNGI SAYA</h1>
              <h2 className="text-slate-600">
                Beri tahu kami tentang permintaan Anda agar kami bisa
                mendapatkan penasihat yang tepat untuk Anda.
              </h2>
            </section>
            <h1 className="text-lg text-slate-900">Data lengkap Anda</h1>
            <div className="py-2">
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="text"
                id="hello"
                placeholder="Nama Lengkap Anda"
                value={form?.nama}
                onChange={(value) => onFieldChange('nama', +value)}
              />
              {formError.nama && (
                <div className="mt-5">
                  <InputError message={formError.nama} />
                </div>
              )}

              <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
            </div>
            <div className="py-2">
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="email"
                value={form?.email}
                onChange={(value) => onFieldChange('email', +value)}
                placeholder="email"
              />
              {formError.email && (
                <div className="mt-5">
                  <InputError message={formError.email} />
                </div>
              )}
            </div>
            <div className="py-2">
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="text"
                value={form?.telepon}
                onChange={(value) => onFieldChange('telepon', +value)}
                placeholder="phone number"
              />
              {formError.telepon && (
                <div className="mt-5">
                  <InputError message={formError.telepon} />
                </div>
              )}
            </div>

            {/* Input Radio */}
            <section className="text-black flex flex-col space-y-2 pt-5">
              <h1 className="">Apakah Anda Nasabah BRI?</h1>
              <span className="pt-2">
                <input type="radio" id="ya" name="nasabah" value="ya" />
                <label className="pl-2">Tidak</label>
              </span>
              <span>
                <input type="radio" id="tidak" name="nasabah" value="tidak" />
                <label className="pl-2">Ya </label>
              </span>
            </section>
            <section className="text-black flex flex-col space-y-2 pt-5">
              <h1>Apa metode kontak yang sesuai dengan Anda?</h1>
              <span className="pt-2">
                <input type="radio" id="huey" name="metode" value="huey" />
                <label className="pl-2">Hubungi Saya</label>
              </span>
              <span>
                <input type="radio" id="huey" name="metode" value="huey" />
                <label className="pl-2">Email Saya</label>
              </span>
            </section>
            {/* Input Dropdown */}
            <section className="pt-10 space-y-5">
              <div className="text-black">
                <h1 className="text-lg ">Kapan anda bisa kami hubungi?</h1>
                <span className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                  <input
                    className=" border-2 border-black rounded-full bg-transparent w-full px-5 py-2"
                    type="date"
                  />
                  <input
                    className=" border-2 border-black rounded-full bg-transparent w-full px-5 py-2"
                    type="time"
                  />
                </span>
              </div>
              <div className="w-full">
                <DropDown
                  options={
                    provinceData?.data.map((item) => ({
                      label: item?.name,
                      value: item?.uuid,
                    })) || []
                  }
                  selected={selectedProvince}
                  onSelectedChanges={(value) => {
                    setSelectedProvince(value);
                    getLocation(value.value);
                  }}
                  placeholder="Pilih Provinsi"
                />
              </div>
              <div className="w-full">
                <DropDown
                  options={
                    locationData?.data.map((item) => ({
                      label: item?.name,
                      value: item?.name,
                    })) || []
                  }
                  selected={selectedLocation}
                  onSelectedChanges={(value) => setSelectedLocation(value)}
                  placeholder="Pilih Lokasi"
                />
              </div>
              <div>
                <h1 className="pb-3 text-black">Saya ingin</h1>
                <input
                  className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                  type="text"
                  value={form?.saya_ingin}
                  onChange={(value) => onFieldChange('saya_ingin', +value)}
                  placeholder="Silakan pilih"
                />
                {formError.saya_ingin && (
                  <div className="mt-5">
                    <InputError message={formError.saya_ingin} />
                  </div>
                )}
              </div>
              <div>
                <h1 className="pb-3 text-black">Tambahan Pesan</h1>
                <input
                  className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                  type=""
                  value={form?.pesan}
                  onChange={(value) => onFieldChange('pesan', +value)}
                  placeholder="Tulis pesan anda disini"
                />
                {formError.pesan && (
                  <div className="mt-5">
                    <InputError message={formError.pesan} />
                  </div>
                )}
              </div>
              <div>
                <input
                  className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                  type=""
                  id="hello"
                  placeholder="Verifikasi Captcha"
                />
                <h1 className="text-xs text-red-500 pt-1">Wajib diisi</h1>
              </div>
              {
                <div className="flex flex-col items-start space-y-5 py-5">
                  <div className="flex items-center">
                    <LoadCanvasTemplateNoReload />
                    <button type="button" onClick={() => loadCaptchaEnginge(6)}>
                      <RefreshIcon width={28} height={28} fill="#27AE60" />
                    </button>
                  </div>
                  <div className="px-4 flex-1 border-black">
                    <InputText
                      placeholder={
                        `${dictionary?.field.general.enter} ${dictionary?.field.track.captcha}` ||
                        'Masukkan Captcha'
                      }
                      type="text"
                      value={captcha.form}
                      onChange={(value) =>
                        setCaptcha({
                          form: value.toString() || '',
                          error: '',
                        })
                      }
                      state={captcha.error ? 'error' : 'init'}
                    />
                    <h1>{captcha.error}</h1>
                  </div>
                </div>
              }
              <button
                onClick={() => handleSubmit(true)}
                type="submit"
                className={`bg-${colorTheme} text-${textColor} rounded-full px-5 py-2 uppercase text-white font-bold `}
              >
                hubungi saya
              </button>

              <div className="w-full flex justify-center items-center"></div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="py-2">
                  <div className="">
                    <InputText
                      className="text-black rounded-full bg-transparent w-full px-5 py-3"
                      type="text"
                      value={form?.nama}
                      onChange={(value) => onFieldChange('nama', value)}
                      placeholder="nama"
                    />
                  </div>
                  {formError.nama && (
                    <div className="mt-5">
                      <InputError message={formError.nama} />
                    </div>
                  )}
                </div>
                <div className="py-2">
                  <div className="mb-5 w-[90%]">
                    <InputText
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.email}
                      onChange={(value) => onFieldChange('email', value)}
                      placeholder="email"
                    />
                  </div>
                  {formError.email && (
                    <div className="mt-5">
                      <InputError message={formError.email} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.telepon}
                      onChange={(value) => onFieldChange('telepon', +value)}
                      placeholder="telephone"
                    />
                  </div>
                  {formError.telepon && (
                    <div className="mt-5">
                      <InputError message={formError.telepon} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.apakah_anda_nasabah_bri}
                      placeholder="nasabah"
                      onChange={(value) =>
                        onFieldChange('apakah_anda_nasabah_bri', value)
                      }
                    />
                  </div>
                  {formError.apakah_anda_nasabah_bri && (
                    <div className="mt-5">
                      <InputError message={formError.apakah_anda_nasabah_bri} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      placeholder="metode kontak"
                      value={form?.metode_kontak}
                      onChange={(value) => onFieldChange('metode_kontak', value)}
                    />
                  </div>
                  {formError.metode_kontak && (
                    <div className="mt-5">
                      <InputError message={formError.metode_kontak} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      placeholder="pesan"
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.pesan}
                      onChange={(value) => onFieldChange('pesan', value)}
                    />
                  </div>
                  {formError.pesan && (
                    <div className="mt-5">
                      <InputError message={formError.pesan} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      placeholder="lokasi"
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.pilih_lokasi}
                      onChange={(value) => onFieldChange('pilih_lokasi', value)}
                    />
                  </div>
                  {formError.pilih_lokasi && (
                    <div className="mt-5">
                      <InputError message={formError.pilih_lokasi} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      placeholder="provinsi"
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.pilih_provinsi}
                      onChange={(value) => onFieldChange('pilih_provinsi', value)}
                    />
                  </div>
                  {formError.pilih_provinsi && (
                    <div className="mt-5">
                      <InputError message={formError.pilih_provinsi} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      placeholder="saya ingin"
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.saya_ingin}
                      onChange={(value) => onFieldChange('saya_ingin', value)}
                    />
                  </div>
                  {formError.saya_ingin && (
                    <div className="mt-5">
                      <InputError message={formError.saya_ingin} />
                    </div>
                  )}
                </div>
    
                <div className="py-2">
                  <div className="mb-5 w-[50%]">
                    <InputText
                      placeholder="waktu di hubungi"
                      className="w-full h-full rounded-full px-5 outline"
                      type="text"
                      value={form?.waktu_dihubungi}
                      onChange={(value) => onFieldChange('waktu_dihubungi', value)}
                    />
                  </div>
                  {formError.waktu_dihubungi && (
                    <div className="mt-5">
                      <InputError message={formError.waktu_dihubungi} />
                    </div>
                  )}
                </div> */
}
