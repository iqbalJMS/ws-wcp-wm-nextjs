'use client';
import React from 'react';

export default function RichTextSimulation({ params }: { params: number }) {
  return (
    <>
      <div className="w-full h-full">
        {params === 3 && (
          <div className="text-xs text-[#A9AFD1]">
            <h1 className="italic">Sangat Konservatif</h1>
            <p className="pt-1 text-xs/6">
              Tujuan berinvestasi untuk mendapatkan pertumbuhan nilai investasi.
              Berinvestasi pada produk dengan risiko sangat rendah. Jangka waktu
              investasi yang dianjurkan 0-2 tahun
            </p>
            <span>
              <h1 className="pt-5 italic">Rekomendasi Portofolio Investasi</h1>
              <ul className="px-8 list-disc space-y-1">
                <li>Pendapatan Tetap 30% </li>
                <li>Tabungan/Deposito/Giro 40%</li>
                <li>Pasar Uang 30%</li>
              </ul>
            </span>
          </div>
        )}
        {params === 5 && (
          <div className="text-xs text-[#A9AFD1]">
            <h1 className="italic">Konservatif</h1>
            <p className="pt-1 text-xs/6">
              Tujuan berinvestasi untuk mendapatkan pertumbuhan sedang.
              Berinvestasi pada produk dengan risiko sedang. Jangka waktu
              investasi yang dianjurkan 2-3 tahun
            </p>
            <span>
              <h1 className="pt-5 italic">Rekomendasi Portofolio Investasi</h1>
              <ul className="px-8 list-disc space-y-1">
                <li>Pendapatan Tetap 35%</li>
                <li>Tabungan/Deposito/Giro 20%</li>
                <li>Pasar Uang 30%</li>
                <li>Saham 15%</li>
              </ul>
            </span>
          </div>
        )}
        {params === 7 && (
          <div className="text-xs text-[#A9AFD1]">
            <h1 className="italic">Moderat</h1>
            <p className="pt-1 text-xs/6">
              Tujuan berinvestasi untuk mendapatkan pertumbuhan tinggi.
              Berinvestasi pada produk dengan risiko sedang hingga tinggi.
              Jangka waktu investasi yang dianjutkan 3-5 tahun
            </p>
            <span>
              <h1 className="pt-5 italic">Rekomendasi Portofolio Investasi</h1>
              <ul className="px-8 list-disc space-y-1">
                <li>Pendapatan Tetap 35%</li>
                <li>Tabungan/Deposito/Giro 10%</li>
                <li>Pasar Uang 25%</li>
                <li>Saham 30%</li>
              </ul>
            </span>
          </div>
        )}
        {params === 10 && (
          <div className="text-xs text-[#A9AFD1]">
            <h1 className="italic">Moderat</h1>
            <p className="pt-1 text-xs/6">
              {`Tujuan berinvestasi untuk mendapatkan pertumbuhan pesat. Berinvestasi pada produk dengan risiko yang tinggi. Jangka waktu investasi yang dianjurkan > 5 tahun`}
            </p>
            <span>
              <h1 className="pt-5 italic">Rekomendasi Portofolio Investasi</h1>
              <ul className="px-8 list-disc space-y-1">
                <li>Pendapatan Tetap 20%</li>
                <li>Tabungan/Deposito/Giro 10%</li>
                <li>Pasar Uang 10%</li>
                <li>Saham 60%</li>
              </ul>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
