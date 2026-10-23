import { useEffect, useMemo, useState } from "react";
import defaultCurriculumUrl from "../../CurriculoArmandoSchoenstatt.pdf?url";

export default function CurriculumPdf() {
  const [file, setFile] = useState(null);
  const pdfUrl = useMemo(
    () => (file ? URL.createObjectURL(file) : defaultCurriculumUrl),
    [file]
  );

  useEffect(() => {
    if (!file) return undefined;
    return () => URL.revokeObjectURL(pdfUrl);
  }, [file, pdfUrl]);

  return (
    <div className="curriculum-viewer card">
      <div className="curriculum-toolbar">
        <label className="curriculum-upload">
          {file ? "Trocar PDF" : "Selecionar outro PDF"}
          <input
            type="file"
            accept="application/pdf,.pdf"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
          />
        </label>
        <a
          className="curriculum-upload"
          href={pdfUrl}
          download={file?.name ?? "CurriculoArmandoSchoenstatt.pdf"}
        >
          Baixar currículo
        </a>
        <span className="curriculum-filename">
          {file?.name ?? "CurriculoArmandoSchoenstatt.pdf"}
        </span>
      </div>
      <object className="curriculum-document" data={pdfUrl} type="application/pdf">
        <p>
          Não foi possível exibir o PDF neste navegador.{" "}
          <a href={pdfUrl} target="_blank" rel="noreferrer">
            Abrir currículo em outra aba
          </a>
        </p>
      </object>
    </div>
  );
}
