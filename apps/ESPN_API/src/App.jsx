import PageLayout from "./components/PageLayout/PageLayout";
import EspnDashboard, { EspnIcon } from "./components/ESPN/EspnDashboard";

function App() {
  return (
    <PageLayout
      icon={EspnIcon}
      brand="ESPN API"
      title="Futebol ao vivo"
      description="Próximos jogos e resultados do Atlético-MG e do Vasco da Gama e classificação do Brasileirão, com contagem regressiva e placar ao vivo."
    >
      <EspnDashboard />
    </PageLayout>
  );
}

export default App;
