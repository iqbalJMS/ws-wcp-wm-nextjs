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
  const [form, setForm] = useState(0);
  const [searc, setSearc] = useState('');
  return (
    <div className="container">
      <div className="w-[500px] flex-none mb-6 px-4">
        <InputLabel label="Kupon" required>
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
        </InputLabel>
      </div>
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
      <CE_SimulationLabel
        label="Jumlah Pinjaman"
        slot={
          <div>
            <div className="mb-5 w-[50%]">
              <InputText
                disabled={formDisabled}
                leftText="Rp."
                value={form}
                onChange={(value) => setForm(parseInt(value.toString()))}
                type="number"
              />
            </div>
            <div>
              <InputSlider
                min={0}
                max={10000000000}
                step={100000}
                value={form}
                onChange={(value) => setForm(parseInt(value.toString()))}
              />
            </div>
            <div className="mt-5">
              <InputError message={'Kalau Ada Error'} />
            </div>
          </div>
        }
        onChange={(edit) => setFormDisabled(edit)}
      />
      <div className="flex gap-5 mt-5">
        <ButtonSecondary rounded="full">ACTIVE</ButtonSecondary>
        <ButtonSecondary
          rounded="full"
          color="gray-100"
          className="bg-gray-100 text-bluedark01"
        >
          HITUNG ULANG
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default CE_InputTester;
