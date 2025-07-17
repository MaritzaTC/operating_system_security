export default function ReportePDF() {
  return (
    <div className="w-full h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Reporte Técnico</h1>
      <div className="w-full h-[90%]">
        <iframe
          src="/Sistemas operativos - Reporte tecnico.docx.pdf"
          className="w-full h-full border rounded"
        />
      </div>
    </div>
  );
}
