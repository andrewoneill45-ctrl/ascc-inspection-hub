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
- Curriculum & Teaching: STRONG. Curriculum Pillars from September; coaching-based "Active Ingredients" model; Curriculum Progress Reviews. T&L average 2.08; 80% of drop-in statements expected or strong. National recognition: Headteacher appointed Schools Policy and Delivery Adviser to the Secretary of State. Weaknesses owned: 54% of pupils below age-related reading (Autumn 2025) → Y7 Fluency Pilot, Thinking Reading, literacy committee; 24% of staff ITT/ECT → coaching & CPD.
- Achievement: EXCEPTIONAL (to confirm once 2026 outcomes published). See results below.
- Attendance: STRONG. 92.41% (FFT to 22 May 2026) vs national 91.63% (+0.78) and similar FSM6 schools 90.19% (+2.22). Improvement 2.21% vs DfE baseline expectation minimum 0.5%. FSM6 attend 88.46% (+1.70 vs national); EHCP attend 90.03% (+9.13 vs national). Pre-pandemic gap nearly closed (92.41 vs 92.6 in 2018/19). Weaknesses: Y11 2.17 below national (7% severely absent); SEN Support 84.44% (−2.32); PA 20.9%.
- Behaviour: EXCEPTIONAL. Four-year analysis (BEHAVIOUR-OFSTED doc, authoritative): suspensions 262 (2022-23, 112 pupils) → 319 (2023-24 peak, 142 pupils) → 183 (2024-25, 88 pupils) → 143 (2025-26 HT1-5, 75 pupils) = 43.9% sustained fall from peak, on course for lowest full-year total. 8.3% of cohort suspended this year vs ~17% in 2023-24; days lost down 61% from peak; repeat-suspension rate 77.9% → 67.0% (stable 2 years). Rate 2.88 per 100 vs national 3.72. PERMANENT EXCLUSIONS 7 → 3 → 2 → 0 (national avg ~2-3/yr; below national since 2024-25; zero this year). PEX context: 2022-23's seven were dominated by one isolated group drugs incident; every PEX since involved drugs, a weapon or serious assault after prior intervention — proportionate, accountable decisions. System: every suspension authorised by the Headteacher, HT+AHT scrutinise every incident (SENCo/DSL join where relevant); graduated response; Emmaus Centre internal provision + structured off-site direction as alternatives; reintegration meeting after every suspension; repeat suspension triggers provision review. Y11 suspensions 18 (HT1) → 4 (HT5). 99,194 achievement points vs 34,320 incidents (~3:1). Owned risks: Y9 (9.4%) and Y11 (11.7%) elevated; disproportionality for FSM, boys, EHCP, Black Caribbean pupils (13/82 vs White British 14/200) — named plans due end HT6; line to take: reflects concentrated complex need, answer is better support not lower expectations (same pupils' outcomes: disadvantaged P8 +0.26 vs −0.57; 2024 disadvantaged beat national NON-disadvantaged by +0.09). Phrase that lands: "Seven, three, two, zero — more inclusive and more proactive without abandoning firm boundaries."
- Personal Development & Well-being: STRONG. Every pupil: 4+ trips/year (2 Curriculum Enhancement Days, 2 Activity Days) plus whole-school celebration days. ESP and Elev:8 programmes transformational with national scaling potential. Participation tracked via EVOLVE and Class Charts — disadvantaged access evidenced. Weaknesses owned: careers/PSHCE staffing inconsistency; British Values articulation beyond Student Leaders (esp. Y9).
- Leadership & Governance: EXCEPTIONAL. Toolkit Test 1 (sustained): suspensions falling 4 years, attendance improving 2 years, outcomes above national 3 years; every area Strong/Exceptional with live action plans. Test 2 (transformational for disadvantaged/SEND): disadvantaged P8 above national disadvantaged 3 years running; FSM6 & EHCP attendance above national; resourced Bethlehem/Romero investment; monitored enrichment entitlement. Test 3: every weakness named with owner, deadline, success measure — nothing unaddressed. External validation: Headteacher appointed Schools Policy and Delivery Adviser to the Secretary of State (his correct, current title — do not call him "School Leader Adviser"); Headteachers' Roundtable co-chair; Pearson Secondary Headteacher of the Year; national media platform (Guardian, Times, Telegraph, BBC, Fortune etc.) for the extended day, phone-free culture, staff wellbeing (teacher "lie-ins"), SEND inclusion.

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

## Enrichment — DfE Enrichment Framework (published 15 June 2026): ALL 8 BENCHMARKS MET
Key line: the framework caught up with All Saints — the extended enrichment day, tracked participation and Elev:8 already delivered every benchmark before publication.
Club data (Class Charts, full year 2025-26, HT1-6): 35 clubs by summer term; 404 unique pupils in at least one club (45% of roll); 3,695 logged attendances; 84% of participants sustained involvement across both halves of the year. Attendances per half term MORE THAN DOUBLED after the summer Elev:8 expansion (~431/HT in HT1-4 → ~986/HT in HT5-6; six new Elev:8 clubs: Table Tennis — instantly 2nd biggest club with 52 members — Making the Leap, ReAct Theatre, Gardening, Art, Theatre Design).
KILLER STAT — enrichment drives attendance: club members' whole-school attendance 94.52% vs 87.28% for non-members (+7.2pts); PP members 92.41% vs 82.99% PP non-members (+9.4); SEN members 92.65% vs 80.55% (+12.1); pupils with 10+ club visits attend at 95.49%. Present as association not proven causation, but it is the engine of the attendance strategy — belonging drives attendance.
Participation by year group: Y7 73%, Y8 91% (the 'dip' year is now the MOST engaged cohort — Elev:8 working), Y9 29%, Y10 21%, Y11 4% (KS4 shifts into revision/intervention by design). Parity: PP 34.4% of members vs 39.3% of roll; SEN 20.5% vs 22.0%; EAL 39.4% vs 44.3%; every KS2 prior-attainment band participates (HPA 63%, MPA 54%, LPA ~40%). All five DfE activity categories covered (civic engagement via Faith in Action/The Mission/student voice; arts via Schola Cantorum/theatre design/ReAct/K-Pop; outdoors via PGL residential/gardening/Green Club; sport via 13+ clubs incl. girls' football and table tennis; life & future skills via cooking ×3/Making the Leap/London Leaders/coding).
Benchmarks 1-8 in brief: 1 strategic (SEF priority, named owners, extended day timetabled) · 2 broad (all 5 categories, regular, in-school-day P7) · 3 communicated & celebrated (stars, EVOLVE, London Leaders rewards, awards) · 4 community-shaped (pupil voice created K-Pop/film & philosophy clubs; staff expertise shapes offer) · 5 accessible (tracked PP/SEN parity; free uniform/PE kit for all; funded places; free Y11 prom tickets) · 6 partnership (PGL, London businesses, West London Zone, GRIT, NHS therapies, Catholic Children's Society) · 7 outcomes-focused (Class Charts participation cross-referenced with attendance/behaviour/progress; Compass+ careers) · 8 continually improving (impact tracking priority live Sept; Elev:8 itself designed from our own data).

## Elev:8 — innovation ahead of the curve (Year 8 dip)
Professor John Jerrim (UCL IoE) documents the collapse in pupil engagement between end of Y7 and Y8. Our own matched-pupil data shows it: attendance change vs same pupils last year = Y7→Y8 −2.29pts (worst transition), Y8→Y9 +0.25, Y9→Y10 −0.78, Y10→Y11 −0.53. Elev:8 redesigns Year 8 around this: whole-cohort PGL Liddington residential (HT1), compulsory weekly P7 Enrichment (creative arts, STEM, literacy/spoken word, sport, enterprise/coding), aspiration assemblies & role models, London Leaders business challenge (stars for attendance/effort/clubs; top 20 win a central-London leadership day), inter-house music & sport competitions (HT4). Designed BEFORE the DfE framework was published; grounded in Jerrim + EEF extending-school-time conditions (structured, enriched). Y11 counterpoint: 64% of Y11 pupils IMPROVED attendance vs their Y10 year — against the national trend of decline into exam year.

## Student & Parent Voice (2025-26 surveys, ~700 responses across 6 instruments)
PARENTS (Y7 n=52 + Y10 n=30 = 82): 100% say their child feels safe (82/82 — quote this); 99% safe & respectful environment; 100% would recommend the school (84% 'very likely'); 100% satisfied with teaching (76% very); 99% enrichment valuable (82% very); 96% child appropriately challenged; 95% communication effective; 94% views listened to; 95% child happy. Y7 transition rated 4-5/5 by 87%; 29/30 Y10 parents say reports/parents' evenings 'very helpful'.
EVENTS: Culture Day n=416 — 90% enjoyed (3-4/4), 94% said it made them feel they BELONG to the All Saints community. All Saints Day n=97 — production and team-building most loved; suggestions feed next year (DfE enrichment benchmark 8 in action). Y10 Careers Day n=33 — 76% rated 4-5/5; employer sessions (banking, The Economist, Nando's data analytics) cited.
PUPIL PANEL (n=43, deliberately candid): 91% agree school encourages kindness/respect/helping others; 100% feel safe at least sometimes (70% often/always); 74% treated fairly regardless of gender/race/faith; 72% comfortable being themselves. HONEST FLAGS (all pre-owned in the SEF — present as evidence of a listening school): only 37% say opinions often/always listened to (named priority DWI/NKE); 51% certain who to talk to about a worry (visibility campaign from Sept; external review found children DO know the team); 56% say staff deal with unkind behaviour often/always (feeds restorative-practice strand). Line: "every flag the panel raised was already a named priority before the survey closed."
Good verbatim quotes: "Everyone gets a chance to feel proud of who they are and where they come from" (Culture Day pupil); "The school organises and teaches a subject really well and clearly — and the events are simply outstanding" (pupil); "Communication from the school has always been excellent" (Y7 parent); "Keeping students safe. The safeguarding team" (pupil, asked what school does well).

## Safeguarding culture (July 2026 report)
External audit: evidence base "exemplary"; culture of "always striving to be better". All 145 staff trained (KCSIE annual, Prevent, online safety, FGM external); 12 Level 3 DSL/DDSLs; Operation Encompass trained; Safer Recruitment trained admin + HT + DSL; SCR fully compliant & audited. Everyone knows the 5 Rs (Recognise, Respond, Report, Record, Refer); daily safeguarding updates in pastoral briefings; scenario training from serious case reviews. Pupil voice: every child knows the safeguarding team and Childline. CPOMS live and rapid, with evidence of appropriately challenging social care. Securus digital monitoring. Monthly online-safety newsletters to families (AI, nudify apps, manosphere, deepfakes...). Vigilance logged not hidden: 45 bullying + 5 racist incidents recorded & acted on; 11 social-care referrals summer term; 41 active/pending Early Help cases tracked. Permeates everything: attendance (home visits CPOMS-logged, DSL leads both), SEND (16 external partnerships incl. CAMHS ×2, art therapy, NHS SaLT/OT, West London Zone), community (free uniform/PE kit for ALL, vouchers, free prom tickets), transition (vulnerable Y7s identified pre-arrival), system leadership (DSL audited a Westminster primary June 2026; spoke at national attendance conference; school in DfE RISE Behaviour & Attendance Hub). Waiting on 16 Early Help allocations from LAs — named as the school's biggest external challenge (we escalate, the system lags).

## EEF Teaching & Learning Toolkit alignment (evidence-led, innovation-minded)
Cite these when explaining WHY the school does what it does (months = EEF average additional progress; Toolkit updated May 2025):
- Active Ingredients coaching (modelling, questioning, responsive teaching) → Metacognition & self-regulation: +8 months, the Toolkit's highest-impact strand (upgraded from +7 in May 2025).
- Thinking Reading + comprehension strategies → Reading comprehension strategies: +7 months (upgraded May 2025).
- Oracy as a Curriculum Pillar in every SoW; Oracy Education Commission case study → Oral language interventions: high impact.
- Y7 Fluency Pilot (decoding/fluency for older struggling readers) → Phonics: +5 months.
- Book quality priority (live feedback, pupil response) → Feedback: +6 months.
- Y11 targeted intervention groups → Small group tuition: +4 months; individual tuition for E&M borderline pupils → One to one tuition: +5 months.
- Tier 3 vocabulary pre-teaching (Bedrock) → Oral language interventions.
- Work-outside-lessons priority → Homework (secondary): +5 months.
- Bethlehem/Romero trained staff delivering structured interventions → Teaching assistant interventions: +4 months (effective when structured — our model); small-group provision → Small group tuition: +4.
- Pupil passports / adaptive teaching → Individualised instruction: +4 months.
- Attendance Contracts, home visits, family work → Parental engagement strand (updated May 2025).
- Whole-school consistency + targeted support for persistent cases → Behaviour interventions strand (EEF: targeted approaches most promising — exactly our model).
- Restorative reintegration & Elev:8 character work → Social & emotional learning strand.
- Extended enrichment day → Extending school time strand (EEF: works when structured and enriched — ours is); arts clubs/Schola → Arts participation: +3 months; daily sport → Physical activity strand.
- Coaching CPD cycle → EEF Effective Professional Development guidance report (build knowledge, motivate, develop techniques, embed practice).
- PP strategy → EEF tiered model: quality-first teaching first, then targeted academic support, then wider strategies.
CAUTION: EEF's May 2025 update cut Mentoring to 0 months average — never cite mentoring as an attainment strategy; frame our mentoring as pastoral/belonging work. Frame the extended day and phone-free culture as innovation AHEAD of the evidence base (structured per EEF conditions, nationally studied) — "evidence-led where evidence exists, innovation-minded where we're ahead of it."

## Personal development phrases that land
"Opportunity is planned, not left to chance." / "Every pupil, especially the disadvantaged, gets the enrichment." / "We look after our staff so they can look after our pupils."

## National profile (innovation evidence)
60+ media items: Guardian (SEND aspirations feature July 2025; 12-hour day; teacher lie-ins), The Times ("How one head saved a sink school in the shadow of Grenfell"), Telegraph, Evening Standard, Independent, LBC, BBC One Show, Fortune, Business Insider, NY Post, Nine News Australia; Tes & Schools Week (DfE secondment — now Schools Policy and Delivery Adviser to the Secretary of State, Headteachers' Roundtable co-chair, DfE expert inclusion group); Catholic press (The Tablet, Diocese of Westminster, Aleteia); Pearson National Teaching Awards Secondary Headteacher of the Year 2022; Oracy Education Commission case study; EPI enrichment panel.
`;

const SYSTEM_PROMPT = `You are the All Saints Catholic College Inspection Hub AI, supporting the Senior Leadership Team during their Ofsted inspection (7–8 July 2026, renewed framework).

Your job: answer questions about the school's data instantly, accurately and persuasively — demonstrating that this leadership team has its data at its fingertips.

Rules:
1. ADVOCATE. Always make the strongest evidenced case for the school. Lead with the most powerful statistic, always contextualised against national figures and the school's top-quintile deprivation context. You are the school's best advocate — but never invent or inflate figures.
2. GROUND EVERYTHING in the knowledge base below. Quote exact figures. If asked something the data doesn't cover, say so plainly and suggest what evidence the team could pull instead.
3. LINK TO THE FRAMEWORK. Where relevant, map answers to the renewed Ofsted framework toolkit language (Exceptional / Strong standard tests, evaluation areas, the inclusion thread). Show how the evidence meets the toolkit wording. Also cite the EEF Teaching & Learning Toolkit alignment (see knowledge base) when explaining the school's choice of strategy — the school is evidence-led AND innovation-minded, and inspectors should hear both.
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
    // Stream the answer. Netlify's synchronous functions are killed after ~10s
    // ("Inactivity Timeout"); a streamed response keeps the connection alive
    // and shows the answer appearing live in the browser.
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || "claude-sonnet-4-5",
        max_tokens: 2000,
        stream: true,
        system: SYSTEM_PROMPT,
        messages
      })
    });
    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(JSON.stringify({ error: `Claude API error ${resp.status}: ${errText.slice(0, 300)}` }), { status: 502, headers: cors("application/json") });
    }

    // Parse Anthropic's SSE stream and forward plain text deltas.
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const reader = resp.body.getReader();
    const stream = new ReadableStream({
      async start(controller) {
        let buffer = "";
        const handleLine = (line) => {
          if (!line.startsWith("data:")) return;
          const payload = line.slice(5).trim();
          if (!payload || payload === "[DONE]") return;
          try {
            const ev = JSON.parse(payload);
            if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(ev.delta.text));
            }
            if (ev.type === "error") {
              controller.enqueue(encoder.encode("\n\n**Service error:** " + ((ev.error && ev.error.message) || "unknown")));
            }
          } catch { /* ignore partial JSON */ }
        };
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop(); // keep incomplete line
            for (const line of lines) handleLine(line);
          }
          if (buffer) handleLine(buffer);
          controller.close();
        } catch (e) {
          try { controller.enqueue(encoder.encode("\n\n**Connection error:** " + e.message)); } catch {}
          try { controller.close(); } catch {}
        }
      },
      cancel() { reader.cancel(); }
    });

    return new Response(stream, {
      status: 200,
      headers: cors("text/plain; charset=utf-8")
    });
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
