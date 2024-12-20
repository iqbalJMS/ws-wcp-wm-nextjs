'use client';

import InputDatePicker from '@/lib/element/global/form/input.datepicker';
import InputError from '@/lib/element/global/form/input.error';
import InputLabel from '@/lib/element/global/form/input.label';
import InputPhone from '@/lib/element/global/form/input.phone';
import InputRadioButton from '@/lib/element/global/form/input.radiobutton';
import InputSelect from '@/lib/element/global/form/input.select';
import InputText from '@/lib/element/global/form/input.text';

type T_FormGetInvitedProps = {
  backgroundImage?: string;
  title?: string;
  desc?: string;
};

export default function CE_FormGetInvited({
  backgroundImage,
  title,
  desc,
}: T_FormGetInvitedProps) {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${backgroundImage || '/web/wealth-management/images/why-us/bg-image.jpg'})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container md:max-w-3xl w-full py-20">
        <div className="mb-8 text-left">
          {title && (
            <h2 className="text-3xl uppercase font-semibold">{title}</h2>
          )}
          {desc && <p className="text-black/60">{desc}</p>}
        </div>
        <div className="flex items-start flex-wrap -mx-4">
          <div className="w-full flex-none mb-6 px-4">
            <InputLabel label="Data lengkap Anda">
              <InputText
                placeholder={'Nama Lengkap Anda'}
                type="text"
                onChange={() => {}}
                state={'init'}
              />
              <InputError message={''} />
            </InputLabel>
          </div>
          <div className="w-full flex-none mb-6 px-4">
            <InputText
              placeholder={'Alamat Email Anda'}
              type="text"
              onChange={() => {}}
              state={'init'}
            />
            <InputError message={''} />
          </div>
          <div className="w-full flex-none mb-6 px-4">
            <InputPhone
              placeholder={'Nomor Telepon Anda (tanpa kode negara atau 0)'}
              valueArea={'+1'}
              valueDigit={''}
              onChangeArea={() => {}}
              onChangeDigit={() => {}}
            />
            <InputError message={''} />
          </div>
          <div className="w-full flex-none mb-6 px-4">
            <InputLabel label="Apakah Anda Nasabah BRI ?" required>
              <InputRadioButton
                list={[
                  {
                    value: '1',
                    title: 'Laki-laki',
                  },
                  {
                    value: '2',
                    title: 'Perempuan',
                  },
                ]}
                value={`1`}
                onChange={() => {}}
              />

              <InputError message={''} />
            </InputLabel>
          </div>
          <div className="flex-none w-full mb-6 px-4">
            <InputLabel
              label="Apa metode kontak yang sesuai dengan Anda?"
              required
            >
              <InputRadioButton
                list={[
                  {
                    value: '1',
                    title: 'Laki-laki',
                  },
                  {
                    value: '2',
                    title: 'Perempuan',
                  },
                ]}
                value={`1`}
                onChange={() => {}}
              />

              <InputError message={''} />
            </InputLabel>
          </div>
          <div className="w-full flex-none mb-6 px-4">
            <InputLabel label={'Kapan anda bisa kami hubungi?'} required>
              <div className="flex items-center gap-4">
                <div className="w-1/2">
                  <InputDatePicker
                    placeholder={'dd-mm-yyyy'}
                    value={''}
                    onChange={() => {}}
                    state={'init'}
                  />
                </div>
                <div className="w-1/2">
                  <InputSelect
                    list={[
                      {
                        value: '1',
                        title: 'Laki-laki',
                      },
                      {
                        value: '2',
                        title: 'Perempuan',
                      },
                    ]}
                    onChange={() => {}}
                    value={'1'}
                    state={'init'}
                  />
                </div>
              </div>
              <InputError message={''} />
            </InputLabel>
          </div>
          <div className="w-full flex-none mb-6 px-4">
            <InputLabel label={'Kapan anda bisa kami hubungi?'} required>
              <InputDatePicker
                placeholder={'dd-mm-yyyy'}
                value={''}
                onChange={() => {}}
                state={'init'}
              />
              <InputSelect
                list={[
                  {
                    value: '1',
                    title: 'Laki-laki',
                  },
                  {
                    value: '2',
                    title: 'Perempuan',
                  },
                ]}
                onChange={() => {}}
                value={'1'}
                state={'init'}
              />
              <InputError message={''} />
            </InputLabel>
          </div>
        </div>
        <div className="mt-6">
          <button
            className="w-full lg:text-base text-xs font-bold text-white py-3 px-7 rounded-lg bg-blue-01 hover:bg-opacity-90 hover:text-white"
            onClick={() => {}}
          >
            Hubungi Saya
          </button>
        </div>
      </div>
    </section>
  );
}
