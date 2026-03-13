// ── i18n ──
const I18N = {
  en: {
    settings:'Settings', token_label:'GitHub Token',
    repo_label:'Repository', repo_hint:'Must exist and have at least one commit (README).',
    email_label:'Email (same as on GitHub)',
    gitname_label:'Name (git)', branch_label:'Branch',
    mult_label:'Commit multiplier', mult_1:'×1 — minimum', mult_5:'×5 — recommended', mult_10:'×10 — saturated',
    year_title:'Year', year_hint:'The graph covers the entire selected year',
    editor_title:'Editor', intensity:'Intensity:', legend_hint:'keys 0\u20134 \u00a0|\u00a0 click and drag',
    btn_clear:'Clear', btn_fill:'Fill all', btn_invert:'Invert', btn_push:'\u25b6 Apply to GitHub',
    days_painted:'Days painted:', commits:'Commits:', period:'Period:',
    alert_token:'Enter your GitHub token',
    alert_repo:'Enter repository as username/repo',
    alert_email:"Enter email \u2014 must match your GitHub account email",
    alert_empty:'Draw something on the grid first',
    log_checking:'Checking repository...',
    log_found:'\u2713 Repo found:', log_branch_ok:'\u2713 Branch found:',
    log_branch_new:'Branch not found \u2014 will create new',
    log_blob:'Creating blob...', log_commits:'Creating commits...',
    log_updating:'Updating branch...', log_done:'\u2713 Done! \u2192',
    log_error:'\u2717 Error:', status_done:'\u2713 Done! Pattern applied \u2192', status_error:'Error:',
    footer_star:'Star on GitHub', footer_issues:'GitHub Issues',
    footer_thanks:'If this tool saved you time \u2014 a \u2b50 means a lot!',
    hint_token:'<a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank">Create token</a> \u2014 check the <b>repo</b> scope.',
    hint_email:'<a href="https://github.com/settings/emails" target="_blank">Check email</a> \u2014 must match, otherwise the graph won\u2019t update.'
  },
  ru: {
    settings:'\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438', token_label:'GitHub Token',
    repo_label:'\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439', repo_hint:'\u0414\u043e\u043b\u0436\u0435\u043d \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043a\u043e\u043c\u043c\u0438\u0442 (README).',
    email_label:'Email (\u043a\u0430\u043a \u043d\u0430 GitHub)',
    gitname_label:'\u0418\u043c\u044f (git)', branch_label:'\u0412\u0435\u0442\u043a\u0430',
    mult_label:'\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c', mult_1:'\xd71 \u2014 \u043c\u0438\u043d\u0438\u043c\u0443\u043c', mult_5:'\xd75 \u2014 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e', mult_10:'\xd710 \u2014 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e',
    year_title:'\u0413\u043e\u0434', year_hint:'\u0413\u0440\u0430\u0444 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0432\u0435\u0441\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0433\u043e\u0434',
    editor_title:'\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440', intensity:'\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u044c:', legend_hint:'\u043a\u043b\u0430\u0432\u0438\u0448\u0438 0\u20134 \u00a0|\u00a0 \u0437\u0430\u0436\u043c\u0438 \u0438 \u0432\u0435\u0434\u0438',
    btn_clear:'\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c', btn_fill:'\u0417\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0451', btn_invert:'\u0418\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c', btn_push:'\u25b6 \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430 GitHub',
    days_painted:'\u0417\u0430\u043a\u0440\u0430\u0448\u0435\u043d\u043e \u0434\u043d\u0435\u0439:', commits:'\u041a\u043e\u043c\u043c\u0438\u0442\u043e\u0432:', period:'\u041f\u0435\u0440\u0438\u043e\u0434:',
    alert_token:'\u0412\u0432\u0435\u0434\u0438 GitHub \u0442\u043e\u043a\u0435\u043d',
    alert_repo:'\u0412\u0432\u0435\u0434\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 username/repo',
    alert_email:'\u0412\u0432\u0435\u0434\u0438 email \u2014 \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u0441 email \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 GitHub',
    alert_empty:'\u041d\u0430\u0440\u0438\u0441\u0443\u0439 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043d\u0430 \u0441\u0435\u0442\u043a\u0435',
    log_checking:'\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439...',
    log_found:'\u2713 \u0420\u0435\u043f\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043e:', log_branch_ok:'\u2713 \u0412\u0435\u0442\u043a\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u0430:',
    log_branch_new:'\u0412\u0435\u0442\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u2014 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043d\u043e\u0432\u0443\u044e',
    log_blob:'\u0421\u043e\u0437\u0434\u0430\u0451\u043c blob...', log_commits:'\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043e\u043c\u043c\u0438\u0442\u044b...',
    log_updating:'\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0432\u0435\u0442\u043a\u0443...', log_done:'\u2713 \u0413\u043e\u0442\u043e\u0432\u043e! \u2192',
    log_error:'\u2717 \u041e\u0448\u0438\u0431\u043a\u0430:', status_done:'\u2713 \u0413\u043e\u0442\u043e\u0432\u043e! \u041f\u0430\u0442\u0442\u0435\u0440\u043d \u043f\u0440\u0438\u043c\u0435\u043d\u0451\u043d \u2192', status_error:'\u041e\u0448\u0438\u0431\u043a\u0430:',
    footer_star:'\u041f\u043e\u0441\u0442\u0430\u0432\u044c \u0437\u0432\u0435\u0437\u0434\u0443 \u043d\u0430 GitHub', footer_issues:'GitHub Issues',
    footer_thanks:'\u0415\u0441\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u043e\u043c\u043e\u0433 \u2014 \u2b50 \u043c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0438\u0442!',
    hint_token:'<a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank">\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d</a> \u2014 \u043d\u0443\u0436\u043d\u0430 \u0433\u0430\u043b\u043e\u0447\u043a\u0430 <b>repo</b>.',
    hint_email:'<a href="https://github.com/settings/emails" target="_blank">\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c email</a> \u2014 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c, \u0438\u043d\u0430\u0447\u0435 \u0433\u0440\u0430\u0444 \u043d\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0441\u044f.'
  },
  es: {
    settings:'Configuraci\u00f3n', token_label:'Token de GitHub',
    repo_label:'Repositorio', repo_hint:'Debe existir y tener al menos un commit (README).',
    email_label:'Email (igual que en GitHub)',
    gitname_label:'Nombre (git)', branch_label:'Rama',
    mult_label:'Multiplicador de commits', mult_1:'\xd71 \u2014 m\u00ednimo', mult_5:'\xd75 \u2014 recomendado', mult_10:'\xd710 \u2014 saturado',
    year_title:'A\u00f1o', year_hint:'El gr\u00e1fico cubre todo el a\u00f1o seleccionado',
    editor_title:'Editor', intensity:'Intensidad:', legend_hint:'teclas 0\u20134 \u00a0|\u00a0 clic y arrastra',
    btn_clear:'Limpiar', btn_fill:'Rellenar todo', btn_invert:'Invertir', btn_push:'\u25b6 Aplicar en GitHub',
    days_painted:'D\u00edas pintados:', commits:'Commits:', period:'Per\u00edodo:',
    alert_token:'Ingresa tu token de GitHub',
    alert_repo:'Ingresa el repositorio como usuario/repo',
    alert_email:'Ingresa el email \u2014 debe coincidir con tu cuenta de GitHub',
    alert_empty:'Dibuja algo en la cuadr\u00edcula primero',
    log_checking:'Verificando repositorio...',
    log_found:'\u2713 Repo encontrado:', log_branch_ok:'\u2713 Rama encontrada:',
    log_branch_new:'Rama no encontrada \u2014 se crear\u00e1 nueva',
    log_blob:'Creando blob...', log_commits:'Creando commits...',
    log_updating:'Actualizando rama...', log_done:'\u2713 \u00a1Listo! \u2192',
    log_error:'\u2717 Error:', status_done:'\u2713 \u00a1Listo! Patr\u00f3n aplicado \u2192', status_error:'Error:',
    footer_star:'Dar estrella en GitHub', footer_issues:'Reportar issue',
    footer_thanks:'\u00a1Si esta herramienta te ahorr\u00f3 tiempo, una \u2b50 significa mucho!',
    hint_token:'<a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank">Crear token</a> \u2014 activa el permiso <b>repo</b>.',
    hint_email:'<a href="https://github.com/settings/emails" target="_blank">Verificar email</a> \u2014 debe coincidir, de lo contrario el gr\u00e1fico no se actualizar\u00e1.'
  }
};

let lang = 'en';
function t(k){ return (I18N[lang]||I18N.en)[k] || k; }

function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.dataset.i18n);
  });
  document.getElementById('hintToken').innerHTML = t('hint_token');
  document.getElementById('hintEmail').innerHTML = t('hint_email');
  document.querySelector('#multiplier option[value="1"]').textContent = t('mult_1');
  document.querySelector('#multiplier option[value="5"]').textContent = t('mult_5');
  document.querySelector('#multiplier option[value="10"]').textContent = t('mult_10');
}

document.getElementById('langSelect').addEventListener('change', e=>{
  lang = e.target.value;
  applyLang();
});

// ── Graph state ──
const ROWS = 7;
const COLORS = ['#21262d','#0D4429','#016C31','#26A641','#39D353'];
let grid = [], selLevel = 0, isDown = false;
let startDate = new Date();
let totalCols = 53;
let selectedYear = new Date().getFullYear();

// ── Year selector ──
(()=>{
  const sel = document.getElementById('selYear');
  const now = new Date().getFullYear();
  for(let y = now + 1; y >= now - 10; y--){
    const o = document.createElement('option');
    o.value = y; o.textContent = y;
    if(y === now) o.selected = true;
    sel.appendChild(o);
  }
  sel.addEventListener('change', ()=> setYear(+sel.value));
})();

function setYear(year){
  selectedYear = year;
  const jan1 = new Date(year, 0, 1);
  const sun = new Date(jan1);
  sun.setDate(jan1.getDate() - jan1.getDay());
  sun.setHours(12,0,0,0);
  startDate = sun;

  const dec31 = new Date(year, 11, 31);
  const sat = new Date(dec31);
  sat.setDate(dec31.getDate() + (6 - dec31.getDay()));
  sat.setHours(12,0,0,0);

  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  totalCols = Math.round((sat - sun) / msPerWeek) + 1;
  rebuildGraph();
}

// ── Graph ──
const graphEl = document.getElementById('graph');
const monthsEl = document.getElementById('months');

function rebuildGraph(){
  grid = Array(totalCols * ROWS).fill(0);
  graphEl.innerHTML = '';
  monthsEl.innerHTML = '';

  let lastM = -1;
  for(let c = 0; c < totalCols; c++){
    const d = new Date(startDate);
    d.setDate(d.getDate() + c * 7);
    const span = document.createElement('span');
    if(d.getMonth() !== lastM){ span.textContent = d.toLocaleString('en',{month:'short'}); lastM = d.getMonth(); }
    monthsEl.appendChild(span);
  }

  const colDef = `repeat(${totalCols}, 13px)`;
  monthsEl.style.gridTemplateColumns = colDef;
  graphEl.style.gridTemplateColumns = colDef;

  const today = new Date(); today.setHours(23,59,59,999);
  const yearStart = new Date(selectedYear, 0, 1);
  const yearEnd   = new Date(selectedYear, 11, 31); yearEnd.setHours(23,59,59,999);

  for(let c = 0; c < totalCols; c++){
    for(let r = 0; r < ROWS; r++){
      const d = new Date(startDate);
      d.setDate(d.getDate() + c * 7 + r);
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.i = c * ROWS + r;
      cell.dataset.ts = d.getTime();
      if(d < yearStart || d > yearEnd || d > today){
        cell.classList.add('out');
        cell.style.background = 'transparent';
      } else {
        cell.style.background = COLORS[0];
      }
      cell.addEventListener('mousedown', e=>{ e.preventDefault(); isDown = true; paint(cell); });
      cell.addEventListener('mouseenter', ()=>{ if(isDown) paint(cell); });
      graphEl.appendChild(cell);
    }
  }
  updateStats();
}

function paint(cell){
  if(cell.classList.contains('out')) return;
  const i = +cell.dataset.i;
  grid[i] = selLevel;
  cell.style.background = COLORS[selLevel];
  updateStats();
}

function updateStats(){
  const mult = +document.getElementById('multiplier').value;
  document.getElementById('sDays').textContent = grid.filter(v=>v>0).length;
  document.getElementById('sCommits').textContent = grid.reduce((a,v)=>a+v*mult,0).toLocaleString();
  const end = new Date(startDate); end.setDate(end.getDate() + totalCols * 7 - 1);
  const fmt = d => d.toLocaleDateString('en',{day:'numeric',month:'short',year:'numeric'});
  document.getElementById('sPeriod').textContent = fmt(startDate) + ' \u2014 ' + fmt(end);
}

// ── Controls ──
document.querySelectorAll('.swatch').forEach(s => s.addEventListener('click', ()=>{
  selLevel = +s.dataset.level;
  document.querySelectorAll('.swatch').forEach(x => x.classList.toggle('sel', x === s));
}));
document.addEventListener('keydown', e=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  const n = parseInt(e.key);
  if(n >= 0 && n <= 4){
    selLevel = n;
    document.querySelectorAll('.swatch').forEach(s => s.classList.toggle('sel', +s.dataset.level === n));
  }
});
document.addEventListener('mouseup', ()=> isDown = false);
document.getElementById('multiplier').addEventListener('change', updateStats);

document.getElementById('clearBtn').addEventListener('click', ()=>{
  grid = Array(totalCols * ROWS).fill(0);
  document.querySelectorAll('.cell:not(.out)').forEach(c => c.style.background = COLORS[0]);
  updateStats(); setStatus('');
});
document.getElementById('fillBtn').addEventListener('click', ()=>{
  document.querySelectorAll('.cell:not(.out)').forEach(c=>{
    const i = +c.dataset.i; grid[i] = selLevel; c.style.background = COLORS[selLevel];
  });
  updateStats();
});
document.getElementById('invertBtn').addEventListener('click', ()=>{
  document.querySelectorAll('.cell:not(.out)').forEach(c=>{
    const i = +c.dataset.i; grid[i] = grid[i] === 0 ? selLevel : 0; c.style.background = COLORS[grid[i]];
  });
  updateStats();
});

// ── Logging ──
function addLog(msg, type){
  const log = document.getElementById('log');
  const span = document.createElement('span');
  if(type) span.className = type;
  span.textContent = msg + '\n';
  log.appendChild(span);
  log.scrollTop = log.scrollHeight;
}
function setStatus(msg, type){
  const el = document.getElementById('statusBar');
  el.className = 'status-bar' + (type ? ' '+type : '');
  el.textContent = msg;
}

// ── GitHub API ──
async function api(token, method, path, body){
  const r = await fetch('https://api.github.com'+path, {
    method,
    headers:{ 'Authorization':'token '+token, 'Content-Type':'application/json', 'Accept':'application/vnd.github+json' },
    body: body ? JSON.stringify(body) : undefined
  });
  if(r.status === 204) return null;
  const data = await r.json();
  if(!r.ok) throw new Error(data.message || 'HTTP '+r.status);
  return data;
}

async function doPush(){
  const token   = document.getElementById('token').value.trim();
  const repo    = document.getElementById('repo').value.trim();
  const branch  = document.getElementById('branch').value.trim() || 'main';
  const mult    = +document.getElementById('multiplier').value;
  const email   = document.getElementById('email').value.trim();
  const gitname = document.getElementById('gitname').value.trim() || 'GitHub Painter';

  if(!token) { alert(t('alert_token')); return; }
  if(!repo || !repo.includes('/')) { alert(t('alert_repo')); return; }
  if(!email) { alert(t('alert_email')); return; }

  const commits = [];
  for(let c = 0; c < totalCols; c++){
    for(let r = 0; r < ROWS; r++){
      const level = grid[c * ROWS + r];
      if(!level) continue;
      const d = new Date(startDate);
      d.setDate(d.getDate() + c * 7 + r);
      d.setHours(12,0,0,0);
      const iso = d.toISOString().replace(/\.\d{3}Z$/, '+00:00');
      for(let k = 0; k < level * mult; k++) commits.push({ date:iso, idx:`${c}-${r}-${k}` });
    }
  }
  if(!commits.length){ alert(t('alert_empty')); return; }

  const btn = document.getElementById('pushBtn');
  btn.disabled = true;
  document.getElementById('progress').classList.add('on');
  document.getElementById('log').innerHTML = '';
  document.getElementById('bar').style.width = '0%';
  setStatus('');

  try{
    addLog(t('log_checking'));
    await api(token, 'GET', `/repos/${repo}`);
    addLog(`${t('log_found')} ${repo}`, 'ok');

    let baseSha = null, baseTreeSha = null;
    try{
      const ref = await api(token, 'GET', `/repos/${repo}/git/ref/heads/${branch}`);
      baseSha = ref.object.sha;
      const c0 = await api(token, 'GET', `/repos/${repo}/git/commits/${baseSha}`);
      baseTreeSha = c0.tree.sha;
      addLog(`${t('log_branch_ok')} "${branch}"`, 'ok');
    }catch{ addLog(t('log_branch_new')); }

    addLog(t('log_blob'));
    const blob = await api(token, 'POST', `/repos/${repo}/git/blobs`, { content:'This GitHub contribution graph art was generated using Contribution-Painter. Create your own at: https://github.com/readme-SVG/Contribution-Painter\n', encoding:'utf-8' });

    const total = commits.length;
    let done = 0, currentSha = baseSha, currentTree = baseTreeSha;
    addLog(`${t('log_commits')} ${total.toLocaleString()}`);

    for(const cm of commits){
      const treePayload = { tree:[{ path:'contribution-painter.txt', mode:'100644', type:'blob', sha:blob.sha }] };
      if(currentTree) treePayload.base_tree = currentTree;
      const tree = await api(token, 'POST', `/repos/${repo}/git/trees`, treePayload);
      const newCommit = await api(token, 'POST', `/repos/${repo}/git/commits`, {
        message: `painted ${cm.idx}`, tree: tree.sha,
        author:    { name:gitname, email:email, date:cm.date },
        committer: { name:gitname, email:email, date:cm.date },
        parents: currentSha ? [currentSha] : []
      });
      currentSha = newCommit.sha; currentTree = tree.sha;
      done++;
      const pct = Math.round(done/total*100);
      document.getElementById('bar').style.width = pct+'%';
      if(done%25===0 || done===total) addLog(`  [${pct}%] ${done}/${total}`);
    }

    addLog(t('log_updating'));
    if(baseSha){
      await api(token, 'PATCH', `/repos/${repo}/git/refs/heads/${branch}`, { sha:currentSha, force:true });
    } else {
      await api(token, 'POST', `/repos/${repo}/git/refs`, { ref:`refs/heads/${branch}`, sha:currentSha });
    }

    addLog(`${t('log_done')} github.com/${repo}`, 'ok');
    document.getElementById('bar').style.width = '100%';
    setStatus(`${t('status_done')} github.com/${repo}`, 'ok');

  }catch(e){
    addLog(t('log_error')+' '+e.message, 'err');
    setStatus(t('status_error')+' '+e.message, 'err');
  }
  btn.disabled = false;
}

document.getElementById('pushBtn').addEventListener('click', doPush);

// ── Init ──
setYear(new Date().getFullYear());
