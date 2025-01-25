'use client';
import React, { useState } from 'react';
import CE_SimulationInvestment from './client.simulation-investment';
import CE_SimultaionInitialInvest from './client.simulation.initial-invest';
import CE_SimulationObligasi from './client.simulation.obligasi';
import CE_SimulationReksaDana from './client.simulation.reksa-dana';
// import { parseHTMLToReact } from '@/lib/functions/global/htmlParser';

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
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index: any) => {
    setToggle(index);
  };

  return (
    <>
      <div className="w-full rounded-lg shadow-lg border flex flex-col justify-center items-center py-10 px-3">
        <div className="flex w-full lg:w-9/12 xl:w-6/12 overflow-x-scroll md:overflow-x-hidden border-b-2 border-wmcolor">
          <div
            className={
              toggle === 1
                ? 'tabs bg-[#080087] text-white'
                : 'tabs text-bluedark01'
            }
            onClick={() => toggleTab(1)}
          >
            <h1 className="text-xs md:text-sm ">SIMULASI HASIL INVESTASI</h1>
          </div>
          <div
            className={
              toggle === 2
                ? 'tabs bg-[#080087] text-white'
                : 'tabs text-bluedark01'
            }
            onClick={() => toggleTab(2)}
          >
            <h1 className="text-xs md:text-sm ">
              SIMULASI NILAI DANA INVESTASI AWAL
            </h1>
          </div>
          <div
            className={
              toggle === 3
                ? 'tabs bg-[#080087] text-white'
                : 'tabs text-bluedark01'
            }
            onClick={() => toggleTab(3)}
          >
            <h1 className="text-xs md:text-sm ">
              SIMULASI NILAI HASIL INVESTASI OBLIGASI
            </h1>
          </div>
          <div
            className={
              toggle === 4
                ? 'tabs bg-[#080087] text-white'
                : 'tabs text-bluedark01'
            }
            onClick={() => toggleTab(4)}
          >
            <h1 className="text-xs md:text-sm ">
              SIMULASI NILAI HASIL INVESTASI REKSA DANA
            </h1>
          </div>
        </div>
        <div className="rounded-b-lg w-full lg:w-9/12 xl:w-6/12">
          <div
            className={
              toggle === 1 ? 'content w-full active-content  ' : 'content '
            }
          >
            <h1 className="text-center text-2xl font-bold tracking-wider py-5">
              SIMULASI HASIL INVESTASI
            </h1>
            <section className="w-full flex justify-center pt-10">
              <div className="w-10/12">
                <CE_SimulationInvestment />
              </div>
            </section>
          </div>
          <div
            className={
              toggle === 2 ? 'content w-full active-content' : 'content'
            }
          >
            <h1 className="text-center text-2xl font-bold tracking-wider py-5">
              SIMULASI NILAI DANA INVESTASI AWAL
            </h1>
            <section className="w-full flex justify-center pt-10">
              <div className="w-10/12">
                <CE_SimultaionInitialInvest />
              </div>
            </section>
          </div>
          <div
            className={
              toggle === 3 ? 'content w-full active-content' : 'content'
            }
          >
            <h1 className="text-center text-2xl font-bold tracking-wider py-5">
              SIMULASI NILAI HASIL INVESTASI OBLIGASI
            </h1>
            <section className="w-full flex justify-center pt-10">
              <div className="w-10/12">
                <CE_SimulationObligasi />
              </div>
            </section>
          </div>
          <div
            className={
              toggle === 4 ? 'content w-full active-content' : 'content'
            }
          >
            <h1 className="text-center text-2xl font-bold tracking-wider py-5">
              SIMULASI NILAI HASIL INVESTASI REKSA DANA
            </h1>
            <section className="w-full flex justify-center pt-10">
              <div className="w-10/12">
                <CE_SimulationReksaDana />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="hidden">{data?.[0]?.title}</div>
    </>
  );
}
