import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Language Course Admission Dhaka | KTTI",
  description: "Apply for admission to KTTI's Japanese language and SSW visa training courses in Dhaka.",
};

export default function AdmissionPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-black text-[#A71728] mb-6">Japanese Language Course Admission</h1>
        <div className="bg-white p-8 shadow-sm border border-neutral-200">
          <p className="text-neutral-700 mb-8">Admission form details will be updated by the content team.</p>
        </div>
      </div>
    </div>
  );
}
