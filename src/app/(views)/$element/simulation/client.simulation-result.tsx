'use client';

import ButtonSecondary from '@/lib/element/global/button.secondary';
import CE_SimulationResultMain from './client.simulation-result-main';

type T_SimulationresultVariant01Props = {
  values: {
    label: string;
    value: string;
    width?: string;
    col?: boolean;
    percentage?: boolean;
    active?: boolean;
  }[];
  onClose: () => void;
  type?: 'center' | 'row-col';
};

const CE_SimulationResultVariant01 = ({
  values,
  onClose,
  type = 'center',
}: T_SimulationresultVariant01Props) => {
  return (
    <CE_SimulationResultMain onClose={onClose}>
      <div>
        <div className={type === 'center' ? '' : 'mb-2'}>
          {type === 'center' &&
            values.map((valueItem, valueIndex) => {
              return (
                <div key={valueIndex} className="mb-10">
                  <div className="text-2xl text-center capitalize">
                    {valueItem.label}
                  </div>
                  <div className="text-xl text-center text-[#080087] font-semibold">
                    Rp.{' '}
                    {new Intl.NumberFormat('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(parseFloat(valueItem.value))}
                  </div>
                </div>
              );
            })}
          {type === 'row-col' && (
            <div className="flex flex-wrap">
              {values
                .filter(
                  (valueItem) =>
                    valueItem.active === undefined || valueItem.active === true
                )
                .map((valueItem, valueIndex) => {
                  return (
                    <div
                      key={valueIndex}
                      className="flex-none mdmax:!w-full mb-5"
                      style={{ width: `${valueItem.width || 100}%` }}
                    >
                      <div
                        className={
                          valueItem.col
                            ? 'flex justify-between items-center mdmax:flex-wrap'
                            : ''
                        }
                      >
                        <div className="uppercase  mdmax:w-full mdmax:flex-none font-medium text-black text-opacity-50">
                          {valueItem.label}
                        </div>
                        <div className="text-lg text-blue-01 font-semibold mdmax:w-full mdmax:flex-none">
                          {!valueItem.percentage && 'Rp. '}
                          {new Intl.NumberFormat('en-US', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          }).format(parseFloat(valueItem.value))}
                          {valueItem.percentage && '%'}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="text-center">
          <ButtonSecondary
            onClick={onClose}
            rounded="full"
            size="lg"
            color="orange-01"
          >
            HITUNG ULANG
          </ButtonSecondary>
        </div>
      </div>
    </CE_SimulationResultMain>
  );
};

export default CE_SimulationResultVariant01;
