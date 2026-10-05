import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Language Teachers Dhaka | KTTI",
  description: "Meet our native-level and experienced Japanese language teachers at KTTI Dhaka.",
};

export default function OurTeachersPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-black text-[#A71728] mb-6">Our Japanese Language Teachers in Dhaka</h1>
        <p className="text-neutral-700 mb-8">Teacher details will be updated by the content team.</p>
      </div>
    </div>
  );
}
