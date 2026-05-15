import './App.css'

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1 className="name">Henrique Darlim</h1>
        <p className="profession">Desenvolvedor de Software</p>
        <div className="divider"></div>
      </header>

      <section className="section">
        <h2 className="section-title">CONTATO</h2>
        <div className="divider"></div>
        <div className="contact-info">
          <p>Email: henriquemail@example.com</p>
          <p>Telefone: +55 (35) 1234-5678</p>
          <p>Localização: Segredo</p>
          <p>Website: <a href="https://henriquedarlim.substack.com/">Substack</a></p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">EXPERIÊNCIA</h2>
        <div className="divider"></div>

        <div className="entry">
          <div className="entry-header">
            <h3 className="entry-title">Professor</h3>
            <span className="entry-period">2024-Atual</span>
          </div>
          <p className="entry-company">Colégio Porto Bragança</p>
          <p className="entry-description">Filosofia, Sociologia e Educação Financeira</p>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h3 className="entry-title">Professor</h3>
            <span className="entry-period">2022-2023</span>
          </div>
          <p className="entry-company">Governo do Estado de SP</p>
          <p className="entry-description">História, Itinerários Formativos e Eletivas</p>
        </div>

      </section>

      <section className="section">
        <h2 className="section-title">EDUCAÇÃO</h2>
        <div className="divider"></div>
        
        <div className="entry">
          <div className="entry-header">
            <h3 className="entry-title">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
            <span className="entry-period">2025-2028</span>
          </div>
          <p className="entry-company">Instituto Federal de São Paulo</p>
        </div>

        <div className="entry">
          <div className="entry-header">
            <h3 className="entry-title">Licenciatura em História</h3>
            <span className="entry-period">2018-2022</span>
          </div>
          <p className="entry-company">Faculdade de Ciências e Letras de Bragança Paulista</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">HABILIDADES</h2>
        <div className="divider"></div>
        
        <div className="skills-group">
          <h3 className="skills-category">Linguagens de Programação</h3>
          <div className="skills-list">
            <span className="skill">Python</span>
            <span className="skill">C</span>
          </div>
        </div>

        <div className="skills-group">
          <h3 className="skills-category">Ferramentas</h3>
          <div className="skills-list">
            <span className="skill">Github</span>
            <span className="skill">Trello</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="divider"></div>
        <p>2026</p>
      </footer>
    </div>
  )
}

export default App
