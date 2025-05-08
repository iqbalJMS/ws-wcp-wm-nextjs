'use client';
import React, { useEffect, useState, useTransition } from 'react';
import {
  T_SimulationInvestment,
  T_SimulationInvestmentRequest,
} from '@/api/simulation/api.get.investment.type';
import useForm from '@/lib/hook/useForm';
import {
  CFN_GetSimulationInvestment,
  CFN_MapToSimulationInvestmentPayload,
  CFN_ValidateCreateSimulationInvestmentFields,
} from '@/app/(views)/$function/cfn.get-simulation';
import ButtonSecondary from '@/lib/element/global/button.secondary';
import CE_SimulationLabel from './client.simulation.label';
import InputText from '@/lib/element/global/form/input.text';
import InputSlider from '@/lib/element/global/form/input.slider';
import InputError from '@/lib/element/global/form/input.error';
import InputLabel from '@/lib/element/global/form/input.label';
import InputRadioButton from '@/lib/element/global/form/input.radiobutton';
import CE_SimulationResultVariant01 from './client.simulation-result';
import RichTextSimulation from '@/app/(views)/$element/rich-text-simulation';

export default function CE_SimulationInvestment() {
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);
  const [resetCount, setResetCount] = useState(0);

  const [formDisabled, setFormDisabled] = useState({
    duration: true,
    investmentAmount: true,
    interestRate: true,
  });
  const { form, formError, onFieldChange, validateForm, resetForm } = useForm<
    T_SimulationInvestmentRequest,
    T_SimulationInvestmentRequest
  >(
    CFN_MapToSimulationInvestmentPayload({
      duration: 1,
      investmentAmount: 1000000,
      interestRate: 3,
    }),
    CFN_ValidateCreateSimulationInvestmentFields
  );
  const [result, setResult] = useState<T_SimulationInvestment>();
  const handleSubmit = async (button: boolean = true) => {
    const validate = validateForm();

    if (pending || !validate) {
      return;
    }
    try {
      CFN_GetSimulationInvestment(
        transiting,
        { ...form, interestRate: Number(form.interestRate) * 0.01 },
        (data) => {
          setResult(data?.data);
          if (button) {
            setIsResult(true);
            window.scrollTo({ top: 1550, behavior: 'smooth' });
          }
        }
      );
    } catch (error) {}
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setResult(undefined);
      if (form.investmentAmount && form.duration && form.interestRate) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const [interestAmountRange, setInterestAmountRange] = useState<{
    min: number;
    max: number;
  }>({ min: 3, max: 6 });

  const handleChangeRisk = (value: string) => {
    switch (value) {
      case '1':
        onFieldChange('interestRate', 3);
        setInterestAmountRange({ min: 3, max: 6 });
        break;
      case '2':
        onFieldChange('interestRate', 5);
        setInterestAmountRange({ min: 5, max: 8 });
        break;
      case '3':
        onFieldChange('interestRate', 7);
        setInterestAmountRange({ min: 7, max: 10 });
        break;
      case '4':
        onFieldChange('interestRate', 10);
        setInterestAmountRange({ min: 10, max: 13 });
        break;
      //
    }
  };

  type T_InvestType = '1' | '2';
  const [investType, setInvestType] = useState<T_InvestType>('1');
  const estimatedReturnOnInvestment =
    investType == '1'
      ? result?.oneTimeInvestmentResult.toString()
      : result?.periodicInvestmentResult.toString();

  const handleResetForm = () => {
    setIsResult(false);
    handleChangeRisk('1');
    setInvestType('1');
    window.scrollTo({ top: 900, behavior: 'smooth' });
    resetForm();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetCount]);

  return (
    <>
      <div className="container w-full">
        <div className="w-full flex-none mb-6 px-4">
          <InputLabel label="Investasi" required>
            <InputRadioButton
              key={resetCount}
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
              value={'1'}
              onChange={(value) => setInvestType(value as T_InvestType)}
            />

            <InputError message={''} />
          </InputLabel>
        </div>
        <div className="w-full flex-none mb-6 px-4">
          <div className="pb-5">
            <CE_SimulationLabel
              label="Nilai Dana Investasi Awal"
              slot={
                <div>
                  <div className="mb-5 w-[50%]">
                    <InputText
                      type="number"
                      disabled={formDisabled?.investmentAmount}
                      leftText="Rp."
                      value={form?.investmentAmount}
                      onChange={(value) =>
                        onFieldChange('investmentAmount', +value)
                      }
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={1000000}
                      max={1000000000000}
                      step={5000000000}
                      value={form?.investmentAmount}
                      onChange={(value) =>
                        onFieldChange('investmentAmount', value)
                      }
                    />
                  </div>
                  {formError.investmentAmount && (
                    <div className="mt-5">
                      <InputError message={formError.investmentAmount} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({
                  ...formDisabled,
                  investmentAmount: edit,
                })
              }
            />
          </div>

          <div className="pb-5">
            <CE_SimulationLabel
              label="Jangka Waktu"
              slot={
                <div>
                  <div className="mb-5 w-28">
                    <InputText
                      className="flex items-center justify-center h-full text-[#505FD3] text-opacity-90 whitespace-nowrap"
                      disabled={formDisabled?.duration}
                      rightText="Tahun"
                      value={form?.duration}
                      onChange={(value) => onFieldChange('duration', +value)}
                      type="number"
                    />
                  </div>
                  <div>
                    <InputSlider
                      min={1}
                      max={25}
                      step={1}
                      value={form?.duration}
                      onChange={(value) => onFieldChange('duration', value)}
                    />
                  </div>
                  {formError.duration && (
                    <div className="mt-5">
                      <InputError message={formError.duration} />
                    </div>
                  )}
                </div>
              }
              onChange={(edit) =>
                setFormDisabled({ ...formDisabled, duration: edit })
              }
            />
          </div>
          <div className="w-full flex-none mb-6 py-2">
            <InputLabel label="Profile Resiko" required>
              <InputRadioButton
                key={resetCount}
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
                value={'1'}
                onChange={(value) => {
                  handleChangeRisk(String(value));
                }}
              />

              <InputError message={''} />
            </InputLabel>
            <div className="w-96 text-xs leading-5 text-slate-600 pt-3 ">
              <RichTextSimulation params={interestAmountRange?.min} />
            </div>
          </div>
          <div>
            <div className="">
              <h1 className="text-xl font-semibold text-[#4A4A4A]">
                Perkiraan Imbal Hasil
              </h1>
              <h1 className="text-xs leading-5 text-[#A9AFD1]">
                min {interestAmountRange?.min}% - max {interestAmountRange?.max}
                %
              </h1>
              <div className="mb-5 w-20">
                <InputText
                  className="flex items-center justify-center h-full text-[#505FD3] text-opacity-90 whitespace-nowrap "
                  rightText="%"
                  disabled={formDisabled?.interestRate}
                  value={form?.interestRate}
                  onChange={(value) => onFieldChange('interestRate', +value)}
                  type="number"
                />
              </div>
              <div className="w-52 lg:w-72 ">
                <InputSlider
                  min={interestAmountRange.min}
                  max={interestAmountRange.max}
                  step={0.5}
                  value={form?.interestRate}
                  onChange={(value) => onFieldChange('interestRate', value)}
                  benchMax={interestAmountRange?.max}
                  benchMin={interestAmountRange?.min}
                />
              </div>
              <h1 className="text-xs leading-5 pt-5 text-[#A9AFD1]">
                *berdasarkan perhitungan dari BRIA OFORU-Infovesta
              </h1>
              {formError.interestRate && (
                <div className="mt-5">
                  <InputError message={formError.interestRate} />
                </div>
              )}
            </div>
          </div>
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
                label: 'Perkiraan Nilai Hasil Investasi',
                value: estimatedReturnOnInvestment || '0',
              },
            ]}
            onClose={() => {}}
          />
        )}
      </div>
      <div className="hidden" onClick={() => setResetCount}></div>
    </>
  );
}
