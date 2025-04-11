'use client';

import React, { useEffect, useState, useTransition } from 'react';
import InputError from '@/lib/element/global/form/input.error';
import InputLabel from '@/lib/element/global/form/input.label';
import InputText from '@/lib/element/global/form/input.text';
import CE_SimulationLabel from './client.simulation.label';
import InputSlider from '@/lib/element/global/form/input.slider';
import {
  T_SimulationObligasiRequest,
  T_SimulationObligasi,
} from '@/api/simulation/obligasi/api.get.obligasi.type';
import {
  CFN_GetSimulationObligasi,
  CFN_MapToSimulationObligasiPayload,
  CFN_ValidateCreateSimulationObligasiFields,
} from '@/app/(views)/$function/cfn.get-simulation-obligasi';
import useForm from '@/lib/hook/useForm';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import CE_SimulationResultVariant01 from './client.simulation-result';

export default function CE_SimulationObligasi() {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const [formDisabled, setFormDisabled] = useState({
    amount: true,
    term: true,
    couponRate: true,
  });
  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationObligasiRequest,
    T_SimulationObligasiRequest
  >(
    CFN_MapToSimulationObligasiPayload({
      amount: 1000000,
      term: 1,
      couponRate: 1,
    }),
    CFN_ValidateCreateSimulationObligasiFields
  );

  const [result, setResult] = useState<T_SimulationObligasi>();
  const handleSubmit = async (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationObligasi(transiting, form, (data) => {
        setResult(data?.data);
        if (button) {
          setIsResult(true);
          window.scrollTo({ top: 5000, behavior: 'smooth' });
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setResult(undefined);
      if (form.amount && form.couponRate && form.term) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const handleResetForm = () => {
    setIsResult(false);
    window.scrollTo({ top: 900, behavior: 'smooth' });
    resetForm();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetCount]);

  return (
    <>
      <div className="">
        <CE_SimulationLabel
          label="Nilai Dana Investasi Awal"
          slot={
            <div>
              <div className="mb-5 w-[50%]">
                <InputText
                  disabled={formDisabled?.amount}
                  leftText="Rp."
                  value={form?.amount}
                  onChange={(value) => onFieldChange('amount', +value)}
                  type="number"
                />
              </div>
              <div>
                <InputSlider
                  min={1000000}
                  max={995000000000}
                  step={5000000000}
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
      <div className="w-60 pt-7">
        <InputLabel label="Kupon" required>
          <InputText
            rounded="full"
            placeholder={'Kupon'}
            type="text"
            value={form?.couponRate}
            onChange={(value) => onFieldChange('couponRate', +value)}
            state={'coupon'}
            rightSlot={
              <div className="bg-gray-200 text-gray-500 rounded-e-full flex justify-center items-center w-12">
                %
              </div>
            }
          />
          {formError.couponRate && (
            <InputError message={formError.couponRate} />
          )}
        </InputLabel>
      </div>
      <div className="pt-7">
        <CE_SimulationLabel
          label="Jangka Waktu"
          slot={
            <div>
              <div className="mb-5 w-28">
                <InputText
                  className="flex items-center justify-center h-full text-[#505FD3] text-opacity-90 whitespace-nowrap"
                  disabled={formDisabled?.term}
                  rightText="Tahun"
                  value={form?.term}
                  onChange={(value) => onFieldChange('term', +value)}
                  type="number"
                />
              </div>
              <div>
                <InputSlider
                  min={0}
                  max={25}
                  step={1}
                  value={form?.term}
                  onChange={(value) => onFieldChange('term', value)}
                />
              </div>
              {formError.term && (
                <div className="mt-5">
                  <InputError message={formError.term} />
                </div>
              )}
            </div>
          }
          onChange={(edit) => setFormDisabled({ ...formDisabled, term: edit })}
        />
      </div>
      <div className="flex gap-5 mt-10">
        <ButtonSecondary
          onClick={() => handleSubmit(true)}
          className="bg-wmcolor text-white hover:bg-slate-700 duration-200"
          rounded="full"
        >
          HITUNG
        </ButtonSecondary>
        <ButtonSecondary
          onClick={() => handleResetForm()}
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
              label: 'Perkiraan Imbal Hasil',
              value: result?.estimatedYield.toString() || '0',
            },
          ]}
          onClose={() => {}}
        />
      )}
      <div className="hidden" onClick={() => setResetCount}></div>
    </>
  );
}
