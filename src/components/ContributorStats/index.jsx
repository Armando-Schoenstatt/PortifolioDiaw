import ContributorStats from '../../../ContributorStats/src/components/ContributorStats/ContributorStats'
import '../../../ContributorStats/src/components/ContributorStats/ContributorStats.css'

export default function ContributorStatsSection({ lang }) {
  return (
    <section id="contributor-stats" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Contributor Stats</h2>
          <p className="text-gray-400 text-sm">
            {lang === 'pt'
              ? 'Analise qualquer repositório GitHub e veja o ranking de colaboradores por commits e linhas de código'
              : 'Analyze any GitHub repository and see contributor rankings by commits and lines of code'}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-3" />
        </div>
        <div className="card p-6">
          <ContributorStats />
        </div>
      </div>
    </section>
  )
}
