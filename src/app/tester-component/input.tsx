'use client';

import { useState } from 'react';
import CE_SimulationLabel from '@/app/(views)/$element/simulation/client.simulation.label';
import InputText from '@/lib/element/global/form/input.text';
import InputSlider from '@/lib/element/global/form/input.slider';
import InputError from '@/lib/element/global/form/input.error';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import InputLabel from '@/lib/element/global/form/input.label';
import InputRadioButton from '@/lib/element/global/form/input.radiobutton';

const CE_InputTester = () => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [formInvestasi, setFormInvestasi] = useState(0);
  const [formRangeTime, setFormRangeTime] = useState(0);
  const [formImbal, setFormImbal] = useState(0);
  // const [searc, setSearc] = useState('');
  return (
    <div className="container w-full">
      <div className="w-full flex-none mb-6 px-4">
        <InputLabel label="Investasi" required>
          <InputRadioButton
            list={[
              {
                value: '1',
                title: 'Investasi satu kali',
              },
              {
                value: '2',
                title: 'Investasi berkala',
              },
            ]}
            value={`1`}
            onChange={() => {}}
          />

          <InputError message={'Kalo ada error'} />
        </InputLabel>
      </div>
      <div className="w-full flex-none mb-6 px-4">
        <CE_SimulationLabel
          label="Nilai Dana Investasi Awal"
          slot={
            <div>
              <div className="mb-5 w-[50%]">
                <InputText
                  disabled={formDisabled}
                  leftText="Rp."
                  value={formInvestasi}
                  onChange={(value) =>
                    setFormInvestasi(parseInt(value.toString()))
                  }
                  type="number"
                />
              </div>
              <div>
                <InputSlider
                  min={0}
                  max={10000000000}
                  step={100000}
                  value={formInvestasi}
                  onChange={(value) =>
                    setFormInvestasi(parseInt(value.toString()))
                  }
                />
              </div>
              <div className="mt-5">
                <InputError message={'Kalau Ada Error'} />
              </div>
            </div>
          }
          onChange={(edit) => setFormDisabled(edit)}
        />
        <CE_SimulationLabel
          label="Jangka Waktu"
          slot={
            <div>
              <div className="mb-5 w-[50%]">
                <InputText
                  disabled={formDisabled}
                  leftText="Rp."
                  value={formRangeTime}
                  onChange={(value) =>
                    setFormRangeTime(parseInt(value.toString()))
                  }
                  type="number"
                />
              </div>
              <div>
                <InputSlider
                  min={0}
                  max={10000000000}
                  step={100000}
                  value={formRangeTime}
                  onChange={(value) =>
                    setFormRangeTime(parseInt(value.toString()))
                  }
                />
              </div>
              <div className="mt-5">
                <InputError message={'Kalau Ada Error'} />
              </div>
            </div>
          }
          onChange={(edit) => setFormDisabled(edit)}
        />
        <div className="w-full flex-none mb-6 px-4">
          <InputLabel label="Profile Resiko" required>
            <InputRadioButton
              list={[
                {
                  value: '1',
                  title: 'Sangat Konservatif',
                },
                {
                  value: '2',
                  title: 'Konservatif',
                },
                {
                  value: '3',
                  title: 'Moderat',
                },
                {
                  value: '4',
                  title: 'Agresif',
                },
              ]}
              value={`1`}
              onChange={() => {}}
            />

            <InputError message={'Kalo ada error'} />
          </InputLabel>
          <div className="w-96 text-xs leading-5 text-slate-600">
            <h1>
              Sangat Konservatif Tujuan berinvestasi untuk mendapatkan
              pertumbuhan nilai investasi. Berinvestasi pada produk dengan
              risiko sangat rendah. Jangka waktu investasi yang dianjurkan 0-2
              tahun
            </h1>
            <h2 className="pt-5">Rekomendasi Portofolio Investasi</h2>
            <ul className="pl-8 list-disc">
              <li>Pendapatan Tetap 30%</li>
              <li>Deposito/Giro 40%</li>
              <li>Pasar Uang 30%</li>
            </ul>
          </div>
        </div>
        <CE_SimulationLabel
          label="Perkiraan Imbal Hasil"
          slot={
            <div className="">
              <h1 className="text-xs leading-5 text-slate-600">
                min 3% - max 6%
              </h1>
              <div className="mb-5 w-[20%]">
                <InputText
                  rightText="%"
                  disabled={formDisabled}
                  value={formImbal}
                  onChange={(value) => setFormImbal(parseInt(value.toString()))}
                  type="number"
                />
              </div>
              <div className="w-52 lg:w-72 ">
                <InputSlider
                  min={3}
                  max={6}
                  step={1}
                  value={formImbal}
                  onChange={(value) => setFormImbal(parseInt(value.toString()))}
                />
              </div>
              <div className="mt-5">
                <InputError message={'Kalau Ada Error'} />
              </div>
            </div>
          }
          onChange={(edit) => setFormDisabled(edit)}
        />
        {/* <InputLabel label="Kupon" required>
          <InputText
            rounded="full"
            placeholder={'Kupon'}
            type="text"
            value={searc}
            onChange={(value) => setSearc(value.toString())}
            state={'init'}
            rightSlot={
              <div className="bg-gray-200 text-gray-500 rounded-e-full flex justify-center items-center w-12">
                %
              </div>
            }
          />
          <InputError message={'Kalo ada error'} />
        </InputLabel> */}
      </div>

      <div className="flex gap-5 mt-5">
        <ButtonSecondary
          className="bg-wmcolor text-white hover:bg-slate-700 duration-200"
          rounded="full"
        >
          HITUNG
        </ButtonSecondary>
        <ButtonSecondary
          rounded="full"
          color="gray-100"
          className="bg-gray-100 text-wmcolor border border-wmcolor"
        >
          ATUR ULANG
        </ButtonSecondary>
      </div>
      {/* Result */}
      <div className="h-40 mt-5 flex flex-col justify-center items-center border-t border-black">
        <h1 className="text-black text-2xl font-light">
          Perkiraan Nilai Hasil Investasi
        </h1>
        <h2 className="text-wmcolor text-xl font-bold pt-3">Rp 1,030,000</h2>
      </div>
      {/*  */}
    </div>
  );
};

export default CE_InputTester;
