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
        "January 2026 external Whole School Safeguarding Review + February 2026 Safeguarding Action Plan — both ready to show on demand.",
        "Immediate concerns from the review already actioned; remaining actions tracked and ongoing.",
        "Leaders receptive to challenge and reflective about their own practice — review commissioned externally, acted on within a month."
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
        "Deliberate resourcing: Deputy SENCo, Bethlehem Centre, Romero Centre ('keeping up, not catching up'), enhanced Attendance team."
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
      ]
    },
    {
      id: "behaviour", area: "Behaviour", grade: "Exceptional", scale: 5,
      headline: "Suspensions below national average and falling, permanent exclusions at zero, and a calm, purposeful environment day to day — sustained direction of travel, not a single good year.",
      evidence: [
        "Suspension rate 2.88 per 100 pupils vs national 3.72 — falling for four consecutive years.",
        "Zero permanent exclusions since December 2024 (national rate 0.04).",
        "Year 11 suspensions fell from 18 in HT1 to 4 by HT5 within this year.",
        "Low-level behaviour resolved without escalation; Behaviour Policy applied consistently; Headteacher personally scrutinises suspension decisions daily."
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
      ]
    },
    {
      id: "personal", area: "Personal Development & Well-being", grade: "Strong", scale: 4,
      headline: "A rich, deliberate personal development offer — trips, enrichment, ESP and Elev:8 — reaches every pupil including the disadvantaged, alongside a well-planned PSHCE curriculum and a genuine focus on staff wellbeing.",
      evidence: [
        "Every pupil attends at least 4 trips a year (2 Curriculum Enhancement Days, 2 Activity Days) plus whole-school celebration days (Culture, All Saints, Feast, Sports).",
        "Elev:8 and ESP programmes are transformational, with real potential for national scaling.",
        "Participation tracked (EVOLVE trip attendance, Class Charts club 'stars') — disadvantaged pupils demonstrably access the same offer.",
        "Student voice shows pupils recognise and value the opportunities and can generally articulate school values."
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
      phrases: ["Opportunity is planned, not left to chance", "Every pupil, especially the disadvantaged, gets the enrichment", "We look after our staff so they can look after our pupils"]
    },
    {
      id: "leadership", area: "Leadership & Governance", grade: "Exceptional", scale: 5,
      headline: "Exceptionally high standards of leadership and governance sustained over time: leaders at every level drive improvement across every evaluation area, with transformational impact on disadvantaged pupils, those with SEND, and those facing other barriers.",
      evidence: [
        "Test 1 (sustained): suspensions falling 4 consecutive years; attendance improving 2 years to above national; outcomes above national for 3 consecutive years. Every area self-assessed Strong or Exceptional with its own live action plan.",
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
    conduct: "99,194 achievement points vs 34,320 behaviour incidents logged this year (roughly 3:1 positive); 142 pupils with one or more suspension; 258.5 days lost; zero permanent exclusions."
  },

  /* ---------- Connections graph ---------- */
  graph: {
    // type: pillar (evaluation area) | driver (system/programme) | outcome | risk
    nodes: [
      { id: "leadership", label: "Leadership & Governance", type: "pillar", grade: "Exceptional", size: 17,
        desc: "Sustained exceptional standards; every weakness owned. Headteacher advises the Secretary of State; national platform.",
        stats: [
          "Every SEF area Strong or Exceptional — each with a live, owned action plan",
          "Sustained: suspensions falling 4 years · attendance rising 2 years · outcomes above national 3 years",
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
        desc: "2.88/100 suspensions vs 3.72; zero permanent exclusions since Dec 2024.",
        stats: [
          "Suspensions 2.88 per 100 vs 3.72 national — falling four consecutive years",
          "Zero permanent exclusions since December 2024 (national 0.04)",
          "Y11 suspensions 18 (HT1) → 4 (HT5) within this year",
          "99,194 achievement points vs 34,320 incidents — roughly 3:1 positive"
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
          "2 successful EHCP applications this year — swift, accurate identification"
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
