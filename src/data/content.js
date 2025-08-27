export const content = {
  themeToggle: 'Toggle theme', // i18n: theme.toggle
  hero: {
    name: 'Tomás R.', // i18n: hero.name
    role: 'Backend & Integrations Software Developer', // i18n: hero.role
    bullets: [
      'APIs and microservices', // i18n: hero.bullet_apis
      'Odoo/Laravel integrations', // i18n: hero.bullet_integrations
      'Automation, reporting & performance' // i18n: hero.bullet_reporting
    ],
    ctaProjects: 'See projects', // i18n: hero.cta_projects
    ctaContact: 'Get in touch' // i18n: hero.cta_contact
  },
  titles: {
    what: 'What I do', // i18n: titles.what
    stack: 'Main stack', // i18n: titles.stack
    projects: 'Case Studies', // i18n: titles.projects
    other: 'Other', // i18n: titles.other
    tech: 'Technology matrix', // i18n: titles.tech
    contact: 'Contact', // i18n: titles.contact
    table: {
      tech: 'Technology', // i18n: titles.table.tech
      use: 'Backend use', // i18n: titles.table.use
      level: 'Level', // i18n: titles.table.level
      highlight: 'Highlights' // i18n: titles.table.highlight
    },
    contactMessage: 'Message', // i18n: titles.contactMessage
    contactSend: 'Send', // i18n: titles.contactSend
    github: 'GitHub', // i18n: titles.github
    linkedin: 'LinkedIn' // i18n: titles.linkedin
  },
  projectFields: {
    problem: 'Problem', // i18n: fields.problem
    architecture: 'Architecture', // i18n: fields.architecture
    decisions: 'Decisions', // i18n: fields.decisions
    security: 'Security', // i18n: fields.security
    tests: 'Tests/CI', // i18n: fields.tests
    results: 'Results/Metrics', // i18n: fields.results
    role: 'Role', // i18n: fields.role
    stack: 'Stack' // i18n: fields.stack
  },
  whatIDo: [
    { title: 'API design', text: 'REST/GraphQL with OpenAPI specs and versioning.' }, // i18n: whatIDo.api
    { title: 'Odoo & Laravel', text: 'Models, wizards and PDF reports.' }, // i18n: whatIDo.integrations
    { title: 'Automation & reporting', text: 'Services, queues and caching for PDFs.' }, // i18n: whatIDo.pdf
    { title: 'CI/CD & testing', text: 'PyTest, PHPUnit and GitHub Actions.' } // i18n: whatIDo.ci
  ],
  stack: [
    'Python (Odoo)', // i18n: stack.python
    'PHP (Laravel)', // i18n: stack.php
    'Node.js', // i18n: stack.node
    'PostgreSQL/MySQL', // i18n: stack.sql
    'Docker', // i18n: stack.docker
    'GitHub Actions', // i18n: stack.gha
    'Testing (PyTest, PHPUnit)', // i18n: stack.testing
    'Clean Architecture', // i18n: stack.clean
    'RLS (Supabase)' // i18n: stack.rls
  ],
  projects: {
    caseStudies: [
      {
        name: 'LinkNest', // i18n: projects.linknest.name
        problem: 'Store and categorize links with sharing capabilities.', // i18n: projects.linknest.problem
        architecture: 'Supabase backend with RLS policies and edge functions.', // i18n: projects.linknest.architecture
        decisions: 'Normalized schema with tag references; serverless endpoints.', // i18n: projects.linknest.decisions
        security: 'Row Level Security with per-user policies.', // i18n: projects.linknest.security
        tests: 'Unit tests for edge functions; CI via GitHub Actions.', // i18n: projects.linknest.tests
        results: 'Latency [POR_RELLENAR]; size [POR_RELLENAR].', // i18n: projects.linknest.results
        role: 'Model, API and RLS design.', // i18n: projects.linknest.role
        stack: 'React, Tailwind, Supabase (DB/Auth/RLS)', // i18n: projects.linknest.stack
        repo: '[POR_RELLENAR]' // i18n: projects.linknest.repo
      },
      {
        name: 'Custom Reports & Integrations', // i18n: projects.reports.name
        problem: 'Aggregate orders and generate PDF invoices.', // i18n: projects.reports.problem
        architecture: 'Odoo server actions and external REST services.', // i18n: projects.reports.architecture
        decisions: 'QWeb templates and aggregation logic by client.', // i18n: projects.reports.decisions
        security: 'Authentication via API keys, minimal privilege.', // i18n: projects.reports.security
        tests: 'Integration tests with PHPUnit.', // i18n: projects.reports.tests
        results: 'N/A', // i18n: projects.reports.results
        role: 'Template design and server actions.', // i18n: projects.reports.role
        stack: 'Odoo, Laravel, REST APIs', // i18n: projects.reports.stack
        repo: '[POR_RELLENAR]' // i18n: projects.reports.repo
      }
    ],
    others: [
      {
        name: 'Password Generator', // i18n: projects.password.name
        problem: 'Generate secure passwords via web UI.', // i18n: projects.password.problem
        architecture: 'Angular front with Node API.', // i18n: projects.password.architecture
        decisions: 'TDD for generator functions.', // i18n: projects.password.decisions
        security: 'No passwords stored; HTTPS enforced.', // i18n: projects.password.security
        tests: 'Jest unit tests and GitHub Actions.', // i18n: projects.password.tests
        results: 'N/A', // i18n: projects.password.results
        role: 'TDD for core generator.', // i18n: projects.password.role
        stack: 'Angular, Node.js', // i18n: projects.password.stack
        repo: 'https://github.com/tomasrl18/angular-pass-gen' // i18n: projects.password.repo
      },
      {
        name: 'Katas Playground', // i18n: projects.katas.name
        problem: 'Practice algorithms with TDD.', // i18n: projects.katas.problem
        architecture: 'Python and PHP kata suites.', // i18n: projects.katas.architecture
        decisions: 'Red-Green-Refactor workflow.', // i18n: projects.katas.decisions
        security: 'N/A', // i18n: projects.katas.security
        tests: 'PyTest and PHPUnit pipelines.', // i18n: projects.katas.tests
        results: 'N/A', // i18n: projects.katas.results
        role: 'Practice TDD and refactoring.', // i18n: projects.katas.role
        stack: 'Python, PHP', // i18n: projects.katas.stack
        repo: '[POR_RELLENAR]' // i18n: projects.katas.repo
      }
    ]
  },
  techMatrix: [
    { tech: 'Python/Odoo', use: 'Modules, server actions, APIs', level: 'Advanced', highlight: 'QWeb PDFs, custom wizards' }, // i18n: matrix.python
    { tech: 'PHP/Laravel', use: 'APIs, jobs, queues', level: 'Advanced', highlight: 'Multi-tenant apps' }, // i18n: matrix.php
    { tech: 'Node.js', use: 'Edge functions, tooling', level: 'Intermediate', highlight: 'Supabase Edge Functions' }, // i18n: matrix.node
    { tech: 'PostgreSQL/MySQL', use: 'Schema design, queries', level: 'Advanced', highlight: 'Indexes, RLS policies' }, // i18n: matrix.sql
    { tech: 'Docker', use: 'Dev environments, deployment', level: 'Intermediate', highlight: 'Compose & multi-stage builds' }, // i18n: matrix.docker
    { tech: 'GitHub Actions', use: 'CI/CD pipelines', level: 'Intermediate', highlight: 'PyTest & PHPUnit pipelines' }, // i18n: matrix.gha
    { tech: 'Supabase RLS/Auth', use: 'Policy design, auth flows', level: 'Intermediate', highlight: 'LinkNest RLS isolation' }, // i18n: matrix.supabase
    { tech: 'Testing (PyTest/PHPUnit)', use: 'Unit & integration tests', level: 'Advanced', highlight: 'TDD in katas' }, // i18n: matrix.testing
    { tech: 'OpenAPI/Swagger', use: 'API documentation', level: 'Intermediate', highlight: 'Generated API specs' } // i18n: matrix.openapi
  ],
  contact: {
    email: 'tomaslopezraigal@gmail.com', // i18n: contact.email
    github: 'https://github.com/tomasrl18', // i18n: contact.github
    linkedin: 'https://www.linkedin.com/in/tomas-rl/', // i18n: contact.linkedin
    formAction: '#' // i18n: contact.formAction
  }
};
