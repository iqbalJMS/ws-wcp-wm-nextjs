'use client';
import React, { useEffect, useState, useTransition } from 'react';
import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';
// import CE_InputTester from '@/app/tester-component/input';
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

export default function TabsCalculator({
  data,
}: {
  data: Array<{
    content: string;
    simulation: string;
    title: string;
    config: any;
  }>;
}) {
  // const [formDisabled, setFormDisabled] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [pending, transiting] = useTransition();
  const [isResult, setIsResult] = useState(false);

  const [formDisabled, setFormDisabled] = useState({
    duration: true,
    investmentAmount: true,
    interestRate: true,
  });
  const { form, formError, onFieldChange, validateForm } = useForm<
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
      CFN_GetSimulationInvestment(transiting, form, (data) => {
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
      if (form.investmentAmount && form.duration && form.interestRate) {
        handleSubmit(false);
      }
    }, 300); // Delay of 300ms

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const toggleTab = (index: any) => {
    setToggle(index);
  };

  return (
    <>
      <div className="w-full rounded-lg shadow-lg border flex flex-col justify-center items-center py-10 px-3">
        <div className="flex w-full lg:w-9/12 xl:w-6/12 overflow-x-scroll md:overflow-x-hidden border-b-2 border-wmcolor">
          {data?.map((item, index) => (
            <div
              key={index}
              className={
                toggle === index
                  ? 'tabs bg-[#080087] text-white'
                  : 'tabs text-bluedark01'
              }
              onClick={() => toggleTab(index)}
            >
              <h1 className="text-xs md:text-sm ">{item?.title}</h1>
            </div>
          ))}
        </div>
        <div className="rounded-b-lg w-full lg:w-9/12 xl:w-6/12 ">
          {data?.map((item, index) => (
            <div
              key={index}
              className={
                toggle === index ? 'content w-full active-content' : 'content'
              }
            >
              <h1 className="text-center text-2xl font-bold tracking-wider py-5">
                {parseHTMLToReact(item?.content)}
              </h1>
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
                              disabled={formDisabled?.investmentAmount}
                              leftText="Rp."
                              value={form?.investmentAmount}
                              onChange={(value) =>
                                onFieldChange('investmentAmount', value)
                              }
                              type="number"
                            />
                          </div>
                          <div>
                            <InputSlider
                              min={0}
                              max={10000000000}
                              step={100000}
                              value={form?.investmentAmount}
                              onChange={(value) =>
                                onFieldChange('investmentAmount', value)
                              }
                            />
                          </div>
                          {formError.investmentAmount && (
                            <div className="mt-5">
                              <InputError
                                message={formError.investmentAmount}
                              />
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
                          <div className="mb-5 w-[20%]">
                            <InputText
                              disabled={formDisabled?.duration}
                              rightText="Tahun"
                              value={form?.duration}
                              onChange={(value) =>
                                onFieldChange('duration', value)
                              }
                              type="number"
                            />
                          </div>
                          <div>
                            <InputSlider
                              min={0}
                              max={25}
                              step={1}
                              value={form?.duration}
                              onChange={(value) =>
                                onFieldChange('duration', value)
                              }
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

                      <InputError message={''} />
                    </InputLabel>
                    <div className="w-96 text-xs leading-5 text-slate-600">
                      <h1>
                        Sangat Konservatif Tujuan berinvestasi untuk mendapatkan
                        pertumbuhan nilai investasi. Berinvestasi pada produk
                        dengan risiko sangat rendah. Jangka waktu investasi yang
                        dianjurkan 0-2 tahun
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
                            disabled={formDisabled?.interestRate}
                            value={form?.interestRate}
                            onChange={(value) =>
                              onFieldChange('interestRate', value)
                            }
                            type="number"
                          />
                        </div>
                        <div className="w-52 lg:w-72 ">
                          <InputSlider
                            min={3}
                            max={6}
                            step={1}
                            value={form?.interestRate}
                            onChange={(value) =>
                              onFieldChange('interestRate', value)
                            }
                          />
                        </div>
                        {formError.interestRate && (
                          <div className="mt-5">
                            <InputError message={formError.interestRate} />
                          </div>
                        )}
                      </div>
                    }
                    onChange={(edit) =>
                      setFormDisabled({ ...formDisabled, interestRate: edit })
                    }
                  />
                </div>

                <div className="flex gap-5 mt-5">
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
                        label: 'Perkiraan Nilai Hasil Investasi',
                        value:
                          result?.oneTimeInvestmentResult.toString() || '0',
                      },
                    ]}
                    onClose={() => {}}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
