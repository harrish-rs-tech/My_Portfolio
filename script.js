/* =========================================
   HARRISH R S PORTFOLIO — SCRIPT.JS
   v2.0 — Updated October 2026
   =========================================

   ╔══════════════════════════════════════════╗
   ║  QUICK EDIT GUIDE                        ║
   ║  1. Edit DATA.skills / DATA.achievements ║
   ║     below for default content            ║
   ║  2. Unlock Dashboard (password below)    ║
   ║     then press Ctrl+Shift+A for admin UI ║
   ║  3. Place resume.pdf in project folder   ║
   ║     for public cross-device download     ║
   ╚══════════════════════════════════════════╝
*/

'use strict';

/* ══════════════════════════════════════════════════
   ① CONFIGURATION  — Edit these values
══════════════════════════════════════════════════ */

// ──────────────────────────────────────────────────
// DASHBOARD PASSWORD — Change before publishing!
// ──────────────────────────────────────────────────
const DASHBOARD_CONFIG = {
  password: 'Harrizzz_.697',          // ← CHANGE THIS before going live
  sessionKey: 'hrsPortfolioDash',
  sessionDuration: 8 * 60 * 60 * 1000  // 8 hours
};

// ──────────────────────────────────────────────────
// EMAIL DELIVERY CONFIGURATION
// Direct delivery to 697harrish@gmail.com is ACTIVE by default via FormSubmit!
//
// OPTIONAL: If you prefer EmailJS (free tier: 200 emails/month):
//   1. Sign up at https://www.emailjs.com
//   2. Create an Email Service (e.g. Gmail) → copy the Service ID
//   3. Create an Email Template with variables:
//        {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//      Set "To Email" to 697harrish@gmail.com in the template settings.
//   4. Go to Account → API Keys → copy your Public Key
//   5. Paste the three values below or in Dashboard → Backup & Email.
// ──────────────────────────────────────────────────
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',      // ← Paste your Public Key (optional)
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',      // ← Paste your Service ID (optional)
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',    // ← Paste your Template ID (optional)
  configured: false                          // ← Set to true once filled (or set via Dashboard)
};

const FORMSPREE_CONFIG = {
  endpoint: '',       // ← Paste your Formspree endpoint (e.g. 'https://formspree.io/f/xyz')
  configured: false
};

// Static resume path (for cross-device / hosted downloads)
const RESUME_PATH = 'resume.pdf';

/* ══════════════════════════════════════════════════
   ② DEFAULT DATA  — Edit to seed initial content
      (Changes made via UI are saved to localStorage
       and take priority over these defaults.)
══════════════════════════════════════════════════ */
const DEFAULT_DATA = {

  // Personal profile details
  profile: {
    name: 'Harrish R S',
    title: 'B.Tech Artificial Intelligence & Data Science Student',
    college: 'V S B Engineering College Karur',
    location: 'Karur',
    gradYear: '2029',
    badgeText: 'Open to internships',
    badgeVisible: true,
    bio: 'Passionate about building intelligent systems and data-driven solutions. Studying at V S B Engineering College Karur, with a focus on machine learning, Python programming, Java, and data analytics. Actively seeking internships to apply academic knowledge to impactful real-world problems.',
    interests: 'Machine Learning, Python Programming, Java Programming, and Data Analytics',
    languages: 'Tamil (Native) · English (Proficient)',
    email: '697harrish@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harrish-r-s-256a1237a/',
    github: 'https://github.com/harrish-rs-tech',
    talentely: 'https://lms.talentely.com/in/d42d7c4c-1eb4-421d-bc47-047663ab91ff'
  },

  // Education & Experience Timeline
  timeline: {
    btech: {
      period: '2025 – Present',
      degree: 'B.Tech – Artificial Intelligence and Data Science',
      college: 'V S B Engineering College Karur',
      gradYear: '2029',
      desc: 'Pursuing undergraduate degree with focus on machine learning, Python and Java programming, data analytics, and AI fundamentals.'
    },
    pega: {
      title: 'Pega Internship',
      organization: 'Pega Systems',
      start: '4th August 2026',
      end: '3rd September 2026',
      period: '4th August 2026 – 3rd September 2026',
      location: '',
      responsibilities: '',
      certificate: 'https://drive.google.com/file/d/1a7pVR481GZZEe2Ea68xoC00OlTNBHC3z/view?usp=drive_link'
    },
    school: {
      school: 'Little Flower Matriculation Higher Secondary School, Karur',
      year: '2025',
      title: 'Higher Secondary Education (12th Standard)',
      specialization: '',
      marks: '',
      achievements: ''
    }
  },

  // Projects — starter placeholder card so project section renders immediately
  projects: [],

  // Skills — categorized into Programming, AI/ML, Data Science, Tools, and Soft Skills
  skills: [
    {
      category: 'Programming',
      icon: '💻',
      items: [
        { id: 'sk_py',   name: 'Python' },
        { id: 'sk_java', name: 'Java' }
      ]
    },
    {
      category: 'AI/ML',
      icon: '🤖',
      items: [
        { id: 'sk_ml',    name: 'Machine Learning' },
        { id: 'sk_ai',    name: 'Artificial Intelligence' },
        { id: 'sk_genai', name: 'Generative AI' }
      ]
    },
    {
      category: 'Data Science',
      icon: '📊',
      items: [
        { id: 'sk_da',      name: 'Data Analytics' },
        { id: 'sk_numpy',   name: 'NumPy' },
        { id: 'sk_pandas',  name: 'Pandas' },
        { id: 'sk_dataviz', name: 'Data Visualization' }
      ]
    },
    {
      category: 'Tools',
      icon: '🛠️',
      items: [
        { id: 'sk_git',     name: 'Git' },
        { id: 'sk_github',  name: 'GitHub' },
        { id: 'sk_vscode',  name: 'VS Code' },
        { id: 'sk_mysql',   name: 'MySQL' },
        { id: 'sk_powerbi', name: 'Power BI' }
      ]
    },
    {
      category: 'Soft Skills',
      icon: '🌟',
      items: [
        { id: 'sk_comm',       name: 'Communication' },
        { id: 'sk_teamwork',   name: 'Teamwork' },
        { id: 'sk_probsolve',  name: 'Problem Solving' },
        { id: 'sk_adapt',      name: 'Adaptability' }
      ]
    }
  ],

  // Achievements — certifications
  achievements: [
    {
      id: 'ach_infy_2026',
      title: 'Python Foundation Certification',
      issuer: 'infyspringboard',
      date: '2026-08',
      description: 'This certification has motivated me to strengthen my Python programming skills and continue exploring the world of technology.',
      link: 'https://drive.google.com/file/d/1w88Zvyd5d6icBla605Mv4nRBMFUSfYaT/view?usp=drive_link',
      emoji: '🏆',
      imageData: null,
      imageType: null
    },
    {
      id: 'ach_iit_2024',
      title: 'Data Science and AI – 8-Week Certification Course',
      issuer: 'Centre for Outreach and Digital Education (CODE), IIT Madras · School Connect',
      date: '2024-10',
      description: 'Completed an 8-week certification course on Data Science and Artificial Intelligence, conducted by the Centre for Outreach and Digital Education (CODE) at IIT Madras in association with School Connect.',
      link: 'https://drive.google.com/file/d/1OjghRCZq1ZAnBiG-h1UH6t3mCinf3ODc/view?usp=drive_link',
      emoji: '🎓',
      imageData: null,
      imageType: null
    }
  ]
};

/* ══════════════════════════════════════════════════
   APP STATE
══════════════════════════════════════════════════ */
const STATE = {
  profile: null,
  timeline: null,
  tasks: [],
  projects: [],
  achievements: [],
  skills: [],            // array of group objects (same structure as DEFAULT_DATA.skills)
  taskFilter: 'all',
  editingTaskId: null,
  editingProjectId: null,
  editingAchievementId: null,
  editingSkillId: null,
  editingSkillGroupCat: null,
  dashboardUnlocked: false,
  activeDashTab: 'tasks',
  resumeData: null,
  resumeFileName: null,
  achImgBuffer: null,    // temp buffer for image during achievement modal
  emailConfig: { ...EMAILJS_CONFIG, formspree: { ...FORMSPREE_CONFIG } }
};

/* ══════════════════════════════════════════════════
   STORAGE HELPERS
══════════════════════════════════════════════════ */
const LS = {
  get: (key, fallback = null) => {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.warn('localStorage write failed:', e.message); }
  },
  remove: (key) => { try { localStorage.removeItem(key); } catch {} }
};

/* ══════════════════════════════════════════════════
   TOAST NOTIFICATIONS
══════════════════════════════════════════════════ */
function showToast(message, type = 'success', duration = 3500) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || '✅'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ══════════════════════════════════════════════════
   MODAL HELPERS
══════════════════════════════════════════════════ */
function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.add('open');
  const first = m.querySelector('input:not([type=file]):not([type=hidden]), textarea, select');
  if (first) setTimeout(() => first.focus(), 60);
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}

// ESC key & overlay click close
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('open');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    const ao = document.getElementById('auth-overlay');
    if (ao && !ao.classList.contains('hidden')) cancelAuth();
  }
  if (e.key === 'Enter' && document.activeElement?.id === 'auth-password') handleAuth();
});

/* ══════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════ */
let mobileNavOpen = false;

function toggleMobileNav() {
  mobileNavOpen = !mobileNavOpen;
  document.getElementById('mobile-nav').classList.toggle('open', mobileNavOpen);
  document.getElementById('hamburger-btn').setAttribute('aria-expanded', String(mobileNavOpen));
}
function closeMobileNav() {
  mobileNavOpen = false;
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('hamburger-btn').setAttribute('aria-expanded', 'false');
}

function initNav() {
  const nav = document.getElementById('main-nav');
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links .nav-link');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 110) current = s.id; });
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) link.classList.toggle('active', href === `#${current}`);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ══════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════════════ */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (!STATE.projects || STATE.projects.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">🚀</div>
        <h4>No projects added yet</h4>
        <p>Showcase your machine learning and software engineering projects here.</p>
        <button class="btn btn-primary btn-sm" onclick="promptAddProject()" style="margin-top:16px">+ Add Your Project</button>
      </div>`;
    safeSetText('stat-projects', '0');
    return;
  }

  grid.innerHTML = STATE.projects.map((p, i) => `
    <article class="project-card" id="project-card-${p.id}">
      <div class="project-img ${p.image ? '' : 'placeholder-img'}" aria-label="${escHtml(p.title)} preview" role="img">
        ${p.image
          ? `<img src="${escHtml(p.image)}" alt="${escHtml(p.title)}" loading="lazy" />`
          : `<span style="font-size:3.5rem">${escHtml(p.emoji || '🚀')}</span>`
        }
      </div>
      <div class="project-body">
        <h3>${escHtml(p.title)}</h3>
        <p>${escHtml(p.description)}</p>
        <div class="project-tags">
          ${(p.tech || []).map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.demo ? `<a href="${escHtml(p.demo)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">🌐 Live Demo</a>` : ''}
          ${p.code ? `<a href="${escHtml(p.code)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">🐙 Source Code</a>` : ''}
          <div style="margin-left:auto;display:flex;gap:4px">
            <button class="btn-reorder admin-only" onclick="reorderProject('${p.id}', 'up')" title="Move Up" ${i === 0 ? 'disabled' : ''}>⬆️</button>
            <button class="btn-reorder admin-only" onclick="reorderProject('${p.id}', 'down')" title="Move Down" ${i === STATE.projects.length - 1 ? 'disabled' : ''}>⬇️</button>
            <button class="btn btn-ghost btn-sm admin-only" onclick="editProject('${p.id}')" aria-label="Edit project" title="Edit">✏️</button>
            <button class="btn btn-ghost btn-sm admin-only" onclick="deleteProject('${p.id}')" aria-label="Delete project" title="Delete" style="color:#f87171">🗑️</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  safeSetText('stat-projects', STATE.projects.length);
  applyAdminMode();
}

function promptAddProject() {
  if (STATE.dashboardUnlocked) {
    openAddProject();
  } else {
    showDashboardAuth();
  }
}

function promptAddSkill() {
  if (STATE.dashboardUnlocked) {
    openAddSkill();
  } else {
    showDashboardAuth();
  }
}

function promptAddAchievement() {
  if (STATE.dashboardUnlocked) {
    openAddAchievement();
  } else {
    showDashboardAuth();
  }
}

function openAddProject() {
  STATE.editingProjectId = null;
  document.getElementById('proj-modal-title').textContent = 'Add Project';
  ['proj-title-input','proj-desc-input','proj-tech-input','proj-demo-input','proj-code-input','proj-emoji-input','proj-image-input']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const fileInput = document.getElementById('proj-img-file-input');
  if (fileInput) fileInput.value = '';
  openModal('project-modal');
}

function editProject(id) {
  const p = STATE.projects.find(x => x.id === id);
  if (!p) return;
  STATE.editingProjectId = id;
  document.getElementById('proj-modal-title').textContent = 'Edit Project';
  document.getElementById('proj-title-input').value = p.title || '';
  document.getElementById('proj-desc-input').value = p.description || '';
  document.getElementById('proj-tech-input').value = (p.tech || []).join(', ');
  document.getElementById('proj-demo-input').value = p.demo || '';
  document.getElementById('proj-code-input').value = p.code || '';
  document.getElementById('proj-emoji-input').value = p.emoji || '';
  document.getElementById('proj-image-input').value = p.image || '';
  const fileInput = document.getElementById('proj-img-file-input');
  if (fileInput) fileInput.value = '';
  openModal('project-modal');
}

function reorderProject(id, direction) {
  const idx = STATE.projects.findIndex(p => p.id === id);
  if (idx === -1) return;
  const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
  if (targetIdx < 0 || targetIdx >= STATE.projects.length) return;
  const item = STATE.projects.splice(idx, 1)[0];
  STATE.projects.splice(targetIdx, 0, item);
  saveProjectsToStorage();
  renderProjects();
  if (STATE.activeDashTab === 'content') renderDashContentLists();
  showToast('Project order updated!');
}

function saveProject() {
  const title = (document.getElementById('proj-title-input').value || '').trim();
  const desc  = (document.getElementById('proj-desc-input').value || '').trim();
  if (!title || !desc) { showToast('Title and description are required.', 'error'); return; }

  const imgFileInput = document.getElementById('proj-img-file-input');
  const file = imgFileInput && imgFileInput.files[0];

  const doSave = (imgData) => {
    const existing = STATE.editingProjectId ? STATE.projects.find(x => x.id === STATE.editingProjectId) : null;
    const project = {
      id: STATE.editingProjectId || `proj_${Date.now()}`,
      title,
      description: desc,
      tech: document.getElementById('proj-tech-input').value.split(',').map(t => t.trim()).filter(Boolean),
      demo: (document.getElementById('proj-demo-input').value || '').trim(),
      code: (document.getElementById('proj-code-input').value || '').trim(),
      emoji: (document.getElementById('proj-emoji-input').value || '').trim() || '🚀',
      image: imgData || (document.getElementById('proj-image-input').value || '').trim() || (existing ? existing.image : '') || ''
    };

    if (STATE.editingProjectId) {
      const idx = STATE.projects.findIndex(x => x.id === STATE.editingProjectId);
      if (idx > -1) STATE.projects[idx] = project;
      showToast('Project updated!');
    } else {
      STATE.projects.unshift(project);
      showToast('Project added!');
    }
    saveProjectsToStorage();
    renderProjects();
    if (STATE.activeDashTab === 'content') renderDashContentLists();
    closeModal('project-modal');
  };

  if (file) {
    if (file.size > 3 * 1024 * 1024) { showToast('Image must be under 3MB.', 'error'); return; }
    const reader = new FileReader();
    reader.onload = (ev) => doSave(ev.target.result);
    reader.readAsDataURL(file);
  } else {
    doSave(null);
  }
}

function deleteProject(id) {
  if (!confirm('Delete this project? This cannot be undone.')) return;
  STATE.projects = STATE.projects.filter(p => p.id !== id);
  saveProjectsToStorage();
  renderProjects();
  if (STATE.activeDashTab === 'content') renderDashContentLists();
  showToast('Project deleted.', 'info');
}

function saveProjectsToStorage() { LS.set('hrs_projects', STATE.projects); }
function loadProjectsFromStorage() {
  const saved = LS.get('hrs_projects');
  STATE.projects = (saved && Array.isArray(saved)) ? saved : [...DEFAULT_DATA.projects];
}

/* ══════════════════════════════════════════════════
   SKILLS  (fully editable via admin UI)
══════════════════════════════════════════════════ */
const SKILL_GROUP_ICONS = {
  'Programming': '💻',
  'AI/ML': '🤖',
  'Data Science': '📊',
  'Tools': '🛠️',
  'Soft Skills': '🌟',
  // Backward compatibility mappings
  'Programming Languages': '💻',
  'Technical Skills': '🔧',
  'Data Analytics': '📊',
  'Tools & Platforms': '🛠️'
};

function renderSkills() {
  const wrapper = document.getElementById('skills-wrapper');
  if (!wrapper) return;

  const groups = STATE.skills;
  if (!groups || groups.length === 0) {
    wrapper.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔧</div>
        <h4>No skills added</h4>
        <p>Unlock the dashboard and click <strong>+ Add Skill</strong> to add your skills.</p>
        <button class="btn btn-primary btn-sm" onclick="promptAddSkill()" style="margin-top:16px">+ Add Skill</button>
      </div>`;
    return;
  }

  wrapper.innerHTML = groups.map(group => `
    <div class="skill-group">
      <div class="skill-group-header">
        <div class="skill-group-icon" aria-hidden="true">${SKILL_GROUP_ICONS[group.category] || group.icon || '⚙️'}</div>
        <h3>${escHtml(group.category)}</h3>
      </div>
      <div class="skills-list" role="list">
        ${(group.items && group.items.length > 0)
          ? group.items.map(s => `
              <div class="skill-item" role="listitem">
                <span class="skill-dot" aria-hidden="true"></span>
                ${escHtml(s.name || s)}
                <button class="btn btn-ghost admin-only" onclick="deleteSkill('${escHtml(group.category)}','${escHtml(s.id || s.name)}')"
                  aria-label="Remove ${escHtml(s.name || s)}" style="padding:2px 6px;font-size:0.7rem;margin-left:4px;color:#f87171">✕</button>
              </div>
            `).join('')
          : `<span style="font-size:0.8rem;color:var(--text-muted);font-style:italic">Ready for skills — add via dashboard</span>`
        }
      </div>
    </div>
  `).join('');
  applyAdminMode();
}

function openAddSkill() {
  STATE.editingSkillId = null;
  const inp = document.getElementById('skill-name-input');
  if (inp) inp.value = '';
  document.getElementById('skill-modal-title').textContent = 'Add Skill';
  openModal('skill-modal');
}

function saveSkill() {
  const name = (document.getElementById('skill-name-input').value || '').trim();
  const cat  = (document.getElementById('skill-cat-input').value || '').trim();
  if (!name) { showToast('Skill name is required.', 'error'); return; }

  // Find or create the group
  let group = STATE.skills.find(g => g.category === cat);
  if (!group) {
    group = { category: cat, icon: SKILL_GROUP_ICONS[cat] || '⚙️', items: [] };
    STATE.skills.push(group);
  }

  // Avoid duplicates
  if (group.items.some(i => (i.name || i).toLowerCase() === name.toLowerCase())) {
    showToast('That skill already exists in this category.', 'error');
    return;
  }

  group.items.push({ id: `sk_${Date.now()}`, name });
  saveSkillsToStorage();
  renderSkills();
  closeModal('skill-modal');
  showToast(`"${name}" added to ${cat}!`);
}

function deleteSkill(category, idOrName) {
  if (!confirm(`Remove "${idOrName}" from ${category}?`)) return;
  const group = STATE.skills.find(g => g.category === category);
  if (!group) return;
  group.items = group.items.filter(i => (i.id || i.name || i) !== idOrName && (i.name || i) !== idOrName);
  saveSkillsToStorage();
  renderSkills();
  showToast('Skill removed.', 'info');
}

function saveSkillsToStorage() { LS.set('hrs_skills', STATE.skills); }
function loadSkillsFromStorage() {
  const saved = LS.get('hrs_skills');
  if (saved && Array.isArray(saved) && saved.length > 0) {
    STATE.skills = saved.map(g => {
      let cat = g.category;
      if (cat === 'Programming Languages') cat = 'Programming';
      if (cat === 'Technical Skills') cat = 'AI/ML';
      if (cat === 'Data Analytics') cat = 'Data Science';
      if (cat === 'Tools & Platforms') cat = 'Tools';
      return { ...g, category: cat, icon: SKILL_GROUP_ICONS[cat] || g.icon || '⚙️' };
    });
  } else {
    STATE.skills = DEFAULT_DATA.skills.map(g => ({
      ...g,
      items: g.items.map(i => ({ ...i }))
    }));
  }

  // Ensure all 5 core categories exist
  const coreCategories = ['Programming', 'AI/ML', 'Data Science', 'Tools', 'Soft Skills'];
  coreCategories.forEach(cat => {
    if (!STATE.skills.some(g => g.category === cat)) {
      STATE.skills.push({ category: cat, icon: SKILL_GROUP_ICONS[cat] || '⚙️', items: [] });
    }
  });
}

/* ══════════════════════════════════════════════════
   ACHIEVEMENTS / CERTIFICATIONS
   — sorted latest first by date
   — support certificate image upload
══════════════════════════════════════════════════ */
function formatAchDate(dateStr) {
  if (!dateStr) return '';
  try {
    const [y, m] = dateStr.split('-');
    const d = new Date(parseInt(y), parseInt(m) - 1, 1);
    return d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  } catch { return dateStr; }
}

function sortAchievements(arr) {
  return [...arr].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.localeCompare(a.date);
  });
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;

  if (!STATE.achievements || STATE.achievements.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-state-icon">🏆</div>
        <h4>No certifications added yet</h4>
        <p>Unlock the dashboard and click <strong>+ Add Certificate</strong> to add yours.</p>
      </div>`;
    safeSetText('stat-certs', '0');
    return;
  }

  const sorted = sortAchievements(STATE.achievements);

  grid.innerHTML = sorted.map(a => `
    <div class="achievement-card" id="ach-card-${a.id}">
      <div class="achievement-icon" aria-hidden="true">${escHtml(a.emoji || '🏆')}</div>
      <div class="achievement-body">
        <h4>${escHtml(a.title)}</h4>
        <div class="issuer">${escHtml(a.issuer || '')}</div>
        <div class="date">${formatAchDate(a.date)}</div>
        <p>${escHtml(a.description || '')}</p>
        ${a.imageData ? `
          <div style="margin:10px 0">
            <img src="${a.imageData}" alt="Certificate image"
              style="max-width:100%;max-height:120px;border-radius:6px;border:1px solid var(--border);cursor:pointer;object-fit:cover"
              onclick="previewCertImage('${a.id}')"
              title="Click to preview full certificate" />
          </div>` : ''}
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
          ${a.link ? `<a href="${escHtml(a.link)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">🔗 View Credential</a>` : ''}
          ${a.imageData ? `<button class="btn btn-ghost btn-sm" onclick="previewCertImage('${a.id}')">🔍 Preview</button>` : ''}
          <button class="btn btn-ghost btn-sm admin-only" onclick="editAchievement('${a.id}')" aria-label="Edit">✏️</button>
          <button class="btn btn-ghost btn-sm admin-only" onclick="deleteAchievement('${a.id}')" aria-label="Delete" style="color:#f87171">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');

  safeSetText('stat-certs', STATE.achievements.length);
  applyAdminMode();
}

function previewCertImage(id) {
  const a = STATE.achievements.find(x => x.id === id);
  if (!a || !a.imageData) { showToast('No image available for this certificate.', 'info'); return; }
  document.getElementById('cert-preview-img').src = a.imageData;
  document.getElementById('cert-preview-title').textContent = a.title || 'Certificate Preview';
  openModal('cert-preview-modal');
}

function openAddAchievement() {
  STATE.editingAchievementId = null;
  STATE.achImgBuffer = null;
  document.getElementById('ach-modal-title').textContent = 'Add Certificate / Achievement';
  ['ach-title-input','ach-issuer-input','ach-date-input','ach-desc-input','ach-link-input','ach-emoji-input']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const imgInput = document.getElementById('ach-img-input');
  if (imgInput) imgInput.value = '';
  openModal('achievement-modal');
}

function editAchievement(id) {
  const a = STATE.achievements.find(x => x.id === id);
  if (!a) return;
  STATE.editingAchievementId = id;
  STATE.achImgBuffer = a.imageData || null;
  document.getElementById('ach-modal-title').textContent = 'Edit Certificate';
  document.getElementById('ach-title-input').value = a.title || '';
  document.getElementById('ach-issuer-input').value = a.issuer || '';
  document.getElementById('ach-date-input').value = a.date || '';
  document.getElementById('ach-desc-input').value = a.description || '';
  document.getElementById('ach-link-input').value = a.link || '';
  document.getElementById('ach-emoji-input').value = a.emoji || '';
  const imgInput = document.getElementById('ach-img-input');
  if (imgInput) imgInput.value = '';
  openModal('achievement-modal');
}

function saveAchievement() {
  const title = (document.getElementById('ach-title-input').value || '').trim();
  if (!title) { showToast('Title is required.', 'error'); return; }

  const imgInput = document.getElementById('ach-img-input');
  const file = imgInput && imgInput.files[0];

  const doSave = (imgData, imgType) => {
    const achievement = {
      id: STATE.editingAchievementId || `ach_${Date.now()}`,
      title,
      issuer:      (document.getElementById('ach-issuer-input').value || '').trim(),
      date:        (document.getElementById('ach-date-input').value || '').trim(),
      description: (document.getElementById('ach-desc-input').value || '').trim(),
      link:        (document.getElementById('ach-link-input').value || '').trim(),
      emoji:       (document.getElementById('ach-emoji-input').value || '').trim() || '🏆',
      imageData:   imgData || null,
      imageType:   imgType || null
    };

    if (STATE.editingAchievementId) {
      const idx = STATE.achievements.findIndex(x => x.id === STATE.editingAchievementId);
      if (idx > -1) STATE.achievements[idx] = achievement;
      showToast('Certificate updated!');
    } else {
      // Insert at front (latest first after sort)
      STATE.achievements.unshift(achievement);
      showToast('Certificate added!');
    }
    saveAchievementsToStorage();
    renderAchievements();
    closeModal('achievement-modal');
  };

  if (file) {
    const maxSize = 3 * 1024 * 1024;
    if (file.size > maxSize) { showToast('Image must be under 3MB.', 'error'); return; }
    const reader = new FileReader();
    reader.onload = (ev) => doSave(ev.target.result, file.type);
    reader.readAsDataURL(file);
  } else {
    // Keep existing image if editing
    doSave(STATE.achImgBuffer, null);
  }
}

function deleteAchievement(id) {
  if (!confirm('Delete this certificate / achievement? This cannot be undone.')) return;
  STATE.achievements = STATE.achievements.filter(a => a.id !== id);
  saveAchievementsToStorage();
  renderAchievements();
  showToast('Certificate deleted.', 'info');
}

function saveAchievementsToStorage() {
  // Store achievements without heavy imageData first
  try {
    LS.set('hrs_achievements', STATE.achievements);
  } catch (e) {
    // localStorage full — try without images
    const slim = STATE.achievements.map(a => ({ ...a, imageData: null }));
    LS.set('hrs_achievements', slim);
    showToast('Certificate saved (image too large for browser storage — use a hosted URL instead).', 'info');
  }
}

function loadAchievementsFromStorage() {
  const saved = LS.get('hrs_achievements');
  if (saved && Array.isArray(saved) && saved.length > 0) {
    STATE.achievements = saved;
  } else {
    STATE.achievements = DEFAULT_DATA.achievements.map(a => ({ ...a }));
  }
}

/* ══════════════════════════════════════════════════
   RESUME UPLOAD
══════════════════════════════════════════════════ */
function handleDragOver(e) {
  e.preventDefault();
  document.getElementById('resume-drop-zone').classList.add('drag-over');
}
function handleDragLeave() {
  document.getElementById('resume-drop-zone').classList.remove('drag-over');
}
function handleResumeDrop(e) {
  e.preventDefault();
  document.getElementById('resume-drop-zone').classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) processResumeFile(file);
}
function handleResumeUpload(e) {
  const file = e.target.files[0];
  if (file) processResumeFile(file);
}

function processResumeFile(file) {
  if (file.type !== 'application/pdf') {
    showToast('Please upload a PDF file only.', 'error'); return;
  }
  if (file.size > 5 * 1024 * 1024) {
    showToast('File size must be under 5 MB.', 'error'); return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    const base64 = ev.target.result;
    STATE.resumeData = base64;
    STATE.resumeFileName = file.name;
    try {
      LS.set('hrs_resume_data', base64);
      LS.set('hrs_resume_name', file.name);
    } catch {
      showToast('Resume saved in memory only — too large for browser storage. Place resume.pdf in project folder for permanent access.', 'info');
    }
    updateResumeUI();
    showToast('Resume uploaded and saved in browser!');
  };
  reader.readAsDataURL(file);
}

function removeResume() {
  if (!confirm('Remove the uploaded resume?')) return;
  STATE.resumeData = null;
  STATE.resumeFileName = null;
  LS.remove('hrs_resume_data');
  LS.remove('hrs_resume_name');
  const input = document.getElementById('resume-file-input');
  if (input) input.value = '';
  updateResumeUI();
  showToast('Resume removed.', 'info');
}

function updateResumeUI() {
  const fileInfo = document.getElementById('resume-file-info');
  const fileName = document.getElementById('resume-file-name');
  const note = document.getElementById('resume-note');
  if (STATE.resumeData) {
    if (fileInfo) fileInfo.classList.add('visible');
    if (fileName) fileName.textContent = STATE.resumeFileName || 'resume.pdf';
    if (note) note.style.display = 'none';
  } else {
    if (fileInfo) fileInfo.classList.remove('visible');
    if (note) note.style.display = 'block';
  }
}

function downloadResume() {
  if (STATE.resumeData) {
    const link = document.createElement('a');
    link.href = STATE.resumeData;
    link.download = STATE.resumeFileName || 'Harrish_R_S_Resume.pdf';
    link.click();
    showToast('Downloading resume…', 'info');
    return;
  }
  // Fallback: static file
  const link = document.createElement('a');
  link.href = RESUME_PATH;
  link.download = 'Harrish_R_S_Resume.pdf';
  link.click();
  showToast('Attempting to download resume.pdf from project folder…', 'info');
}

function loadResumeFromStorage() {
  const data = LS.get('hrs_resume_data');
  const name = LS.get('hrs_resume_name');
  if (data) {
    STATE.resumeData = data;
    STATE.resumeFileName = name;
    updateResumeUI();
  }
}

/* ══════════════════════════════════════════════════
   DASHBOARD AUTHENTICATION
══════════════════════════════════════════════════ */
function showDashboardAuth() {
  if (STATE.dashboardUnlocked) { showDashboard(); return; }

  // Check saved session
  const session = LS.get(DASHBOARD_CONFIG.sessionKey);
  if (session && Date.now() - session.ts < DASHBOARD_CONFIG.sessionDuration) {
    STATE.dashboardUnlocked = true;
    showDashboard();
    return;
  }

  const overlay = document.getElementById('auth-overlay');
  overlay.classList.remove('hidden');
  document.getElementById('auth-error').textContent = '';
  document.getElementById('auth-password').value = '';
  setTimeout(() => document.getElementById('auth-password').focus(), 100);
}

function handleAuth() {
  const input = (document.getElementById('auth-password')?.value || '').trim();
  const errEl = document.getElementById('auth-error');
  const storedPass = LS.get('hrs_dash_password');
  const isValid = input === DASHBOARD_CONFIG.password || (storedPass && (input === storedPass || input === String(storedPass).trim()));
  if (isValid) {
    if (storedPass === 'harrish2024') {
      LS.set('hrs_dash_password', DASHBOARD_CONFIG.password);
    }
    errEl.textContent = '';
    LS.set(DASHBOARD_CONFIG.sessionKey, { ts: Date.now() });
    STATE.dashboardUnlocked = true;
    document.getElementById('auth-overlay').classList.add('hidden');
    showDashboard();
    showToast('Dashboard unlocked!');
  } else {
    errEl.textContent = '❌ Incorrect password. Please try again.';
    document.getElementById('auth-password').value = '';
    document.getElementById('auth-password').focus();
  }
}

function cancelAuth() {
  document.getElementById('auth-overlay').classList.add('hidden');
  document.getElementById('auth-password').value = '';
  document.getElementById('auth-error').textContent = '';
}

function showDashboard() {
  const dash = document.getElementById('dashboard');
  dash.classList.add('visible');
  const fab = document.getElementById('fab-add-task');
  if (fab) fab.classList.add('visible');
  body_set_admin(true);
  renderTasks();
  dash.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function lockDashboard() {
  STATE.dashboardUnlocked = false;
  LS.remove(DASHBOARD_CONFIG.sessionKey);
  document.getElementById('dashboard').classList.remove('visible');
  const fab = document.getElementById('fab-add-task');
  if (fab) fab.classList.remove('visible');
  body_set_admin(false);
  showToast('Dashboard locked.', 'info');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function body_set_admin(on) {
  document.body.classList.toggle('admin-mode', on);
  applyAdminMode();
}

function applyAdminMode() {
  const isAdmin = document.body.classList.contains('admin-mode');
  document.querySelectorAll('.admin-only').forEach(el => {
    el.style.display = isAdmin ? 'inline-flex' : 'none';
  });
}

/* ══════════════════════════════════════════════════
   TASKS
══════════════════════════════════════════════════ */
function loadTasksFromStorage() { STATE.tasks = LS.get('hrs_tasks', []); }
function saveTasksToStorage() { LS.set('hrs_tasks', STATE.tasks); }

function saveTask() {
  const title = (document.getElementById('task-title-input').value || '').trim();
  if (!title) { showToast('Task title is required.', 'error'); return; }
  const task = {
    id: STATE.editingTaskId || `task_${Date.now()}`,
    title,
    description: (document.getElementById('task-desc-input').value || '').trim(),
    category: document.getElementById('task-cat-input').value,
    due: document.getElementById('task-due-input').value,
    completed: false,
    createdAt: STATE.editingTaskId
      ? (STATE.tasks.find(t => t.id === STATE.editingTaskId)?.createdAt || Date.now())
      : Date.now()
  };
  if (STATE.editingTaskId) {
    const idx = STATE.tasks.findIndex(t => t.id === STATE.editingTaskId);
    if (idx > -1) { task.completed = STATE.tasks[idx].completed; STATE.tasks[idx] = task; }
    showToast('Task updated!');
  } else {
    STATE.tasks.unshift(task);
    showToast('Task added!');
  }
  saveTasksToStorage(); renderTasks(); closeModal('task-modal');
}

function editTask(id) {
  const task = STATE.tasks.find(t => t.id === id);
  if (!task) return;
  STATE.editingTaskId = id;
  document.getElementById('modal-title').textContent = 'Edit Task';
  document.getElementById('task-title-input').value = task.title;
  document.getElementById('task-desc-input').value = task.description || '';
  document.getElementById('task-cat-input').value = task.category || 'Learning';
  document.getElementById('task-due-input').value = task.due || '';
  openModal('task-modal');
}

function toggleTask(id) {
  const task = STATE.tasks.find(t => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasksToStorage(); renderTasks();
}

function deleteTask(id) {
  STATE.tasks = STATE.tasks.filter(t => t.id !== id);
  saveTasksToStorage(); renderTasks();
  showToast('Task deleted.', 'info');
}

function setFilter(filter, btn) {
  STATE.taskFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTasks();
}

function getFilteredTasks() {
  const f = STATE.taskFilter;
  if (f === 'all') return STATE.tasks;
  if (f === 'active') return STATE.tasks.filter(t => !t.completed);
  if (f === 'completed') return STATE.tasks.filter(t => t.completed);
  return STATE.tasks.filter(t => t.category === f);
}

function updateDashStats() {
  const total = STATE.tasks.length;
  const done  = STATE.tasks.filter(t => t.completed).length;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
  safeSetText('dash-total', total);
  safeSetText('dash-done', done);
  safeSetText('dash-active', total - done);
  safeSetText('dash-pct', `${pct}%`);
  const bar = document.getElementById('dash-progress-bar');
  if (bar) bar.style.width = `${pct}%`;
}

function renderTasks() {
  const list = document.getElementById('task-list');
  if (!list) return;
  updateDashStats();
  const tasks = getFilteredTasks();
  if (tasks.length === 0) {
    const msgs = {
      all: ['Nothing here yet', 'Add a task using the + button below.'],
      active: ['All done! 🎉', 'No active tasks remain.'],
      completed: ['No completed tasks yet', 'Complete a task to see it here.']
    };
    const [t, s] = msgs[STATE.taskFilter] || ['No tasks', 'No tasks match this filter.'];
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📋</div><h4>${t}</h4><p>${s}</p></div>`;
    return;
  }
  const catClass = { Learning:'cat-learning', Projects:'cat-projects', Applications:'cat-applications', Personal:'cat-personal' };
  const catIcon  = { Learning:'📚', Projects:'🚀', Applications:'📋', Personal:'💡' };
  const today = new Date().toISOString().split('T')[0];
  list.innerHTML = tasks.map(task => {
    const overdue = task.due && task.due < today && !task.completed;
    const dueText = task.due ? formatDate(task.due) : '';
    return `
    <div class="task-card ${task.completed ? 'completed' : ''}" id="task-${task.id}" role="listitem">
      <button class="task-check ${task.completed ? 'checked' : ''}"
        onclick="toggleTask('${task.id}')"
        aria-label="${task.completed ? 'Mark incomplete' : 'Mark complete'}"
        aria-pressed="${task.completed}"></button>
      <div class="task-body">
        <div class="task-title">${escHtml(task.title)}</div>
        ${task.description ? `<div class="task-desc">${escHtml(task.description)}</div>` : ''}
        <div class="task-meta">
          <span class="task-cat ${catClass[task.category] || 'cat-learning'}">${catIcon[task.category] || ''} ${escHtml(task.category || 'Learning')}</span>
          ${dueText ? `<span class="task-due ${overdue ? 'overdue' : ''}">${overdue ? '⚠️ ' : '📅 '}${dueText}</span>` : ''}
        </div>
      </div>
      <div class="task-actions">
        <button class="btn btn-ghost btn-icon" onclick="editTask('${task.id}')" aria-label="Edit task" title="Edit">✏️</button>
        <button class="btn btn-ghost btn-icon" onclick="deleteTask('${task.id}')" aria-label="Delete task" title="Delete" style="color:#f87171">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

function exportTasks() {
  const blob = new Blob([JSON.stringify(STATE.tasks, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `harrish_tasks_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Tasks exported!');
}

/* ══════════════════════════════════════════════════
   PROFILE & TIMELINE MANAGEMENT
══════════════════════════════════════════════════ */
function loadProfileFromStorage() {
  const saved = LS.get('hrs_profile');
  STATE.profile = saved ? { ...DEFAULT_DATA.profile, ...saved } : { ...DEFAULT_DATA.profile };
}

function saveProfileToStorage() {
  LS.set('hrs_profile', STATE.profile);
}

function renderProfile() {
  if (!STATE.profile) return;
  const p = STATE.profile;
  safeSetText('hero-name', p.name || 'Harrish R S');
  safeSetText('hero-title', p.title || 'B.Tech Artificial Intelligence and Data Science Student');
  const bioEl = document.getElementById('hero-bio');
  if (bioEl && p.bio) bioEl.textContent = p.bio;
  safeSetText('hero-college-label', p.college || 'V S B Engineering College Karur');
  safeSetText('stat-grad', p.gradYear || '2029');

  // Availability badge
  const badge = document.getElementById('availability-badge');
  if (badge) {
    badge.style.display = p.badgeVisible === false ? 'none' : 'inline-flex';
    safeSetText('availability-badge-text', p.badgeText || 'Open to Internships');
  }

  // About Section
  safeSetText('about-bio-name', p.name || 'Harrish R S');
  safeSetText('about-bio-college', p.college || 'V S B Engineering College Karur');
  safeSetText('about-college', p.college || 'V S B Engineering College Karur');
  safeSetText('about-degree', p.title || 'B.Tech – Artificial Intelligence and Data Science');
  safeSetText('about-location', p.location || 'Karur, Tamil Nadu, India');
  safeSetText('about-grad', p.gradYear || '2029');
  safeSetText('about-interests', p.interests || 'Machine Learning · Python Programming · Java Programming · Data Analytics');
  safeSetText('about-languages', p.languages || 'Tamil (Native) · English (Proficient)');

  const talentelyBtn = document.getElementById('about-talentely-link');
  if (talentelyBtn && p.talentely) {
    talentelyBtn.href = p.talentely;
  }

  // Contact section dynamic links
  const contactEmailLink = document.getElementById('contact-link-email');
  if (contactEmailLink && p.email) {
    contactEmailLink.href = `mailto:${p.email}`;
    safeSetText('contact-val-email', p.email);
  }
  const contactLinkedinLink = document.getElementById('contact-link-linkedin');
  if (contactLinkedinLink && p.linkedin) {
    contactLinkedinLink.href = p.linkedin;
    const cleanLi = p.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, '');
    safeSetText('contact-val-linkedin', cleanLi || 'LinkedIn');
  }
  const contactGithubLink = document.getElementById('contact-link-github');
  if (contactGithubLink && p.github) {
    contactGithubLink.href = p.github;
    const cleanGh = p.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '');
    safeSetText('contact-val-github', cleanGh || 'GitHub');
  }
  const contactTalentelyLink = document.getElementById('contact-link-talentely');
  if (contactTalentelyLink && p.talentely) {
    contactTalentelyLink.href = p.talentely;
  }
}

function populateProfileForm() {
  if (!STATE.profile) return;
  const p = STATE.profile;
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ''; };
  setVal('dash-prof-name', p.name);
  setVal('dash-prof-title', p.title);
  setVal('dash-prof-college', p.college);
  setVal('dash-prof-grad', p.gradYear);
  setVal('dash-prof-badge-text', p.badgeText || 'Open to internships');
  const badgeCheck = document.getElementById('dash-prof-badge-visible');
  if (badgeCheck) badgeCheck.checked = p.badgeVisible !== false;
  setVal('dash-prof-interests', p.interests);
  setVal('dash-prof-languages', p.languages);
  setVal('dash-prof-bio', p.bio);
  setVal('dash-prof-email', p.email);
  setVal('dash-prof-location', p.location);
  setVal('dash-prof-linkedin', p.linkedin);
  setVal('dash-prof-github', p.github);
  setVal('dash-prof-talentely', p.talentely);
}

function saveProfileSettings(e) {
  if (e) e.preventDefault();
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();
  const badgeCheck = document.getElementById('dash-prof-badge-visible');
  STATE.profile = {
    ...STATE.profile,
    name: getVal('dash-prof-name') || 'Harrish R S',
    title: getVal('dash-prof-title') || 'B.Tech AI & Data Science Student',
    college: getVal('dash-prof-college') || 'V S B Engineering College Karur',
    gradYear: getVal('dash-prof-grad') || '2029',
    badgeText: getVal('dash-prof-badge-text') || 'Open to internships',
    badgeVisible: badgeCheck ? badgeCheck.checked : true,
    interests: getVal('dash-prof-interests') || 'Machine Learning, Python Programming, Java Programming, and Data Analytics',
    languages: getVal('dash-prof-languages') || 'Tamil (Native) · English (Proficient)',
    bio: getVal('dash-prof-bio') || '',
    email: getVal('dash-prof-email') || '697harrish@gmail.com',
    location: getVal('dash-prof-location') || 'Karur, Tamil Nadu, India',
    linkedin: getVal('dash-prof-linkedin') || 'https://www.linkedin.com/in/harrish-r-s-256a1237a/',
    github: getVal('dash-prof-github') || 'https://github.com/harrish-rs-tech',
    talentely: getVal('dash-prof-talentely') || 'https://lms.talentely.com/in/d42d7c4c-1eb4-421d-bc47-047663ab91ff'
  };
  saveProfileToStorage();
  renderProfile();
  showToast('Profile details updated successfully!');
}

function loadTimelineFromStorage() {
  const saved = LS.get('hrs_timeline');
  STATE.timeline = saved ? { ...DEFAULT_DATA.timeline, ...saved } : { ...DEFAULT_DATA.timeline };
}

function saveTimelineToStorage() {
  LS.set('hrs_timeline', STATE.timeline);
}

function renderTimeline() {
  const container = document.getElementById('resume-timeline');
  if (!container || !STATE.timeline) return;

  const t = STATE.timeline;
  const btech = t.btech || DEFAULT_DATA.timeline.btech;
  const pega = t.pega || DEFAULT_DATA.timeline.pega;
  const school = t.school || DEFAULT_DATA.timeline.school;

  const pegaPeriod = (pega.period || '').trim() || (pega.start || pega.end ? `${pega.start || ''} – ${pega.end || ''}`.trim() : '');
  const pegaOrg = pega.organization || 'Pega Systems';
  const pegaLoc = pega.location ? ` · ${pega.location}` : '';
  const pegaDesc = pega.responsibilities || 'Internship responsibilities and projects will be updated once confirmed.';

  const schoolDetails = [school.specialization, school.marks, school.achievements].filter(Boolean).join(' · ');

  container.innerHTML = `
    <!-- B.Tech -->
    <div class="timeline-item">
      <div class="timeline-date">${escHtml(btech.period || '2025 – Present')}</div>
      <div class="timeline-title">${escHtml(btech.degree || 'B.Tech – Artificial Intelligence and Data Science')}</div>
      <div class="timeline-sub">${escHtml(btech.college || 'V S B Engineering College Karur')} · Expected Graduation: ${escHtml(btech.gradYear || '2029')}</div>
      <div class="timeline-desc">${escHtml(btech.desc || '')}</div>
    </div>

    <!-- Pega Internship -->
    <div class="timeline-item">
      <div class="timeline-date">${escHtml(pegaPeriod || 'Dates to be announced')}</div>
      <div class="timeline-title">${escHtml(pega.title || 'Pega Internship')}</div>
      <div class="timeline-sub">${escHtml(pegaOrg)}${escHtml(pegaLoc)}</div>
      <div class="timeline-desc">${escHtml(pegaDesc)}</div>
      ${pega.certificate ? `<div style="margin-top:8px"><a href="${escHtml(pega.certificate)}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">📜 View Certificate</a></div>` : ''}
    </div>

    <!-- School Education -->
    <div class="timeline-item">
      <div class="timeline-date">${escHtml(school.year || '2025')}</div>
      <div class="timeline-title">${escHtml(school.title || 'Higher Secondary Education (12th Standard)')}</div>
      <div class="timeline-sub">${escHtml(school.school || 'Little Flower Matriculation Higher Secondary School, Karur')}</div>
      <div class="timeline-desc">${escHtml(schoolDetails || 'Academic records and achievements will be updated.')}</div>
    </div>
  `;
}

function populateTimelineForm() {
  if (!STATE.timeline) return;
  const btech = STATE.timeline.btech || DEFAULT_DATA.timeline.btech || {};
  const pega = STATE.timeline.pega || {};
  const school = STATE.timeline.school || {};
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ''; };

  setVal('btech-in-title', btech.degree || 'B.Tech – Artificial Intelligence and Data Science');
  setVal('btech-in-college', btech.college || 'V S B Engineering College Karur');
  setVal('btech-in-period', btech.period || '2025 – Present');
  setVal('btech-in-grad', btech.gradYear || '2029');
  setVal('btech-in-desc', btech.desc || '');

  setVal('pega-in-title', pega.title || 'Pega Internship');
  setVal('pega-in-org', pega.organization || 'Pega Systems');
  setVal('pega-in-start', pega.start || '');
  setVal('pega-in-end', pega.end || '');
  setVal('pega-in-loc', pega.location || '');
  setVal('pega-in-desc', pega.responsibilities || '');
  setVal('pega-in-cert', pega.certificate || '');

  setVal('school-in-name', school.school || 'Little Flower Matriculation Higher Secondary School, Karur');
  setVal('school-in-year', school.year || '2025');
  setVal('school-in-spec', school.specialization || '');
  setVal('school-in-marks', school.marks || '');
  setVal('school-in-ach', school.achievements || '');
}

function saveBtechTimeline(e) {
  if (e) e.preventDefault();
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();
  if (!STATE.timeline) STATE.timeline = {};
  STATE.timeline.btech = {
    degree: getVal('btech-in-title') || 'B.Tech – Artificial Intelligence and Data Science',
    college: getVal('btech-in-college') || 'V S B Engineering College Karur',
    period: getVal('btech-in-period') || '2025 – Present',
    gradYear: getVal('btech-in-grad') || '2029',
    desc: getVal('btech-in-desc') || ''
  };
  saveTimelineToStorage();
  renderTimeline();
  showToast('B.Tech degree timeline saved!');
}

function savePegaTimeline(e) {
  if (e) e.preventDefault();
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();
  STATE.timeline.pega = {
    title: getVal('pega-in-title') || 'Pega Internship',
    organization: getVal('pega-in-org') || 'Pega Systems',
    start: getVal('pega-in-start'),
    end: getVal('pega-in-end'),
    period: (getVal('pega-in-start') && getVal('pega-in-end')) ? `${getVal('pega-in-start')} – ${getVal('pega-in-end')}` : getVal('pega-in-start') || getVal('pega-in-end') || '',
    location: getVal('pega-in-loc'),
    responsibilities: getVal('pega-in-desc'),
    certificate: getVal('pega-in-cert')
  };
  saveTimelineToStorage();
  renderTimeline();
  showToast('Pega Internship timeline saved!');
}

function saveSchoolTimeline(e) {
  if (e) e.preventDefault();
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();
  STATE.timeline.school = {
    school: getVal('school-in-name') || 'Little Flower Matriculation Higher Secondary School, Karur',
    year: getVal('school-in-year') || '2025',
    title: 'Higher Secondary Education (12th Standard)',
    specialization: getVal('school-in-spec'),
    marks: getVal('school-in-marks'),
    achievements: getVal('school-in-ach')
  };
  saveTimelineToStorage();
  renderTimeline();
  showToast('School education details saved!');
}

/* ══════════════════════════════════════════════════
   DASHBOARD TABS & CONTENT LISTS
══════════════════════════════════════════════════ */
function switchDashTab(tabName) {
  STATE.activeDashTab = tabName;
  document.querySelectorAll('.dash-tab-btn').forEach(btn => {
    const isTarget = btn.id === `tab-btn-${tabName}`;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', String(isTarget));
  });
  document.querySelectorAll('.dash-tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-panel-${tabName}`);
  });

  if (tabName === 'profile') populateProfileForm();
  if (tabName === 'timeline') populateTimelineForm();
  if (tabName === 'content') renderDashContentLists();
  if (tabName === 'certs') renderDashCertsList();
  if (tabName === 'backup') populateEmailSettingsForm();
}

function renderDashContentLists() {
  const pList = document.getElementById('dash-projects-list');
  if (pList) {
    if (!STATE.projects || STATE.projects.length === 0) {
      pList.innerHTML = `<div style="font-size:0.85rem;color:var(--text-muted);padding:12px;text-align:center">No projects added yet. Click "+ Add Project" above.</div>`;
    } else {
      pList.innerHTML = STATE.projects.map(p => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 12px;background:rgba(255,255,255,0.03);border:1px solid var(--border-soft);border-radius:6px">
          <div><strong>${escHtml(p.emoji || '🚀')} ${escHtml(p.title)}</strong><div style="font-size:0.75rem;color:var(--text-muted)">${(p.tech || []).join(', ')}</div></div>
          <div style="display:flex;gap:6px">
            <button class="btn btn-ghost btn-sm" onclick="editProject('${p.id}')">✏️</button>
            <button class="btn btn-ghost btn-sm" onclick="deleteProject('${p.id}')" style="color:#f87171">🗑️</button>
          </div>
        </div>
      `).join('');
    }
  }

  const sList = document.getElementById('dash-skills-list');
  if (sList) {
    sList.innerHTML = (STATE.skills || []).map(group => `
      <div style="padding:10px 12px;background:rgba(255,255,255,0.02);border:1px solid var(--border-soft);border-radius:6px">
        <div style="font-size:0.85rem;font-weight:600;margin-bottom:6px;color:var(--teal-400)">${group.icon || '⚙️'} ${escHtml(group.category)} (${(group.items || []).length})</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${(group.items && group.items.length > 0)
            ? group.items.map(s => `
                <span class="skill-item" style="padding:2px 8px;font-size:0.75rem">
                  ${escHtml(s.name || s)}
                  <button onclick="deleteSkill('${escHtml(group.category)}','${escHtml(s.id || s.name)}')" style="color:#f87171;margin-left:4px;cursor:pointer">✕</button>
                </span>`).join('')
            : '<span style="font-size:0.75rem;color:var(--text-muted);font-style:italic">No skills added yet</span>'
          }
        </div>
      </div>
    `).join('');
  }
}

function renderDashCertsList() {
  const cList = document.getElementById('dash-certs-list');
  if (!cList) return;
  if (!STATE.achievements || STATE.achievements.length === 0) {
    cList.innerHTML = `<div style="font-size:0.85rem;color:var(--text-muted);padding:12px;text-align:center">No certificates added yet. Click "+ Add Certificate" above.</div>`;
    return;
  }
  cList.innerHTML = STATE.achievements.map(a => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:rgba(255,255,255,0.03);border:1px solid var(--border-soft);border-radius:6px">
      <div>
        <strong>${escHtml(a.emoji || '🏆')} ${escHtml(a.title)}</strong>
        <div style="font-size:0.75rem;color:var(--text-muted)">${escHtml(a.issuer || '')} · ${formatAchDate(a.date)}</div>
      </div>
      <div style="display:flex;gap:6px">
        ${a.imageData ? `<button class="btn btn-ghost btn-sm" onclick="previewCertImage('${a.id}')" title="Preview">🔍</button>` : ''}
        <button class="btn btn-ghost btn-sm" onclick="editAchievement('${a.id}')" title="Edit">✏️</button>
        <button class="btn btn-ghost btn-sm" onclick="deleteAchievement('${a.id}')" style="color:#f87171" title="Delete">🗑️</button>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════
   COMPLETE SITE BACKUP & IMPORT
══════════════════════════════════════════════════ */
function exportSiteData() {
  const fullBackup = {
    exportedAt: new Date().toISOString(),
    profile: STATE.profile,
    timeline: STATE.timeline,
    skills: STATE.skills,
    projects: STATE.projects,
    achievements: STATE.achievements,
    tasks: STATE.tasks,
    emailConfig: STATE.emailConfig
  };
  const blob = new Blob([JSON.stringify(fullBackup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `harrish_portfolio_backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Complete site backup downloaded!');
}

function importSiteData(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.profile) { STATE.profile = data.profile; saveProfileToStorage(); }
      if (data.timeline) { STATE.timeline = data.timeline; saveTimelineToStorage(); }
      if (Array.isArray(data.skills)) { STATE.skills = data.skills; saveSkillsToStorage(); }
      if (Array.isArray(data.projects)) { STATE.projects = data.projects; saveProjectsToStorage(); }
      if (Array.isArray(data.achievements)) { STATE.achievements = data.achievements; saveAchievementsToStorage(); }
      if (Array.isArray(data.tasks)) { STATE.tasks = data.tasks; saveTasksToStorage(); }
      if (data.emailConfig) { STATE.emailConfig = data.emailConfig; LS.set('hrs_email_cfg', data.emailConfig); }

      renderProfile();
      renderTimeline();
      renderSkills();
      renderProjects();
      renderAchievements();
      renderTasks();
      populateProfileForm();
      populateTimelineForm();
      populateEmailSettingsForm();

      showToast('All site data restored successfully!');
    } catch (err) {
      console.error('Import error:', err);
      showToast('Invalid JSON backup file.', 'error');
    }
  };
  reader.readAsText(file);
}

/* ══════════════════════════════════════════════════
   EMAIL SETTINGS & DELIVERY
══════════════════════════════════════════════════ */
function loadEmailSettingsFromStorage() {
  const saved = LS.get('hrs_email_cfg');
  if (saved) {
    STATE.emailConfig = { ...STATE.emailConfig, ...saved };
  }
}

function populateEmailSettingsForm() {
  const cfg = STATE.emailConfig || {};
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ''; };
  setVal('cfg-emailjs-public', cfg.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' ? cfg.publicKey : '');
  setVal('cfg-emailjs-service', cfg.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' ? cfg.serviceId : '');
  setVal('cfg-emailjs-template', cfg.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' ? cfg.templateId : '');
  setVal('cfg-formspree', cfg.formspree?.endpoint || '');
  updateEmailStatusNote();
}

function saveEmailSettings(e) {
  if (e) e.preventDefault();
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();
  const pub = getVal('cfg-emailjs-public');
  const srv = getVal('cfg-emailjs-service');
  const tmp = getVal('cfg-emailjs-template');
  const fsp = getVal('cfg-formspree');

  const isEmailJSConfigured = Boolean(
    pub && srv && tmp &&
    pub !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
    srv !== 'YOUR_EMAILJS_SERVICE_ID' &&
    tmp !== 'YOUR_EMAILJS_TEMPLATE_ID'
  );

  STATE.emailConfig = {
    publicKey: pub || EMAILJS_CONFIG.publicKey,
    serviceId: srv || EMAILJS_CONFIG.serviceId,
    templateId: tmp || EMAILJS_CONFIG.templateId,
    configured: isEmailJSConfigured,
    formspree: {
      endpoint: fsp,
      configured: Boolean(fsp)
    }
  };
  LS.set('hrs_email_cfg', STATE.emailConfig);

  if (isEmailJSConfigured) {
    initEmailJS();
  }
  updateEmailStatusNote();

  showToast('Email delivery settings saved!');
}

function saveNewDashboardPassword(e) {
  if (e) e.preventDefault();
  const newPass = (document.getElementById('dash-new-pass-input')?.value || '').trim();
  const confirmPass = (document.getElementById('dash-confirm-pass-input')?.value || '').trim();
  if (!newPass || newPass.length < 6) {
    showToast('Password must be at least 6 characters.', 'error');
    return;
  }
  if (newPass !== confirmPass) {
    showToast('Passwords do not match.', 'error');
    return;
  }
  LS.set('hrs_dash_password', newPass);
  const p1 = document.getElementById('dash-new-pass-input');
  const p2 = document.getElementById('dash-confirm-pass-input');
  if (p1) p1.value = '';
  if (p2) p2.value = '';
  showToast('Dashboard password updated successfully! Please save your new password.');
}

function resetDashboardPassword() {
  LS.set('hrs_dash_password', DASHBOARD_CONFIG.password);
  showToast(`Dashboard password reset to default (${DASHBOARD_CONFIG.password})`);
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.textContent = '🙈';
  } else {
    input.type = 'password';
    if (btn) btn.textContent = '👁️';
  }
}

function initEmailJS() {
  const cfg = STATE.emailConfig || EMAILJS_CONFIG;
  const isRealEmailJS = Boolean(
    cfg.configured &&
    cfg.publicKey && cfg.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
    typeof emailjs !== 'undefined'
  );
  if (isRealEmailJS) {
    try {
      emailjs.init({ publicKey: cfg.publicKey });
    } catch (e) {
      console.warn('EmailJS init error:', e);
    }
  }
  updateEmailStatusNote();
}

function updateEmailStatusNote() {
  const note = document.getElementById('emailjs-status-note');
  const dashStatus = document.getElementById('dash-email-status');
  const cfg = STATE.emailConfig || EMAILJS_CONFIG;

  const isEmailJS = Boolean(
    cfg.configured &&
    cfg.publicKey && cfg.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
    cfg.serviceId && cfg.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
    cfg.templateId && cfg.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID'
  );

  let statusText = '🟢 Direct delivery active';
  if (isEmailJS) {
    statusText = '🟢 Delivered via EmailJS';
  } else if (cfg.formspree?.configured && cfg.formspree.endpoint) {
    statusText = '🟢 Delivered via Formspree';
  }

  if (note) {
    note.textContent = statusText;
    note.style.color = 'var(--teal-400)';
  }
  if (dashStatus) {
    dashStatus.textContent = statusText;
  }
}

function sendViaDirectBackend(name, email, subject, message, recipientEmail, btn, feedback) {
  fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      _subject: subject || `Portfolio message from ${name}`,
      message: message,
      _replyto: email,
      _template: 'table',
      _captcha: 'false'
    })
  })
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    return res.json();
  })
  .then(data => {
    feedback.className = 'form-feedback success';
    feedback.innerHTML = `
      ✅ Message sent successfully to <strong>${escHtml(recipientEmail)}</strong>! I will reply shortly.
      <div style="margin-top:6px;font-size:0.8rem;color:var(--text-secondary)">
        📩 <em>First time notice:</em> FormSubmit may send a 1-time activation confirmation email to <strong>${escHtml(recipientEmail)}</strong>. Check your inbox or spam to click "Activate" once.
      </div>
    `;
    document.getElementById('contact-form').reset();
    showToast('Message sent to ' + recipientEmail);
  })
  .catch(err => {
    console.error('Direct delivery failed, falling back to mail client:', err);
    const sub  = encodeURIComponent(subject || `Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoUrl = `mailto:${recipientEmail}?subject=${sub}&body=${body}`;

    feedback.className = 'form-feedback error';
    feedback.innerHTML = `
      ⚠️ <strong>Could not connect to automated email server.</strong>
      <div style="margin-top:8px">
        You can send this message directly via your email client:
        <br>
        <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="display:inline-block;margin-top:8px">✉️ Open in Email Client to Send Directly</a>
      </div>
    `;
  })
  .finally(() => {
    btn.disabled = false;
    btn.innerHTML = '📨 Send Message';
  });
}

function sendTestEmail() {
  const btn = document.getElementById('btn-test-email');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Sending test…'; }
  const recipientEmail = (STATE.profile?.email || DEFAULT_DATA.profile.email || '697harrish@gmail.com').trim();

  fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: 'Portfolio Test Bot',
      email: recipientEmail,
      _subject: 'Portfolio Contact Form Test Delivery',
      message: `Hello Harrish! This is a test message to confirm your portfolio contact form is delivering to ${recipientEmail} successfully.`,
      _template: 'table',
      _captcha: 'false'
    })
  })
  .then(res => res.json())
  .then(data => {
    showToast('Test email sent to ' + recipientEmail + '! Check inbox or spam.');
  })
  .catch(err => {
    showToast('Test email error: ' + err.message, 'error');
  })
  .finally(() => {
    if (btn) { btn.disabled = false; btn.textContent = '📨 Send Test Message to 697harrish@gmail.com'; }
  });
}

function handleContactSubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById('contact-feedback');
  const btn = document.getElementById('contact-submit-btn');

  // Honeypot spam check
  const hp = document.getElementById('hp-field');
  if (hp && hp.value) {
    feedback.className = 'form-feedback success';
    feedback.innerHTML = '✅ Thank you! Your message has been sent.';
    return;
  }

  const name    = (document.getElementById('cf-name').value    || '').trim();
  const email   = (document.getElementById('cf-email').value   || '').trim();
  const subject = (document.getElementById('cf-subject').value || '').trim();
  const message = (document.getElementById('cf-message').value || '').trim();

  // Client-side validation
  clearFieldErrors();
  if (!name)                          { showFieldError('cf-name',    'Name is required.');                       return; }
  if (!email || !isValidEmail(email)) { showFieldError('cf-email',   'A valid email address is required.');      return; }
  if (!message || message.length < 10){ showFieldError('cf-message', 'Message must be at least 10 characters.'); return; }

  // Loading state
  btn.disabled = true;
  btn.innerHTML = '<span style="opacity:0.7">⏳ Sending message…</span>';
  feedback.className = 'form-feedback';
  feedback.textContent = '';

  const cfg = STATE.emailConfig || {};
  const recipientEmail = (STATE.profile?.email || DEFAULT_DATA.profile.email || '697harrish@gmail.com').trim();

  // ── 1. Formspree Delivery (if endpoint configured) ──────
  if (cfg.formspree?.configured && cfg.formspree.endpoint) {
    fetch(cfg.formspree.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || `Portfolio message from ${name}`,
        message,
        _replyto: email
      })
    })
    .then(res => {
      if (res.ok) {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `✅ Message delivered successfully to <strong>${escHtml(recipientEmail)}</strong>! I will reply shortly.`;
        document.getElementById('contact-form').reset();
        showToast('Message sent successfully!');
      } else {
        throw new Error('Formspree response not OK');
      }
    })
    .catch(err => {
      console.warn('Formspree error, falling back to direct delivery:', err);
      sendViaDirectBackend(name, email, subject, message, recipientEmail, btn, feedback);
    })
    .finally(() => {
      if (feedback.className.includes('success')) {
        btn.disabled = false;
        btn.innerHTML = '📨 Send Message';
      }
    });
    return;
  }

  // ── 2. EmailJS Delivery (if configured with real keys) ────
  const hasRealEmailJS = Boolean(
    cfg.configured &&
    cfg.publicKey && cfg.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
    cfg.serviceId && cfg.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
    cfg.templateId && cfg.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
    typeof emailjs !== 'undefined'
  );

  if (hasRealEmailJS) {
    emailjs.send(cfg.serviceId, cfg.templateId, {
      from_name:  name,
      from_email: email,
      subject:    subject || `Portfolio contact from ${name}`,
      message:    message,
      reply_to:   email
    }).then(() => {
      feedback.className = 'form-feedback success';
      feedback.innerHTML = `✅ Message delivered successfully to <strong>${escHtml(recipientEmail)}</strong> via EmailJS! I will reply shortly.`;
      document.getElementById('contact-form').reset();
      showToast('Message sent successfully via EmailJS!');
      btn.disabled = false;
      btn.innerHTML = '📨 Send Message';
    }).catch((err) => {
      console.warn('EmailJS error, falling back to direct delivery:', err);
      sendViaDirectBackend(name, email, subject, message, recipientEmail, btn, feedback);
    });
    return;
  }

  // ── 3. Direct Delivery via FormSubmit (Zero-config instant delivery to recipientEmail) ───
  sendViaDirectBackend(name, email, subject, message, recipientEmail, btn, feedback);
}

function showFieldError(fieldId, msg) {
  const field = document.getElementById(fieldId);
  if (field) { field.style.borderColor = '#f87171'; field.focus(); }
  const fb = document.getElementById('contact-feedback');
  fb.className = 'form-feedback error';
  fb.innerHTML = `❌ ${msg}`;
}

function clearFieldErrors() {
  document.querySelectorAll('#contact-form .form-input').forEach(el => { el.style.borderColor = ''; });
  const fb = document.getElementById('contact-feedback');
  fb.className = 'form-feedback';
  fb.textContent = '';
}

function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

/* ══════════════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════════════ */
function escHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr + 'T00:00:00')
      .toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch { return dateStr; }
}

function safeSetText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  safeSetText('footer-year', new Date().getFullYear());

  // Load all persisted data
  loadProfileFromStorage();
  loadTimelineFromStorage();
  loadTasksFromStorage();
  loadProjectsFromStorage();
  loadSkillsFromStorage();
  loadAchievementsFromStorage();
  loadResumeFromStorage();
  loadEmailSettingsFromStorage();

  // Render public sections
  renderProfile();
  renderTimeline();
  renderProjects();
  renderSkills();
  renderAchievements();

  // Nav & animations
  initNav();
  initScrollReveal();

  // EmailJS initialization & delivery status
  if (typeof emailjs !== 'undefined') {
    initEmailJS();
  } else {
    window.addEventListener('load', initEmailJS);
  }
  updateEmailStatusNote();

  // Auto-restore session if valid
  const session = LS.get(DASHBOARD_CONFIG.sessionKey);
  if (session && Date.now() - session.ts < DASHBOARD_CONFIG.sessionDuration) {
    STATE.dashboardUnlocked = true;
    document.getElementById('dashboard').classList.add('visible');
    const fab = document.getElementById('fab-add-task');
    if (fab) fab.classList.add('visible');
    body_set_admin(true);
    renderTasks();
    populateProfileForm();
    populateTimelineForm();
    populateEmailSettingsForm();
  }

  // Admin shortcut: Ctrl+Shift+A
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      if (STATE.dashboardUnlocked) {
        body_set_admin(!document.body.classList.contains('admin-mode'));
        showToast(document.body.classList.contains('admin-mode')
          ? '✏️ Admin mode ON — edit buttons visible'
          : '🔒 Admin mode OFF', 'info');
      } else {
        showToast('Unlock the dashboard first to enter admin mode.', 'error');
      }
    }
  });

  console.log(
    '%cHarrish R S Portfolio v2.0\n%cAdmin shortcut: Ctrl+Shift+A (after unlocking dashboard)',
    'color:#2dd4bf;font-size:16px;font-weight:bold;',
    'color:#94a3b8;font-size:12px;'
  );
});

// Expose globals used from HTML onclick/onsubmit attributes
window.openModal   = openModal;
window.closeModal  = closeModal;
window.openAddSkill = openAddSkill;
window.saveSkill   = saveSkill;
window.deleteSkill = deleteSkill;
window.openAddProject = openAddProject;
window.saveProject = saveProject;
window.deleteProject = deleteProject;
window.editProject = editProject;
window.previewCertImage = previewCertImage;
window.openAddAchievement = openAddAchievement;
window.editAchievement = editAchievement;
window.saveAchievement = saveAchievement;
window.deleteAchievement = deleteAchievement;
window.promptAddProject = promptAddProject;
window.promptAddSkill = promptAddSkill;
window.promptAddAchievement = promptAddAchievement;
window.downloadResume = downloadResume;
window.handleDragOver = handleDragOver;
window.handleDragLeave = handleDragLeave;
window.handleResumeDrop = handleResumeDrop;
window.handleResumeUpload = handleResumeUpload;
window.removeResume = removeResume;
window.showDashboardAuth = showDashboardAuth;
window.handleAuth = handleAuth;
window.cancelAuth = cancelAuth;
window.showDashboard = showDashboard;
window.lockDashboard = lockDashboard;
window.switchDashTab = switchDashTab;
window.saveProfileSettings = saveProfileSettings;
window.saveBtechTimeline = saveBtechTimeline;
window.savePegaTimeline = savePegaTimeline;
window.saveSchoolTimeline = saveSchoolTimeline;
window.saveEmailSettings = saveEmailSettings;
window.saveNewDashboardPassword = saveNewDashboardPassword;
window.resetDashboardPassword = resetDashboardPassword;
window.togglePasswordVisibility = togglePasswordVisibility;
window.reorderProject = reorderProject;
window.exportSiteData = exportSiteData;
window.importSiteData = importSiteData;
window.saveTask = saveTask;
window.editTask = editTask;
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;
window.setFilter = setFilter;
window.exportTasks = exportTasks;
window.handleContactSubmit = handleContactSubmit;
window.sendTestEmail = sendTestEmail;
window.updateEmailStatusNote = updateEmailStatusNote;
window.toggleMobileNav = toggleMobileNav;
window.closeMobileNav = closeMobileNav;
