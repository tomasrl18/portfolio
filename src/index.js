import { content } from './data/content.js';

function buildHero() {
  document.getElementById('hero-name').textContent = content.hero.name;
  document.getElementById('hero-role').textContent = content.hero.role;
  const bullets = document.getElementById('hero-bullets');
  content.hero.bullets.forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    bullets.appendChild(li);
  });
  document.getElementById('cta-projects').textContent = content.hero.ctaProjects;
  document.getElementById('cta-contact').textContent = content.hero.ctaContact;
}

function buildWhatIDo() {
  const wrapper = document.getElementById('what-i-do-cards');
  content.whatIDo.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    const h3 = document.createElement('h3');
    h3.textContent = card.title;
    const p = document.createElement('p');
    p.textContent = card.text;
    div.appendChild(h3);
    div.appendChild(p);
    wrapper.appendChild(div);
  });
}

function buildStack() {
  const list = document.getElementById('stack-list');
  content.stack.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

function buildProjects() {
  const cs = document.getElementById('case-studies');
  content.projects.caseStudies.forEach(pr => {
    cs.appendChild(buildProject(pr));
  });
  const others = document.getElementById('other-projects');
  content.projects.others.forEach(pr => {
    others.appendChild(buildProject(pr));
  });
}

function buildProject(pr) {
  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  h3.textContent = pr.name;
  article.appendChild(h3);
  const list = document.createElement('ul');
  const fields = ['problem', 'architecture', 'decisions', 'security', 'tests', 'results'];
  fields.forEach(f => {
    const li = document.createElement('li');
    li.textContent = `${f.charAt(0).toUpperCase() + f.slice(1)}: ${pr[f]}`;
    list.appendChild(li);
  });
  if (pr.repo && pr.repo !== '[POR_RELLENAR]') {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = pr.repo;
    a.textContent = 'Repo';
    a.target = '_blank';
    a.rel = 'noreferrer';
    li.appendChild(a);
    list.appendChild(li);
  }
  article.appendChild(list);
  return article;
}

function buildMatrix() {
  const body = document.querySelector('#tech-table tbody');
  content.techMatrix.forEach(row => {
    const tr = document.createElement('tr');
    ['tech', 'use', 'level'].forEach(k => {
      const td = document.createElement('td');
      td.textContent = row[k];
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}

function buildContact() {
  document.getElementById('contact-email').textContent = content.contact.email;
  document.getElementById('github-link').href = content.contact.github;
  document.getElementById('linkedin-link').href = content.contact.linkedin;
  const form = document.getElementById('contact-form');
  form.action = content.contact.formAction;
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(content.contact.formAction, { method: 'POST', body: new FormData(form) });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildHero();
  buildWhatIDo();
  buildStack();
  buildProjects();
  buildMatrix();
  buildContact();
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  Weglot.initialize({ api_key: 'wg_7328ddd745f36fcc7f51a6badbc041083' });
});
