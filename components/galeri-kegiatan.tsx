"use client";

import Image from "next/image";
import { useState } from "react";

export default function GaleriKegiatan() {
  const [selected, setSelected] = useState<null | {
    img: string;
    title: string;
    desc: string;
  }>(null);

  return (
    <section id="galeri" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 text-center">
          Galeri Kegiatan
        </h2>
        <div className="w-16 h-1 bg-[#FFA726] mx-auto mt-2 mb-12 rounded-full" />

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <GalleryCard
            img="/apel-pagi.jpeg"
            title="Apel Pagi"
            desc="Kegiatan apel pagi di Balai Desa Dradahblumbang"
            onOpen={setSelected}
          />

          <GalleryCard
            img="/pertemuan-pkk.jpeg"
            title="Pertemuan PKK"
            desc="Pertemuan rutin tim penggerak PKK dan Dharma Wanita Persatuan"
            onOpen={setSelected}
          />

          <GalleryCard
            img="/pelatihan-umkm.jpeg"
            title="Pelatihan Skala UMKM"
            desc="Pelatihan pembuatan nugget ayam sayur with bubble crumb dana desa tahun 2025 Bidang Pemberdayaan Masyarakat"
            onOpen={setSelected}
          />

          <GalleryCard
            img="/dana-blt.jpeg"
            title="Pembagian BLT-DD"
            desc="Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) setiap 3 bulan sekali"
            onOpen={setSelected}
          />

          <GalleryCard
            img="/kerja-bakti.jpg"
            title="Kerja Bakti bersama KKN-BBK 7 UNAIR"
            desc="Kegiatan kerja bakti warga dusun Blumbang bersama mahasiswa KKN BBK 7 Universitas Airlangga"
            onOpen={setSelected}
          />
        </div>
      </div>

      {/* ===== POPUP MODAL ===== */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-4">
              <Image
                src={selected.img}
                alt={selected.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-green-700 mb-1">
              {selected.title}
            </h3>

            <p className="text-gray-700 text-sm">
              {selected.desc}
            </p>

            <button
              className="mt-4 px-4 py-2 rounded-full bg-[#FFA726] text-white mx-auto block"
              onClick={() => setSelected(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ===== Card Component ===== */

function GalleryCard({
  img,
  title,
  desc,
  onOpen,
}: {
  img: string;
  title: string;
  desc: string;
  onOpen: any;
}) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => onOpen({ img, title, desc })}
    >
      {/* Image */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-md">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-4">
        <h3 className="font-semibold text-green-700">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {desc}
        </p>
      </div>
    </div>
  );
}
