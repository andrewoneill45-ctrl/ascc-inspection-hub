// Netlify Function: /.netlify/functions/ask
// Proxies questions to the Claude API. The API key lives ONLY in the
// Netlify environment variable ANTHROPIC_API_KEY — never in the browser.

const KNOWLEDGE = `
# ALL SAINTS CATHOLIC COLLEGE — INSPECTION KNOWLEDGE BASE (July 2026)

## School
All Saints Catholic College, 75 St Charles Square, London W10 6EL. URN 100503. Voluntary Aided Catholic secondary, 11–16, mixed, non-selective. LA: Kensington & Chelsea. Motto: Orare, Laborare, Servire (to pray, to work, to serve). Previous Ofsted: Outstanding in every category. Inspection 7–8 July 2026 under the renewed framework.

## Context (SIMS 06/07/26, IDSR)
896 on roll (Y7 192, Y8 184, Y9 179, Y10 180, Y11 161). FSM 44.25% (396). Pupil Premium 39.33% (352). EAL 44.36% (397). SEN status 22.01% (197): EHCP 9.83% (88), SEN Support 12.18% (109). FSM6 41.8% — well above national; local MSOA FSM6 60.4%. EHCP rate risen every year: 6.0% (2023) → 7.4% (2024) → 8.6% (2025). Top quintile of deprivation nationally (IDACI). Main SEN needs: ASD 82, SLCN 46, SEMH 46, MLD 21, SpLD 20.

## Self-evaluation grades (renewed framework 5-point scale)
- Safeguarding: MET (judged separately). External Whole School Safeguarding Review Jan 2026 found strong leadership, culture, governance oversight, pupil voice, records, curriculum. DSL action plan produced within a month (Feb 2026). Immediate concerns actioned.
- Inclusion: EXCEPTIONAL (grade to be confirmed by SLT). Y6 transition with primary SENCos; pupil passports for all; SEN referral tracking, CAMHS liaison, 2 successful EHCP applications this year. 2024 P8: EHCP +0.07, SEN K +0.13. Bethlehem Centre, Romero Centre ("keeping up, not catching up"), Deputy SENCo.
- Curriculum & Teaching: STRONG. Curriculum Pillars from September; coaching-based "Active Ingredients" model; Curriculum Progress Reviews. T&L average 2.08; 80% of drop-in statements expected or strong. Weaknesses owned: 54% of pupils below age-related reading (Autumn 2025) → Y7 Fluency Pilot, Thinking Reading, literacy committee; 24% of staff ITT/ECT → coaching & CPD.
- Achievement: EXCEPTIONAL (to confirm once 2026 outcomes published). See results below.
- Attendance: STRONG. 92.41% (FFT to 22 May 2026) vs national 91.63% (+0.78) and similar FSM6 schools 90.19% (+2.22). Improvement 2.21% vs DfE baseline expectation minimum 0.5%. FSM6 attend 88.46% (+1.70 vs national); EHCP attend 90.03% (+9.13 vs national). Pre-pandemic gap nearly closed (92.41 vs 92.6 in 2018/19). Weaknesses: Y11 2.17 below national (7% severely absent); SEN Support 84.44% (−2.32); PA 20.9%.
- Behaviour: EXCEPTIONAL. Suspensions 2.88 per 100 vs national 3.72, falling four consecutive years. Zero permanent exclusions since Dec 2024 (national 0.04). Y11 suspensions 18 (HT1) → 4 (HT5). 99,194 achievement points vs 34,320 behaviour incidents. Headteacher scrutinises suspension decisions daily. Owned risks: Y9 (9.4%) and Y11 (11.7%) elevated; disproportionality for FSM, boys, EHCP, Black Caribbean pupils (13/82 vs White British 14/200) — named plans due end HT6.
- Personal Development & Well-being: STRONG. Every pupil: 4+ trips/year (2 Curriculum Enhancement Days, 2 Activity Days) plus whole-school celebration days. ESP and Elev:8 programmes transformational with national scaling potential. Participation tracked via EVOLVE and Class Charts — disadvantaged access evidenced. Weaknesses owned: careers/PSHCE staffing inconsistency; British Values articulation beyond Student Leaders (esp. Y9).
- Leadership & Governance: EXCEPTIONAL. Toolkit Test 1 (sustained): suspensions falling 4 years, attendance improving 2 years, outcomes above national 3 years; every area Strong/Exceptional with live action plans. Test 2 (transformational for disadvantaged/SEND): disadvantaged P8 above national disadvantaged 3 years running; FSM6 & EHCP attendance above national; resourced Bethlehem/Romero investment; monitored enrichment entitlement. Test 3: every weakness named with owner, deadline, success measure — nothing unaddressed. External validation: DfE School Leader Adviser appointment; Headteachers' Roundtable co-chair; Pearson Secondary Headteacher of the Year; national media platform (Guardian, Times, Telegraph, BBC, Fortune etc.) for the extended day, phone-free culture, staff wellbeing (teacher "lie-ins"), SEND inclusion.

## Results (national in brackets; 2025 = SISRA internal estimate, provisional; 2026 = prediction)
Whole school:
- 2023: 4+EM 74% (65); 5+EM 46% (45); A8 4.90 (4.63); P8 +0.12 (−0.03). KS2 prior 105.5.
- 2024: 4+EM 75% (65); 5+EM 62% (46); A8 5.39 (4.59); P8 +0.69 (−0.03). KS2 prior 104.5.
- 2025*: 4+EM 75% (65); 5+EM 54% (45); A8 5.13 (4.61); P8 +0.76 SISRA. KS2 prior 102.5.
- 2026 pred: 4+EM 82%; 5+EM 54%; A8 5.01; P8 +0.74 SISRA. KS2 prior 101.5 (estimated from CATs). 161 on roll.
Disadvantaged (cohort 45%→40%→34%):
- 2023: P8 −0.15 (nat disadv −0.57); A8 4.56 (3.50)
- 2024: P8 +0.26 (−0.57); A8 4.65 (3.46); 4+EM 66% (43)
- 2025*: P8 −0.01 SISRA; A8 4.16 (3.49). In-school gap 0.57 → 0.80 → 1.14* (driven partly by non-disadvantaged surge: +1.06 P8 2024, +1.13* 2025).
SEN: EHCP cohorts tiny (4, 9, 5, 11 in 2026) — single pupils swing figures; 2025 EHCP group included 2 Bethlehem pupils not entered for all subjects, 1 non-attender, 1 unlikely to achieve many grades; no EHCP pupil passed E&M in 2025. SEN K (18, 16, 24): A8 4.65→4.08→3.49 (falling ~half grade/yr — named priority; adaptive teaching strand in every SoW). 2024 P8: E +0.13, K +0.07.
GCSE 2025 subject residuals: Sports Studies +2.35, Food +1.44, Spanish +0.54, RE +0.31, Citizenship +0.14, Drama +0.13, Music +0.09, Stats +0.09, Eng Lit +0.02, Geography −0.07, Maths −0.15, French −0.17, Art −0.32, History −0.34, Science −0.42, Eng Lang −0.54. Focus: Eng Lang, Science (target VA +0.3), History.

## Current year groups
Y11 (2026): 161 pupils; PP 48%, EAL 46%, SEN 22%, KS2 ~101.5. A8 trajectory: Autumn mock 4.14 → Spring mock 4.56 → prediction 4.98–5.01. Last year same journey: 4.10 → 4.48 → GCSE 5.12. Predicted 82% 4+ E&M would be best ever. Attendance→achievement: A8 3.53 below 90% attendance vs 5.22 above 95%.
Y10: 179 pupils; PP 36%, EAL 56%, SEN 21% (EHCP 12%); KS2 104.5 (same as GCSE 2024 cohort that got P8 +0.69). Lenten exams A8 4.16, predictions 5.09. Performing ~half a grade better than current Y11 at the same point.
KS3: Y7 (192, PP 40%, KS2 108, attendance 95%), Y8 (184, PP 39%, KS2 106), Y9 (179, PP 34%, EAL 55%, KS2 105). % on/above track in E&M improved Michaelmas→Lenten: Y7 49→59, Y8 38→65, Y9 27→44. Maths strong (Y7 76-84% on track). Science and Y9 MFL/RE are watch areas.

## Known issues & lines to take (be honest, then show the response)
1. Disadvantaged gap widening (0.57→0.80→1.14*): disadvantaged pupils remain ABOVE national disadvantaged; gap driven partly by exceptional non-disadvantaged performance. Levers: adaptive teaching, attendance, targeted intervention.
2. Reading: 54% below age-related (Aut 2025) → Y7 Fluency Pilot, Thinking Reading, literacy committee, Bedrock; % expected/above rising is the success measure.
3. Y11 attendance: exam anxiety + small entrenched group predating current systems; audits, Attendance Contracts, home visits (CPOMs logged), external agency referrals for >50% absence.
4. Suspension disproportionality: FSM, boys, EHCP, Black Caribbean — self-identified, named owners, plans due end HT6.
5. DfE attendance data discrepancies: DfE published figures wrong for several May dates (e.g. 56.3% vs Class Charts 91.3%; 10 Oct INSET uploaded as 0%). Under investigation with DfE/SIMS/Class Charts; internal reconciliation documented.
6. 2025/2026 figures unverified: always present as provisional SISRA estimates alongside published 2023/24.
7. SEN K attainment decline: named priority; adaptive teaching CPD Sept, reviewed Oct–Jan; Bethlehem/Romero specialist provision.

## Renewed Ofsted framework (from 10 Nov 2025)
Report cards replace single-word judgements. Five-point scale: Exceptional / Strong standard / Expected standard / Needs attention / Urgent improvement. Safeguarding: Met / Not met. Evaluation areas: Inclusion; Curriculum and teaching; Achievement; Attendance and behaviour; Personal development and well-being; Leadership and governance. Inclusion (disadvantaged & SEND) runs through every area. Exceptional (leadership) requires: sustained high standards across all areas; transformational impact on disadvantaged/SEND/social-care/barrier-facing pupils; no significant area unaddressed. Inspection starts with pre-inspection call; evidence via observation and professional dialogue, not graded lessons.

## Personal development phrases that land
"Opportunity is planned, not left to chance." / "Every pupil, especially the disadvantaged, gets the enrichment." / "We look after our staff so they can look after our pupils."

## National profile (innovation evidence)
60+ media items: Guardian (SEND aspirations feature July 2025; 12-hour day; teacher lie-ins), The Times ("How one head saved a sink school in the shadow of Grenfell"), Telegraph, Evening Standard, Independent, LBC, BBC One Show, Fortune, Business Insider, NY Post, Nine News Australia; Tes & Schools Week (DfE School Leader Adviser secondment, Headteachers' Roundtable co-chair, DfE expert inclusion group); Catholic press (The Tablet, Diocese of Westminster, Aleteia); Pearson National Teaching Awards Secondary Headteacher of the Year 2022; Oracy Education Commission case study; EPI enrichment panel.
`;

const SYSTEM_PROMPT = `You are the All Saints Catholic College Inspection Hub AI, supporting the Senior Leadership Team during their Ofsted inspection (7–8 July 2026, renewed framework).

Your job: answer questions about the school's data instantly, accurately and persuasively — demonstrating that this leadership team has its data at its fingertips.

Rules:
1. ADVOCATE. Always make the strongest evidenced case for the school. Lead with the most powerful statistic, always contextualised against national figures and the school's top-quintile deprivation context. You are the school's best advocate — but never invent or inflate figures.
2. GROUND EVERYTHING in the knowledge base below. Quote exact figures. If asked something the data doesn't cover, say so plainly and suggest what evidence the team could pull instead.
3. LINK TO THE FRAMEWORK. Where relevant, map answers to the renewed Ofsted framework toolkit language (Exceptional / Strong standard tests, evaluation areas, the inclusion thread). Show how the evidence meets the toolkit wording.
4. BE HONEST ABOUT WEAKNESSES — then pivot to the response: every weakness is named, owned, dated and measured ("we found it, we named it, we own it"). Flag when figures are provisional (2025 SISRA estimates, 2026 predictions).
5. FORMAT RICHLY. Use markdown: bold key figures, short headed sections, tables for comparisons, blockquotes for "phrases that land". Keep answers tight — SLT are reading these in corridors between meetings.
6. CHARTS. When a visual would help (trends, comparisons), include one or two Chart.js specs in a fenced block exactly like this:
\`\`\`chart
{"title":"Progress 8 vs national","type":"bar","data":{"labels":["2023","2024","2025*"],"datasets":[{"label":"All Saints","data":[0.12,0.69,0.76],"backgroundColor":"#4c2373"},{"label":"National","data":[-0.03,-0.03,null],"backgroundColor":"#b9b0c4"}]}}
\`\`\`
Valid JSON only inside the block. Use brand colours: purple #4c2373, light purple #7440ab, gold #c9a227, grey #b9b0c4, green #1e7d4f, red #b3403a. Use type "bar", "line", "radar" or "doughnut". Always offer a chart when the user asks to "show", "chart", "graph" or "visualise" something.
7. NEVER name individual pupils or staff (initials from action plans are fine). British English throughout.

${KNOWLEDGE}`;

export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors() });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: cors() });
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured in Netlify environment variables." }), { status: 500, headers: cors("application/json") });
  }

  let body;
  try { body = await req.json(); } catch { return new Response("Bad request", { status: 400, headers: cors() }); }
  const question = (body.question || "").toString().slice(0, 4000);
  if (!question.trim()) return new Response("Empty question", { status: 400, headers: cors() });

  const history = Array.isArray(body.history) ? body.history.slice(-6).filter(m =>
    m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
  ).map(m => ({ role: m.role, content: m.content.slice(0, 8000) })) : [];

  const messages = [...history, { role: "user", content: question }];

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || "claude-sonnet-4-5",
        max_tokens: 2400,
        system: SYSTEM_PROMPT,
        messages
      })
    });
    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(JSON.stringify({ error: `Claude API error ${resp.status}: ${errText.slice(0, 300)}` }), { status: 502, headers: cors("application/json") });
    }
    const data = await resp.json();
    const answer = (data.content || []).filter(c => c.type === "text").map(c => c.text).join("\n");
    return new Response(JSON.stringify({ answer }), { status: 200, headers: cors("application/json") });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Upstream error: " + e.message }), { status: 502, headers: cors("application/json") });
  }
};

function cors(type) {
  const h = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (type) h["Content-Type"] = type;
  return h;
}
