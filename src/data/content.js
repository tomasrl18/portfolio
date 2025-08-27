export const content = {
  hero: {
    name: 'Tomás R.', // i18n: hero.name
    role: 'Backend & Integrations Software Developer', // i18n: hero.role
    bullets: [
      'APIs and microservices', // i18n: hero.bullet_apis
      'Odoo/Laravel integrations', // i18n: hero.bullet_integrations
      'Automated reporting & performance tuning' // i18n: hero.bullet_reporting
    ],
    ctaProjects: 'See projects', // i18n: hero.cta_projects
    ctaContact: 'Get in touch' // i18n: hero.cta_contact
  },
  whatIDo: [
    { title: 'API design', text: 'REST/GraphQL endpoints documented with OpenAPI.' }, // i18n: whatIDo.api
    { title: 'Odoo & Laravel', text: 'Custom modules and data migrations.' }, // i18n: whatIDo.integrations
    { title: 'PDF automation', text: 'QWeb and DOMPDF for invoices and reports.' }, // i18n: whatIDo.pdf
    { title: 'Testing & CI', text: 'PyTest, PHPUnit and GitHub Actions.' } // i18n: whatIDo.ci
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
        repo: '[POR_RELLENAR]' // i18n: projects.katas.repo
      }
    ]
  },
  techMatrix: [
    { tech: 'Python/Odoo', use: 'Modules, server actions, APIs', level: 'Advanced' }, // i18n: matrix.python
    { tech: 'PHP/Laravel', use: 'APIs, jobs, queues', level: 'Advanced' }, // i18n: matrix.php
    { tech: 'Node.js', use: 'Edge functions, tooling', level: 'Intermediate' }, // i18n: matrix.node
    { tech: 'PostgreSQL/MySQL', use: 'Schema design, queries', level: 'Advanced' }, // i18n: matrix.sql
    { tech: 'Docker', use: 'Dev environments, deployment', level: 'Intermediate' }, // i18n: matrix.docker
    { tech: 'GitHub Actions', use: 'CI/CD pipelines', level: 'Intermediate' }, // i18n: matrix.gha
    { tech: 'Supabase RLS/Auth', use: 'Policy design, auth flows', level: 'Intermediate' }, // i18n: matrix.supabase
    { tech: 'Testing (PyTest/PHPUnit)', use: 'Unit & integration tests', level: 'Advanced' }, // i18n: matrix.testing
    { tech: 'OpenAPI/Swagger', use: 'API documentation', level: 'Intermediate' } // i18n: matrix.openapi
  ],
  contact: {
    email: 'tomaslopezraigal@gmail.com', // i18n: contact.email
    github: 'https://github.com/tomasrl18', // i18n: contact.github
    linkedin: 'https://www.linkedin.com/in/tomas-rl/', // i18n: contact.linkedin
    formAction: '#' // i18n: contact.formAction
  }
};
