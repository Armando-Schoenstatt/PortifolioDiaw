import defaultCurriculumUrl from "../../CurriculoArmandoSchoenstatt.pdf?url";

export default function CurriculumPdf() {
  return (
    <div className="curriculum-viewer card">
      <div className="curriculum-toolbar">
        <a
          className="curriculum-download"
          href={defaultCurriculumUrl}
          download="CurriculoArmandoSchoenstatt.pdf"
        >
          Baixar currículo
        </a>
        <span className="curriculum-filename">CurriculoArmandoSchoenstatt.pdf</span>
      </div>
      <object className="curriculum-document" data={defaultCurriculumUrl} type="application/pdf">
        <p>
          Não foi possível exibir o PDF neste navegador.{" "}
          <a href={defaultCurriculumUrl} target="_blank" rel="noreferrer">
            Abrir currículo em outra aba
          </a>
        </p>
      </object>
    </div>
  );
}
