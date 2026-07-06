/* =========================================================
   All Saints Catholic College — Inspection Hub
   Central data file. Sources: SEF (July 2026), SIMS (06/07/26),
   IDSR URN 100503, ASCC Results Overview since 2023, GCSE 2025
   analysis, Y11 Spring Mock analysis 25-26, Y10 Lenten Overview
   2026, KS3 Progress Overview 2025-26.
   ========================================================= */

var ASCC = {

  school: {
    name: "All Saints Catholic College",
    motto: "Orare · Laborare · Servire",
    mottoMeaning: "To pray, to work, to serve",
    urn: "100503",
    la: "Kensington & Chelsea (RBKC)",
    address: "75 St Charles Square, London W10 6EL",
    type: "Voluntary Aided Catholic secondary, 11–16, mixed, non-selective",
    lastOfsted: "Outstanding in every category (previous framework)",
    inspection: "Renewed framework inspection · 7–8 July 2026"
  },

  context: {
    onRoll: 896,
    years: "Year 7 – Year 11",
    byYear: { y7: 192, y8: 184, y9: 179, y10: 180, y11: 161 },
    fsm: { pct: 44.25, n: 396 },
    pp: { pct: 39.33, n: 352 },
    eal: { pct: 44.36, n: 397 },
    medical: { pct: 28.83, n: 258 },
    sen: { pct: 22.01, n: 197 },
    ehcp: { pct: 9.83, n: 88 },
    senK: { pct: 12.18, n: 109 },
    fsm6: 41.8,
    localFsm6: 60.4,
    ehcpTrend: [ ["2023", 6.0], ["2024", 7.4], ["2025", 8.6] ],
    idaci: "Top quintile of deprivation nationally (IDACI)",
    senNeeds: [
      ["Autistic Spectrum Disorder", 82], ["Speech, Language & Communication", 46],
      ["Social, Emotional & Mental Health", 46], ["Moderate Learning Difficulty", 21],
      ["Specific Learning Difficulty", 20]
    ],
    keyLine: "A school in the top quintile of deprivation nationally, with well-above-average FSM6, EAL, SEND and a rising EHCP rate — achieving outcomes significantly above national averages for three consecutive years."
  },

  /* ---------- SEF: the eight evaluation areas ---------- */
  sef: [
    {
      id: "safeguarding", area: "Safeguarding", grade: "Met", scale: "met",
      headline: "Safeguarding is Met. An external Whole School Safeguarding Review (January 2026) found strong leadership, culture, governance oversight, pupil voice, records management and curriculum; the DSL produced an action plan within a month.",
      evidence: [
        "January 2026 external Whole School Safeguarding Review + February 2026 Safeguarding Action Plan — both ready to show on demand. The audit called the evidence base “exemplary” and described a culture of “always striving to be better”.",
        "Immediate concerns from the review already actioned; remaining actions tracked and ongoing.",
        "All 145 staff trained (KCSIE annual, Prevent, online safety, FGM); 12 Level 3-trained DSL/DDSLs; compliant, audited Single Central Record; every member of staff knows the 5 Rs.",
        "Culture is verifiable: pupil voice confirms all children know who to talk to; CPOMS evidences rapid follow-up, including appropriately challenging social care; Securus monitors digital safety; monthly online-safety newsletters reach every family.",
        "System leadership: the DSL audited a Westminster primary's safeguarding (June 2026) and spoke at a national attendance conference — practice strong enough that other schools borrow it. See the full culture picture on the Attendance tab.",
        "Parent voice is unanimous: 100% of surveyed parents (82/82, Y7 and Y10) say their child feels safe at school; 99% say the school promotes a safe and respectful environment."
      ],
      development: ["Persistent absence (20.9%) as a safeguarding-adjacent priority."],
      priorities: [
        ["Home visit for every severely absent pupil this half-term, logged on CPOMs", "Attendance & Safeguarding / HOY / HOKS", "July 2026"],
        ["Refresh all staff on CME & Early Help escalation triggers", "Attendance & Safeguarding", "July & Sept 2026"],
        ["Update CP&S Policy with Jan audit notes + KCSIE; cross-reference Attendance Policy", "DMG", "Sept 2026"]
      ]
    },
    {
      id: "inclusion", area: "Inclusion", grade: "Exceptional", scale: 5,
      headline: "An ambitious learning environment for pupils with additional needs that allows them to make good progress, develop their character, and gives parents genuine confidence in choosing All Saints.",
      evidence: [
        "Robust Y6 transition & initial assessment with primary SENCos and parents; every pupil has a support plan / pupil passport shaping department planning.",
        "SEN referrals tracked with CAMHS liaison and access-arrangement documentation; 2 successful EHCP applications this year — swift, accurate identification of need.",
        "2024 Progress 8: EHCP pupils +0.07, SEN Support +0.13 — positive progress in a school with well-above-average need.",
        "Deliberate resourcing: Deputy SENCo, Bethlehem Centre, Romero Centre ('keeping up, not catching up'), enhanced Attendance team.",
        "A mapped offer of 50+ provisions, all at £0 to families, with measured impact: Fresh Start pupils reading sounds up to 3× faster; Galilee literacy gains of 27–44 percentage points; NHS-target 1:1 speech therapy for 17 EHCP pupils — see the dedicated SEND tab."
      ],
      development: [
        "Some books don't always show the intended sequence; some pupils struggle to articulate prior learning — tracked with targeted plans.",
        "Inconsistency in how confidently some teachers probe understanding and adapt in the moment for pupils with SEND."
      ],
      priorities: [
        ["Adaptive teaching on every teacher's agenda from the outset", "BHO", "Half-termly checkpoints"],
        ["Maintain exceptional teaching standards in the Bethlehem Centre", "BHO / new KPI appointment", "Bi-weekly checkpoints"],
        ["Robust, systematic process for prompt identification of need", "BHO / LPA", "Half-termly checkpoints"],
        ["Romero Centre as a 'keeping up, not catching up' provision", "BHO / RWI", "Half-termly checkpoints"]
      ],
      eef: [
        { strand: "Teaching assistant interventions", impact: "+4 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/teaching-assistant-interventions", action: "Bethlehem & Romero Centre staff deliver structured, trained interventions — the model EEF finds effective, not generic in-class support." },
        { strand: "Small group tuition", impact: "+4 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/small-group-tuition", action: "Romero Centre 'keeping up, not catching up' provision runs on small-group teaching." },
        { strand: "Individualised instruction", impact: "+4 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/individualised-instruction", action: "Pupil passports shape department planning; adaptive teaching strand in every SoW." }
      ]
    },
    {
      id: "curriculum", area: "Curriculum & Teaching", grade: "Strong", scale: 4,
      headline: "An ambitious curriculum for every pupil, coherently sequenced so knowledge and foundational skills build securely over time, delivered through consistently strong, responsive teaching — despite significantly higher-than-average disadvantage, SEND and EHCPs.",
      evidence: [
        "Curriculum Pillars (fully implemented from September) and the coaching-based 'Active Ingredients' model give every subject a consistent, evidence-informed approach.",
        "Curriculum Progress Reviews (CPR) keep Schemes of Work live and continually refined.",
        "Whole-school T&L average 2.08; 80% of lesson drop-in statements rated expected or strong.",
        "2024 outcomes prove the curriculum is landing: Progress 8 +0.69 vs −0.03 national; Attainment 8 5.39 vs 4.59 national.",
        "Parents agree: 100% satisfied with the quality of teaching (76% 'very satisfied'); 96% say their child is appropriately challenged (Y7 & Y10 surveys, n=82).",
        "National recognition: Headteacher appointed Schools Policy and Delivery Adviser to the Secretary of State; senior leaders invited to speak externally on teaching and learning."
      ],
      development: [
        "Autumn 2025: 54% of pupils below or significantly below age-related reading expectations — Y7 Fluency Pilot, Thinking Reading and a new literacy committee address this from 2026.",
        "SEN and disadvantaged attainment gap remains live — SoW updated with an explicit adaptive-teaching strand.",
        "24% of teaching staff are ITTs or ECTs — some KS3 inconsistency, addressed through coaching and CPD."
      ],
      priorities: [
        ["Embed ASCC Pillars in every Scheme of Work, including oracy", "CDA / NGI / JAN", "July, Sept & Dec 2026"],
        ["Raise consistency & quality of books (presentation, live feedback, pupil response)", "CDA / NGI / JAN", "Sept, Nov & Jan"],
        ["Strengthen adaptive teaching for SEND, disadvantaged and LPA pupils", "NGI / BHO / JAN", "CPD Sept; reviewed Oct–Jan"],
        ["Increase % of pupils reading at/above age-related expectations", "NGI / LOS / JST", "Reading tests through the year"]
      ],
      eef: [
        { strand: "Metacognition & self-regulation", impact: "+8 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/metacognition-and-self-regulation", action: "The Active Ingredients coaching model builds explicit modelling, questioning and responsive teaching — the highest-impact strand in the Toolkit (upgraded May 2025)." },
        { strand: "Reading comprehension strategies", impact: "+7 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/reading-comprehension-strategies", action: "Thinking Reading and explicit comprehension strategies target the 54% below age-related expectations (upgraded May 2025)." },
        { strand: "Oral language interventions", impact: "High impact", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/oral-language-interventions", action: "Oracy written into every Scheme of Work as a Curriculum Pillar; ASCC is an Oracy Education Commission case study." },
        { strand: "Feedback", impact: "+6 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback", action: "Live feedback and pupil response is a named book-quality priority, verified through SLT scrutiny." },
        { strand: "Phonics", impact: "+5 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/phonics", action: "Y7 Fluency Pilot applies decoding & fluency evidence for older struggling readers." }
      ]
    },
    {
      id: "achievement", area: "Achievement", grade: "Exceptional", scale: 5,
      note: "To confirm once 2026 outcomes are published",
      headline: "Despite significantly higher-than-average disadvantage, SEND and EHCPs, pupils achieve highly and consistently — outcomes for disadvantaged pupils sustained above national averages for three years running.",
      evidence: [
        "2024 Progress 8 +0.69 vs −0.03 nationally; the majority of measures significantly above national for three consecutive years.",
        "Disadvantaged pupils 2024 Progress 8 +0.26 vs −0.57 national — sustained in a context of well-above-average deprivation.",
        "2025 (SISRA est.): A8 5.13 vs 4.61 national; P8 estimate +0.76; 2026 prediction: A8 5.01, P8 +0.74, 82% 4+ English & Maths.",
        "Assessment used intelligently at KS3/KS4 (data drops, reading data, Bedrock SAS) to trigger targeted, evaluated intervention."
      ],
      development: [
        "In-school gap between disadvantaged and non-disadvantaged has widened over two years even though disadvantaged pupils remain above national — adaptive teaching, attendance and targeted intervention are the levers.",
        "SEN K attainment has fallen since 2023; EHCP outcomes in 2025 affected by a very small, complex cohort (n=5–10)."
      ],
      priorities: [
        ["Improve outcomes for Lower Prior Attainers", "JAN / CDA / NGI", "July 2026 & Jan 2027"],
        ["Improve Science outcomes (target VA +0.3 or better)", "JAN / GSH", "Jan 2027"],
        ["Clearer tracking of intervention impact", "JAN", "Trial July 2026, expand Sept"],
        ["Clear expectations for work completed outside lessons", "JAN / CDA / BFO", "Oct & Jan checkpoints"]
      ],
      eef: [
        { strand: "Small group tuition", impact: "+4 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/small-group-tuition", action: "Year 11 intervention programmes run as targeted small groups triggered by data drops." },
        { strand: "One to one tuition", impact: "+5 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition", action: "Individual tuition deployed for borderline English & Maths pupils identified by mock analysis." },
        { strand: "Oral language interventions", impact: "High impact", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/oral-language-interventions", action: "Pre-teaching of Tier 3 vocabulary (Bedrock) closes the vocabulary gap before it becomes an attainment gap." },
        { strand: "Homework (secondary)", impact: "+5 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/homework", action: "Clear expectations for work completed outside lessons — a named priority to January 2027." }
      ]
    },
    {
      id: "attendance", area: "Attendance", grade: "Strong", scale: 4,
      headline: "Rigorous systems have driven sustained attendance improvement over two years; overall attendance is now above both the national average and similar schools despite a high-deprivation context.",
      evidence: [
        "92.41% (FFT, to 22 May 2026) — above FFT national (91.63%, +0.78) and well above similar FSM6 schools (90.19%, +2.22).",
        "Improvement is more than double the DfE Attendance Baseline Improvement Expectation (2.21% actual vs 0.5% minimum).",
        "FSM6 pupils attend at 88.46% (+1.70 vs national); EHCP pupils at 90.03% (+9.13 vs national) — the culture works for the pupils who need it most.",
        "Pre-pandemic recovery nearly complete: 92.41% vs 92.6% in 2018/19 — ahead of most similar schools."
      ],
      development: [
        "Year 11 attendance 2.17 points below national (3.17 in spring), 7% severely absent — exam pressure, anxiety and a small number of entrenched cases predating current systems.",
        "SEN Support pupils attend at 84.44% (−2.32 vs national) — the most complex-needs cohort; 14.3% of pupils on SEN Support vs 13.4% nationally.",
        "Known DfE data discrepancies (see Appendix A) being resolved with DfE / SIMS / Class Charts — explanation ready."
      ],
      priorities: [
        ["Audit every incoming Y11 below 90% attendance, categorised by cause", "DMG", "June 2026"],
        ["Contact all Y10 PA/SA families before September; Attendance Contracts agreed", "DMG / HOKS / HOY", "July 2026"],
        ["SEN Support attendance ≥87.5% and PA <35% by Jan 2027", "DMG / BHO / LPA", "September 2026"],
        ["Whole-school Persistent Absence below 20% by Jan 2027", "DMG / HOKS / HOY / Tutors", "October half-term review"]
      ],
      eef: [
        { strand: "Parental engagement", impact: "Updated May 2025", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/parental-engagement", action: "Attendance Contracts agreed with families, home visits and named contacts — attendance work built on the parental-engagement evidence base." }
      ]
    },
    {
      id: "behaviour", area: "Behaviour", grade: "Exceptional", scale: 5,
      headline: "Suspensions below national average and down 43.9% from the 2023–24 peak, permanent exclusions at zero (7 → 3 → 2 → 0 over four years), and a calm, purposeful environment day to day — sustained direction of travel, not a single good year.",
      evidence: [
        "Suspension rate 2.88 per 100 pupils vs national 3.72; suspensions 319 (2023–24 peak) → 183 → 143 (HT1–5) — a 43.9% sustained reduction, on course for the lowest full-year total in the dataset.",
        "Permanent exclusions 7 → 3 → 2 → 0 across four years — below national average; every past PEX involved a serious safeguarding risk (drugs, a weapon, serious assault) after prior intervention.",
        "8.3% of the cohort suspended this year vs ~17% in 2023–24; days lost to suspension down 61% from the peak; repeat-suspension rate down from 77.9% to a stable 67.0%.",
        "Graduated system: Emmaus Centre internal provision and 59 short reciprocal off-site directions (1–5 days, formal agreements with Kensington Aldridge Academy and Holland Park, parents always consulted) as the alternatives that made zero PEX possible; every suspension authorised by the Headteacher (SENCo/DSL joining where relevant) and followed by a reintegration meeting.",
        "Year 11 suspensions fell from 18 in HT1 to 4 by HT5 within this year; low-level behaviour resolved without escalation.",
        "The community feels it: 100% of parents say the school promotes a safe and respectful environment (81/82); 91% of the pupil panel agree the school encourages kindness and respect."
      ],
      development: [
        "Year 9 (9.4%) and Year 11 (11.7%, improving) suspension rates elevated vs Y7 (2.8%) and Y10 (4.4%) — a known national pattern for Y9.",
        "Suspension disproportionality: FSM pupils, boys, EHCP pupils and Black Caribbean pupils suspended at higher rates than peers — named priorities with plans due by end of this half-term."
      ],
      priorities: [
        ["Update suspension/internal monitoring and flagging system", "BFO", "New system for September"],
        ["Address Black Caribbean suspension disproportionality", "BFO / MEH / DHA", "Plan end HT6; reviewed HT1/HT2"],
        ["Monitor and address male over-representation in suspensions", "BFO / MEH / DHA", "End of HT6"],
        ["Reduce EHCP suspension rate through enhanced support", "BFO / MEH / DHA / BHO / LPA", "Ongoing"],
        ["Strengthen restorative/reintegration package", "BFO / MEH / SIG", "End of HT6"]
      ],
      eef: [
        { strand: "Behaviour interventions", impact: "Updated May 2025", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/behaviour-interventions", action: "EEF finds targeted approaches for persistent cases most promising — exactly our model: consistent whole-school policy plus enhanced support for the small group driving most incidents." },
        { strand: "Social & emotional learning", impact: "Updated May 2025", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/social-and-emotional-learning", action: "The restorative reintegration package for suspended pupils builds SEL skills rather than relying on sanction alone." }
      ]
    },
    {
      id: "personal", area: "Personal Development & Well-being", grade: "Strong", scale: 4,
      headline: "A rich, deliberate personal development offer — trips, enrichment, ESP and Elev:8 — reaches every pupil including the disadvantaged, alongside a well-planned PSHCE curriculum and a genuine focus on staff wellbeing.",
      evidence: [
        "Every pupil attends at least 4 trips a year (2 Curriculum Enhancement Days, 2 Activity Days) plus whole-school celebration days (Culture, All Saints, Feast, Sports).",
        "All 8 DfE Enrichment Framework benchmarks met (framework published June 2026 — our provision predates it). 404 pupils (45% of roll) in clubs, 3,695 logged attendances, 84% sustaining participation across the year.",
        "Enrichment is the engine of attendance: club members attend school at 94.5% vs 87.3% for non-members — +9.4 points for PP members and +12.1 for SEN members.",
        "Elev:8 is transformational and measurable: 91% of the whole Year 8 cohort in clubs — the national 'dip' year is now our most engaged year group.",
        "Participation tracked (EVOLVE trip attendance, Class Charts club 'stars') with PP/SEN/EAL flags — disadvantaged pupils demonstrably access the same offer.",
        "Voice data at scale: 94% of 416 Culture Day respondents said the day made them feel they belong to the All Saints community; 99% of parents call the enrichment offer valuable; 91% of the pupil panel agree the school encourages kindness, respect and helping others."
      ],
      development: [
        "Careers/PSHCE staffing has been inconsistent; impact tracking light on data — Compass+ and Class Charts close this from September.",
        "Confidence that every pupil (not just Student Leaders) can articulate British Values fluently needs strengthening, particularly in Year 9."
      ],
      priorities: [
        ["Consistent PSHCE delivery in form time; planned careers programme per year group", "RFU / careers lead", "Live for Sept"],
        ["Embed British Values language and student voice opportunities", "DWI / NKE", "Begin ASAP"],
        ["Track the impact of every trip, event and programme", "DWI / RFU", "Live from Sept"],
        ["Strengthen whole-school mentoring system", "DWI / MWI", "Centralised tracking"]
      ],
      eef: [
        { strand: "Extending school time", impact: "Updated May 2025", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/extending-school-time", action: "The extended enrichment day is structured and enriched — the conditions EEF identifies for extended time to pay off — and we innovated here before most of the sector." },
        { strand: "Arts participation", impact: "+3 months", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/arts-participation", action: "Schola Cantorum, music tech, drama and arts clubs give every pupil sustained arts participation." },
        { strand: "Physical activity", impact: "Updated May 2025", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/physical-activity", action: "Daily sport and activity within the extended day — wellbeing and engagement benefits beyond attainment." },
        { strand: "Social & emotional learning", impact: "Updated May 2025", url: "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/social-and-emotional-learning", action: "Elev:8 develops character, confidence and self-regulation deliberately, not incidentally." }
      ],
      phrases: ["Opportunity is planned, not left to chance", "Every pupil, especially the disadvantaged, gets the enrichment", "We look after our staff so they can look after our pupils"]
    },
    {
      id: "leadership", area: "Leadership & Governance", grade: "Exceptional", scale: 5,
      headline: "Exceptionally high standards of leadership and governance sustained over time: leaders at every level drive improvement across every evaluation area, with transformational impact on disadvantaged pupils, those with SEND, and those facing other barriers.",
      evidence: [
        "Test 1 (sustained): suspensions down 43.9% from the 2023–24 peak and permanent exclusions 7 → 3 → 2 → 0 over four years; attendance improving 2 years to above national; outcomes above national for 3 consecutive years. Every area self-assessed Strong or Exceptional with its own live action plan.",
        "Test 2 (transformational impact): disadvantaged P8 above national disadvantaged for 3 years (2024 +0.26 vs −0.57); FSM6 attendance +1.70 vs national; EHCP attendance +9.13 vs national; resourced investment in Bethlehem & Romero Centres; monitored enrichment entitlement.",
        "Test 3 (nothing unaddressed): every honest weakness in this SEF has a named owner, deadline and success measure. Nothing identified is sitting unaddressed.",
        "External validation: Headteacher appointed Schools Policy and Delivery Adviser to the Secretary of State; leaders speak nationally; Headteachers' Roundtable co-chair; Secondary Headteacher of the Year (Pearson National Teaching Awards)."
      ],
      development: [
        "Gather 2–3 concrete, named examples of governance challenge and leader response — ready to cite with dates and outcomes.",
        "Hold the Exceptional self-assessment against 2026 outcomes when published."
      ],
      priorities: [
        ["Named examples of governance challenge ready to cite", "Headteacher / Chair of Governors", "Before first call"],
        ["Leadership 'opening 60–90 seconds' script agreed and rehearsed with SLT", "Headteacher", "Before first call"],
        ["Confirm Exceptional grade against 2026 outcomes", "SLT", "Autumn 2026 review"]
      ],
      eef: [
        { strand: "Effective Professional Development (guidance report)", impact: "Guidance", url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/effective-professional-development", action: "The Active Ingredients coaching cycle mirrors the EEF's PD mechanisms: build knowledge, motivate, develop techniques, embed practice." },
        { strand: "EEF tiered Pupil Premium model", impact: "Guidance", url: "https://educationendowmentfoundation.org.uk/guidance-for-teachers/using-pupil-premium", action: "PP strategy follows the EEF tiers: quality-first teaching, targeted academic support, wider strategies (attendance & enrichment)." }
      ]
    }
  ],

  /* ---------- Results & trends ---------- */
  results: {
    wholeSchool: [
      { year: "2023", em4: 74, em4Nat: 65, em5: 46, em5Nat: 45, a8: 4.90, a8Nat: 4.63, p8: 0.12, p8Nat: -0.03 },
      { year: "2024", em4: 75, em4Nat: 65, em5: 62, em5Nat: 46, a8: 5.39, a8Nat: 4.59, p8: 0.69, p8Nat: -0.03 },
      { year: "2025*", em4: 75, em4Nat: 65, em5: 54, em5Nat: 45, a8: 5.13, a8Nat: 4.61, p8: 0.76, p8Nat: null },
      { year: "2026 pred", em4: 82, em4Nat: null, em5: 54, em5Nat: null, a8: 5.01, a8Nat: null, p8: 0.74, p8Nat: null }
    ],
    resultsNote: "2025 figures are internal SISRA estimates, not yet published or externally verified — presented to inspectors as provisional alongside confirmed 2023/2024 published data. 2026 figures are predictions (161 on roll; SISRA P8 basis: 224,449 students, 1,174 schools).",
    disadvantaged: [
      { year: "2023", p8: -0.15, p8Nat: -0.57, a8: 4.56, a8Nat: 3.50, cohortPct: 45 },
      { year: "2024", p8: 0.26, p8Nat: -0.57, a8: 4.65, a8Nat: 3.46, cohortPct: 40 },
      { year: "2025*", p8: -0.01, p8Nat: null, a8: 4.16, a8Nat: 3.49, cohortPct: 34 }
    ],
    gapNote: "In-school disadvantaged gap: 0.57 (2023) → 0.80 (2024) → 1.14 (2025 SISRA est.). Disadvantaged pupils remain above national disadvantaged averages; the gap is a named priority driven by rising non-disadvantaged performance (+1.06 P8 in 2024).",
    sen: [
      { year: "2023", e: { n: 4, a8: 2.21, p8: -0.40 }, k: { n: 18, a8: 4.65, p8: 0.27 }, none: { a8: 5.03, p8: 0.11 } },
      { year: "2024", e: { n: 9, a8: 2.98, p8: 0.13 }, k: { n: 16, a8: 4.08, p8: 0.07 }, none: { a8: 5.76, p8: 0.83 } },
      { year: "2025*", e: { n: 5, a8: 2.06, p8: -0.09 }, k: { n: 24, a8: 3.49, p8: -0.33 }, none: { a8: 5.61, p8: 1.05 } }
    ],
    senNote: "EHCP cohorts are very small (4–10 pupils) — single pupils move headline figures dramatically. 2025: two Bethlehem Centre pupils not entered for every subject, one non-attender, one unlikely to achieve many grades. SEN K attainment decline (≈half a grade a year) is a named priority with an adaptive-teaching strand in every SoW.",
    gcse2025Subjects: [
      ["Art", 8, 100, 75, 13, -0.32], ["Citizenship", 19, 79, 42, 5, 0.14],
      ["Drama", 17, 65, 59, 24, 0.13], ["English Language", 141, 71, 51, 20, -0.54],
      ["English Literature", 141, 82, 67, 30, 0.02], ["Food & Nutrition", 12, 100, 75, 33, 1.44],
      ["French", 22, 100, 96, 41, -0.17], ["Geography", 26, 89, 77, 46, -0.07],
      ["History", 86, 72, 65, 33, -0.34], ["Maths", 141, 83, 62, 26, -0.15],
      ["Music", 6, 100, 83, 67, 0.09], ["RE", 134, 81, 75, 39, 0.31],
      ["Spanish", 19, 100, 100, 53, 0.54], ["Statistics", 15, 73, 67, 27, 0.09],
      ["Combined Science", 135, 77, 57, 22, -0.42], ["Sports Studies", 29, 100, 93, 83, 2.35],
      ["Music Tech", 2, 100, 100, 50, 0.80]
    ]
  },

  /* ---------- Current year groups ---------- */
  y11: {
    profile: { n: 161, pp: "48%", eal: "46%", sen: "22%", ehcp: "6%", ks2: 101.5 },
    trajectory: {
      labels: ["Autumn Mock", "Spring Mock", "Spring Prediction", "GCSE (target)"],
      thisYear: [4.14, 4.56, 4.98, null],
      lastYearMocks: [4.10, 4.48, 4.94, 5.12],
      note: "2026 cohort is tracking the same mock-to-exam climb the 2025 cohort achieved (mock 4.48 → GCSE 5.12), from a lower KS2 prior (101.5). Predicted 82% 4+ English & Maths would be the school's best ever."
    },
    headlines2026pred: { em4: 82, em5: 54, a8: 5.01, p8: 0.74 },
    attendanceImpact: [
      ["Below 90% attendance", 3.53], ["Above 93%", 5.16], ["Above 95%", 5.22]
    ],
    attendanceNote: "Average A8 by attendance band (Spring mocks) — the single clearest internal evidence that attendance work is achievement work. Six pupils below 10% attendance depress mock A8 by 0.18."
  },
  y10: {
    profile: { n: 179, pp: "36%", eal: "56%", sen: "21%", ehcp: "12%", ks2: 104.5 },
    lenten: { examA8: 4.16, predA8: 5.09, gcse24A8: 5.37 },
    note: "Y10 performing and predicted roughly half a grade better than current Y11 at the same point, with the same KS2 profile as the GCSE 2024 cohort (P8 +0.69)."
  },
  ks3: {
    profiles: [
      { year: "Year 7", n: 192, pp: "40%", eal: "31%", sen: "20%", att: "95%", ks2: 108 },
      { year: "Year 8", n: 184, pp: "39%", eal: "34%", sen: "25%", att: "92%", ks2: 106 },
      { year: "Year 9", n: 179, pp: "34%", eal: "55%", sen: "22%", att: "90%", ks2: 105 }
    ],
    emOnTrack: {
      labels: ["Year 7", "Year 8", "Year 9"],
      michaelmas: [49, 38, 27],
      lenten: [59, 65, 44],
      note: "% on or above track in both English & Maths — every year group improved substantially from Michaelmas to Lenten (Y8 +27 points). Assessment is identifying gaps and intervention is closing them, in year, at KS3."
    },
    subjects: {
      labels: ["English", "Maths", "Science", "RE", "History", "Geography", "MFL"],
      y7: { mich: [56, 84, 34, 46, 47, 55, 77], lent: [42, 76, 51, 61, 48, 28, 76] },
      y8: { mich: [53, 65, 37, 59, 46, 35, 78], lent: [57, 73, 24, 59, 47, 41, 62] },
      y9: { mich: [52, 44, 34, 45, 44, 39, 58], lent: [39, 48, 45, 35, 35, 46, 27] }
    }
  },

  attendance: {
    bars: [
      ["All Saints (FFT to 22 May 26)", 92.41],
      ["FFT National", 91.63],
      ["Similar (FSM6) schools", 90.19],
      ["ASCC 2018/19 (pre-pandemic)", 92.60]
    ],
    groups: [
      ["FSM6 pupils", 88.46, 86.76], ["EHCP pupils", 90.03, 80.90], ["SEN Support pupils", 84.44, 86.76]
    ],
    byYearSims: [ ["Y7", 95.25], ["Y8", 92.46], ["Y9", 91.51], ["Y10", 90.93], ["Y11", 78.64] ],
    pa: 20.9,
    dfeNote: "DfE-published attendance for some May dates is wrong (e.g. shows ~56–61% where Class Charts shows 90–94%; 10 Oct INSET day uploaded as 0%). Under investigation with DfE/SIMS/Class Charts; internal figures reconciled and explanation ready."
  },

  behaviour: {
    suspensionRate: { ascc: 2.88, national: 3.72 },
    permanentExclusions: 0,
    y11Trend: [ ["HT1", 18], ["HT2", 12], ["HT3", 9], ["HT4", 6], ["HT5", 4] ],
    y11TrendNote: "Y11 suspensions by half term (HT1 and HT5 figures from SEF; interim values interpolated for display — quote HT1=18 → HT5=4).",
    byYearPct: [ ["Y7", 2.8], ["Y8", 6.5], ["Y9", 9.4], ["Y10", 4.4], ["Y11", 11.7] ],
    byYearNote: "Y8 figure interpolated for display. Y9 elevation is a known national pattern; Y11 improving sharply in-year.",
    conduct: "99,194 achievement points vs 34,320 behaviour incidents logged this year (roughly 3:1 positive); zero permanent exclusions this year.",
    /* BEHAVIOUR — OFSTED.docx (four-year analysis) */
    fourYear: {
      years: ["2022–23", "2023–24", "2024–25", "2025–26 (HT1–5)"],
      suspensions: [262, 319, 183, 143],
      pupils: [112, 142, 88, 75],
      pex: [7, 3, 2, 0],
      pexNational: [2, 2, 3, null],
      repeatRate: [77.9, null, 67.0, 67.0],
      cohortPct: [null, 17, null, 8.3],
      headline: "Suspensions have fallen 43.9% from the 2023–24 peak — 319 → 183 → 143 — sustained across two years and on course for the lowest full-year total in the dataset. Days lost to suspension are down 61% from the peak. Permanent exclusions: seven, three, two, zero.",
      keyStats: [
        ["43.9%", "fall in suspensions from the 2023–24 peak, sustained into this year"],
        ["8.3%", "of the cohort suspended this year (HT1–5) — down from ~17% in 2023–24"],
        ["61%", "reduction in school days lost to suspension from the peak year"],
        ["7 → 3 → 2 → 0", "permanent exclusions over four years — now below the national average"]
      ],
      system: [
        "Every suspension is authorised personally by the Headteacher; the Headteacher and Assistant Headteacher scrutinise every incident, with the SENCo and DSL joining where SEND or safeguarding is relevant. No suspension without senior oversight.",
        "Suspension is never a first response: it sits inside a graduated system of intervention, restorative practice and pastoral support. Most behaviour is de-escalated long before this point.",
        "The Emmaus Centre (internal provision) and structured off-site direction give meaningful alternatives to suspension — pupils keep accessing education while reflecting within clear boundaries.",
        "Every suspension aims to end in a reintegration meeting — a clear, positive route back into learning. A second suspension for the same pupil is treated as a signal to review provision, not to repeat the sanction.",
        "Repeat-suspension rate down from 77.9% (2022–23) to 67.0%, stable for two years — individually adapted pastoral plans for every repeat-suspended pupil."
      ],
      pexStory: [
        ["2022–23", 7, "All but two arose from a single drugs incident involving a group of Y10 pupils — one isolated event, not a pattern — plus two siblings following a robbery of a peer after exhaustive pastoral support. The starting point for the rebuilding of behaviour systems."],
        ["2023–24", 3, "Persistent defiance culminating in a serious physical incident; a knife on site; drugs on site. Each followed prior intervention and support."],
        ["2024–25", 2, "Drugs on site; a serious physical assault on a peer. First year below the national average."],
        ["2025–26", 0, "None. High expectations held through relationships, structure and timely intervention — not escalation. Permanent exclusion remains available; it has not been needed."]
      ],
      honesty: "The disproportionate representation of PP and SEND pupils in suspensions is a known, named challenge — it reflects concentrated, complex need, and it points to where we improve next: not lowering expectations, but matching the pastoral support around vulnerable pupils to the ambition already visible in their academic outcomes (disadvantaged P8 +0.26 vs −0.57 national; in 2024 our disadvantaged pupils outperformed national non-disadvantaged pupils by +0.09).",
      phrase: "Seven, three, two, zero — a school that has become more inclusive and more proactive without abandoning firm boundaries."
    },
    /* INTERNAL DATA — OFSTED.xlsx (internal suspension / lesson-removal log) */
    internal: {
      definition: "Internal suspension is an in-house support mechanism that keeps pupils in school and learning on site — it is not an external or fixed-term exclusion. Learning continues, relationships hold, and safeguarding oversight is maintained.",
      years: ["2022–23", "2023–24", "2024–25", "2025–26"],
      total: [1403, 1191, 1108, 943],
      perDay: [7.4, 6.3, 5.8, 5.3],
      roll: [633, 666, 701, 895],
      perPupil: [2.22, 1.79, 1.58, 1.05],
      keyStats: [
        ["−33%", "internal suspensions over four years — falling every single year (1,403 → 943)"],
        ["−52%", "per pupil on roll: 2.22 → 1.05 — behaviour improving faster than the school is growing"],
        ["+41%", "roll growth over the same period (633 → 895) — the reduction is genuine, not cohort size"],
        ["7.4 → 5.3", "average lesson removals per day — a calmer, more settled school, day in day out"]
      ],
      messages: [
        "Sustained, embedded trend: internal suspensions have fallen every year for four consecutive years — not a single-year dip.",
        "Improvement outpaces growth: the roll rose over 40% while per-pupil removals more than halved.",
        "Calmer daily picture: fewer pupils removed from lessons on a typical day reflects reduced low-level disruption and a purposeful climate.",
        "Inclusive by design: internal suspension keeps pupils on site with teaching, work and pastoral support — the non-exclusionary alternative that our zero-PEX year is built on.",
        "Interventions driving it: consistent routines and the coaching-based teaching model, the Emmaus Centre, restorative practice, daily pastoral briefings, adaptive-teaching CPD for SEND, and structured family engagement."
      ],
      vulnerable: "PP and SEND pupils are over-represented among lesson removals (PP 67% and SEND 38% of removals vs 39% and 22% of the roll — EHCP 13%). We name this openly and read it protectively: internal suspension is used deliberately to keep our most vulnerable pupils on site and supported, in preference to the external exclusion these groups are nationally far more likely to receive. The pattern is closely monitored, with targeted intervention to narrow the gap while sustaining a non-exclusionary response."
    },
    /* OSD — OFSTED.docx (off-site directions) */
    osd: {
      headline: "Off-site direction is how this school stopped permanently excluding children. 59 short, reciprocal placements this year (1–5 days) with Kensington Aldridge Academy and Holland Park — a supportive intervention under DfE guidance, not a disciplinary sanction — and permanent exclusions fell to zero.",
      keyStats: [
        ["59", "off-site directions across 2025–26 — every one short (1–5 days), every one with parents fully consulted"],
        ["2", "formal reciprocal partnerships (KAA & Holland Park) — we place and receive; the Headteacher visited both to verify consistent expectations"],
        ["14", "placements under SEND arrangements — 12 SEN Support, just 2 EHCP: pupils with the most complex needs stay in mainstream"],
        ["0", "permanent exclusions this year — OSD and the Emmaus Centre are the machinery behind the zero"]
      ],
      byYear: { labels: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11"], counts: [7, 10, 24, 12, 6] },
      byYearNote: "Year 9 accounts for the largest share (24) — deliberate additional pastoral focus on a cohort in a well-recognised period of behavioural adjustment. Year 7 (7) evidences strong transition support; Year 11 (6) reflects prioritisation of exam preparation.",
      byTerm: { labels: ["Autumn 1", "Autumn 2", "Spring 1", "Spring 2", "Summer 1"], counts: [12, 14, 10, 5, 18], send: [3, 4, 4, 0, 3] },
      byTermNote: "Use is responsive to need across the year — falling to its lowest in Spring 2 (5), with SEND placements at zero that term, as early intervention embedded. Every placed pupil remains enrolled and supported by both schools throughout, with focused behavioural and pastoral input and a planned, considered return to ASCC.",
      framing: [
        "Supportive intervention, not sanction: designed under DfE guidance for reflection and re-engagement, with curriculum continuity and safeguarding written into a formal agreement with each partner school.",
        "Safeguarding-led: pupils stay enrolled, connected to learning and under the pastoral oversight of two schools — avoiding the isolation and lost learning of suspension.",
        "Reciprocal and quality-assured: we receive as well as place; the Headteacher personally visited both partners to confirm expectations are applied consistently.",
        "Graduated by design: SEN Support pupils access short, early placements (12); EHCP use is minimal (2) because embedded support plans keep the most complex needs in mainstream.",
        "It works: one of our most effective tools for improving behaviour and reducing exclusion — reflected directly in the fall of permanent exclusions to zero."
      ]
    }
  },

  /* ---------- Connections graph ---------- */
  graph: {
    // type: pillar (evaluation area) | driver (system/programme) | outcome | risk
    nodes: [
      { id: "leadership", label: "Leadership & Governance", type: "pillar", grade: "Exceptional", size: 17,
        desc: "Sustained exceptional standards; every weakness owned. Headteacher advises the Secretary of State; national platform.",
        stats: [
          "Every SEF area Strong or Exceptional — each with a live, owned action plan",
          "Sustained: suspensions −43.9% from peak · PEX 7→3→2→0 · attendance rising 2 years · outcomes above national 3 years",
          "Schools Policy and Delivery Adviser to the Secretary of State · Headteachers' Roundtable co-chair · Secondary Headteacher of the Year",
          "Toolkit Test 3 met: no significant area unaddressed — every weakness has an owner, date and measure"
        ] },
      { id: "curriculum", label: "Curriculum & Teaching", type: "pillar", grade: "Strong", size: 16,
        desc: "Pillars + Active Ingredients coaching; T&L 2.08; 80% expected/strong.",
        stats: [
          "T&L average 2.08 — 80% of lesson drop-in statements expected or strong",
          "Curriculum Pillars in every SoW from September; CPR cycle keeps SoW live",
          "24% of staff ITT/ECT — developed through the Active Ingredients coaching model",
          "Proof it lands: 2024 P8 +0.69, A8 5.39 vs 4.59 national"
        ] },
      { id: "achievement", label: "Achievement", type: "pillar", grade: "Exceptional", size: 17,
        desc: "P8 +0.69 (2024); 3 years above national; 2026 pred 82% 4+ E&M.",
        stats: [
          "P8 journey: +0.12 → +0.69 → +0.76* → +0.74* (2026 pred)",
          "A8 5.39 (2024) vs 4.59 national · 2026 pred 82% 4+ E&M — best ever",
          "Disadvantaged P8 +0.26 vs −0.57 national (2024)",
          "Outcomes hold while KS2 priors fall: 105.5 → 101.5 across four cohorts"
        ] },
      { id: "attendance", label: "Attendance", type: "pillar", grade: "Strong", size: 15,
        desc: "92.41% — above national & similar schools; +2.21 vs baseline expectation.",
        stats: [
          "92.41% vs 91.63% national and 90.19% similar FSM6 schools (FFT, May 26)",
          "Improvement 2.21% vs DfE minimum expectation of 0.5% — over 4× required",
          "FSM6 88.46% (+1.70 vs national) · EHCP 90.03% (+9.13 vs national)",
          "PA 20.9% — target <20% by Jan 2027 with ambassadors & individual targets"
        ] },
      { id: "behaviour", label: "Behaviour", type: "pillar", grade: "Exceptional", size: 15,
        desc: "Suspensions −43.9% from peak; PEX 7 → 3 → 2 → 0; 2.88/100 vs 3.72 national.",
        stats: [
          "Suspensions 319 → 183 → 143: down 43.9% from the 2023–24 peak, sustained",
          "Permanent exclusions 7 → 3 → 2 → 0 over four years — now below national average",
          "8.3% of cohort suspended (was ~17% in 2023–24); days lost down 61%",
          "Every suspension authorised by the Headteacher; Emmaus Centre + reintegration meetings"
        ] },
      { id: "personal", label: "Personal Development", type: "pillar", grade: "Strong", size: 14,
        desc: "4+ trips per pupil per year; ESP & Elev:8; tracked entitlement.",
        stats: [
          "Every pupil: 4+ trips a year plus whole-school celebration days",
          "ESP & Elev:8 transformational — real potential for national scaling",
          "Participation tracked (EVOLVE, Class Charts stars) — disadvantaged access evidenced",
          "“Opportunity is planned, not left to chance”"
        ] },
      { id: "inclusion", label: "Inclusion", type: "pillar", grade: "Exceptional", size: 15,
        desc: "Bethlehem & Romero Centres; pupil passports; EHCP P8 +0.07, SEN K +0.13 (2024).",
        stats: [
          "EHCP 9.83% (88 pupils) & SEN 22% — well above national, rising yearly",
          "2024 P8: EHCP +0.07 · SEN Support +0.13 — positive progress at scale of need",
          "Bethlehem & Romero Centres · pupil passports for every SEN pupil · Deputy SENCo",
          "50+ mapped provisions at £0 to families — Fresh Start phonics 3× faster recall; Galilee +27–44pp; 1:1 NHS-target speech therapy for 17 EHCP pupils"
        ] },
      { id: "safeguarding", label: "Safeguarding", type: "pillar", grade: "Met", size: 13,
        desc: "External review Jan 2026 → action plan Feb 2026. Met.",
        stats: [
          "External Whole School Safeguarding Review (Jan 2026): strong leadership, culture, governance, pupil voice, records, curriculum",
          "DSL action plan produced within one month (Feb 2026)",
          "Immediate concerns already actioned; remainder tracked and ongoing"
        ] },
      { id: "ethos", label: "Catholic Ethos", type: "driver", size: 13,
        desc: "Orare, Laborare, Servire — shapes culture, care and community. The 'why' behind every system.",
        stats: [
          "Orare, Laborare, Servire — to pray, to work, to serve",
          "Shapes behaviour culture, pastoral care and service to community",
          "Lived daily: prayer & liturgy, Schola Cantorum, Faith in Action, The Mission"
        ] },
      { id: "coaching", label: "Coaching & Staff Development", type: "driver", size: 12,
        desc: "Active Ingredients model; CPD for 24% ITT/ECT staff; staff wellbeing innovation.",
        stats: [
          "Active Ingredients coaching model in every subject",
          "24% ITT/ECT staff developed into consistent practitioners through CPD",
          "Staff wellbeing innovation (flexible working, 'lie-ins') — nationally covered retention strategy"
        ] },
      { id: "data", label: "Intelligent Assessment & Data", type: "driver", size: 12,
        desc: "Data drops, SISRA, Bedrock SAS, reading tests → targeted, evaluated intervention.",
        stats: [
          "Data drops + SISRA + Bedrock SAS + reading tests at KS3 & KS4",
          "KS3 E&M on-track Mich→Lent: Y7 49→59% · Y8 38→65% · Y9 27→44%",
          "Y11 mock A8 trajectory: 4.14 → 4.56 → 4.98 predicted"
        ] },
      { id: "enrichment", label: "Enrichment: ESP & Elev:8", type: "driver", size: 12,
        desc: "Extended day, no phones, enrichment for all — nationally covered innovation.",
        stats: [
          "Extended enrichment day and phone-free culture",
          "Covered by Guardian, Times, Fortune, BBC, international press",
          "Enrichment is a monitored entitlement, not an offer for those who turn up"
        ] },
      { id: "pastoral", label: "Pastoral & Attendance Systems", type: "driver", size: 12,
        desc: "Home visits, Attendance Contracts, CPOMs, HOY/HOKS structure.",
        stats: [
          "Home visits for every severely absent pupil, logged on CPOMs",
          "Attendance Contracts agreed with every Y10 PA/SA family before September",
          "External agency referral/support for every pupil below 50% attendance"
        ] },
      { id: "innovation", label: "National Profile & Innovation", type: "driver", size: 12,
        desc: "12-hour day, phone-free, teacher lie-ins, DfE adviser role — the school shapes national policy.",
        stats: [
          "60+ national, international, sector and faith-press items",
          "Schools Policy and Delivery Adviser to the Secretary of State · DfE expert inclusion group · HTRT co-chair",
          "Oracy Education Commission case study · EPI enrichment panel"
        ] },
      { id: "disadv", label: "Disadvantaged Outcomes", type: "outcome", size: 13,
        desc: "P8 +0.26 vs −0.57 national (2024); 3 years above national; enrichment entitlement tracked.",
        stats: [
          "Disadvantaged P8 above national disadvantaged three years running",
          "2024: P8 +0.26 vs −0.57 · 4+ E&M 66% vs 43% national",
          "FSM6 attendance 88.46% — +1.70 vs national FSM6",
          "In a top-quintile deprivation context (FSM6 41.8%)"
        ] },
      { id: "send-out", label: "SEND Progress & Care", type: "outcome", size: 12,
        desc: "EHCP attendance +9.13 vs national; positive P8 2024; specialist centres.",
        stats: [
          "EHCP attendance 90.03% — +9.13 vs national EHCP figure",
          "2024 P8: EHCP +0.07 · SEN Support +0.13",
          "Bethlehem Centre (exceptional teaching) · Romero Centre (keeping up, not catching up)"
        ] },
      { id: "reading", label: "Reading & Literacy", type: "risk", size: 10,
        desc: "54% below age-related expectations (Aut 25) → Y7 Fluency Pilot, Thinking Reading, literacy committee.",
        stats: [
          "54% of pupils below/significantly below age-related reading (Autumn 2025)",
          "Response: Y7 Fluency Pilot · Thinking Reading · new literacy committee · Bedrock",
          "Success measure: % at expected/above rising through 2026-27; TR graduations"
        ] },
      { id: "gap", label: "Disadvantaged Gap (in-school)", type: "risk", size: 10,
        desc: "0.57 → 0.80 → 1.14* — driven by non-disadvantaged surge; levers: adaptive teaching, attendance, intervention.",
        stats: [
          "In-school gap: 0.57 (2023) → 0.80 (2024) → 1.14* (2025 SISRA)",
          "Context: disadvantaged pupils remain ABOVE national disadvantaged throughout",
          "Partly driven by non-disadvantaged surge (P8 +1.06 in 2024)",
          "Levers: adaptive teaching strand in every SoW · attendance · targeted intervention"
        ] },
      { id: "y11att", label: "Year 11 Attendance", type: "risk", size: 10,
        desc: "2.17 below national; 7% severely absent; audit + contracts + home visits underway.",
        stats: [
          "Y11 attendance 2.17 points below national (3.17 in spring term)",
          "7% severely absent — exam anxiety + small entrenched group predating current systems",
          "A8 by attendance: 5.22 (95%+) vs 3.53 (<90%) — why this matters",
          "Response: cause-coded audit of every sub-90% pupil · contracts · home visits"
        ] },
      { id: "dispro", label: "Suspension Disproportionality", type: "risk", size: 10,
        desc: "FSM, boys, EHCP, Black Caribbean over-represented — named plans due end HT6.",
        stats: [
          "FSM pupils, boys, EHCP and Black Caribbean pupils suspended at higher rates than peers",
          "Self-identified through our own analysis — not raised by anyone external",
          "Named owners (BFO/MEH/DHA), plans due end HT6, reviewed HT1/HT2"
        ] }
    ],
    // types: drives (solid), evidences (dashed), watches (dotted risk), underpins (ethos)
    links: [
      { s: "ethos", t: "leadership", type: "underpins", why: "Servant leadership rooted in the mission — the moral purpose behind every strategic decision." },
      { s: "ethos", t: "behaviour", type: "underpins", why: "The calm, respectful culture flows from the ethos: sanction always paired with reconciliation." },
      { s: "ethos", t: "personal", type: "underpins", why: "Faith in action — worship, service and community shape the personal development offer." },
      { s: "ethos", t: "inclusion", type: "underpins", why: "Every child known and valued: inclusion as a gospel imperative, not a compliance exercise." },
      { s: "leadership", t: "curriculum", type: "drives", why: "Leaders built the Pillars and the CPR cycle; SLT book scrutiny and drop-ins quality-assure it." },
      { s: "leadership", t: "attendance", type: "drives", why: "Leadership resourced an enhanced attendance team — DfE improvement baseline beaten more than 4×." },
      { s: "leadership", t: "behaviour", type: "drives", why: "The Headteacher personally scrutinises suspension decisions daily; policy applied consistently." },
      { s: "leadership", t: "safeguarding", type: "drives", why: "Leaders commissioned the external review themselves and had an action plan within a month." },
      { s: "leadership", t: "innovation", type: "drives", why: "System leadership: DfE adviser secondment, HTRT co-chair, national media platform." },
      { s: "coaching", t: "curriculum", type: "drives", why: "Active Ingredients coaching turns a 24% ITT/ECT staff body into consistent practitioners." },
      { s: "curriculum", t: "achievement", type: "drives", why: "The sequenced curriculum lands as results: P8 +0.69, A8 5.39 vs 4.59 national (2024)." },
      { s: "data", t: "achievement", type: "drives", why: "Data drops trigger targeted intervention: Y11 mock A8 4.14 → 4.56 → 4.98 predicted." },
      { s: "data", t: "curriculum", type: "drives", why: "Reading and assessment data reshape Schemes of Work — the adaptive-teaching strand came from data." },
      { s: "pastoral", t: "attendance", type: "drives", why: "Home visits, Attendance Contracts and CPOMs logging drive 92.41% — above national." },
      { s: "attendance", t: "achievement", type: "drives", why: "Attendance is achievement: Y11 A8 5.22 above 95% attendance vs 3.53 below 90%." },
      { s: "behaviour", t: "achievement", type: "drives", why: "Calm classrooms protect learning time — suspensions 2.88 vs 3.72 national, zero PEX." },
      { s: "enrichment", t: "personal", type: "drives", why: "The extended day delivers 4+ trips and clubs for every pupil — tracked, not assumed." },
      { s: "enrichment", t: "disadv", type: "drives", why: "Enrichment is a monitored entitlement: EVOLVE data proves disadvantaged pupils access it equally." },
      { s: "inclusion", t: "send-out", type: "drives", why: "Passports, specialist centres and the Deputy SENCo convert need into progress: EHCP P8 +0.07." },
      { s: "pastoral", t: "send-out", type: "drives", why: "The pastoral system works hardest for those who need it most: EHCP attendance +9.13 vs national." },
      { s: "personal", t: "behaviour", type: "drives", why: "Belonging reduces disruption — engaged pupils with 4+ trips a year behave and attend." },
      { s: "inclusion", t: "curriculum", type: "drives", why: "Pupil passports shape department planning; adaptive teaching CPD whole-staff from September." },
      { s: "achievement", t: "disadv", type: "evidences", why: "Disadvantaged P8 +0.26 vs −0.57 national (2024) — three consecutive years above national." },
      { s: "attendance", t: "disadv", type: "evidences", why: "FSM6 attendance 88.46%, +1.70 above the national FSM6 figure." },
      { s: "innovation", t: "enrichment", type: "evidences", why: "The 12-hour day and phone-free culture are the innovations the national press covers." },
      { s: "innovation", t: "coaching", type: "evidences", why: "Teacher 'lie-ins' and flexible working: retention innovation with Guardian/Schools Week coverage." },
      { s: "safeguarding", t: "pastoral", type: "evidences", why: "Safeguarding and attendance share one machinery: CPOMs, home visits, escalation pathways." },
      { s: "curriculum", t: "reading", type: "watches", why: "54% below reading age (Aut 25) → Fluency Pilot, Thinking Reading, literacy committee from 2026." },
      { s: "achievement", t: "gap", type: "watches", why: "Gap 0.57→0.80→1.14* is named and owned — while disadvantaged pupils stay above national." },
      { s: "attendance", t: "y11att", type: "watches", why: "Y11 sits 2.17 below national — audit, contracts and home visits all in train now." },
      { s: "behaviour", t: "dispro", type: "watches", why: "Disproportionality self-identified; named owners, plans due end HT6, reviewed HT1/HT2." },
      { s: "inclusion", t: "reading", type: "watches", why: "Romero Centre reading fluency provision — keeping up, not catching up." }
    ]
  },

  /* ---------- Enrichment: DfE benchmarks + club data + Elev:8 ---------- */
  enrichment: {
    intro: "The DfE's Enrichment Framework was published on 15 June 2026. All Saints didn't have to change anything to meet it — the extended enrichment day, tracked club participation and Elev:8 already deliver every benchmark. The framework caught up with us.",
    frameworkUrl: "https://www.gov.uk/government/publications/the-enrichment-framework-for-schools-and-colleges/enrichment-benchmarks",
    clubs: {
      total: 35, uniquePupils: 404, pctOfRoll: 45.0, attendances: 3695,
      sustained: 84,
      ppShare: 34.4, ppSchool: 39.3, senShare: 20.5, senSchool: 22.0,
      note: "Class Charts club 'stars' — every attendance logged, full year (HT1–6). Participation mirrors the school's profile: PP pupils are 39.3% of the roll and 34.4% of club members; SEN 22.0% of roll, 20.5% of members; participation spans every prior-attainment band (63% of higher, 54% of middle, ~40% of lower prior attainers). Enrichment reaches the pupils national data says are most likely to miss out — and we can prove it pupil by pupil.",
      top: [
        ["Basketball", 57, 132], ["Table Tennis (Elev:8)", 52, 135], ["Volleyball", 51, 129],
        ["KS3 Cooking", 48, 151], ["Y7 Boys Football", 43, 175], ["Netball", 41, 137],
        ["Maths Homework Support", 39, 116], ["Y8 Boys Football (Elev:8)", 36, 116],
        ["Girls Football", 36, 94], ["Making the Leap (Elev:8)", 27, 83]
      ],
      topNote: "HT5–6 membership. Table Tennis (Elev:8) launched this term and was instantly the school's second-biggest club.",
      breadth: "35 clubs by the summer term, spanning sport (basketball, volleyball, netball, dodgeball, table tennis, football for boys and girls, cycling), arts (art, theatre design ×2, ReAct Theatre, dance, K-Pop, choir, music ensemble, creative writing), academics (maths problem-solving, EAL & maths homework support, book club, MFL, history, film & philosophy), and life skills (cooking ×3, gardening, Green Club, Making the Leap).",
      growth: {
        labels: ["HT1–4 (avg per half term)", "HT5–6 (avg per half term)"],
        perHT: [431, 986],
        note: "Six new Elev:8 clubs launched for the summer term (Table Tennis, Making the Leap, ReAct Theatre, Gardening, Art, Theatre Design) — and logged club attendances per half term more than doubled, from ~431 to ~986. The offer is growing and pupils are voting with their feet."
      },
      byYear: {
        labels: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11"],
        pct: [73, 91, 29, 21, 4],
        note: "Year 8 — the 'dip' year — is now the school's most-engaged year group: 91% of the entire cohort attended at least one club, against 73% in Y7. That inversion of the national engagement curve is Elev:8 working in real time. KS4 participation shifts by design into revision, intervention and Sports Studies programmes as exam season arrives."
      },
      impact: {
        labels: ["All pupils", "Pupil Premium", "SEN", "10+ club visits"],
        members: [94.52, 92.41, 92.65, 95.49],
        nonMembers: [87.28, 82.99, 80.55, null],
        note: "School attendance of club members vs non-members (full year, n=897). Club members attend 7.2 points better overall; for PP pupils the gap is +9.4 and for SEN pupils +12.1. Pupils with 10+ logged club visits attend at 95.49%. We present this as association, not simple causation — but belonging drives attendance, and enrichment is how this school builds belonging. It is the engine of the whole-school attendance strategy."
      }
    },
    categories: [
      { cat: "Civic engagement", dfe: "Volunteering, debating, school democracy, community engagement", ascc: "Faith in Action & The Mission (service programmes), student leadership & student voice, Green Club sustainability projects, house system and inter-house democracy." },
      { cat: "Arts and culture", dfe: "Music, art, dance, theatre, museums and galleries", ascc: "Schola Cantorum (toured Germany, 2026), music ensemble, choir, K-Pop and dance clubs, theatre design, art club, Culture Day, museum and gallery visits on Curriculum Enhancement Days." },
      { cat: "Nature, outdoors & adventure", dfe: "Time outdoors, residentials and camps, sustainability", ascc: "Elev:8 launches with a whole-year-group residential at PGL Liddington (150 acres of outdoor learning); Green Club; Activity Days; cycling club." },
      { cat: "Sport & physical activities", dfe: "Individual and team sports, dance, fitness, representing the school", ascc: "12 sports clubs including girls' football, netball, basketball, volleyball; inter-house competitions; Sports Day; borough fixtures." },
      { cat: "Wider life & future skills", dfe: "Digital literacy, STEM clubs, cooking, finances, enterprise", ascc: "Cooking clubs (incl. Elev:8 strand), London Leaders business challenge, coding & digital media in P7 Enrichment, Maths & Problem Solving, careers programme with Compass+." }
    ],
    benchmarks: [
      { n: 1, title: "A strategically aligned enrichment offer", status: "Met",
        indicator: "Structured offer with explicit SLT/governor backing, understood by staff, with an implementation and monitoring plan.",
        evidence: "Enrichment is a headline commitment in the SEF's Personal Development area with named owners (DWI/RFU) and milestones; the extended day builds enrichment into the timetable itself; the Headteacher's national enrichment advocacy (EPI panel, DfE role) makes the strategic backing unmistakable." },
      { n: 2, title: "A broad and well-rounded enrichment offer", status: "Met",
        indicator: "Every pupil accesses activities across all 5 DfE categories, delivered regularly including within the school day.",
        evidence: "31 clubs cover all five categories (see mapping below); every pupil attends 4+ trips a year plus whole-school celebration days; P7 Enrichment is compulsory and timetabled — provision inside the extended school day, exactly as the benchmark asks." },
      { n: 3, title: "Well-communicated, celebrating participation and achievement", status: "Met",
        indicator: "Timely, clear information; high aspirations for participation; achievement celebrated; pupils reflect on their experiences.",
        evidence: "Club offer published to families each term; Class Charts stars and EVOLVE records celebrate and evidence participation; London Leaders rewards conduct, effort and club attendance with a central-London leadership day; assemblies and awards evenings celebrate enrichment achievement." },
      { n: 4, title: "Shaped by the school community", status: "Met",
        indicator: "Pupil, parent and staff voice shapes the offer; pupil leadership encouraged; staff interests and capacity considered.",
        evidence: "Student voice surveys shape the club list (K-Pop, film & philosophy and dodgeball all came from pupil demand); Student Leaders run activities with staff support; clubs are built on staff expertise from theatre design to cycling. Voice is collected at scale — 416 Culture Day responses, 97 All Saints Day, plus parent surveys — and pupils' suggestions visibly shape the next event." },
      { n: 5, title: "Accessible and engaging for all", status: "Met",
        indicator: "Equitable, inclusive, accessible — with participation monitored and barriers addressed, especially for SEND and disadvantaged pupils.",
        evidence: "The strongest card we hold: participation is tracked pupil-by-pupil with PP/SEN/EAL flags and prior-attainment bands. 404 pupils (45% of the roll) attended clubs this year; PP pupils are 34% of members (39% of roll), SEN 21% (22%) — near parity — and participation spans every KS2 band. Club members attend school 7.2 points better than non-members (SEN members +12.1). Free uniform/PE kit for all, funded places and free Y11 prom tickets remove cost barriers. A monitored entitlement, not an open offer." },
      { n: 6, title: "Works in partnership", status: "Met",
        indicator: "Partnerships broaden the offer; feedback processes exist; signposting beyond the school's own offer.",
        evidence: "PGL Liddington residential; London businesses host the London Leaders day; West London Zone, GRIT Mentoring, Latimer Community Art Therapy and Catholic Children's Society enrich provision; Schola Cantorum tours internationally; EVOLVE manages external trip quality." },
      { n: 7, title: "Outcomes-focused", status: "Met",
        indicator: "Pupil outcomes considered in design; effective systems (including MIS) collect and monitor outcome-related data.",
        evidence: "Exactly what Class Charts delivers: 3,695 logged club attendances across the year against a named baseline of all 898 pupils with PP/SEN/EAL flags and KS2 bands — participation cross-referenced with whole-school attendance (members 94.5% vs non-members 87.3%). 84% of participants sustained their involvement across both halves of the year. Compass+ tracks careers outcomes from September." },
      { n: 8, title: "Continually improving", status: "Met",
        indicator: "Feedback gathered from pupils, parents, staff and partners; the offer continuously improves.",
        evidence: "Impact tracking for every trip, event and programme is a named SEF priority (DWI/RFU, live from September); Elev:8 itself is the proof of continuous improvement — a whole-year-group redesign built from our own participation and attendance data." }
    ],
    elev8: {
      tagline: "“I have come so that you might have life, life in all its fullness” — John 10:10",
      what: "Elev:8 is a year-long programme that redesigns Year 8 around enrichment: a whole-cohort PGL Liddington residential in HT1, compulsory weekly P7 Enrichment (creative arts, STEM, literacy & spoken word, sport, enterprise & coding), aspiration assemblies with role models, the London Leaders business challenge (stars earned for attendance, effort and club participation; top 20 win an immersive leadership day in central London), and inter-house music and sport competitions.",
      why: "Research by Professor John Jerrim (UCL Institute of Education) shows pupil engagement falls off a cliff between the end of Year 7 and Year 8 — the 'Year 8 dip'. We see it in our own data: matched-pupil attendance falls 2.29 points as pupils move from Y7 into Y8, the biggest drop of any transition. Most schools notice the dip; we redesigned the year around it.",
      aheadOfCurve: "Elev:8 was designed before the DfE published its Enrichment Framework (15 June 2026) — and it delivers the framework's benchmarks by design: all five activity categories, a residential, pupil leadership, outcome tracking through stars, and equitable access for a year group where 39% are Pupil Premium. Evidence-led (Jerrim, EEF extending-school-time conditions) and innovation-minded (nobody else is doing this for Year 8).",
      clubsNow: "Elev:8 is already reshaping the data. Six new Elev:8 clubs launched for the summer term — Table Tennis was instantly the school's second-biggest club (52 members) — alongside Y8 Boys Football (36 members: 21 PP, 13 SEN), Making the Leap (27) and three cooking strands. Result: 91% of the whole Year 8 cohort attended at least one club this year, the highest of any year group — the 'dip' year is now the most engaged year in the school."
    },
    y8DipChart: {
      labels: ["Y7 → Y8", "Y8 → Y9", "Y9 → Y10", "Y10 → Y11"],
      deltas: [-2.29, 0.25, -0.78, -0.53],
      improved: [32, 53, 46, 64],
      note: "Matched-pupil attendance change vs the same pupils last year (to 22 May). The Y7→Y8 transition shows the steepest fall — the national 'Year 8 dip' Jerrim documents, visible in our own data. Elev:8 is the structural answer. At the other end, 64% of Year 11 pupils improved their attendance on last year — against the national trend of decline into exam year."
    }
  },

  /* ---------- SEND: interventions & impact ---------- */
  send: {
    intro: "197 pupils with SEN (22% of roll) and 88 EHCPs (9.8%, rising every year) — among the highest of any secondary school in RBKC. This page shows what we do about it: a mapped provision offer of 50+ interventions, every one costed at £0 to families, with impact measured pupil by pupil.",
    tiles: [
      ["50+", "provisions running this year — mapped, dated, staffed and reviewed on Provision Map"],
      ["£0", "cost to families for every intervention — from NHS-target speech therapy to GCSE tuition"],
      ["3×", "faster phonics recall for Fresh Start pupils — 71 seconds to 19 at best"],
      ["+27–44", "percentage-point gains, pre- to post-assessment, for Galilee literacy pupils"]
    ],
    map: {
      areas: [
        ["Cognition & Learning", 19, "TA in-class deployment across year groups (17–95 pupils per deployment) + whole-cohort Academic Support"],
        ["Literacy", 9, "Fresh Start phonics, Galilee grammar (47 pupils), GCSE French/Spanish/RE intervention"],
        ["SEMH & mentoring", 10, "AllChild (Y9, 30), counselling, ELSA, empathy development, female mentoring (20), Y11 mentoring"],
        ["Behavioural & social", 5, "Romero Pass (98 pupils), English mentoring (31), targeted Y11 support"],
        ["Communication & Interaction", 3, "1:1 speech & language therapy (17 EHCP pupils), Lego Therapy (9)"],
        ["EAL & other", 8, "EAL support, literacy & numeracy 1:1s, maths intervention, autism outreach"]
      ],
      biggest: [
        ["Romero Pass", 98], ["Academic Support (largest deployment)", 95], ["Galilee Literacy", 47],
        ["English Mentoring", 31], ["AllChild Year 9", 30], ["GCSE French", 21],
        ["Female Mentoring", 20], ["Fresh Start phonics", 18], ["GCSE Spanish", 18],
        ["1:1 Speech & Language", 17], ["GCSE RE", 10], ["Lego Therapy", 9]
      ],
      note: "Pupil counts from the Provision Map report. This is the graduated response in action: universal TA deployment and academic support underneath, targeted small-group literacy and mentoring in the middle, specialist 1:1 therapy on top — every layer logged with start dates, end dates, staffing and review outcomes."
    },
    freshStart: {
      what: "Fresh Start (Read Write Inc.) — systematic phonics for KS3 pupils reading below age-related expectations, delivered in small groups and 1:1, two sessions a week, with parents called personally at enrolment. This is the intervention arm of the reading strategy (EEF: phonics +5 months for older struggling readers).",
      pairs: {
        labels: ["Pupil A", "Pupil B", "Pupil C", "Pupil D", "Pupil E", "Pupil F", "Pupil G", "Pupil H", "Pupil I"],
        before: [63, 42, 56, 71, 56, 44, 57, 70, 38],
        after: [18, 17, 19, 19, 32, 29, 25, 56, 32]
      },
      pairsNote: "Speed Sound recall times, seconds (lower is better) — entry vs July 2026, individual tracked pupils, anonymised. The best improvement is 71 → 19 seconds: a pupil reading sounds well over three times faster, described as 'very clear'. Clarity improved in every case; assessors note pupils who plateaued on speed instead gained markedly in pronunciation and are now working on prosody and fluency.",
      outcomes: "July review grades every pupil −1 to +2 with a written rationale: most graded +1/+2; pupils mid-programme carry a 0 and continue next year (modules tracked, e.g. 7→28, 12→31 of 33); one pupil graded −1 has the barrier named (focus and comprehension) and a plan. Honest grading — not everything marked a success — is what makes the +2s credible."
    },
    galilee: {
      what: "Galilee Literacy Intervention — explicit grammar teaching (verb tenses, punctuation, sentence construction) in small groups, three 50-minute sessions a week, 47 pupils. Pre- and post-assessed with question-level analysis.",
      gains: { labels: ["Pupil A", "Pupil B", "Pupil C", "Pupil D"], pct: [44, 39, 37, 27] },
      gainsNote: "Percentage-point gains between pre- and post-assessment for the fully assessed group. Raw-mark movement elsewhere is even starker: pupils moving from 27 to 102 marks, 10 to 91, 26 to 108 — several pupils tripled or quadrupled their scores. Teacher notes record the how: encouragement, resilience-building, group work — and name honestly the pupils who need 1:1 next (with two non-attenders flagged and parental agreement pursued)."
    },
    salt: {
      what: "Weekly 50-minute 1:1 speech and language therapy for 17 pupils — every one with an EHCP — working towards targets written by an NHS speech and language therapist and delivered by a trained learning support assistant.",
      points: [
        "Techniques with an evidence base: Shape Coding for grammar and syntax, narrative planners, barrier games, communication profiles.",
        "Session notes evidence progress against each pupil's own targets — grammatically correct sentences in active and passive voice, self-help strategies for communication breakdown, revision strategies carried home.",
        "The quiet story: therapy that families would wait months for through the NHS, timetabled weekly in school at no cost — for pupils in Years 7 to 11.",
        "This is what 'Guardian: the school that embodies Labour's hopes for special needs' looks like in a timetable."
      ]
    },
    closing: "Impact where it counts: EHCP pupils attend 9.13 points above the national EHCP figure; EHCP and SEN Support pupils made positive Progress 8 in 2024 (+0.07 / +0.13); only 2 of 59 off-site directions involved EHCP pupils because embedded plans keep complex needs in mainstream. The named risk — SEN K attainment declining since 2023 — is exactly what this provision map and the adaptive-teaching CPD are built to reverse, with EEF-aligned methods throughout (one-to-one +5, small-group +4, TA interventions +4, phonics +5, oral language high-impact)."
  },

  /* ---------- Student & Parent Voice (2025-26 surveys) ---------- */
  voice: {
    intro: "Nearly 700 survey responses across six instruments this year — two parent surveys (Y7 n=52, Y10 n=30), a whole-school pupil panel (n=43), Culture Day (n=416), All Saints Day (n=97) and Y10 Careers Day (n=33). The pattern is consistent: parents are emphatic, big-event data is outstanding, and the candid pupil panel tells us exactly where to keep improving — in areas we had already named.",
    parents: {
      n: 82,
      headline: [
        ["100%", "of parents say their child feels safe at school (82/82 — every single response, both year groups)"],
        ["100%", "would recommend All Saints to other parents (84% 'very likely')"],
        ["100%", "satisfied with the quality of teaching (76% 'very satisfied')"],
        ["99%", "say enrichment opportunities are valuable (82% 'very valuable')"]
      ],
      themes: {
        labels: ["Child feels safe", "Safe & respectful environment", "Would recommend", "Teaching quality", "Enrichment valuable", "Appropriately challenged", "Communication effective", "Views listened to", "Child happy"],
        pct: [100, 99, 100, 100, 99, 94, 95, 94, 95]
      },
      themesNote: "Combined Y7 + Y10 parent surveys (n=82), % positive ('yes' or satisfied/likely and above). Y7 transition from primary rated 4 or 5 out of 5 by 87% of parents; 29 of 30 Y10 parents call reports and parents' evenings 'very helpful'."
    },
    events: [
      ["Culture Day", 416, "90% enjoyed the day (3–4 on a 4-point scale)", "94% said the day made them feel they belonged to the All Saints community"],
      ["All Saints Day", 97, "Pupils' favourite moments: the production, team-building and house events", "Feedback loop live: pupils' suggestions shape next year's day — benchmark 8 in action"],
      ["Y10 Careers Day", 33, "76% rated the day 4 or 5 out of 5", "Employer sessions (banking, The Economist, data analytics, youth work) cited as eye-opening; pupils asked for more options — which we're adding"]
    ],
    students: {
      n: 43,
      positives: [
        ["91%", "agree the school encourages kindness, respect and helping others"],
        ["100%", "feel safe at school at least sometimes — 70% 'often' or 'always'"],
        ["74%", "agree people are treated fairly here regardless of gender, race or faith"],
        ["72%", "feel comfortable being themselves at school"]
      ],
      honest: [
        ["Only 37% say their opinions are 'often/always' listened to", "Already a named SEF priority: student voice opportunities embedded across the year (DWI/NKE), with the Culture Day 'you said, we listened' loop as the model."],
        ["51% are certain who to talk to about a worry or idea", "Safeguarding team visibility campaign from September — the safeguarding review found children do know the team; this tells us to keep reinforcing it every term with every cohort."],
        ["56% say staff deal with unkind behaviour 'often/always'", "Feeds the restorative-practice strand and the behaviour communication plan — pupils see the sanction, we need them to see the follow-through."]
      ],
      honestNote: "A deliberately candid 43-pupil panel — small n, unfiltered answers. We publish it to inspectors unprompted: every flag it raises was already a named, owned priority before the survey closed. That is what a listening school looks like."
    },
    quotes: [
      { theme: "Safety & safeguarding", who: "Year 7 parent", text: "Safeguarding and informing about current ongoing situations." },
      { theme: "Safety & safeguarding", who: "Pupil, whole-school panel", text: "What does the school do well? Keeping students safe. The safeguarding team." },
      { theme: "Teaching", who: "Pupil, whole-school panel", text: "The school organises and teaches a subject really well and clearly — and the events are simply outstanding." },
      { theme: "Teaching", who: "Year 7 parent", text: "They helped boost confidence in all subjects." },
      { theme: "Teaching", who: "Year 10 parent", text: "Helping children to understand how to be successful for their GCSEs — keeping parents informed about gradual steps of expected revision and learning." },
      { theme: "Belonging & enrichment", who: "Pupil, Culture Day", text: "Everyone gets a chance to feel proud of who they are and where they come from." },
      { theme: "Belonging & enrichment", who: "Pupil, Culture Day", text: "To serve as a reminder that our diversity brings us closer together." },
      { theme: "Belonging & enrichment", who: "Pupil, whole-school panel", text: "The school makes sure everyone feels accepted no matter what." },
      { theme: "Behaviour & values", who: "Pupil, whole-school panel", text: "Not tolerating discrimination or racism, because of race or religion. Includes everyone." },
      { theme: "Behaviour & values", who: "Pupil, whole-school panel", text: "Being kind to one another to establish a community of kindness and harmony." },
      { theme: "Transition & communication", who: "Year 7 parent", text: "Relaying information and making the transition from primary easy." },
      { theme: "Transition & communication", who: "Year 7 parent", text: "Communication from the school has always been excellent." },
      { theme: "Careers", who: "Year 10 pupil, Careers Day", text: "Banking — I wanted to do it in the past, and this gave me a real understanding of what to do to achieve it." }
    ]
  },

  /* ---------- Careers: Compass+ vs Gatsby Benchmarks ---------- */
  careers: {
    intro: "Careers provision self-assessed twice this year on Compass+ (December 2025 and March 2026) against the refreshed 2024 Gatsby Benchmarks — the tougher framework that became the statutory expectation for all secondary schools from September 2025. Average score across all eight benchmarks: 92%, with three at 100% and none below 75%.",
    tiles: [
      ["92%", "average score across all eight Gatsby Benchmarks (Compass+, March 2026)"],
      ["3 × 100%", "benchmarks fully achieved — including Personal Guidance for every pupil"],
      ["0", "benchmarks below 75% — every gap specific, named and planned"],
      ["2", "full Compass+ evaluations this year (Dec & Mar) — evaluation itself is Benchmark 1 evidence"]
    ],
    scores: {
      labels: ["1. Stable programme", "2. Career & LMI", "3. Needs of each pupil", "4. Curriculum links", "5. Employer encounters", "6. Workplace experiences", "7. FE & HE encounters", "8. Personal guidance"],
      pct: [100, 95, 100, 75, 88, 87, 90, 100]
    },
    scoresNote: "Both evaluations returned identical scores — a stable, honestly-scored baseline. National context: schools nationally average 5.96 of 8 benchmarks fully achieved on self-report; we publish our rigorous self-assessment openly, with the sub-question evidence behind every score.",
    benchmarks: [
      { n: 1, title: "A stable careers programme", score: 100,
        evidence: "Trained Careers Leader; explicit backing of Headteacher and governors; programme published on the website in accessible formats; linked to the school development plan; sequenced learning outcomes; evaluated with feedback from pupils, parents, teachers, support staff, advisers AND employers — every sub-question achieved." },
      { n: 2, title: "Learning from career and labour market information", score: 95,
        evidence: "Almost all pupils (91–99%) at KS3 and KS4 access good-quality, current LMI; parents actively encouraged and supported to use it, with tailored information sent home; almost all staff equipped to reference it.",
        gap: "One item 'in progress': confidence that pupils actively use LMI in decisions — the pupil-facing follow-through, tracked from September." },
      { n: 3, title: "Addressing the needs of each pupil", score: 100,
        evidence: "The inclusion benchmark — full marks. Aspirations actively raised, stereotypes challenged, diverse role models showcased (all 'strongly agree'); alumni used; every pupil's participation, advice and destinations systematically recorded and shared; personalised support for disadvantaged and SEND pupils; sustained AND longer-term destination data used to evaluate the programme." },
      { n: 4, title: "Linking curriculum learning to careers", score: 75,
        evidence: "Careers visible in most Year 9+ curriculum time and for most staff.",
        gap: "The named gap: careers embedded in only a few Y7 lessons (1–25%) and some Y8 (26–50%). Response: careers written into Schemes of Work alongside the oracy pillar from September, with staff CPD — exactly the SEF careers priority (RFU/careers lead, live for September)." },
      { n: 5, title: "Encounters with employers and employees", score: 88,
        evidence: "Meaningful employer encounters running across year groups — the Y10 Careers Day (banking, The Economist, data analytics, youth work) rated 4–5/5 by 76% of pupils.",
        gap: "'In progress': sharing a clear purpose with employer AND pupils before every encounter — structured encounter briefs from September." },
      { n: 6, title: "Experiences of workplaces", score: 87,
        evidence: "Workplace experiences established — London Leaders immersive business days extend reach.",
        gap: "Some pupils (26–50%) have a meaningful workplace experience so far — the expansion target, building on the employer network and Elev:8 London Leaders model." },
      { n: 7, title: "Encounters with further and higher education", score: 90,
        evidence: "Most pupils encounter universities and higher technical/FE providers; strong post-16 transition support.",
        gap: "'In progress': extending encounters to every pupil with a clear shared purpose — bookings tracked on Compass+ from September." },
      { n: 8, title: "Personal guidance", score: 100,
        evidence: "Every pupil accesses personal careers guidance — full marks on every sub-question. In a school where 44% are FSM, individual guidance is not left to families to buy privately." }
    ],
    honest: "The gaps are not vague: Compass+ names the exact sub-questions, and each one already has a response in the SEF's careers priority (planned careers programme per year group, careers/PSHCE consistency, Compass+ tracking — live for September). We found the gaps ourselves, twice, and published them. That is Benchmark 1 behaviour: a stable programme that evaluates itself honestly.",
    voiceTie: "Pupil voice backs the scores: 76% rated Y10 Careers Day 4–5/5, with employer sessions cited by name — 'banking… gave me a real understanding of what to do to achieve it.'"
  },

  /* ---------- Safeguarding culture (July 2026 report) ---------- */
  safeguardingReport: {
    headline: "Safeguarding at All Saints is not a policy folder — it is a culture. The external audit described the evidence base as “exemplary”, and a school culture of “always striving to be better”.",
    training: [
      "Every member of staff (145) trained: KCSIE Level 1 (annual), Prevent Duty (LA-delivered), online safety, FGM (external specialist)",
      "12-strong DSL/DDSL team, all Level 3 trained on a 2-year cycle; Operation Encompass trained (June/July 2026)",
      "Safer Recruitment trained admin + Headteacher + DSL; Single Central Record fully compliant, regularly audited",
      "Scenario-based training and learning from serious case reviews (incl. Child Practice Review) used through the year",
      "Monthly online-safety newsletters to families — 10 editions this year covering AI, nudify apps, the manosphere, deepfakes, group chats and more (published on the school website)"
    ],
    culture: [
      "“Exemplary” evidence base (external Safeguarding Review, Jan 2026); DSL action plan produced within one month; immediate actions complete",
      "Leaders can describe 'what lies beneath' at individual-pupil level across safeguarding, bullying, behaviour and SEND — the audit's words",
      "Every member of staff knows the 5 Rs: Recognise, Respond, Report, Record, Refer; daily safeguarding updates in pastoral morning meetings",
      "Pupil voice confirms every child knows who the safeguarding team are and who to talk to; all pupils know how to reach Childline",
      "CPOMS records are accurate and live — with evidence of the school appropriately challenging social care responses when children need more",
      "Securus digital monitoring protects pupils online across school systems",
      "Vigilance is logged, not hidden: 45 bullying and 5 racist incidents recorded and acted on this year; 11 social-care referrals in the summer term; 41 active or pending Early Help cases tracked pupil-by-pupil — a school that sees things, records them and follows through"
    ],
    permeates: [
      ["Attendance", "Safeguarding and attendance are one machinery: home visits for every severely absent pupil logged on CPOMS, external agency support for every pupil below 50%, and the DSL leads both."],
      ["Inclusion & SEND", "16 external partnerships (CAMHS ×2 boroughs, art therapy, NHS SaLT & OT, autism outreach, West London Zone, GRIT) wrap around vulnerable pupils; EHCP pupils attend 9.13 points above national."],
      ["Curriculum", "Online safety, Prevent themes and healthy relationships taught through PSHCE; monthly family newsletters extend the curriculum home."],
      ["Community", "Supermarket vouchers, free uniform and PE kit for every family (alumni-funded), free Y11 prom tickets, Catholic Children's Society funds — dignity as safeguarding."],
      ["Transition", "Vulnerable incoming Y7 pupils identified before arrival; Y6 transition meetings carry structured safeguarding and attendance questions."],
      ["System leadership", "The DSL audited a Westminster primary school (June 2026), spoke at a national attendance conference, and the school sits in the DfE RISE Behaviour & Attendance Hub — our safeguarding practice is strong enough that other schools borrow it."]
    ]
  },

  /* ---------- Ofsted renewed framework reference ---------- */
  framework: {
    summary: "From 10 November 2025 Ofsted inspects under the renewed education inspection framework. Single-word overall judgements are gone; schools receive a report card grading each evaluation area on a five-point scale, with safeguarding judged separately as Met / Not met.",
    scale: [
      ["Exceptional", "The highest grade — sustained, exceptional standards; transformational impact for disadvantaged pupils and those with SEND; no significant area unaddressed."],
      ["Strong standard", "Consistently strong standards across the school's work."],
      ["Expected standard", "The secure baseline all schools should meet."],
      ["Needs attention", "An area requiring improvement."],
      ["Urgent improvement", "Serious weaknesses requiring immediate action."]
    ],
    areas: ["Inclusion", "Curriculum and teaching", "Achievement", "Attendance and behaviour", "Personal development and well-being", "Leadership and governance", "Safeguarding (Met / Not met)"],
    inclusion: "Inclusion runs through every evaluation area — inspectors focus on disadvantaged pupils and those with SEND. This is the school's strongest ground: above-national outcomes and attendance for exactly these groups, in a top-quintile deprivation context.",
    process: "Inspection begins with a pre-inspection call between the lead inspector and headteacher covering context, improvement priorities and evidence. On site, inspectors gather evidence through observation and professional dialogue rather than graded lessons. Leaders should lead the narrative: context → systems → impact → what's next."
  },

  /* ---------- Media coverage ---------- */
  media: [
    {
      group: "National press & mainstream media",
      icon: "📰",
      items: [
        ["Guardian / Observer", "High aspirations: the school that embodies Labour's hopes for special needs", "https://www.theguardian.com/education/2025/jul/11/high-aspirations-the-school-that-embodies-labours-hopes-for-special-needs"],
        ["Guardian", "Jenga, dodgeball and no phones: a London school's radical 12-hour day", "https://www.theguardian.com/education/article/2024/jun/14/jenga-before-lessons-dodgeball-after-verdict-12-hour-school-day"],
        ["Guardian", "Teachers in England offered lie-ins to make job more appealing", "https://www.theguardian.com/education/2024/sep/19/teachers-in-england-offered-incentives-to-make-job-appealing"],
        ["Guardian", "Teachers should be allowed more flexible working, Bridget Phillipson says", "https://www.theguardian.com/education/2024/dec/21/uk-teachers-should-be-allowed-to-work-from-home-education-secretary-says"],
        ["Guardian / Observer", "Inadequate schools 'left to fester' by Tories, says Labour in academies row", "https://www.theguardian.com/education/2025/jan/25/inadequate-schools-left-to-fester-by-tories-says-labour-in-academies-row"],
        ["Guardian", "Fund state schools at the level of private ones", "https://www.theguardian.com/education/2022/jan/29/levelling-up-schools-headteachers"],
        ["The Times", "The school offering a 12-hour day to break phone addiction", "https://www.thetimes.com/uk/article/school-to-extend-day-to-12-hours-to-break-pupils-phone-addiction-f5cjdhqrz"],
        ["The Times", "How one head saved a sink school in the shadow of Grenfell", "https://www.thetimes.com/uk/article/how-one-head-saved-a-sink-school-in-the-shadow-of-grenfell-phtzfmvzg"],
        ["The Times", "How dangerous are smartphones for children, and should we ban them?", "https://www.thetimes.co.uk/article/how-dangerous-smartphones-children-ban-schools-dk7crxkdr"],
        ["The Telegraph", "The headteacher undoing the damage of lockdown", "https://www.telegraph.co.uk/news/2024/04/29/andrew-oneill-headteacher-lockdown-effect-children-phones/"],
        ["Evening Standard", "London headteacher introducing 12-hour school day to tackle smartphone addiction", "https://www.standard.co.uk/news/london/london-headteacher-12-hour-school-day-smartphones-all-saints-catholic-college-b1152848.html"],
        ["Independent", "School tries to break pupils' addiction to smartphones with 12-hour day", "https://www.independent.co.uk/news/uk/home-news/all-saints-catholic-college-school-notting-hill-b2532193.html"],
        ["LBC", "Teachers get lie-ins, as schools search for new ways to attract staff", "https://www.lbc.co.uk/article/teachers-get-lie-ins-5Hjcr88_2/"],
        ["BBC The One Show", "Leading a school through tragedy to triumph", "https://www.facebook.com/bbctheoneshow/videos/leading-a-school-through-tragedy-to-triumph-/549474769877785/"],
        ["Ealing Today", "Hanwell man named Secondary Headteacher of the Year", "https://new.ealingtoday.co.uk/page/ealingtoday/info/conschools029.htm"]
      ]
    },
    {
      group: "Education press",
      icon: "🎓",
      items: [
        ["Tes", "Andrew O'Neill author page", "https://www.tes.com/magazine/author/andrew-oneill"],
        ["Tes", "Andrew O'Neill seconded for another year as DfE policy adviser", "https://www.tes.com/magazine/news/general/andrew-oneill-seconded-another-year-dfe-policy-adviser"],
        ["Tes", "DfE appoints new 'school leader advisor'", "https://www.tes.com/magazine/news/general/dfe-appoints-new-school-leader-advisor"],
        ["Tes", "Headteacher input 'completely lost' in inspection system", "https://www.tes.com/magazine/news/general/headteacher-input-completely-lost-in-inspection-system"],
        ["Tes", "Headteachers' Roundtable announces new co-chairs", "https://www.tes.com/magazine/news/general/headteachers-roundtable-names-new-co-chairs"],
        ["Tes", "SEND: new members in DfE expert inclusion group", "https://www.tes.com/magazine/news/general/send-new-members-dfe-expert-inclusion-group"],
        ["Tes", "How will the schools bill affect academy freedom?", "https://www.tes.com/magazine/analysis/general/what-freedoms-will-academies-lose-under-new-schools-bill"],
        ["Tes", "Why education keeps collapsing into crisis", "https://www.tes.com/magazine/analysis/general/why-education-keeps-collapsing-into-crisis"],
        ["Tes", "Education needs a regulator, so let's shape Ofsted's future", "https://www.tes.com/magazine/analysis/general/education-needs-regulator-take-part-in-ofsted-plans-consultation"],
        ["Schools Week", "Headteacher appointed as new DfE 'school leader adviser'", "https://schoolsweek.co.uk/headteacher-appointed-as-new-dfe-school-leader-adviser/"],
        ["Schools Week", "The school giving teachers a lie-in to boost retention", "https://schoolsweek.co.uk/the-school-giving-teachers-a-lie-in-to-boost-retention/"],
        ["Schools Week", "11-hour school day pays dividends, says leader", "https://schoolsweek.co.uk/11-hour-school-day-pays-dividends/"],
        ["Schools Week", "The schools waging war on smartphones", "https://schoolsweek.co.uk/the-schools-waging-war-on-smartphones/"],
        ["Schools Week", "New body launched to give council schools policy voice", "https://schoolsweek.co.uk/new-body-council-school-heads-demand-a-say-in-policy/"],
        ["Schools Week", "How we're going to give maintained schools their voice back", "https://schoolsweek.co.uk/how-were-going-to-give-maintained-schools-their-voice-back/"],
        ["Schools Week", "A golden opportunity to help fix our broken SEND system", "https://schoolsweek.co.uk/a-golden-opportunity-to-help-fix-our-broken-send-system/"],
        ["Schools Week", "Rehearsed arguments about pay won't help the sector", "https://schoolsweek.co.uk/rehearsed-arguments-about-pay-wont-help-the-sector/"],
        ["Schools Week", "Revealed: The 2022 Pearson Teaching Awards winners", "https://schoolsweek.co.uk/revealed-the-2022-pearson-teaching-awards-winners/"],
        ["Schools Week", "National Teaching Awards 2022 silver winners revealed", "https://schoolsweek.co.uk/80-winners-scoop-silver-at-the-2022-pearson-national-teaching-awards/"],
        ["Schools Week", "John Dickens interviews school leaders", "https://schoolsweek.co.uk/john-dickens-interviews-school-leaders/"],
        ["Schools Week", "No 'minimum safety levels' for school strikes", "https://schoolsweek.co.uk/no-minimum-safety-levels-for-school-strikes-just-yet/"],
        ["FE Week", "Revealed: The 2022 Pearson Teaching Awards winners", "https://feweek.co.uk/revealed-the-2022-pearson-teaching-awards-winners/"],
        ["Education Executive", "Fund state schools at the level of private ones", "https://edexec.co.uk/fund-state-schools-at-the-level-of-private-ones/"],
        ["Education Executive", "School extends hours to limit screen time", "https://edexec.co.uk/news-school-extends-hours-to-limit-screen-time/"],
        ["Education Business", "Pearson National Teaching Award winners revealed", "https://educationbusinessuk.net/news/28112022/winners-pearson-national-teaching-awards-revealed"],
        ["Education Business Awards 2025", "All Saints Catholic College recruitment and retention reference", "https://educationbusinesslive.com/eb-awards-2025"]
      ]
    },
    {
      group: "International & republished coverage",
      icon: "🌍",
      items: [
        ["Fortune Europe", "Meet the 12-hour school day that will cure Gen Z's crippling work-life balance", "https://fortune.com/europe/2024/05/01/london-school-day-extended-hours-gen-z-working-balance/"],
        ["Business Insider", "This school has 12-hour days, 'relaxing' meals and no smartphones", "https://www.businessinsider.com/smartphones-ban-gen-z-school-12-hour-day-social-media-2024-7"],
        ["Yahoo Finance", "Meet the 12-hour school day that will cure Gen Z's crippling work-life balance", "https://finance.yahoo.com/news/headteacher-preparing-homebird-gen-z-134554820.html"],
        ["New York Post", "School hopes to reverse Gen Z's bad habits with 12-hour days", "https://nypost.com/2024/05/02/school-hopes-to-undo-gen-zs-bad-habits-with-12-hour-days/"],
        ["News.com.au", "School hopes to fix bad Gen Z habits with 12-hour days", "https://www.news.com.au/lifestyle/parenting/school-life/tragedy-of-our-youth-school-hopes-to-fix-bad-gen-z-habits-with-12-hour-days/news-story/07b8cae82de9430ca8386bfe46e90e70"],
        ["Nine News Australia", "UK school principal wants 12-hour student day to break smartphone addiction", "https://www.nine.com.au/world-news/uk-school-principal-wants-12-hour-student-day-to-break-smartphone-addiction-20240422-p5z1pu.html"]
      ]
    },
    {
      group: "Catholic press & faith-sector coverage",
      icon: "✝️",
      items: [
        ["The Tablet", "Andrew O'Neill author page", "https://www.thetablet.co.uk/authors/andrew-oneill/"],
        ["The Tablet", "News briefings Britain and Ireland", "https://www.thetablet.co.uk/news/news-briefings-britain-and-ireland-7/"],
        ["Diocese of Westminster", "All Saints Head awarded Secondary Headteacher of the Year", "https://rcdow.org.uk/news/all-saints-head-awarded-secondary-headteacher-of-the-year/"],
        ["Independent Catholic News", "Head of All Saints wins a Headteacher of the Year award", "https://www.indcatholicnews.com/news/44790"],
        ["Aleteia", "London Catholic school's solution to kids' device addiction", "https://aleteia.org/2024/07/19/london-catholic-schools-solution-to-kids-device-addiction/"]
      ]
    },
    {
      group: "Awards, official & institutional references",
      icon: "🏆",
      items: [
        ["Pearson National Teaching Awards", "Andrew O'Neill — Secondary Headteacher of the Year", "https://www.teachingawards.com/award-winner/andrew-oneill/"],
        ["All Saints Catholic College", "Mr O'Neill appointed to national education role", "https://www.allsaintscc.org.uk/mr-o-neill-appointed-to-national-education-role"],
        ["All Saints Catholic College", "Leadership and staff", "https://www.allsaintscc.org.uk/leadership-and-staff"],
        ["All Saints Catholic College", "Homepage", "https://www.allsaintscc.org.uk/"],
        ["Get Information About Schools", "All Saints Catholic College", "https://get-information-schools.service.gov.uk/Establishments/Establishment/Details/100503"],
        ["Headteachers' Roundtable", "About us", "https://headteachersroundtable.wordpress.com/about/"],
        ["Education Policy Institute", "Enrichment for all — Andrew O'Neill listed as panellist", "https://epi.org.uk/events/enrichment-for-all-what-does-the-evidence-tell-us-about-access-impact-and-opportunities-for-improvement/"],
        ["Oracy Education Commission", "We Need to Talk report — All Saints case study", "https://oracyeducationcommission.co.uk/wp-content/uploads/2024/10/We-need-to-talk-2024.pdf"],
        ["Time's Up For The Test", "Supporters", "https://timesupforthetest.org/supporters"]
      ]
    },
    {
      group: "Social, video & secondary references",
      icon: "🎬",
      items: [
        ["ASCC LinkedIn", "The Tablet article post — A Reopening of the Mind", "https://www.linkedin.com/posts/all-saints-catholic-college-london_a-reopening-of-the-mind-the-childrens-wellbeing-activity-7320445538837962753-AE-8"],
        ["The Tablet (Facebook)", "How the Gospel can help us calm the storm in schools", "https://www.facebook.com/TheCatholicTablet/posts/how-the-gospel-can-help-us-calm-the-storm-in-schools-during-the-pandemic-andrew-/3472956502743285/"],
        ["The Tablet (Facebook)", "All Saints lessons / Rome Building post", "https://www.facebook.com/TheCatholicTablet/posts/catholic-pupils-at-all-saints-catholic-college-in-west-london-have-begun-lessons/4444101712295421/"],
        ["Good Morning Britain (Facebook)", "12-hour school day clip", "https://www.facebook.com/GMB/posts/a-school-headteacher-has-announced-plans-to-introduce-a-12-hour-school-day-to-tr/958663308964037/"],
        ["BBC Coventry & Warwickshire (Facebook)", "Smartphone ban / card games post", "https://www.facebook.com/bbccwr/posts/pupils-at-a-school-that-has-banned-smartphones-are-returning-to-card-games-and-c/1464775782333180/"]
      ]
    }
  ],

  askSuggestions: [
    "Give me the strongest 60-second case for Exceptional leadership",
    "How do I explain the disadvantaged gap widening?",
    "Chart our Progress 8 against national since 2023",
    "What's our answer on Year 11 attendance?",
    "How does our inclusion evidence map to the toolkit?",
    "What do I say about the 2025 SISRA estimates?",
    "Summarise the reading data and our response",
    "What are our safeguarding headlines?"
  ]
};

if (typeof module !== "undefined") module.exports = ASCC;
