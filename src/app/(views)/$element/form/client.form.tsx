'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { RefreshIcon } from '@/lib/element/global/refresh-icon';
import { useDictionary } from '@/get-dictionary';
// import useForm from '@/lib/hook/useForm';
import {
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha,
} from 'react-simple-captcha';
import InputText from '@/lib/element/global/form/input.text';

export default function CE_FormGetInvited() {
  const DATA = [
    {
      placeholder: 'Nama Lengkap Anda',
      type: 'text',
    },
    {
      placeholder: 'Alamat Email Anda',
      type: 'text',
    },
    {
      placeholder: 'Nomor Telepon Anda (tanpa kode negara atau 0)',
      type: 'tel',
    },
  ];

  const dictionary = useDictionary('id');
  const [captcha, setCaptcha] = useState({
    form: '',
    error: '',
  });

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col lg:flex-row-reverse ">
        <div className="w-full h-full">
          <Image
            className="w-full h-full"
            src="/images/bgOurStory.jpeg"
            alt={''}
            width={900}
            height={900}
          />
        </div>
        <div className="w-full h-full bg-[#605E68] p-5 py-10 xl:p-10 flex justify-center items-center">
          <form className="w-9/12" onSubmit={onSubmit as any}>
            <section className="text-white space-y-3 pb-5">
              <h1 className="text-2xl font-bold">HUBUNGI SAYA</h1>
              <h2>
                {loading}
                Beri tahu kami tentang permintaan Anda agar kami bisa
                mendapatkan penasihat yang tepat untuk Anda.
              </h2>
            </section>
            <h1 className="text-lg text-white">Data lengkap Anda</h1>
            {DATA?.map((item, index) => (
              <div key={index} className="py-2">
                {/* <h1 className="pb-3 text-white">{item.label ?? ''}</h1> */}
                <input
                  className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-3"
                  type={item?.type}
                  id="hello"
                  placeholder={item?.placeholder}
                />
                <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
              </div>
            ))}
            {/* Input Radio */}
            <section className="text-white flex flex-col space-y-2 pt-5">
              <h1>Apakah Anda Nasabah BRI?</h1>
              <span className="pt-2">
                <input type="radio" id="ya" name="nasabah" value="ya" />
                <label className="pl-2">Tidak</label>
              </span>
              <span>
                <input type="radio" id="tidak" name="nasabah" value="tidak" />
                <label className="pl-2">Ya </label>
              </span>
            </section>
            <section className="text-white flex flex-col space-y-2 pt-5">
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
            <section className="pt-5 space-y-5">
              <div>
                <h1 className="text-lg text-white">
                  Kapan anda bisa kami hubungi?
                </h1>
                <span className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                  <input
                    className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-2"
                    type="date"
                  />
                  <input
                    className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-2"
                    type="time"
                  />
                </span>
              </div>
              <div>
                <input
                  className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-3"
                  type="text"
                  id="hello"
                  placeholder="Pilih Provinsi"
                />
                <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
              </div>
              <div>
                <input
                  className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-3"
                  type="text"
                  id="hello"
                  placeholder="Pilih Lokasi"
                />
                <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
              </div>
              <div>
                <h1 className="pb-3 text-white">Saya ingin</h1>
                <input
                  className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-3"
                  type="text"
                  id="hello"
                  placeholder="Silakan pilih"
                />
                <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
              </div>
              <div>
                <h1 className="pb-3 text-white">Tambahan Pesan</h1>
                <input
                  className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-3"
                  type=""
                  id="hello"
                  placeholder="Tulis pesan anda disini"
                />
                <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
              </div>
              <div>
                <input
                  className="text-white border-2 border-white rounded-full bg-transparent w-full px-5 py-3"
                  type=""
                  id="hello"
                  placeholder="Verifikasi Captcha"
                />
                <h1 className="text-xs text-white pt-1">Wajib diisi</h1>
              </div>
              <div className="flex items-center space-x-2">
                <LoadCanvasTemplateNoReload />
                <button type="button" onClick={() => loadCaptchaEnginge(6)}>
                  <RefreshIcon width={28} height={28} fill="#27AE60" />
                </button>
                <div className="px-4 flex-1">
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
                  <p>{captcha.error}</p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-privatecolor rounded-full px-5 py-2 uppercase text-white font-bold "
              >
                hubungi saya
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
