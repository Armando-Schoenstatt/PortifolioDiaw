import { useEffect, useMemo, useState } from "react";

export default function CurriculumPdf() {
  const [file, setFile] = useState(null);
  const pdfUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  useEffect(() => {
    if (!pdfUrl) return undefined;
    return () => URL.revokeObjectURL(pdfUrl);
  }, [pdfUrl]);

  return (
    <div className="curriculum-viewer card">
      <div className="curriculum-toolbar">
        <label className="curriculum-upload">
          {file ? "Trocar PDF" : "Selecionar currículo PDF"}
          <input
            type="file"
            accept="application/pdf,.pdf"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          />
        </label>
        {file && <span className="curriculum-filename">{file.name}</span>}
      </div>
      {pdfUrl ? (
        <object className="curriculum-document" data={pdfUrl} type="application/pdf">
          <p>
            Não foi possível exibir o PDF neste navegador.{" "}
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              Abrir currículo em outra aba
            </a>
          </p>
        </object>
      ) : (
        <p className="curriculum-placeholder">
          O espaço do currículo está pronto. Selecione um PDF para visualizar uma prévia neste
          navegador; o arquivo não é enviado nem salvo pelo site.
        </p>
      )}
    </div>
  );
}
