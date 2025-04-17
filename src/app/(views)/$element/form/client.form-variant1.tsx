'use client';

import { T_ResponGetLocation } from '@/api/location/api.get-location.type';
import { T_ResponGetProvince } from '@/api/province/api.get-province.type';
import { ACT_GetLocation } from '@/app/(views)/$action/location/action.get-location';
import { ACT_GetProvince } from '@/app/(views)/$action/province/action.get-province';
import { ACT_PostWebForm } from '@/app/(views)/$action/webform/action.post-webform';
import { useDictionary } from '@/get-dictionary';
import DropDown from '@/lib/element/global/dropdown';
import { RefreshIcon } from '@/lib/element/global/refresh-icon';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';

type Option = {
  label: string;
  value: string;
};

export default function CE_FormVariant1({ variant }: { variant: string }) {
  const [selectedProvince, setSelectedProvince] = useState<Option | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Option | null>(null);
  const [selectedWantTo, setSelectedWantTo] = useState<Option | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [customer, setCustomer] = useState('');
  const [contactBy, setContactBy] = useState('');
  const [contactTime, setContactTime] = useState('');
  const [wantTo, setWantTo] = useState('');
  const [message, setMessage] = useState('');
  const [province, setProvince] = useState('');
  const [location, setLocation] = useState('');

  const [provinceData, setProvinceData] =
    useState<T_ResponGetProvince | null>();

  const [locationData, setLocationData] =
    useState<T_ResponGetLocation | null>();

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (validateCaptcha(captcha.form)) {
        const result = await ACT_PostWebForm({
          webform_id: 'get_invited',
          nama: name,
          email: email,
          telepon: phone,
          apakah_anda_nasabah_bri: customer,
          metode_kontak: contactBy,
          waktu_dihubungi: contactTime,
          saya_ingin: wantTo,
          pesan: message,
          pilih_provinsi: province,
          pilih_lokasi: location,
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
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse ">
      <div className="w-full h-full py-10 flex justify-center items-center px-5">
        <form className="w-full md:w-11/12 lg:w-9/12 xl:w-5/12">
          <section className="text-white space-y-3 pb-5">
            <h1 className=" text-black text-2xl font-bold">HUBUNGI SAYA</h1>
            <h2 className="text-slate-600">
              Beri tahu kami tentang permintaan Anda agar kami bisa mendapatkan
              penasihat yang tepat untuk Anda.
            </h2>
          </section>
          <h1 className="text-lg text-slate-900">Data lengkap Anda</h1>
          <div className="py-2">
            <input
              className="text-black border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-3 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
              type="text"
              id="hello"
              placeholder="Nama Lengkap Anda"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            {/* <h1 className="text-xs">Wajib diisi</h1> */}
          </div>
          <div className="py-2">
            <input
              className="text-black border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-3 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="email"
            />
          </div>
          <div className="py-2">
            <input
              className="text-black border-[1px] border-black rounded-2xl bg-transparent w-full px-5 py-3 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
              placeholder="Nomor Telepon Anda (tanpa kode negara atau 0)"
            />
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
                onChange={({ target }) => setCustomer(target.value)}
              />
              <label className="pl-2">Tidak</label>
            </span>
            <span>
              <input
                type="radio"
                id="tidak"
                name="nasabah"
                value="Ya"
                onChange={({ target }) => setCustomer(target.value)}
              />
              <label className="pl-2">Ya</label>
            </span>
          </section>
          <section className="text-black flex flex-col space-y-2 pt-5">
            <h1>Apa metode kontak yang sesuai dengan Anda?</h1>
            <span className="pt-2">
              <input
                type="radio"
                id="text-me"
                name="metode"
                value="Hubungi Saya"
                onChange={({ target }) => setContactBy(target.value)}
              />
              <label className="pl-2">Hubungi Saya</label>
            </span>
            <span>
              <input
                type="radio"
                id="mail-me"
                name="metode"
                value="Email Saya"
                onChange={({ target }) => setContactBy(target.value)}
              />
              <label className="pl-2">Email Saya</label>
            </span>
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
                  }}
                />
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
                  }}
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
                onSelectedChanges={(selected) => {
                  setSelectedProvince(selected);
                  getLocation(selected.value);
                  setProvince(selected.label);
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
                onSelectedChanges={(selected) => {
                  setSelectedLocation(selected);
                  setLocation(selected.label);
                }}
                placeholder="Pilih Lokasi"
              />
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
                  }}
                  placeholder="Pilih Saya Ingin"
                />
              </div>
            </div>
            <div>
              <h1 className="pb-3 text-black">Tambahan Pesan</h1>
              <textarea
                className="text-black border-[1px] border-black rounded-xl bg-transparent w-full px-5 py-3 h-32 outline-4 outline-offset-4 outline-[#80ACFF] transition-all ease-in-out duration-300"
                value={message}
                onChange={({ target }) => setMessage(target.value)}
                placeholder="Tulis pesan anda disini..."
              />
            </div>
            <div className="flex flex-col items-start space-y-5 py-5">
              <div className="flex items-center">
                <LoadCanvasTemplateNoReload />
                <button type="button" onClick={() => loadCaptchaEnginge(6)}>
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
