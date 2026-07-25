const Arrow = () => <span aria-hidden="true">↗</span>;

const skillGroups = [
  {
    index: "01",
    title: "Frontend",
    items: ["TypeScript", "JavaScript ES2023+", "React", "Next.js", "Redux Toolkit", "Zustand", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Vite", "Webpack"],
  },
  {
    index: "02",
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST API", "GraphQL", "WebSocket", "JWT / OAuth2", "Microservices"],
  },
  {
    index: "03",
    title: "Данные",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "TypeORM"],
  },
  {
    index: "04",
    title: "DevOps & Cloud",
    items: ["Docker", "Docker Compose", "GitHub Actions", "GitLab CI/CD", "Nginx", "Linux", "AWS", "Cloudflare"],
  },
  {
    index: "05",
    title: "Инструменты",
    items: ["Git", "Jira", "Confluence", "Postman", "Swagger / OpenAPI", "Figma"],
  },
];

const jobs = [
  {
    period: "ИЮНЬ 2025 — НАСТОЯЩЕЕ ВРЕМЯ",
    role: "Fullstack Developer",
    company: "BAPPS.kz",
    points: [
      "Разработка и поддержка клиентских приложений на React и Next.js.",
      "Создание backend-сервисов на NestJS и PostgreSQL.",
      "Проектирование аутентификации и авторизации на JWT / OAuth2.",
      "Оптимизация API: среднее время ответа сокращено на 35%.",
      "Настройка CI/CD через GitHub Actions и Docker.",
      "Код-ревью и менторинг junior-разработчиков.",
    ],
    stack: "TypeScript · React · Next.js · NestJS · PostgreSQL · Redis · Docker · AWS",
  },
  {
    period: "МАРТ 2022 — МАЙ 2023",
    role: "Junior Fullstack Developer",
    company: "Фриланс",
    points: [
      "Разработка новых модулей для CRM-системы.",
      "Поддержка REST API и интеграций со сторонними сервисами.",
      "Адаптивная вёрстка интерфейсов по макетам Figma.",
      "Unit- и integration-тестирование функциональности.",
    ],
    stack: "JavaScript · React · Express.js · MongoDB · Docker",
  },
];

const projects = [
  {
    number: "01",
    title: "TaskFlow",
    type: "SaaS-платформа управления задачами",
    description: "Роли и права доступа, real-time уведомления через WebSocket и аналитическая панель с интерактивными графиками.",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Redis"],
    href: "https://github.com/Anen135/taskflowfull",
  },
  {
    number: "02",
    title: "NextShop",
    type: "Современный интернет-магазин",
    description: "Каталог, корзина и оформление заказов, интеграция платёжных систем и CRM, оптимизированные SEO и Core Web Vitals.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    href: "https://github.com/Anen135/nextshop",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="На главную">SB / DEV</a>
        <nav aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#experience">Опыт</a>
          <a href="#projects">Проекты</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className="locale"><i /> RU</div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FULLSTACK · WEB · 2026</p>
          <h1><span>Султан</span><span>Батырханов</span></h1>
          <h2>Middle Fullstack Web Developer</h2>
          <p className="hero-lead">4+ года создаю быстрые и масштабируемые веб-продукты — от интерфейса до инфраструктуры.</p>
          <p className="location">Краснодар <b>·</b> Remote <b>·</b> Relocation</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Смотреть проекты <Arrow /></a>
            <a className="button secondary" href="#contacts">Связаться <Arrow /></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="grid-label">GRID 12</div>
          <div className="art-cross">+</div>
          <div className="art-square" />
          <div className="art-note">{/* build */}<br />scalable<br />web products</div>
          <div className="art-arc" />
          <div className="art-frame"><small>ARCHITECTURE</small><br />········<br /><small>PERFORMANCE</small></div>
          <div className="art-base" />
        </div>
      </section>

      <div className="stack-rail shell">
        {["TypeScript", "React / Next.js", "Node.js / NestJS", "PostgreSQL", "Docker / AWS"].map((item, index) => (
          <div className="rail-cell" key={item}>
            <span>0{index + 1}</span>
            <strong>{item}</strong>
          </div>
        ))}
        <div className="availability"><span>01 — ПОРТФОЛИО / 2026</span><strong><i /> Открыт к новым проектам</strong></div>
      </div>

      <section className="section shell about" id="about">
        <div className="section-label"><span>01</span> ПРОФИЛЬ</div>
        <div>
          <h2 className="section-title">Проектирую продукт<br />как единую систему.</h2>
          <div className="about-grid">
            <p className="large-copy">Специализируюсь на современных SPA и высоконагруженных backend-сервисах. Беру ответственность за весь путь продукта — от логики интерфейса до развёртывания.</p>
            <p>Уверенно работаю с JavaScript / TypeScript, React, Node.js и SQL / NoSQL базами данных. Проектирую REST API, настраиваю CI/CD, контейнеризацию и облачную инфраструктуру. Работаю самостоятельно и в кросс-функциональных Agile-командах.</p>
          </div>
          <div className="metrics">
            <div><strong>4+</strong><span>года коммерческого<br />опыта</span></div>
            <div><strong>35%</strong><span>ускорение API<br />в production</span></div>
            <div><strong>B2</strong><span>технический<br />английский</span></div>
          </div>
        </div>
      </section>

      <section className="section skills shell" id="skills">
        <div className="section-label"><span>02</span> КОМПЕТЕНЦИИ</div>
        <div>
          <h2 className="section-title">Стек, который решает<br />задачи бизнеса.</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <span className="skill-index">{group.index}</span>
                <h3>{group.title}</h3>
                <div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-label"><span>03</span> ОПЫТ</div>
        <div>
          <h2 className="section-title">Опыт в продуктах<br />и командах.</h2>
          <div className="timeline">
            {jobs.map((job, index) => (
              <article key={job.role}>
                <div className="job-meta"><span>0{index + 1}</span><time>{job.period}</time></div>
                <div className="job-body">
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  <p className="job-stack">{job.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="shell section">
          <div className="section-label light"><span>04</span> ПРОЕКТЫ</div>
          <div>
            <h2 className="section-title light-title">Выбранные<br />работы.</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                  <div className="project-top"><span>{project.number}</span><Arrow /></div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </a>
              ))}
            </div>
            <a className="github-link" href="https://github.com/Anen135" target="_blank" rel="noreferrer">Все репозитории на GitHub <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section shell education">
        <div className="section-label"><span>05</span> ОБРАЗОВАНИЕ</div>
        <div className="education-card">
          <span>2022 — 2026</span>
          <h2>Бакалавр программной разработки</h2>
          <p>Семейский Высший Финансово-Экономический колледж</p>
          <strong>Красный диплом</strong>
        </div>
      </section>

      <section className="principles shell">
        <p>Также в работе</p>
        <div>SOLID</div><div>Clean Architecture</div><div>DDD</div><div>Open Source</div><div>Agile / Scrum</div>
      </section>

      <footer id="contacts">
        <div className="shell contact">
          <div className="section-label light"><span>06</span> КОНТАКТЫ</div>
          <div>
            <p className="contact-kicker">Открыт к удалённой работе и релокации</p>
            <h2>Давайте создадим<br />что-то сильное.</h2>
            <div className="contact-links">
              <a href="mailto:whoyou1994j4920@gmail.com">whoyou1994j4920@gmail.com <Arrow /></a>
              <a href="tel:+79649144669">+7 964 914 46 69 <Arrow /></a>
              <a href="https://github.com/Anen135" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href="https://anen135.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio <Arrow /></a>
            </div>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Султан Батырханов</span><a href="#top">Наверх ↑</a></div>
      </footer>
    </main>
  );
}
