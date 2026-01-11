export default function Administrasi() {
  return (
    <section id="administrasi" className="w-full py-24 bg-[#FFF9EB]">
      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700">
          Administrasi
        </h2>
        <div className="w-16 h-1 bg-[#FFA726] mx-auto mt-2 mb-8 rounded-full" />

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Warga dapat mengajukan dokumen atau permohonan tanpa harus datang langsung,
          cukup dengan mengisi formulir digital yang tersedia.
        </p>

        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          Formulir yang tersedia meliputi:
        </p>

        {/* List */}
        <ol className="text-sm text-gray-500 space-y-2 mb-10">
          <li>1.</li>
          <li>2.</li>
          <li>3.</li>
        </ol>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="
              bg-[#FFA726]
              hover:bg-[#FB8C00]
              text-white
              px-8
              py-3
              rounded-full
              shadow-md
              transition
              font-medium
            "
          >
            Klik disini
          </button>
        </div>

      </div>
    </section>
  );
}