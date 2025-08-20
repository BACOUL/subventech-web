export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0E1116] text-[#E5F2F4]">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">SubvenTech</h1>
        <p className="text-lg mb-6">Vos subventions en un clic</p>
        <button className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:opacity-80">
          Commencer
        </button>
      </div>
    </div>
  );
}
