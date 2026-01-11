export default function StrukturOrganisasi() {
  return (
    <section id="struktur" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 text-center">
          Struktur Organisasi Desa
        </h2>
        <div className="w-16 h-1 bg-[#FFA726] mx-auto mt-2 mb-10 rounded-full" />

        {/* Kepala Desa */}
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-xl shadow-lg px-10 py-4 text-center">
            <p className="text-sm uppercase">Kepala Desa</p>
            <p className="font-semibold text-lg">Kari Muji Santoso</p>
          </div>
        </div>

        {/* Sekretaris */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#FFA726] text-white rounded-xl shadow-lg px-10 py-4 text-center">
            <p className="text-sm uppercase">Sekretaris Desa</p>
            <p className="font-semibold text-lg">Mat Juri</p>
          </div>
        </div>

        {/* Grid Jabatan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-[#FFF3D8] rounded-xl shadow-md p-4 text-center">
            <p className="text-xs uppercase text-gray-600">Urusan Tata Usaha dan Umum</p>
            <p className="font-semibold text-green-700 mt-1">
              M. Galih Fasya Dwi Syaputra
            </p>
          </div>

          <div className="bg-[#FFF3D8] rounded-xl shadow-md p-4 text-center">
            <p className="text-xs uppercase text-gray-600">Urusan Keuangan</p>
            <p className="font-semibold text-green-700 mt-1">
              Andi Suhendro
            </p>
          </div>

          <div className="bg-[#FFF3D8] rounded-xl shadow-md p-4 text-center">
            <p className="text-xs uppercase text-gray-600">Urusan Perencanaan</p>
            <p className="font-semibold text-green-700 mt-1">
              Mutmainnah
            </p>
          </div>
        </div>

        {/* Seksi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-[#FFF3D8] rounded-xl shadow-md p-4 text-center">
            <p className="text-xs uppercase text-gray-600">Seksi Pemerintahan</p>
            <p className="font-semibold text-green-700 mt-1">
              Juniar Dwi Setyoko
            </p>
          </div>

          <div className="bg-[#FFF3D8] rounded-xl shadow-md p-4 text-center">
            <p className="text-xs uppercase text-gray-600">Seksi Kesejahteraan</p>
            <p className="font-semibold text-green-700 mt-1">
              Hendri Susilo
            </p>
          </div>

          <div className="bg-[#FFF3D8] rounded-xl shadow-md p-4 text-center">
            <p className="text-xs uppercase text-gray-600">Seksi Pelayanan</p>
            <p className="font-semibold text-green-700 mt-1">
              Budi Saputro
            </p>
          </div>
        </div>

        {/* Kepala Dusun */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3">
        {[
          { title: "KEPALA DUSUN BLUMBANG", name: "Muhammad Romli" },
          { title: "KEPALA DUSUN CARANGBANG", name: "Marno" },
          { title: "KEPALA DUSUN DRADAH", name: "Tukinem" },
          { title: "KEPALA DUSUN TARIK", name: "Suryanto" },
          { title: "KEPALA DUSUN SEMPUR", name: "Untung Sujatmiko" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm text-center"
          >
            <p className="text-[12px] font-semibold text-gray-600">
              {item.title}
            </p>
            <p className="text-[13px] font-semibold text-green-700">{item.name}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}