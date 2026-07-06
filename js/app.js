/* All Saints Catholic College — Inspection Hub app */
(() => {
"use strict";

const PASS_HASH = "6aa7cf32c63f4934451127465f1dac3b26a98632e9b6daff475a738c8cd2d9e2";
const BRAND = {
  purple: "#4c2373", purpleLight: "#7440ab", purpleFaint: "#c9b3e0",
  gold: "#c9a227", green: "#1e7d4f", red: "#b3403a", grey: "#b9b0c4", amber: "#b07f10"
};

/* ---------------- Login ---------------- */
async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}
function unlock() {
  document.getElementById("login").style.display = "none";
  document.getElementById("app").classList.add("active");
  initApp();
}
document.getElementById("login-form").addEventListener("submit", async e => {
  e.preventDefault();
  const val = document.getElementById("password").value;
  if (await sha256(val) === PASS_HASH) {
    sessionStorage.setItem("ascc_auth", PASS_HASH);
    unlock();
  } else {
    document.getElementById("login-error").textContent = "Incorrect password — please try again.";
    document.getElementById("password").value = "";
  }
});

/* ---------------- Router ---------------- */
let appInitialised = false;
const rendered = {};
function initApp() {
  if (appInitialised) return;
  appInitialised = true;
  document.getElementById("tabs").addEventListener("click", e => {
    const btn = e.target.closest("button[data-view]");
    if (!btn) return;
    showView(btn.dataset.view);
  });
  showView("dashboard");
}
function showView(name) {
  document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  document.querySelectorAll("section.view").forEach(s => s.classList.toggle("active", s.id === "view-" + name));
  if (!rendered[name]) { RENDER[name](); rendered[name] = true; }
  window.scrollTo({ top: 0 });
}
window.gotoView = showView;

/* ---------------- Helpers ---------------- */
const el = (id) => document.getElementById(id);
function h(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content; }
function pillClass(grade) {
  if (grade === "Met") return "met";
  return grade.toLowerCase().includes("exceptional") ? "exceptional" : "strong";
}
let chartIdSeq = 0;
function makeChart(containerId, config) {
  const wrap = el(containerId);
  const canvas = document.createElement("canvas");
  wrap.appendChild(canvas);
  Chart.defaults.font.family = "Inter, sans-serif";
  Chart.defaults.color = "#6b6176";
  new Chart(canvas, config);
}

/* ================= DASHBOARD ================= */
function renderDashboard() {
  const c = ASCC.context, s = ASCC.school;
  el("view-dashboard").appendChild(h(`
    <div class="view-head">
      <h2>The All Saints story, at a glance</h2>
      <p>${c.keyLine}</p>
    </div>
    <div class="grid cols-4" style="margin-bottom:18px">
      <div class="card stat"><div class="num">+0.69</div><div class="lbl">Progress 8, 2024 (published)</div><div class="ctx">vs −0.03 national · 3rd year above national</div></div>
      <div class="card stat"><div class="num">+0.26</div><div class="lbl">Disadvantaged P8, 2024</div><div class="ctx">vs −0.57 national disadvantaged</div></div>
      <div class="card stat"><div class="num">92.41%</div><div class="lbl">Attendance (FFT, May 2026)</div><div class="ctx">+0.78 vs national · +2.22 vs similar schools</div></div>
      <div class="card stat"><div class="num">0</div><div class="lbl">Permanent exclusions</div><div class="ctx">since Dec 2024 · suspensions 2.88 vs 3.72 national</div></div>
    </div>
    <div class="grid cols-4" style="margin-bottom:26px">
      <div class="card stat"><div class="num">${c.fsm.pct}%</div><div class="lbl">Free School Meals (${c.fsm.n} pupils)</div><div class="ctx neutral">FSM6 41.8% — well above national</div></div>
      <div class="card stat"><div class="num">${c.ehcp.pct}%</div><div class="lbl">EHC Plans (${c.ehcp.n} pupils)</div><div class="ctx neutral">Well above average, rising each year</div></div>
      <div class="card stat"><div class="num">${c.eal.pct}%</div><div class="lbl">English as an Additional Language</div><div class="ctx neutral">${c.eal.n} pupils</div></div>
      <div class="card stat"><div class="num">Top 20%</div><div class="lbl">Deprivation nationally (IDACI)</div><div class="ctx neutral">Local FSM6 60.4% — well above average</div></div>
    </div>
    <div class="grid cols-2">
      <div class="card">
        <h3>Self-evaluation summary — renewed framework</h3>
        <div id="dash-sef"></div>
        <p class="note">Click any area for the full evidence base and priorities — or open the <a href="#" onclick="gotoView('sef');return false;">Self-Evaluation</a> tab.</p>
      </div>
      <div class="card chart-card">
        <h3>Progress 8 vs national</h3>
        <div class="chart-wrap" id="dash-p8"></div>
        <p class="note">2025 is a SISRA estimate (provisional); 2026 is a prediction. 2023 &amp; 2024 are published.</p>
      </div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>Inspection context — what this school is</h3>
      <p style="font-size:0.9rem">${s.name} is a ${s.type} in ${s.la} (${s.address}). Previous inspection: <strong>${s.lastOfsted}</strong>. Motto: <strong>${s.motto}</strong> — <em>${s.mottoMeaning}</em>. ${c.onRoll} pupils on roll across ${s.years}. The school is nationally known for the extended enrichment day, phone-free culture, staff-wellbeing innovation and system leadership — see <a href="#" onclick="gotoView('media');return false;">Innovation &amp; Press</a>.</p>
    </div>
  `));
  const dashSef = el("dash-sef");
  ASCC.sef.forEach(a => {
    dashSef.appendChild(h(`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line);cursor:pointer" onclick="gotoView('sef')">
        <span style="font-size:0.9rem;font-weight:550">${a.area}</span>
        <span class="pill ${pillClass(a.grade)}">${a.grade}</span>
      </div>`));
  });
  const ws = ASCC.results.wholeSchool;
  makeChart("dash-p8", {
    type: "bar",
    data: {
      labels: ws.map(r => r.year),
      datasets: [
        { label: "All Saints", data: ws.map(r => r.p8), backgroundColor: BRAND.purple, borderRadius: 6 },
        { label: "National", data: ws.map(r => r.p8Nat), backgroundColor: BRAND.grey, borderRadius: 6 }
      ]
    },
    options: { maintainAspectRatio: false, scales: { y: { title: { display: true, text: "Progress 8" } } } }
  });
}

/* ================= SEF ================= */
function renderSef() {
  const v = el("view-sef");
  v.appendChild(h(`
    <div class="view-head">
      <h2>Self-Evaluation — July 2026</h2>
      <p>Eight evaluation areas mapped to the renewed framework toolkit. Every identified weakness carries a named owner, milestone and success measure — <em>nothing is sitting unaddressed</em>.</p>
    </div>
    <div id="sef-list"></div>
  `));
  const list = el("sef-list");
  ASCC.sef.forEach(a => {
    const evid = a.evidence.map(x => `<li>${x}</li>`).join("");
    const dev = a.development.map(x => `<li>${x}</li>`).join("");
    const prio = a.priorities.map(p => `<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td></tr>`).join("");
    const phrases = a.phrases ? `<h4>Phrases that land</h4>` + a.phrases.map(p => `<span class="phrase">“${p}”</span>`).join("") : "";
    const note = a.note ? `<span style="font-size:0.72rem;color:var(--muted);font-style:italic">${a.note}</span>` : "";
    const item = h(`
      <div class="sef-item" id="sef-${a.id}">
        <button class="sef-head">
          <span class="area">${a.area}</span>${note}
          <span class="pill ${pillClass(a.grade)}">${a.grade}</span>
          <span class="chev">▾</span>
        </button>
        <div class="sef-body">
          <div class="sef-headline">${a.headline}</div>
          <div class="sef-cols">
            <div><h4>Headline evidence</h4><ul>${evid}</ul></div>
            <div class="dev"><h4>We know, we act — development areas</h4><ul>${dev}</ul></div>
          </div>
          <h4>Priorities to January 2027</h4>
          <table class="prio"><tr><th>Priority / action</th><th>Owner</th><th>Milestone</th></tr>${prio}</table>
          ${phrases}
        </div>
      </div>`);
    list.appendChild(item);
  });
  list.addEventListener("click", e => {
    const head = e.target.closest(".sef-head");
    if (head) head.parentElement.classList.toggle("open");
  });
}

/* ================= RESULTS ================= */
function renderResults() {
  const r = ASCC.results;
  el("view-results").appendChild(h(`
    <div class="view-head">
      <h2>Results &amp; Trends</h2>
      <p>${r.resultsNote}</p>
    </div>
    <div class="grid cols-2" style="margin-bottom:18px">
      <div class="card chart-card"><h3>Attainment 8 vs national</h3><div class="chart-wrap" id="rc-a8"></div></div>
      <div class="card chart-card"><h3>Progress 8 vs national</h3><div class="chart-wrap" id="rc-p8"></div></div>
      <div class="card chart-card"><h3>4+ &amp; 5+ in English &amp; Maths</h3><div class="chart-wrap" id="rc-em"></div>
        <p class="note">4+ E&amp;M has held at 74–75% (national 65%) despite falling KS2 priors — and 2026 is predicted at <strong>82%</strong>, which would be the school's best ever.</p></div>
      <div class="card chart-card"><h3>Disadvantaged Progress 8 vs national disadvantaged</h3><div class="chart-wrap" id="rc-dis"></div>
        <p class="note">${r.gapNote}</p></div>
    </div>
    <div class="card" style="margin-bottom:18px">
      <h3>SEND outcomes — small cohorts, honest picture</h3>
      <div class="chart-wrap" id="rc-sen" style="height:260px"></div>
      <p class="note">${r.senNote}</p>
    </div>
    <div class="card">
      <h3>GCSE 2025 by subject (provisional)</h3>
      <table class="data" id="rc-subjects">
        <tr><th>Subject</th><th>Pupils</th><th>4+ %</th><th>5+ %</th><th>7+ %</th><th>Residual</th></tr>
      </table>
      <p class="note">Standouts: Sports Studies residual +2.35, Food &amp; Nutrition +1.44, Spanish +0.54 (100% 4+ and 5+), RE +0.31. Focus subjects: English Language (−0.54) and Combined Science (−0.42) — both carry named priorities and intervention plans in the SEF.</p>
    </div>
  `));
  const ws = r.wholeSchool;
  makeChart("rc-a8", { type: "bar", data: { labels: ws.map(x => x.year), datasets: [
    { label: "All Saints", data: ws.map(x => x.a8), backgroundColor: BRAND.purple, borderRadius: 6 },
    { label: "National", data: ws.map(x => x.a8Nat), backgroundColor: BRAND.grey, borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, scales: { y: { min: 4, title: { display: true, text: "Attainment 8" } } } } });
  makeChart("rc-p8", { type: "line", data: { labels: ws.map(x => x.year), datasets: [
    { label: "All Saints", data: ws.map(x => x.p8), borderColor: BRAND.purple, backgroundColor: BRAND.purple, tension: 0.3, pointRadius: 5 },
    { label: "National", data: ws.map(x => x.p8Nat), borderColor: BRAND.grey, backgroundColor: BRAND.grey, borderDash: [6, 4], tension: 0.3 } ] },
    options: { maintainAspectRatio: false } });
  makeChart("rc-em", { type: "bar", data: { labels: ws.map(x => x.year), datasets: [
    { label: "4+ E&M (ASCC)", data: ws.map(x => x.em4), backgroundColor: BRAND.purple, borderRadius: 6 },
    { label: "4+ E&M (Nat)", data: ws.map(x => x.em4Nat), backgroundColor: BRAND.purpleFaint, borderRadius: 6 },
    { label: "5+ E&M (ASCC)", data: ws.map(x => x.em5), backgroundColor: BRAND.gold, borderRadius: 6 },
    { label: "5+ E&M (Nat)", data: ws.map(x => x.em5Nat), backgroundColor: "#e6d9ab", borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, scales: { y: { max: 100, title: { display: true, text: "%" } } } } });
  const dis = r.disadvantaged;
  makeChart("rc-dis", { type: "bar", data: { labels: dis.map(x => x.year), datasets: [
    { label: "ASCC disadvantaged", data: dis.map(x => x.p8), backgroundColor: BRAND.gold, borderRadius: 6 },
    { label: "National disadvantaged", data: dis.map(x => x.p8Nat), backgroundColor: BRAND.grey, borderRadius: 6 } ] },
    options: { maintainAspectRatio: false } });
  makeChart("rc-sen", { type: "bar", data: { labels: r.sen.map(x => x.year), datasets: [
    { label: "EHCP (E) A8", data: r.sen.map(x => x.e.a8), backgroundColor: BRAND.purple, borderRadius: 6 },
    { label: "SEN Support (K) A8", data: r.sen.map(x => x.k.a8), backgroundColor: BRAND.purpleLight, borderRadius: 6 },
    { label: "No SEN (N) A8", data: r.sen.map(x => x.none.a8), backgroundColor: BRAND.purpleFaint, borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, scales: { y: { title: { display: true, text: "Attainment 8" } } } } });
  const tbl = el("rc-subjects");
  r.gcse2025Subjects.forEach(s => {
    const resClass = s[5] >= 0.3 ? "good" : (s[5] <= -0.3 ? "bad" : "");
    tbl.appendChild(h(`<tr><td>${s[0]}</td><td>${s[1]}</td><td>${s[2]}</td><td>${s[3]}</td><td>${s[4]}</td><td class="${resClass}">${s[5] > 0 ? "+" : ""}${s[5].toFixed(2)}</td></tr>`));
  });
}

/* ================= YEAR GROUPS ================= */
function renderYears() {
  const y11 = ASCC.y11, y10 = ASCC.y10, ks3 = ASCC.ks3;
  el("view-years").appendChild(h(`
    <div class="view-head">
      <h2>Current Year Groups</h2>
      <p>In-year assessment shows the same pattern at every key stage: gaps identified early, intervention targeted, trajectories rising between assessment points.</p>
    </div>
    <div class="grid cols-2" style="margin-bottom:18px">
      <div class="card chart-card">
        <h3>Year 11 — mock-to-exam trajectory (Average A8)</h3>
        <div class="chart-wrap" id="yc-y11"></div>
        <p class="note">${y11.trajectory.note}</p>
      </div>
      <div class="card chart-card">
        <h3>Year 11 — attendance is achievement (Average A8 by attendance band)</h3>
        <div class="chart-wrap" id="yc-att"></div>
        <p class="note">${y11.attendanceNote}</p>
      </div>
    </div>
    <div class="grid cols-3" style="margin-bottom:18px">
      <div class="card stat"><div class="num">82%</div><div class="lbl">2026 predicted 4+ English &amp; Maths</div><div class="ctx">Best ever, from KS2 prior of 101.5</div></div>
      <div class="card stat"><div class="num">5.01</div><div class="lbl">2026 predicted Attainment 8</div><div class="ctx neutral">P8 prediction +0.74 (SISRA)</div></div>
      <div class="card stat"><div class="num">48%</div><div class="lbl">Y11 Pupil Premium</div><div class="ctx neutral">EAL 46% · SEN 22% — a high-need cohort</div></div>
    </div>
    <div class="card" style="margin-bottom:18px">
      <h3>Year 10 — Lenten 2026 snapshot</h3>
      <div class="chart-wrap" id="yc-y10" style="height:220px"></div>
      <p class="note">${y10.note}</p>
    </div>
    <div class="grid cols-2">
      <div class="card chart-card">
        <h3>KS3 — % on/above track in English &amp; Maths</h3>
        <div class="chart-wrap" id="yc-ks3"></div>
        <p class="note">${ks3.emOnTrack.note}</p>
      </div>
      <div class="card">
        <h3>KS3 year-group profiles</h3>
        <table class="data"><tr><th>Year</th><th>Pupils</th><th>PP</th><th>EAL</th><th>SEN</th><th>Attendance</th><th>Avg KS2</th></tr>
        ${ks3.profiles.map(p => `<tr><td>${p.year}</td><td>${p.n}</td><td>${p.pp}</td><td>${p.eal}</td><td>${p.sen}</td><td>${p.att}</td><td>${p.ks2}</td></tr>`).join("")}
        </table>
        <p class="note">Y7 KS2 average of 108 is the strongest intake in years, with 95% attendance — evidence that the school's reputation and transition work are compounding.</p>
      </div>
    </div>
  `));
  makeChart("yc-y11", { type: "line", data: { labels: y11.trajectory.labels, datasets: [
    { label: "Current Y11 (2026)", data: y11.trajectory.thisYear, borderColor: BRAND.purple, backgroundColor: BRAND.purple, tension: 0.3, pointRadius: 5 },
    { label: "Last year's Y11 → GCSE 5.12", data: y11.trajectory.lastYearMocks, borderColor: BRAND.gold, backgroundColor: BRAND.gold, borderDash: [6, 4], tension: 0.3, pointRadius: 5 } ] },
    options: { maintainAspectRatio: false, scales: { y: { min: 3.5, max: 5.5 } } } });
  makeChart("yc-att", { type: "bar", data: { labels: y11.attendanceImpact.map(x => x[0]), datasets: [
    { label: "Average A8", data: y11.attendanceImpact.map(x => x[1]), backgroundColor: [BRAND.red, BRAND.purpleLight, BRAND.green], borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false } } } });
  makeChart("yc-y10", { type: "bar", data: { labels: ["Lenten exams 2026", "Lenten predictions 2026", "GCSE 2024 (same KS2 profile)"], datasets: [
    { label: "Average A8", data: [y10.lenten.examA8, y10.lenten.predA8, y10.lenten.gcse24A8], backgroundColor: [BRAND.purpleFaint, BRAND.purple, BRAND.gold], borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, indexAxis: "y", plugins: { legend: { display: false } } } });
  makeChart("yc-ks3", { type: "bar", data: { labels: ks3.emOnTrack.labels, datasets: [
    { label: "Michaelmas", data: ks3.emOnTrack.michaelmas, backgroundColor: BRAND.purpleFaint, borderRadius: 6 },
    { label: "Lenten", data: ks3.emOnTrack.lenten, backgroundColor: BRAND.purple, borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, scales: { y: { max: 100, title: { display: true, text: "% on/above track (E&M)" } } } } });
}

/* ================= CLIMATE (attendance & behaviour) ================= */
function renderClimate() {
  const at = ASCC.attendance, be = ASCC.behaviour;
  el("view-climate").appendChild(h(`
    <div class="view-head">
      <h2>Attendance &amp; Behaviour</h2>
      <p>Above-national attendance and below-national suspensions, in a top-quintile deprivation context — sustained direction of travel across multiple years, not a single good year.</p>
    </div>
    <div class="grid cols-2" style="margin-bottom:18px">
      <div class="card chart-card"><h3>Attendance vs benchmarks (2025/26, FFT to 22 May)</h3><div class="chart-wrap" id="cc-att"></div>
        <p class="note">Improvement vs DfE baseline expectation: <strong>2.21% actual vs 0.5% minimum</strong> — more than four times the required rate.</p></div>
      <div class="card chart-card"><h3>Vulnerable groups vs national equivalents</h3><div class="chart-wrap" id="cc-groups"></div>
        <p class="note">EHCP pupils attend <strong>9.13 points above</strong> the national EHCP figure. SEN Support (84.44%) is the named gap — targets: ≥87.5% and PA &lt;35% by Jan 2027, every pupil &lt;90% with a named contact and plan.</p></div>
      <div class="card chart-card"><h3>Suspension rate per 100 pupils</h3><div class="chart-wrap" id="cc-susp"></div>
        <p class="note">${be.conduct}</p></div>
      <div class="card chart-card"><h3>Year 11 suspensions by half term</h3><div class="chart-wrap" id="cc-y11s"></div>
        <p class="note">${be.y11TrendNote}</p></div>
    </div>
    <div class="grid cols-2">
      <div class="card">
        <h3>Known lines to hold</h3>
        <ul style="margin-left:18px;font-size:0.88rem">
          <li style="margin-bottom:8px"><strong>Year 11 attendance (78.6% SIMS in-year; 2.17 below national on FFT):</strong> exam pressure, anxiety and a small number of entrenched cases predating current systems. Response: audit of every incoming Y11 below 90%, Attendance Contracts with every Y10 PA/SA family before September, home visits for every severely absent pupil logged on CPOMs.</li>
          <li style="margin-bottom:8px"><strong>Persistent absence (20.9%):</strong> target &lt;20% by Jan 2027 with attendance ambassadors and individual targets set by Oct 2026.</li>
          <li style="margin-bottom:8px"><strong>Suspension disproportionality (FSM, boys, EHCP, Black Caribbean):</strong> named priority, plans due end of HT6, reviewed HT1/HT2 — we found it, we named it, we own it.</li>
          <li><strong>DfE data discrepancy:</strong> ${at.dfeNote}</li>
        </ul>
      </div>
      <div class="card chart-card"><h3>In-year attendance by year group (SIMS)</h3><div class="chart-wrap" id="cc-byyear"></div>
        <p class="note">SIMS in-year figure (90.03% overall) differs from the FFT/DfE benchmarked 92.41% — known platform discrepancies are documented with an explanation ready for inspectors.</p></div>
    </div>
  `));
  makeChart("cc-att", { type: "bar", data: { labels: at.bars.map(x => x[0]), datasets: [
    { label: "Attendance %", data: at.bars.map(x => x[1]), backgroundColor: [BRAND.purple, BRAND.grey, BRAND.grey, BRAND.purpleFaint], borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, indexAxis: "y", plugins: { legend: { display: false } }, scales: { x: { min: 88, max: 94 } } } });
  makeChart("cc-groups", { type: "bar", data: { labels: at.groups.map(x => x[0]), datasets: [
    { label: "All Saints", data: at.groups.map(x => x[1]), backgroundColor: BRAND.purple, borderRadius: 6 },
    { label: "National equivalent", data: at.groups.map(x => x[2]), backgroundColor: BRAND.grey, borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, scales: { y: { min: 75, max: 95 } } } });
  makeChart("cc-susp", { type: "bar", data: { labels: ["All Saints", "National"], datasets: [
    { label: "Suspensions per 100 pupils", data: [be.suspensionRate.ascc, be.suspensionRate.national], backgroundColor: [BRAND.purple, BRAND.grey], borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false } } } });
  makeChart("cc-y11s", { type: "line", data: { labels: be.y11Trend.map(x => x[0]), datasets: [
    { label: "Y11 suspensions", data: be.y11Trend.map(x => x[1]), borderColor: BRAND.purple, backgroundColor: "rgba(76,35,115,0.12)", fill: true, tension: 0.3, pointRadius: 5 } ] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false } } } });
  makeChart("cc-byyear", { type: "bar", data: { labels: at.byYearSims.map(x => x[0]), datasets: [
    { label: "Attendance %", data: at.byYearSims.map(x => x[1]), backgroundColor: at.byYearSims.map(x => x[1] < 85 ? BRAND.amber : BRAND.purple), borderRadius: 6 } ] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 70, max: 100 } } } });
}

/* ================= CONNECTIONS GRAPH ================= */
const EDGE_STYLE = {
  drives:    { color: "#4c2373", dash: null,      label: "Drives / feeds" },
  evidences: { color: "#c9a227", dash: "7,5",     label: "Evidences / validates" },
  watches:   { color: "#b3403a", dash: "2,5",     label: "Known risk being managed" },
  underpins: { color: "#1e7d4f", dash: "12,4",    label: "Ethos underpins" }
};
const NODE_STYLE = {
  pillar:  { fill: "#4c2373", stroke: "#2a1245", text: "Evaluation area" },
  driver:  { fill: "#7440ab", stroke: "#4c2373", text: "System / programme" },
  outcome: { fill: "#c9a227", stroke: "#8a6a0d", text: "Signature outcome" },
  risk:    { fill: "#fff", stroke: "#b3403a", text: "Named risk (owned)" }
};

function renderGraph() {
  el("view-graph").appendChild(h(`
    <div class="view-head">
      <h2>How it all connects</h2>
      <p>The school as a system: Catholic ethos and leadership drive the engines (coaching, data, pastoral systems, enrichment), which power the evaluation areas and signature outcomes. Red dotted links mark the risks we have already named and own. Drag nodes, hover for detail, click to pin.</p>
    </div>
    <div class="graph-filters" id="graph-filters">
      <button data-t="all" class="on">All connections</button>
      <button data-t="drives">Drives</button>
      <button data-t="evidences">Evidences</button>
      <button data-t="watches">Risks</button>
      <button data-t="underpins">Ethos</button>
    </div>
    <div class="graph-layout">
      <div id="graph-svg-wrap">
        <svg id="graph-svg"></svg>
        <div class="graph-legend" id="graph-legend"></div>
      </div>
      <div class="card" id="graph-detail">
        <h3>Talk across the school</h3>
        <p class="placeholder">Click any node to bring up its key data and every intersection — the lines a leader can walk an inspector along. Hover to preview; drag to rearrange.</p>
      </div>
    </div>
  `));

  const legend = el("graph-legend");
  Object.values(EDGE_STYLE).forEach(s => legend.appendChild(h(
    `<div class="row"><span class="legend-line" style="border-color:${s.color};border-top-style:${s.dash ? "dashed" : "solid"}"></span>${s.label}</div>`)));
  Object.values(NODE_STYLE).forEach(s => legend.appendChild(h(
    `<div class="row"><span class="legend-dot" style="background:${s.fill};border:2px solid ${s.stroke}"></span>${s.text}</div>`)));

  const svg = el("graph-svg");
  const W = Math.max(svg.clientWidth || 0, 1000), H = 760;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  const NS = "http://www.w3.org/2000/svg";

  const nodes = ASCC.graph.nodes.map(n => ({ ...n,
    x: W / 2 + (Math.random() - 0.5) * W * 0.7,
    y: H / 2 + (Math.random() - 0.5) * H * 0.7, vx: 0, vy: 0 }));
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const links = ASCC.graph.links.map(l => ({ ...l, a: byId[l.s], b: byId[l.t] }));

  const gLinks = document.createElementNS(NS, "g");
  const gNodes = document.createElementNS(NS, "g");
  svg.appendChild(gLinks); svg.appendChild(gNodes);

  links.forEach(l => {
    const st = EDGE_STYLE[l.type];
    const line = document.createElementNS(NS, "line");
    line.setAttribute("stroke", st.color);
    line.setAttribute("stroke-width", l.type === "drives" ? 2.4 : 2);
    line.setAttribute("stroke-opacity", 0.55);
    if (st.dash) line.setAttribute("stroke-dasharray", st.dash);
    gLinks.appendChild(line);
    l.el = line;
  });
  nodes.forEach(n => {
    const st = NODE_STYLE[n.type];
    const g = document.createElementNS(NS, "g");
    g.style.cursor = "pointer";
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("r", n.size);
    c.setAttribute("fill", st.fill);
    c.setAttribute("stroke", st.stroke);
    c.setAttribute("stroke-width", 2.5);
    const t = document.createElementNS(NS, "text");
    t.textContent = n.label;
    t.setAttribute("text-anchor", "middle");
    t.setAttribute("font-size", "10");
    t.setAttribute("font-weight", "650");
    t.setAttribute("fill", "#2a1245");
    t.setAttribute("pointer-events", "none");
    g.appendChild(c); g.appendChild(t);
    gNodes.appendChild(g);
    n.el = g; n.circle = c; n.text = t;
    g.addEventListener("mouseenter", () => { if (!pinned) showDetail(n); highlight(n); });
    g.addEventListener("mouseleave", () => { if (!pinned) clearHighlight(); });
    g.addEventListener("click", ev => { ev.stopPropagation(); pinned = n; showDetail(n); highlight(n); });
    // drag
    g.addEventListener("pointerdown", ev => {
      ev.preventDefault(); dragging = n; n.fixed = true;
      svg.setPointerCapture(ev.pointerId);
    });
  });
  svg.addEventListener("pointermove", ev => {
    if (!dragging) return;
    const pt = svgPoint(ev);
    dragging.x = pt.x; dragging.y = pt.y; kick();
  });
  svg.addEventListener("pointerup", () => { if (dragging) { dragging.fixed = false; dragging = null; } });
  svg.addEventListener("click", () => { pinned = null; clearHighlight(); });

  function svgPoint(ev) {
    const p = svg.createSVGPoint(); p.x = ev.clientX; p.y = ev.clientY;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  }

  let dragging = null, pinned = null;
  function highlight(n) {
    const connected = new Set([n.id]);
    links.forEach(l => {
      const on = l.s === n.id || l.t === n.id;
      if (on) { connected.add(l.s); connected.add(l.t); }
      l.el.setAttribute("stroke-opacity", on ? 0.95 : 0.12);
    });
    nodes.forEach(m => m.el.setAttribute("opacity", connected.has(m.id) ? 1 : 0.25));
  }
  function clearHighlight() {
    links.forEach(l => l.el.setAttribute("stroke-opacity", l.hidden ? 0 : 0.55));
    nodes.forEach(m => m.el.setAttribute("opacity", 1));
    const d = el("graph-detail");
    d.innerHTML = `<h3>Talk across the school</h3><p class="placeholder">Click any node to bring up its key data and every intersection — the lines a leader can walk an inspector along. Hover to preview; drag to rearrange.</p>`;
  }
  function showDetail(n) {
    const st = NODE_STYLE[n.type];
    const stats = (n.stats || []).map(s => `<li>${s}</li>`).join("");
    const conns = links.filter(l => l.s === n.id || l.t === n.id).map(l => {
      const other = l.s === n.id ? byId[l.t] : byId[l.s];
      const es = EDGE_STYLE[l.type];
      return `
        <div class="conn" data-node="${other.id}">
          <div class="conn-head">
            <span class="conn-type" style="color:${es.color}">${es.label}</span>
            <span class="conn-target">${other.label}</span>
          </div>
          ${l.why ? `<div class="conn-why">${l.why}</div>` : ""}
        </div>`;
    }).join("");
    el("graph-detail").innerHTML = `
      <span class="type-tag" style="color:${st.stroke}">${st.text}${n.grade ? " · " + n.grade : ""}</span>
      <h3>${n.label}</h3>
      <p style="font-size:0.84rem">${n.desc}</p>
      <h4 style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--purple-700);margin-top:14px">Key data</h4>
      <ul class="node-stats">${stats}</ul>
      <h4 style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--purple-700);margin-top:14px">Intersections — the lines to walk</h4>
      <div class="conn-list">${conns}</div>`;
    el("graph-detail").querySelectorAll(".conn").forEach(c => {
      c.addEventListener("click", () => {
        const m = byId[c.dataset.node];
        if (m) { pinned = m; showDetail(m); highlight(m); }
      });
    });
  }

  // filters
  el("graph-filters").addEventListener("click", e => {
    const b = e.target.closest("button[data-t]"); if (!b) return;
    document.querySelectorAll("#graph-filters button").forEach(x => x.classList.toggle("on", x === b));
    const t = b.dataset.t;
    links.forEach(l => {
      l.hidden = t !== "all" && l.type !== t;
      l.el.setAttribute("stroke-opacity", l.hidden ? 0 : 0.55);
    });
  });

  // force simulation
  let alpha = 1, running = true;
  function kick() { alpha = Math.max(alpha, 0.3); if (!running) { running = true; tick(); } }
  function tick() {
    alpha *= 0.985;
    if (alpha < 0.005) { running = false; return; }
    // repulsion
    for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      let dx = b.x - a.x, dy = b.y - a.y;
      let d2 = dx * dx + dy * dy || 1; const d = Math.sqrt(d2);
      const rep = 5200 / d2;
      const rx = dx / d * rep, ry = dy / d * rep;
      if (!a.fixed) { a.vx -= rx; a.vy -= ry; }
      if (!b.fixed) { b.vx += rx; b.vy += ry; }
    }
    // springs
    links.forEach(l => {
      const dx = l.b.x - l.a.x, dy = l.b.y - l.a.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 1;
      const target = 165 + (l.a.size + l.b.size);
      const f = (d - target) * 0.012;
      const fx = dx / d * f, fy = dy / d * f;
      if (!l.a.fixed) { l.a.vx += fx; l.a.vy += fy; }
      if (!l.b.fixed) { l.b.vx -= fx; l.b.vy -= fy; }
    });
    // centre gravity + integrate
    nodes.forEach(n => {
      if (!n.fixed) {
        n.vx += (W / 2 - n.x) * 0.0022; n.vy += (H / 2 - n.y) * 0.0028;
        n.vx *= 0.82; n.vy *= 0.82;
        n.x += n.vx * alpha * 2.2; n.y += n.vy * alpha * 2.2;
      }
      n.x = Math.max(n.size + 8, Math.min(W - n.size - 8, n.x));
      n.y = Math.max(n.size + 20, Math.min(H - n.size - 24, n.y));
    });
    draw();
    requestAnimationFrame(tick);
  }
  function draw() {
    links.forEach(l => {
      l.el.setAttribute("x1", l.a.x); l.el.setAttribute("y1", l.a.y);
      l.el.setAttribute("x2", l.b.x); l.el.setAttribute("y2", l.b.y);
    });
    nodes.forEach(n => {
      n.circle.setAttribute("cx", n.x); n.circle.setAttribute("cy", n.y);
      n.text.setAttribute("x", n.x); n.text.setAttribute("y", n.y + n.size + 14);
    });
  }
  tick();
}

/* ================= FRAMEWORK ================= */
function renderFramework() {
  const f = ASCC.framework;
  const scaleColors = ["#c9a227", "#4c2373", "#7440ab", "#b07f10", "#b3403a"];
  el("view-framework").appendChild(h(`
    <div class="view-head">
      <h2>The Renewed Ofsted Framework</h2>
      <p>${f.summary}</p>
    </div>
    <div class="grid cols-2">
      <div class="card">
        <h3>The five-point scale</h3>
        ${f.scale.map((s, i) => `
          <div class="scale-row">
            <div class="scale-num" style="background:${scaleColors[i]}">${5 - i}</div>
            <div><div class="t">${s[0]}</div><div class="d">${s[1]}</div></div>
          </div>`).join("")}
      </div>
      <div class="card">
        <h3>Evaluation areas on the report card</h3>
        <ul style="margin-left:18px;font-size:0.9rem">${f.areas.map(a => `<li style="margin-bottom:8px">${a}</li>`).join("")}</ul>
        <h4>Inclusion runs through everything</h4>
        <p style="font-size:0.88rem">${f.inclusion}</p>
        <h4>How the inspection runs</h4>
        <p style="font-size:0.88rem">${f.process}</p>
      </div>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>Our self-evaluation against the framework</h3>
      <table class="data">
        <tr><th>Evaluation area</th><th>Self-assessment</th><th>One-line case</th></tr>
        ${ASCC.sef.map(a => `<tr><td><strong>${a.area}</strong></td><td><span class="pill ${pillClass(a.grade)}">${a.grade}</span></td><td style="font-size:0.82rem">${a.headline.split("—")[0].split(".")[0]}.</td></tr>`).join("")}
      </table>
    </div>
  `));
}

/* ================= MEDIA ================= */
function renderMedia() {
  const v = el("view-media");
  const total = ASCC.media.reduce((n, g) => n + g.items.length, 0);
  v.appendChild(h(`
    <div class="view-head">
      <h2>An innovator with a national platform</h2>
      <p>${total} pieces of national, international, sector and faith-press coverage. All Saints is not just a strong school — it is a school that shapes national policy and practice: the extended enrichment day, the phone-free culture, staff-wellbeing innovation, SEND inclusion, and the Headteacher's DfE School Leader Adviser role and Headteachers' Roundtable co-chairmanship.</p>
    </div>
    <div id="media-groups"></div>
  `));
  const wrap = el("media-groups");
  ASCC.media.forEach(g => {
    const grp = h(`
      <div class="media-group">
        <h3>${g.icon} ${g.group}</h3>
        <div class="count">${g.items.length} item${g.items.length > 1 ? "s" : ""}</div>
        <div class="media-grid">
          ${g.items.map(i => `
            <a class="media-card" href="${i[2]}" target="_blank" rel="noopener">
              <div class="outlet">${i[0]}</div>
              <div class="headline">${i[1]}</div>
            </a>`).join("")}
        </div>
      </div>`);
    wrap.appendChild(grp);
  });
}

/* ================= ASK ================= */
const askHistory = [];
function renderAsk() {
  el("view-ask").appendChild(h(`
    <div class="view-head">
      <h2>✦ Ask the Hub</h2>
      <p>Interrogate the school's data in plain English. Answers are grounded in the SEF, results and the renewed Ofsted framework — and always make the strongest evidenced case for All Saints. Ask for a chart and you'll get one.</p>
    </div>
    <div class="ask-layout">
      <div class="ask-panel">
        <div class="ask-messages" id="ask-messages">
          <div class="msg ai">
            <div class="who">Inspection Hub AI</div>
            <div class="bubble"><p>I hold the full July 2026 SEF, three years of results, current mock and KS3 data, attendance and behaviour analysis, and the renewed Ofsted framework. Ask me anything — a killer statistic, a line to take, a chart for a meeting, or a rehearsal answer to a hard inspector question.</p></div>
          </div>
        </div>
        <div class="ask-status" id="ask-status"></div>
        <div class="ask-input">
          <textarea id="ask-text" placeholder="e.g. Make the case that our behaviour is Exceptional…" rows="1"></textarea>
          <button id="ask-send">Ask</button>
        </div>
      </div>
      <div class="ask-side">
        <div class="card">
          <h3>Try asking…</h3>
          <div id="ask-suggs"></div>
        </div>
        <div class="card">
          <h3>How it works</h3>
          <p style="font-size:0.8rem;color:var(--muted)">Questions are answered by Claude via a secure Netlify function — the API key never reaches the browser. Responses can include charts, tables and toolkit references. Always verify precise figures against the SEF before quoting to inspectors.</p>
        </div>
      </div>
    </div>
  `));
  const suggWrap = el("ask-suggs");
  ASCC.askSuggestions.forEach(s => {
    const b = h(`<button class="sugg">${s}</button>`).firstElementChild;
    b.addEventListener("click", () => { el("ask-text").value = s; sendAsk(); });
    suggWrap.appendChild(b);
  });
  el("ask-send").addEventListener("click", sendAsk);
  el("ask-text").addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendAsk(); }
  });
}

async function sendAsk() {
  const ta = el("ask-text"), btn = el("ask-send"), msgs = el("ask-messages");
  const q = ta.value.trim();
  if (!q || btn.disabled) return;
  ta.value = "";
  msgs.appendChild(h(`<div class="msg user"><div class="who">You</div><div class="bubble">${escapeHtml(q)}</div></div>`));
  const typing = h(`<div class="msg ai"><div class="who">Inspection Hub AI</div><div class="bubble typing"><span></span><span></span><span></span></div></div>`).firstElementChild;
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
  btn.disabled = true;
  el("ask-status").textContent = "Thinking…";
  try {
    const res = await fetch("/.netlify/functions/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q, history: askHistory.slice(-6) })
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(res.status === 404
        ? "The Ask function isn't available. If you're viewing this locally, deploy to Netlify (with ANTHROPIC_API_KEY set) to enable Ask."
        : `Service error (${res.status}): ${err.slice(0, 200)}`);
    }
    const data = await res.json();
    askHistory.push({ role: "user", content: q }, { role: "assistant", content: data.answer });
    typing.remove();
    renderAiMessage(msgs, data.answer);
  } catch (err) {
    typing.remove();
    msgs.appendChild(h(`<div class="msg ai"><div class="who">Inspection Hub AI</div><div class="bubble"><p><strong>Couldn't answer:</strong> ${escapeHtml(err.message)}</p></div></div>`));
  }
  btn.disabled = false;
  el("ask-status").textContent = "";
  msgs.scrollTop = msgs.scrollHeight;
}

function renderAiMessage(msgs, text) {
  // Split out ```chart blocks
  const parts = text.split(/```chart\s*([\s\S]*?)```/g);
  const container = h(`<div class="msg ai"><div class="who">Inspection Hub AI</div><div class="bubble"></div></div>`).firstElementChild;
  const bubble = container.querySelector(".bubble");
  parts.forEach((part, i) => {
    if (i % 2 === 0) {
      if (part.trim()) {
        const div = document.createElement("div");
        div.innerHTML = DOMPurify.sanitize(marked.parse(part));
        bubble.appendChild(div);
      }
    } else {
      try {
        const spec = JSON.parse(part);
        const cid = "aichart-" + (++chartIdSeq);
        bubble.appendChild(h(`<div class="ai-chart">${spec.title ? `<h3 style="font-size:0.9rem;margin-bottom:8px">${escapeHtml(spec.title)}</h3>` : ""}<div class="cwrap" id="${cid}"></div></div>`));
        setTimeout(() => makeChart(cid, {
          type: spec.type || "bar",
          data: spec.data,
          options: Object.assign({ maintainAspectRatio: false }, spec.options || {})
        }), 0);
      } catch (e) {
        const pre = document.createElement("pre");
        pre.textContent = part;
        bubble.appendChild(pre);
      }
    }
  });
  msgs.appendChild(container);
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------------- Render map ---------------- */
const RENDER = {
  dashboard: renderDashboard, sef: renderSef, results: renderResults,
  years: renderYears, climate: renderClimate, graph: renderGraph,
  framework: renderFramework, media: renderMedia, ask: renderAsk
};

/* Auto-unlock for the current browser session (runs after all declarations) */
if (sessionStorage.getItem("ascc_auth") === PASS_HASH) unlock();

})();
