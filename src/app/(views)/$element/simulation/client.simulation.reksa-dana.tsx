'use client';

import React, { useEffect, useState, useTransition } from 'react';
import InputError from '@/lib/element/global/form/input.error';
import InputLabel from '@/lib/element/global/form/input.label';
import InputText from '@/lib/element/global/form/input.text';
import CE_SimulationLabel from './client.simulation.label';
import InputSlider from '@/lib/element/global/form/input.slider';
import {
  T_SimulationReksaDanaRequest,
  T_SimulationReksaDana,
} from '@/api/simulation/reksa-dana/api.get.reksa-dana.type';
import {
  CFN_GetSimulationReksaDana,
  CFN_MapToSimulationReksaDanaPayload,
  CFN_ValidateCreateSimulationReksaDanaFields,
} from '@/app/(views)/$function/cfn.get-simulation-reksa-dana';
import useForm from '@/lib/hook/useForm';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import CE_SimulationResultVariant01 from './client.simulation-result';
import InputRadioButton from '@/lib/element/global/form/input.radiobutton';

export default function CE_SimulationReksaDana() {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    amount: true,
    investmentType: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
    T_SimulationReksaDanaRequest,
    T_SimulationReksaDanaRequest
  >(
    CFN_MapToSimulationReksaDanaPayload({
      amount: 1,
      investmentType: 'MONEY_MARKET',
    }),
    CFN_ValidateCreateSimulationReksaDanaFields
  );

  const [result, setResult] = useState<T_SimulationReksaDana>();
  const handleSubmit = async (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationReksaDana(transiting, form, (data) => {
        setResult(data?.data);
        if (button) {
          setIsResult(true);
        }
      });
    } catch (error) {}
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setResult(undefined);
      if (form.amount && form.investmentType) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <>
      <div className="py-5">
        <CE_SimulationLabel
          label="Nilai Dana Investasi Awal"
          slot={
            <div>
              <div className="mb-5 w-[50%]">
                <InputText
                  disabled={formDisabled?.amount}
                  leftText="Rp."
                  value={form?.amount}
                  onChange={(value) => onFieldChange('amount', value)}
                  type="number"
                />
              </div>
              <div>
                <InputSlider
                  min={0}
                  max={10000000000}
                  step={100000}
                  value={form?.amount}
                  onChange={(value) => onFieldChange('amount', value)}
                />
              </div>
              {formError.amount && (
                <div className="mt-5">
                  <InputError message={formError.amount} />
                </div>
              )}
            </div>
          }
          onChange={(edit) =>
            setFormDisabled({
              ...formDisabled,
              amount: edit,
            })
          }
        />
      </div>
      <div className="py-5">
        <InputLabel label="Jenis Reksa Dana" required>
          <InputRadioButton
            list={[
              {
                value: 'MONEY_MARKET',
                title: 'Pasar uang',
              },
              {
                value: 'FIXED_INCOME',
                title: 'Pendapatan Tetap',
              },
              {
                value: 'BALANCED',
                title: 'Campuran',
              },
              {
                value: 'EQUITY',
                title: 'Saham',
              },
            ]}
            value={`MONEY_MARKET`}
            onChange={(value: any) => onFieldChange('investmentType', value)}
          />
          {formError.investmentType && (
            <div className="mt-5">
              <InputError message={formError.investmentType} />
            </div>
          )}
        </InputLabel>
      </div>
      <h1 className="text-xl font-semibold text-black pt-5">
        Perkiraan Nilai Investasi
      </h1>
      <div className="mb-5 w-[20%] pt-2">
        <InputText
          disabled={formDisabled?.investmentType}
          rightText="%"
          value={form?.investmentType}
          onChange={(value) => onFieldChange('investmentType', value)}
          type="text"
        />
      </div>
      <h2 className="text-xs w-full">
        berdasarkan rata-rata kinerja 1 tahun sumber Infovesta, diolah Kantor
      </h2>
      <div className="flex gap-5 mt-10">
        <ButtonSecondary
          onClick={() => handleSubmit(true)}
          className="bg-wmcolor text-white hover:bg-slate-700 duration-200"
          rounded="full"
        >
          HITUNG
        </ButtonSecondary>
        <ButtonSecondary
          onClick={() => setIsResult(false)}
          rounded="full"
          color="gray-100"
          className="bg-gray-100 text-wmcolor border border-wmcolor"
        >
          ATUR ULANG
        </ButtonSecondary>
      </div>
      {isResult && (
        <CE_SimulationResultVariant01
          values={[
            {
              label: 'Perkiraan Dana Hasil Investasi',
              value: result?.estimatedYield.toString() || '0',
            },
          ]}
          onClose={() => {}}
        />
      )}
    </>
  );
}
