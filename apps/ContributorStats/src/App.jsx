import { SiGithub } from "react-icons/si";
import ContributorStats from "./components/ContributorStats/ContributorStats";
import PageLayout from "./components/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout
      icon={SiGithub}
      brand="Contributor Stats"
      title="Ranking de colaboradores"
      description="Analise commits, linhas adicionadas e removidas e impacto líquido. A branch principal é analisada por padrão; o modo de todas as branches fica disponível com token do GitHub."
    >
      <ContributorStats autoAnalyze showAnalysisForm={false} />
    </PageLayout>
  );
}

export default App;
