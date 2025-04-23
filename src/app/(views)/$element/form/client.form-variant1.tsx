'use client';

import { T_ResponGetLocation } from '@/api/location/api.get-location.type';
import { T_ResponGetProvince } from '@/api/province/api.get-province.type';
import { ACT_GetLocation } from '@/app/(views)/$action/location/action.get-location';
import { ACT_GetProvince } from '@/app/(views)/$action/province/action.get-province';
import { ACT_PostWebForm } from '@/app/(views)/$action/webform/action.post-webform';
import { useDictionary } from '@/get-dictionary';
import DropDown from '@/lib/element/global/dropdown';
import { RefreshIcon } from '@/lib/element/global/refresh-icon';
import useForm from '@/lib/hook/useForm';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import {
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import { T_FormGetInvitedRequest } from '@/api/webform/api.post.webform.type';
import {
  CFN_MapToWebFormPayload,
  CFN_ValidateCreateWebFormFields,
} from '@/app/(views)/$function/cfn.post-webform';
import InputError from '@/lib/element/global/form/input.error';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Option = {
  label: string;
  value: string;
};

export default function CE_FormVariant1({
  variant,
  bgImage,
  title,
  subTitle,
  desc,
}: {
  variant: string;
  bgImage: Array<{ image: string }>;
  title: string;
  subTitle: string;
  desc: string;
}) {
  const [selectedProvince, setSelectedProvince] = useState<Option | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Option | null>(null);
  const [selectedWantTo, setSelectedWantTo] = useState<Option | null>(null);
  const [contactTime, setContactTime] = useState('');
  const [, setWantTo] = useState('');
  const [, setProvince] = useState('');
  const [, setLocation] = useState('');
  const [pending] = useTransition();

  const { form, formError, validateForm, onFieldChange } = useForm<
    T_FormGetInvitedRequest,
    T_FormGetInvitedRequest
  >(
    CFN_MapToWebFormPayload({
      webform_id: '',
      nama: '',
      email: '',
      telepon: '',
      apakah_anda_nasabah_bri: '',
      metode_kontak: '',
      waktu_dihubungi: '',
      saya_ingin: '',
      pesan: '',
      pilih_provinsi: '',
      pilih_lokasi: '',
    }),
    CFN_ValidateCreateWebFormFields
  );

  const [provinceData, setProvinceData] =
    useState<T_ResponGetProvince | null>();

  const [locationData, setLocationData] =
    useState<T_ResponGetLocation | null>();

  const router = useRouter();

  const handleSubmit = async () => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      if (validateCaptcha(captcha.form)) {
        const result = await ACT_PostWebForm({
          webform_id: 'get_invited',
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
        });

        if (result?.sid) {
          router.refresh();
        }
      } else {
        setCaptcha({
          form: '',
          error:
            dictionary?.field.track.validateCaptcha || 'Captcha Tidak Sesuai',
        });
      }
    } catch (_) {}
  };

  const dictionary = useDictionary('id');
  const [captcha, setCaptcha] = useState({
    form: '',
    error: '',
  });

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
    const province = await ACT_GetProvince({ lang: 'en' });
    setProvinceData(province);
  };

  const getLocation = async (province: string) => {
    const location = await ACT_GetLocation({
      limit: '50',
      skip: '0',
      province,
    });
    setLocationData(location?.data);
  };

  useEffect(() => {
    getProvince();
    loadCaptchaEnginge(6);
    AOS.init({
      once: false,
    });
  }, []);

  // useEffect(() => {}, []);

  const backgroundImg = bgImage
    ? `${process.env.NEXT_PUBLIC_DRUPAL_ENDPOINT}${bgImage?.[0]?.image ?? ''}`
    : '';
  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse ">
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full h-full py-10 flex justify-center items-center px-5"
      >
        <form
          data-aos="fade-up"
          data-aos-duration="500"
          className="w-full md:w-11/12 lg:w-9/12 xl:w-5/12"
        >
          <section className="text-white space-y-3 pb-5">
            <h1 className=" text-black text-2xl font-bold">
              {parseHTMLToReact(title) ?? 'title not found'}
            </h1>
            <h2 className="text-slate-600">
              {parseHTMLToReact(subTitle) ?? 'subtitle not found'}
            </h2>
          </section>
          <h1 className="text-lg text-slate-900">
            {parseHTMLToReact(desc) ?? 'desc not found'}
          </h1>
          <div className="py-2">
            <input
              className="text-black border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-3 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
              type="text"
              id="hello"
              placeholder="Nama Lengkap Anda"
              value={form.nama}
              onChange={({ target }) => onFieldChange('nama', target.value)}
            />
            {formError.nama && (
              <div className="mt-5">
                <InputError message={formError.nama} />
              </div>
            )}
          </div>
          <div className="py-2">
            <input
              className="text-black border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-3 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
              type="email"
              value={form.email}
              onChange={({ target }) => onFieldChange('email', target.value)}
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
              className="text-black border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-3 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
              type="tel"
              value={form.telepon}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              onChange={({ target }) => onFieldChange('telepon', target.value)}
              placeholder="Nomor Telepon Anda (tanpa kode negara atau 0)"
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
              <input
                className="text-black"
                type="radio"
                id="ya"
                name="nasabah"
                value="Tidak"
                onChange={({ target }) =>
                  onFieldChange('apakah_anda_nasabah_bri', target.value)
                }
              />
              <label className="pl-2">Tidak</label>
            </span>
            <span>
              <input
                type="radio"
                id="tidak"
                name="nasabah"
                value="Ya"
                onChange={({ target }) =>
                  onFieldChange('apakah_anda_nasabah_bri', target.value)
                }
              />
              <label className="pl-2">Ya</label>
            </span>
            {formError.apakah_anda_nasabah_bri && (
              <div className="mt-5">
                <InputError message={formError.apakah_anda_nasabah_bri} />
              </div>
            )}
          </section>
          <section className="text-black flex flex-col space-y-2 pt-5">
            <h1>Apa metode kontak yang sesuai dengan Anda?</h1>
            <span className="pt-2">
              <input
                type="radio"
                id="text-me"
                name="metode"
                value="Hubungi Saya"
                onChange={({ target }) =>
                  onFieldChange('metode_kontak', target.value)
                }
              />
              <label className="pl-2">Hubungi Saya</label>
            </span>
            <span>
              <input
                type="radio"
                id="mail-me"
                name="metode"
                value="Email Saya"
                onChange={({ target }) =>
                  onFieldChange('metode_kontak', target.value)
                }
              />
              <label className="pl-2">Email Saya</label>
            </span>
            {formError.metode_kontak && (
              <div className="mt-5">
                <InputError message={formError.metode_kontak} />
              </div>
            )}
          </section>
          {/* Input Dropdown */}
          <section className="pt-10 space-y-5">
            <div className="text-black">
              <h1 className="text-lg ">Kapan anda bisa kami hubungi?</h1>
              <span className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                <input
                  className=" border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-2 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
                  type="date"
                  onChange={({ target }) => {
                    const picked = (
                      contactTime ||
                      dayjs().add(3, 'days').format('YYYY-MM-DD HH:mm:ss')
                    ).split(' ');
                    picked[0] = target.value;
                    setContactTime(picked.join(' '));
                    onFieldChange('waktu_dihubungi', picked.join(' '));
                  }}
                />
                {formError.waktu_dihubungi && (
                  <div className="mt-5">
                    <InputError message={formError.waktu_dihubungi} />
                  </div>
                )}

                <input
                  className=" border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-2 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
                  type="time"
                  onChange={({ target }) => {
                    const picked = (
                      contactTime ||
                      dayjs().add(3, 'days').format('YYYY-MM-DD HH:mm:ss')
                    ).split(' ');
                    picked[1] = target.value;
                    setContactTime(picked.join(' '));
                    onFieldChange('waktu_dihubungi', picked.join(' '));
                  }}
                />
                {formError.waktu_dihubungi && (
                  <div className="mt-5">
                    <InputError message={formError.waktu_dihubungi} />
                  </div>
                )}
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
                onSelectedChanges={(selected) => {
                  setSelectedProvince(selected);
                  getLocation(selected.value);
                  setProvince(selected.label);
                  onFieldChange('pilih_provinsi', selected.value);
                }}
                placeholder="Pilih Provinsi"
              />
              {formError.pilih_provinsi && (
                <div className="mt-5">
                  <InputError message={formError.pilih_provinsi} />
                </div>
              )}
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
                onSelectedChanges={(selected) => {
                  setSelectedLocation(selected);
                  setLocation(selected.label);
                  onFieldChange('pilih_lokasi', selected.value);
                }}
                placeholder="Pilih Lokasi"
              />
              {formError.pilih_lokasi && (
                <div className="mt-5">
                  <InputError message={formError.pilih_lokasi} />
                </div>
              )}
            </div>
            <div>
              <h1 className="pb-3 text-black">Saya ingin</h1>
              <div className="w-full">
                <DropDown
                  options={[
                    {
                      value: 'pendaftaran nasabah BRI Prioritas',
                      label: 'Pendaftaran Nasabah BRI Prioritas',
                    },
                    {
                      value: 'pendaftaran nasabah BRI Private',
                      label: 'Pendaftaran Nasabah BRI Private',
                    },
                  ]}
                  selected={selectedWantTo}
                  onSelectedChanges={(selected) => {
                    setSelectedWantTo(selected);
                    setWantTo(selected.value);
                    onFieldChange('saya_ingin', selected.value);
                  }}
                  placeholder="Pilih Saya Ingin"
                />
                {formError.saya_ingin && (
                  <div className="mt-5">
                    <InputError message={formError.saya_ingin} />
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1 className="pb-3 text-black">Tambahan Pesan</h1>
              <textarea
                className="text-black border-[1px] border-black rounded-xl bg-transparent w-full px-5 py-3 h-32 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
                value={form.pesan}
                onChange={({ target }) => onFieldChange('pesan', target.value)}
                placeholder="Tulis pesan anda disini..."
              />
              {formError.pesan && (
                <div className="mt-5">
                  <InputError message={formError.pesan} />
                </div>
              )}
            </div>
            <div className="flex flex-col items-start space-y-5 py-5">
              <div className="flex items-center">
                <LoadCanvasTemplateNoReload />
                <button
                  className="px-5"
                  type="button"
                  onClick={() => loadCaptchaEnginge(6)}
                >
                  <RefreshIcon width={28} height={28} fill="#27AE60" />
                </button>
              </div>
              <div className="w-full flex-1 border-black pt-5">
                <input
                  className="text-black border-[1px] border-black rounded-2xl bg-transparent w-full md:w-5/12 px-5 py-3 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
                  placeholder={
                    `${dictionary?.field.general.enter} ${dictionary?.field.track.captcha}` ||
                    'Verifikasi Captcha'
                  }
                  type="text"
                  value={captcha.form}
                  onChange={({ target }) =>
                    setCaptcha({
                      form: target.value,
                      error: '',
                    })
                  }
                />
                <h1>{captcha.error}</h1>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={() => handleSubmit()}
                type="button"
                className={`bg-${colorTheme} text-${textColor} rounded-full px-5 py-2 uppercase text-white font-bold hover:bg-gray-600`}
              >
                hubungi saya
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
