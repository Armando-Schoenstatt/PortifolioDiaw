import "./PageLayout.css";

const PageLayout = ({ icon: Icon, brand, title, description, children }) => (
  <div className="page-container">
    <header className="page-hero">
      <div className="page-hero-brand">
        {Icon && <Icon className="page-hero-icon" aria-hidden="true" />}
        <span>{brand}</span>
      </div>
    </header>

    <section className="page-intro">
      <span className="page-label">PORTFÓLIO · ARMANDO MOREIRA</span>
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
      <div className="page-divider" />
    </section>

    <main className="page-content">{children}</main>

    <footer className="page-footer">
      Ferramenta interativa do portfólio de Armando Moreira
    </footer>
  </div>
);

export default PageLayout;
