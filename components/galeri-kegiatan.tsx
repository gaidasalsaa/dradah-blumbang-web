import Image from "next/image";

export default function GaleriKegiatan() {
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
          />

          <GalleryCard
            img="/pertemuan-pkk.jpeg"
            title="Pertemuan PKK"
            desc="Pertemuan rutin tim penggerak PKK dan Dharma Wanita Persatuan"
          />

          <GalleryCard
            img="/pelatihan-umkm.jpeg"
            title="Pelatihan Skala UMKM"
            desc="Pelatihan pembuatan nugget ayam sayur with bubble crumb 
            dana desa tahun 2025 Bidang Pemberdayaan Masyarakat"
          />

          <GalleryCard
            img="/dana-blt.jpeg"
            title="Pembagian BLT-DD"
            desc="Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) setiap 3 bulan sekali"
          />

        </div>

      </div>
    </section>
  );
}

/* ===== Card Component ===== */

function GalleryCard({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div>
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