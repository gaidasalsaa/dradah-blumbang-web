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
            img="/images/galeri/musyawarah.jpg"
            title="Musyawarah Desa"
            desc="Rapat koordinasi pembangunan desa"
          />

          <GalleryCard
            img="/images/galeri/agustusan.jpg"
            title="17 Agustus"
            desc="Perayaan tradisi budaya lokal"
          />

          <GalleryCard
            img="/images/galeri/infrastruktur.jpg"
            title="Pembangunan Infrastruktur"
            desc="Perbaikan jalan dan fasilitas umum"
          />

          <GalleryCard
            img="/images/galeri/pertanian.jpg"
            title="Pelatihan Pertanian"
            desc="Program peningkatan hasil panen"
          />

          <GalleryCard
            img="/images/galeri/kesehatan.jpg"
            title="Program Kesehatan"
            desc="Pelayanan kesehatan masyarakat"
          />

          <GalleryCard
            img="/images/galeri/pendidikan.jpg"
            title="Pendidikan Anak"
            desc="Program bimbingan belajar gratis"
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