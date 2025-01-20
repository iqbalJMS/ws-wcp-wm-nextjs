'use client';

import { useState } from 'react';
import CE_SimulationLabel from '@/app/(views)/$element/simulation/client.simulation.label';
import InputText from '@/lib/element/global/input.text';
import InputSlider from '@/lib/element/global/input.slider';
import InputError from '@/lib/element/global/input.error';
import ButtonSecondary from '@/lib/element/global/button.secondary';

const CE_InputTester = () => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [form, setForm] = useState(0);
  return (
    <div className='container' >
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
      <div className='flex gap-5 mt-5'>
        <ButtonSecondary rounded='full'>ACTIVE</ButtonSecondary>
        <ButtonSecondary rounded='full' color='gray-100'  className='bg-gray-100 text-bluedark01'>HITUNG ULANG</ButtonSecondary>
      </div>
    </div>
  );
};

export default CE_InputTester;
