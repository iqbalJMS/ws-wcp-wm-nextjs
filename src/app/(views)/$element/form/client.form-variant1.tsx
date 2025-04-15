'use client';
import React, { useEffect, useState, useTransition } from 'react';
// import { RefreshIcon } from '@/lib/element/global/refresh-icon';
// import { useDictionary } from '@/get-dictionary';
// import {
//   LoadCanvasTemplateNoReload,
//   loadCaptchaEnginge,
//   validateCaptcha,
// } from 'react-simple-captcha';
import InputText from '@/lib/element/global/form/input.text';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
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

// const formSchema = z.object({
//   username: z
//     .string()
//     .min(3, 'minimal 3 karakter')
//     .max(20, 'maximal 20 karakter'),
//   email: z.string().min(3, 'minimal 3 karakter').max(20, 'maximal 20 karakter'),
//   phone: z.string().min(3, 'minimal 3 karakter').max(20, 'maximal 20 karakter'),
// });

// type FormSchema = z.infer<typeof formSchema>;

export default function CE_FormVariant1({ variant }: { variant: string }) {
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

  // const DATA = [
  //   {
  //     placeholder: 'Nama Lengkap Anda',
  //     type: 'text',
  //   },
  //   {
  //     placeholder: 'Alamat Email Anda',
  //     type: 'text',
  //   },
  //   {
  //     placeholder: 'Nomor Telepon Anda (tanpa kode negara atau 0)',
  //     type: 'tel',
  //   },
  // ];

  // const dictionary = useDictionary('id');
  // const [captcha, setCaptcha] = useState({
  //   form: '',
  //   error: '',
  // });

  // const [loading, setLoading] = useState(false);

  // const onSubmit = async (e: Event) => {
  //   setLoading(true);

  //   if (validateCaptcha(captcha.form) == false) {
  //     e.preventDefault();
  //     setCaptcha({
  //       ...captcha,
  //       error:
  //         dictionary?.field.track.validateCaptcha || 'Captcha Tidak Sesuai',
  //     });
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     // eslint-disable-next-line no-console
  //     console.log('upload success');
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.error('Upload or registration failed', error);
  //   }
  //   setLoading(false);
  // };

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
              <div className="mb-5 w-[90%]">
                <InputText
                  className="w-full h-full rounded-full px-5 outline"
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
            </div>

            <button
              onClick={() => handleSubmit(true)}
              type="submit"
              className={`bg-${colorTheme} text-${textColor} rounded-full px-5 py-2 uppercase text-white font-bold `}
            >
              hubungi saya
            </button>
          </form>
          {/* <div className="py-2">
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="email"
                id="hello"
                placeholder="email"
                {...register('email')}
              />
              {formState.errors?.email && (
                <p className="text-red-500">{formState.errors.email.message}</p>
              )}
              <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
            </div>
            <div className="py-2">
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="text"
                id="hello"
                placeholder="phone number"
                {...register('phone')}
              />
              {formState.errors?.phone && (
                <p className="text-red-500">{formState.errors.phone.message}</p>
              )}
              <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
            </div> */}

          {/* Input Radio */}
          {/* <section className="text-black flex flex-col space-y-2 pt-5">
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
          </section> */}
          {/* Input Dropdown */}
          {/* <section className="pt-10 space-y-5">
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
            <div>
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="text"
                id="hello"
                placeholder="Pilih Provinsi"
              />
              <h1 className="text-xs text-red-500 pt-1">Wajib diisi</h1>
            </div>
            <div>
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="text"
                id="hello"
                placeholder="Pilih Lokasi"
              />
              <h1 className="text-xs text-red-500 pt-1">Wajib diisi</h1>
            </div>
            <div>
              <h1 className="pb-3 text-black">Saya ingin</h1>
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type="text"
                id="hello"
                placeholder="Silakan pilih"
              />
              <h1 className="text-xs text-red-500 pt-1">Wajib diisi</h1>
            </div>
            <div>
              <h1 className="pb-3 text-black">Tambahan Pesan</h1>
              <input
                className="text-black border-2 border-black rounded-full bg-transparent w-full px-5 py-3"
                type=""
                id="hello"
                placeholder="Tulis pesan anda disini"
              />
              <h1 className="text-xs text-red-500 pt-1">Wajib diisi</h1>
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
            <div className="w-full flex justify-center items-center"></div>
          </section> */}
        </div>
      </div>
    </>
  );
}
