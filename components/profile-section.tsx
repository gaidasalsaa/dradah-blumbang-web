import { Card } from "@/components/ui/card";
import { Clock, Target, Users } from "lucide-react";

export default function ProfileSection() {
  return (
    <section
      id="profil"
      className="w-full bg-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#33691E]">
            Profil Desa
          </h2>

          {/* underline */}
          <div className="w-24 h-1 bg-[#FFA726] rounded-full mx-auto mt-3" />

          <p className="mt-4 text-[#757575] max-w-3xl mx-auto">
            Mengenal lebih dekat Desa Dradah Blumbang dengan segala potensi dan keunikannya
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Sejarah */}
          <Card className="bg-[#FFF8E1] rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFE0A3] flex items-center justify-center mb-4">
              <Clock className="text-[#FFA726]" />
            </div>

            <h3 className="text-lg font-semibold text-[#33691E] mb-0.5">
              Potensi Desa
            </h3>

            <p className="text-[#000000] text-sm text-justify">
              Mata pencaharian masyarakat Desa Dradahblumbang didominasi oleh sektor pertanian dengan jumlah tenaga kerja sebanyak 2.528 orang. Selain itu, sektor jasa dan perdagangan menyerap 351 orang, sektor industri sebanyak 529 orang, serta sektor lain-lain sebanyak 22 orang. Secara keseluruhan, jumlah penduduk yang memiliki mata pencaharian mencapai 4.835 orang, mencerminkan potensi ekonomi desa yang beragam dan produktif.
            </p>
          </Card>

          {/* Visi */}
          <Card className="bg-[#F9FFE8] rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#E4F6D6] flex items-center justify-center mb-4">
              <Target className="text-[#33691E]" />
            </div>

            <h3 className="text-lg font-semibold text-[#33691E] mb-2">
              Visi
            </h3>

            <p className="text-[#757575] text-sm">
              abcd
            </p>
          </Card>

          {/* Misi */}
          <Card className="bg-[#FFF8E1] rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFE0A3] flex items-center justify-center mb-4">
              <Users className="text-[#FFA726]" />
            </div>

            <h3 className="text-lg font-semibold text-[#33691E] mb-2">
              Misi
            </h3>

            <p className="text-[#757575] text-sm">
              Kaya akan sumber daya alam dengan area
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
}