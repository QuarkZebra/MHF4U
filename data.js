/* ═══════════════════════════════════════════════════════════
   MHF4U COURSE DATA — this is the only file you edit.

   Each day looks like:
     {d:1, iso:"2026-09-01", topic:"Review of Functions", num:"1.1",
      note:"", ans:"", extras:[]}

   - note: paste the URL of the blank note & practice problems.
           Empty "" shows a greyed-out link with "Coming soon".
   - ans:  paste the URL of the answers. Empty "" is greyed out
           with "Coming soon"; once filled it goes live with the
           ☠︎ "do not look" hover.
   - num:  the note number shown to students ("1.7 Blank Note &
           Practice Problems"). Days with no note (tests, work
           periods) just leave num out.
   - flag: "quiz" | "review" | "test" tints the row. Quiz days
           use noteLabel/ansLabel for custom link names.
   - extras: [ ["Title","https://…","kind"], … ]
           kind = "doc" (worksheet/handout), "ans" (solutions,
           shows the ☠︎ warning), "vid" (video).

   D(id) is shorthand for a Google Drive link — paste either a
   full URL or D("fileId"), both work.

   To SAVE TIME:

   git add . && git commit -m "1.2 answer key" && git push origin main

   ═══════════════════════════════════════════════════════════ */

const D = id => `https://drive.google.com/file/d/${id}/view`;

const COURSE = {
  code: "MHF4U",
  title: "Advanced Functions",
  sub: "Grade 12 · University Preparation",
  units: [

  /* ── UNIT 1 ─────────────────────────────────────────────── */
  /* When done:   ans:D("1ptPs7517HfxPLUSGRumwIvKYi1BivJMZ")    */

  {name:"Functions", days:[
    {d:1, iso:"2026-09-01", topic:"Review of Functions", num:"1.1",
      note:D("1Vvs50UzRnrbaqEv-CZfI-na-WLJXTFIi"), ans:"https://drive.google.com/file/d/1ptPs7517HfxPLUSGRumwIvKYi1BivJMZ/view", extras:[
      ["Course Outline","https://docs.google.com/document/d/1TKs_nssQF9nXddPcy7fTJ68k6P8HA77nYvO-fjZeLsQ/edit","doc"],
      ["Calculators Allowed on Tests","https://drive.google.com/file/d/1Hq2HE1EzSy2frKT0pfDUSWshgf0GB7A1/view?","doc"],
      ["LG/SC Review from 3U",D("1B4y9b2TMDEZYqG_tXoG2RCuPREQPI9ef"),"doc"],,
      ["Domain & Range Worksheet (answers included)",D("12D6Wf_aWjvp3TMwibvPRFKc4oUhs6nWw"),"doc"],
      ["Domain & Range of Graphs","https://www.youtube.com/watch?v=YjVc9ookvRs","vid"],
    ]},
    {d:2, iso:"2026-09-02", topic:"Math Overview & Inverses", num:"1.2",
      note:D("1M_He13KlMBo3XHOrUSBJjP7ewNLlY8IH"), ans:D("1dLF9g2m9_GDRs3oJh6VSP0mPNrVgq6gI") /* key: D("1dLF9g2m9_GDRs3oJh6VSP0mPNrVgq6gI") */, extras:[
      ["Common Math Symbols",D("14gKLpT3TMJgeAkocJ7890DwQfmMMZb0h"),"doc"],
      ["Math Review / Overview",D("1Yem58YTDsBHEvbqA1RHn0XVhFuMxhxU5"),"doc"],
      ["Answers",D("1-Y8SYfMiWKaX3J9d19JCi2G68VRsv6sd"),"ans"],
      ["Parent Functions Reference Sheet","https://docs.google.com/document/d/1KSkrBrt0CvC0qH5nO9jl9vRo0MN1G6TonrKb_tgzXcY/edit","doc"],
      ["Answers",D("1hXmcBsb5AuOBgLMx3_UVnOxelnfK8Nlk"),"ans"],
      ["Old Inverse Relations Note",D("1_6elt4Hz9JXp6hep4YTfQ7hZWofk2tS0"),"doc"],
      ["Answers",D("1SCks1LLe3LsAFQzm7S-g8MhlLET3Fids"),"ans"],
    ]},
    /* Day 3's old domain & range extras moved to Day 1 (domain/range) and Day 8
       (interval notation); these replacements match 1.3's actual topics. */
    {d:3, iso:"2026-09-03", topic:"Mathematical Patterns", num:"1.3",
      note:D("11neyNblyF6QVFaS8IbXfjWW4uGe4ubQ0"), ans:D("1lwdvPpyHu79iKHUpCF77L7pW63fhwiLc") /* key: D("1lwdvPpyHu79iKHUpCF77L7pW63fhwiLc") */, extras:[
      ["First & Second Differences","https://www.youtube.com/watch?v=tBdA6ltSi1w","vid"],
      ["Ms. Havrot: Arithmetic Sequences (7.1)","https://www.youtube.com/watch?v=Kywsd6LKXKg","vid"],
      ["Ms. Havrot: Geometric Sequences (7.2)","https://www.youtube.com/watch?v=jtVesKxLyIA","vid"],
      ["Ms. Havrot: Compound Interest (8.2)","https://www.youtube.com/watch?v=epa2huwxGUI","vid"],
      ["Ms. Havrot: Pascal’s Triangle & Binomial Expansion (7.7)","https://www.youtube.com/watch?v=_alTrrhD4v8","vid"],
      ["Sequences Worksheet (answers included)","https://www.jensenmath.ca/s/Sequences-worksheet-1.pdf","doc"],
      ["Answers","https://www.jensenmath.ca/s/Sequences-worksheet-1-SOLUTIONS.pdf","ans"],
    ]},
    {d:4, iso:"2026-09-04", topic:"Absolute Value", num:"1.4",
      note:D("1ucaobGi7vXcFNTL3N1rv3Sdw_IJFbIdy"), ans:"" /* key: D("1Gzerqdsrn7SnOcKaYVL5-ZBP6M1ye90x") */, extras:[
      ["Absolute Value Inequalities","https://www.youtube.com/watch?v=iI_2Piwn_og","vid"],
    ]},
    {d:5, iso:"2026-09-08", topic:"Radians", num:"1.5",
      note:D("1zJIxYcSHUWktPCVmSHH20MHFgXw1oEBB"), ans:"" /* key: D("1_MiCziw0ZElUDDeDbIuhK70hC45HK5jb") */, extras:[
      ["Radians Worksheet","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed50f5f0818b1a92890325/1642942709577/hw1s++4.1+Radian+Measure.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed50fa557fe87e37110761/1642942714576/hw1t++4.1+Radian+Measure.pdf","ans"],
      ["In-Class Note: Speed vs Angular Speed",D("1JH_B_ekPRnYrK9rNLOapbvjcFWkerC3T"),"doc"],
    ]},
    {d:6, iso:"2026-09-09", topic:"Trig: Inverse vs Reciprocal", num:"1.6",
      note:D("1bfcQnBvBYRWCGHbuYNi-H1n5_N8_f0m8"), ans:"" /* key: D("12KHLbTF_mFSP-WrfAzL3mkN-VpPlwM0K") */, extras:[
      ["More Trigonometry Practice",D("1eDk4okSLmzeoMjnnK6yN0d1Ox9MnDhtX"),"doc"],
      ["Answers",D("1OEWpsnL7f8NhkCcKfb6NI6Z5HZglpEJN"),"ans"],
      ["Exact Special Triangles Practice",D("1Pwyg2hp217LGKfr8QH9AUmU2CtakHOqR"),"doc"],
      ["Answers",D("1QAta6TpNRw6CE_VCZWTIcZ0m2z8Vb0hA"),"ans"],
    ]},
    {d:7, iso:"2026-09-10", topic:"Transformations", num:"1.7",
      note:D("1ctOnyL7wVbhiDH4lqTX8ihgi7k10wwk4"), ans:"" /* key: D("19pvRgI658kD3GVlxWkLCvdf_wvX8tfW_") */, extras:[
      ["I/O Diagrams & Function Notation",D("13cWi_5WSXjQWA0TnT_i9qMA40U5nXhgC"),"doc"],
      ["Answers",D("13e34ICvMaArFfvaRYvzmr_DXwjkFHG6P"),"ans"],
      ["I/O Diagrams with Quadratics",D("13_rwK9BRjyIrzV8DOCfrbeD0dA5Oohx1"),"doc"],
      ["Answers",D("13he6tfK3CSu4LGMYGmOCR2xfykVBTdRO"),"ans"],
      ["Extra Transformation Question",D("1HzeS8WFhg0o82kkWWNNYpDUzlRLQKYoQ"),"doc"],
      ["Extra Transformation Practice (with order)","https://docs.google.com/document/d/1IUDImHOCrs2K8wxj4wLvBMWCC6JC-hVvTHJC-alk5Tw/edit","doc"],
      ["Old Transformations Note",D("1ZpwnmA9L5EtmBjmAJXtGaUnSIZ5p5bo7"),"doc"],
      ["Answers",D("1Qo82oyxLpLBx22lWTQP23oanJWk2YA--"),"ans"],
      ["Answers (with I/O)",D("1Jjop5z_MzxaVEGSWv522zKxDaZrAdPcS"),"ans"],
    ]},
    {d:8, iso:"2026-09-11", topic:"Properties of Functions", num:"1.8",
      note:D("1f9nOS3VBuASa3pn5vots9ePfTcbdYSjK"), ans:"" /* key: D("1NGfYn21HEDCt0pXrB0NbNy1g06hle6ce") */, extras:[
      ["Properties of Functions Review",D("11ljLhzas7erncDuHmSnDFaCkPd6FQw6q"),"doc"],
      ["Answers",D("11sqQDo5wI-GfV2fxV18NWRLcMQZTW5hq"),"ans"],
      ["Properties Challenge",D("1RKGC6FyeFK36B8_r4CT47w4SNhG6JvK9"),"doc"],
      ["Answers",D("1SE1I-3qiHlAk0LjJP0Bf2i61zgCSxr04"),"ans"],
      ["Interval Notation","https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:introduction-to-the-domain-and-range-of-a-function/v/introduction-to-interval-notation","vid"],
    ]},
    {d:9, iso:"2026-09-14", topic:"Piecewise Functions", num:"1.9",
      note:D("12g_NmoSCNAQWwjbhInkHRHrPAJvZ5UR8"), ans:"" /* key: D("1ok89PfstZ8S8ZAvO_QncVL2eASVeGYpA") */, extras:[
      ["Function Notation Extra Practice","https://docs.google.com/document/d/1n1wRsbtm4vZTYPBxOE6kh2rNKuBrAaVzsSf-B-oz2oo/edit","doc"],
    ]},
    {d:10, iso:"2026-09-15", topic:"Practice Quiz · Work Period", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers",
      note:D("1Mf1bTmMkrUsr7jJ5ihlRm49vRLzKJQbU"), ans:"" /* key: D("18E-MoFd0wSZVQZSb5EVdzyxl78FES7gz") */, extras:[
      ["Function Notation Example","https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-functions-and-function-notation/v/understanding-function-notation-example-3","vid"],
    ]},
    {d:11, iso:"2026-09-16", topic:"Operations with Functions", num:"1.10",
      note:D("17hI0NwthW_vt91YgnpyW-06xle90PAMg"), ans:"" /* key: D("1gfBo_VjRKTmGgeuoVmbEAr23yV-4RQhm") */, extras:[
      ["Ms. Havrot: Sums & Differences of Functions (9.2)","https://www.youtube.com/watch?v=nBAffHJK2oA","vid"],
      ["Ms. Havrot: Products of Functions (9.3)","https://www.youtube.com/watch?v=Y-JY4aHhJwI","vid"],
    ]},
    {d:12, iso:"2026-09-17", topic:"Composite Functions", num:"1.11",
      note:D("1xQ_qVFNHI7Eud09kgMYNCEYhEO109qFR"), ans:"" /* key: D("1Nw1YIzbD4k3vkAxB9uOvOLmT8nRZJgMx") */, extras:[
      ["Composite Functions Examples","https://www.youtube.com/watch?v=ZFPkQkURSxk","vid"],
      ["Ms. Havrot: Composition of Functions (9.5)","https://www.youtube.com/watch?v=9mG6iWo8TJA","vid"],
    ]},
    /* 9.7 walks through a modelling problem — worth flagging as an after-class
       resource so it does not pre-empt the investigation. */
    {d:13, iso:"2026-09-18", topic:"Modelling Investigation",
      noteLabel:"Modelling Student Sheet", ansLabel:"Answers",
      note:D("1-Y0FdnjHSOzbROEVgHE6PNYCC_jJd4Qx"), ans:"" /* key: D("1wTcLtnPfZ6nc6EK64VyIHqUVV1gZ6v7y") */, extras:[
      ["Desmos: Fitting a Curve to Data (Regressions)","https://help.desmos.com/hc/en-us/articles/4406972958733-Regressions","doc"],
      ["Ms. Havrot: Modelling with Functions (9.7)","https://www.youtube.com/watch?v=EpwghsfP8-8","vid"],
    ]},
    {d:14, iso:"2026-09-21", topic:"Logarithmic Functions", num:"1.12",
      note:D("1zLtR8wOeUk79-Jfs4b9c9-ShYPt3Ott7"), ans:"" /* key: D("1-tngecdW-zxHV5YMUQRmirPlrD584IPl") */, extras:[
      ["Ms. Havrot’s Video Lessons on Logs (Ch. 8)","https://www.youtube.com/watch?v=w-2ku9QNYlA&list=PLGinkJ_ZMO2HQwGf8mAmHGPQTJr1_faeF","vid"],
      ["Short-cut to solve ANY Problem","https://www.youtube.com/watch?v=dQw4w9WgXcQ","vid"],
    ]},
    {d:15, iso:"2026-09-22", topic:"Solving the Unsolvable", num:"1.13",
      note:D("1LoKvDxo4CwPgx3WK0v4WrM-rmDf9XZfL"), ans:"" /* key: D("10uFTcUJQURf2lqoCEpZ1ToCOsrit9kWO") */, extras:[
      ["Ms. Havrot: Solving Equations & Inequalities (9.6)","https://www.youtube.com/watch?v=TwNCtmrbMBE","vid"],
      ["Solving Equations by Graphing","https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:eq/x2ec2f6f830c9fb89:sol-eq-graph/v/graphically-solving-equations-calculator","vid"],
    ]},
    {d:16, iso:"2026-09-23", topic:"Review", flag:"review", noteLabel:"Unit Review", ansLabel:"Answers",
      note:D("1tgd8tAWNrjrWStDTuG3Silp9dYItqU3Y"), ans:"" /* key: D("1sJGLB5I4XXF3DynZqWGzs7B5q4B4WFm5") */, extras:[
      ["Review Learning Goals & Success Criteria","https://docs.google.com/document/d/1PM-Pt9rS_Bh1LQl8MU7-IcBnvwCZgj3dwJXL6Ghl7E0/edit","doc"],
      ["LG/SC with Possible Questions & Solutions",D("11ghnyya9SE1PYG3VXTOaKdcJt8iM1h5J"),"doc"],
      ["Practice Test",D("1ziRAF3iiRMCg2OfhBgeKtEdyA2OMxuC9"),"doc"],
      ["Answers",D("15OHqE5y9iex0s_O_5GhvdGafJtOS3tr9"),"ans"],
      ["Additional Review Questions",D("11r0VoVa4u5byf5-BcRGO_-Q_6owAWCSK"),"doc"],
    ]},
    {d:17, iso:"2026-09-24", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 2 ─────────────────────────────────────────────── */
  {name:"Polynomial Functions", days:[
    {d:1, iso:"2026-09-25", topic:"Exploring Polynomial Functions", num:"2.1", note:D("1eQI72t7i4BGonpyAq_4t6ASWDYZecylY"), ans:"" /* key: D("1JtcxaqEl1qjQZeezef2-VuqKMaPv1TOI") */, extras:[
      ["Factoring Note with Examples",D("172JVWB48hnwCbyJOf_6hQOqP-nvId9nz"),"doc"],
      ["Factoring Worksheet",D("16wBxYMkSBnxSJ7isUZbQuxvfOxisBUyy"),"doc"],
      ["Factoring: Greatest Common Factor (Khan)","https://www.khanacademy.org/gclassroom/math/algebra2/x2ec2f6f830c9fb89:poly-factor/x2ec2f6f830c9fb89:common-factor/a/taking-common-factors","vid"],
      ["Factoring — How-to Video","https://www.youtube.com/watch?v=kAHRBxLhkW8","vid"],
      ["Degree from TOV Practice","https://docs.google.com/document/d/172LPMGDL19hE7Vj0UnR8dyT4zD9oe4Qz/edit","doc"],
      ["Answers",D("174_8ZkyIjmRwAvdoZTs0uLzuL_YlPsIT"),"ans"],
    ]},
    {d:2, iso:"2026-09-28", topic:"Polynomial Properties Investigation", num:"2.2", note:D("1k5gUkUAe7hrWdRbu5unmmHmH5ZN3psxp"), ans:"" /* key: D("19sOWTV24qhJTDBLSmLgXjqIP6A287bs6") */, extras:[
      ["Polynomial Practice",D("1Udu9Rbnu95tzH7AljcW4lIHWFF16GYcc"),"doc"],
      ["Answers",D("1Ue3x4bzz7LtC5vWPuxFCLHym5GTDBe-H"),"ans"],
    ]},
    {d:3, iso:"2026-09-29", topic:"Factored Polynomials", num:"2.3", note:D("1lpFwAQKGHioViIudls4NQiswELJzU1fY"), ans:"" /* key: D("1bKBJH1c_D2Z0AtXc1nblzwEqg6yUKIEG") */, extras:[
      ["Factored Form Video Lesson","https://www.youtube.com/watch?v=5zvcIREUjW4","vid"],
    ]},
    {d:4, iso:"2026-09-30", topic:"Transformations of Polynomial Functions", num:"2.4", note:D("1DoMOw7QNwtu7tLnu9ILC8H9oon0k-m5m"), ans:"" /* key: D("157PAv_sOJKoe2qIRKtnFWGegjQUvbk_-") */, extras:[
      ["Transformations Video Lesson","https://www.youtube.com/watch?v=GUzxZUzqJJ8","vid"],
    ]},
    {d:5, iso:"2026-10-01", topic:"Practice Quiz", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[
      ["Fundamental Theorem of Algebra","https://www.youtube.com/watch?v=shEk8sz1oOw","vid"],
    ]},
    {d:6, iso:"2026-10-05", topic:"Dividing Polynomials", num:"2.5", note:D("1XY6WebzZ6771Bv9XGCpFoY3i5BKirJMB"), ans:"" /* key: D("1C_C6oC6kgymrxZ2n8Z9QDZchb2FHjEtx") */, extras:[
      ["Khan: Polynomial Division","https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:poly-div/x2ec2f6f830c9fb89:quad-div-by-linear/v/polynomial-division","vid"],
      ["Lesson: Dividing Polynomials","https://www.youtube.com/watch?v=3Kb0K6h3Dds","vid"],
      ["Lesson: Synthetic Division","https://www.youtube.com/watch?v=HxFROWAW1Rs","vid"],
      ["Dividing Polynomials Worksheet",D("1AQMKPh9Qmi2hTemVczPjsnTZkNs3EDCR"),"doc"],
    ]},
    {d:7, iso:"2026-10-06", topic:"Dividing, Continued", note:"", ans:"", extras:[
      ["Extra Practice Problems",D("1XEZWZxJuqZwB4pGuMORzX2HZp8bPU_vB"),"doc"],
      ["Answers",D("1XTbGLHrnSzJgyjTOOmZ9rc3-fkHtR7kC"),"ans"],
    ]},
    {d:8, iso:"2026-10-07", topic:"Factoring Polynomials", num:"2.6", note:D("1g4AF98CI6i5GOJKr3rPpCXvjxvnjrtbZ"), ans:"" /* key: D("1t6K3RFryEzVzJrUkWCAYrMNTd7KZUYit") */, extras:[
      ["Factoring by Grouping","https://www.youtube.com/watch?v=t7-JCa7phCQ","vid"],
    ]},
    {d:9, iso:"2026-10-08", topic:"Factoring Sum or Difference of Cubes", num:"2.7", note:D("1eJQVq6vk9i7-pv-ps3SjqcoY7drZJ0Cv"), ans:"" /* key: D("1AlGxsZd45ZRdHSr0NH4AJ2kfOvrZ9UDI") */, extras:[
      ["Sum or Difference of Cubes Worksheet",D("1Bqfy8GGOs4L2pddLKlm75nZBjWh6u7xw"),"doc"],
      ["Exponent Worksheet",D("18OkSTlX0wHwBtbrPsPz8bW6ABk8ZgI-q"),"doc"],
      ["Simplifying Rational Exponents",D("182zS4hOiXNe8B6RxQf09IoOOmXEmqjiG"),"doc"],
      ["Answers",D("180cwK_JBCWNLol-6HXiQTAg7ReKHI53P"),"ans"],
    ]},
    {d:10, iso:"2026-10-09", topic:"Review", flag:"review", noteLabel:"Unit Review", ansLabel:"Answers",
      note:D("1xCAJMXLOJ8KjM-6qnuBchq8Vm_wtm9QU"), ans:"" /* key: D("1KLxKlsFt-hF6EBgDiztsqgsg3GcZpSxU") */, extras:[
      ["Sketching Worksheet",D("1sSdTYJEhghFtaq0PIe4S5XSCcEaWsIXf"),"doc"],
      ["Answers",D("1WpZNJWm2l6kGe3Vs-ueBXUkDSgJEnleE"),"ans"],
      ["Dividing Practice",D("1P4UuSqsstKTel3IzAxjE-9C3mHshFncw"),"doc"],
    ]},
    {d:11, iso:"2026-10-13", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 3 ─────────────────────────────────────────────── */
  {name:"Polynomial Equations & Inequalities", days:[
    {d:1, iso:"2026-10-14", topic:"Solving Polynomial Equations", num:"3.1", note:D("1WylEmcyNZdwCwdfGNMJFou7nwEN1Vpj5"), ans:"" /* key: D("1vgGk1yv2gJbw6J0kwYW8bT-Ed7ObhWcZ") */, extras:[
      ["Jensen: Solving Polynomial Equations","https://www.youtube.com/watch?v=3DXn0v55KSY","vid"],
      ["Practice Solving Polynomials","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ec0c6ea7b6b91ae7b8dfa0/1642859631045/2.3+hws+solve+polynomial+equations.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ec0c748922b857abf38641/1642859636816/2.3+hwt+solve+polynomial+equations.pdf","ans"],
      ["Operations with Radicals Worksheet",D("1I9Qe1vW9ThikSeaZGkZXNMGBv0DEL_Xz"),"doc"],
    ]},
    {d:2, iso:"2026-10-15", topic:"Solving Linear Inequalities", num:"3.2", note:D("18HbeDmFAf7ypYxNaMlxlUNP3bs5b9oNB"), ans:"" /* key: D("1xZJC23dpF0l8DJhYBtqdjjxW3lq9lJHu") */, extras:[
      ["Linear Equations","https://www.youtube.com/watch?v=Ft2_QtXAnh8","vid"],
      ["Solving Linear Equations","https://www.youtube.com/watch?v=7DPWeBszNSM","vid"],
    ]},
    {d:3, iso:"2026-10-16", topic:"Solving Polynomial Inequalities", num:"3.3", note:D("1Yz0o0ChTUnwUrp0iDHSgY5qVajWZKRgH"), ans:"" /* key: D("1xOhb3W0wfflLmWqbAcnUwdIPQQC7Oxhc") */, extras:[
      ["Lesson: Polynomial Inequalities","https://www.youtube.com/watch?v=aTxdx6QKCfo","vid"],
      ["Practice Solving Inequalities","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ec0d30644b3f2d27288491/1642859827148/2.5+hws+solving+inequalities.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ec0d389e7a884213b9b9b0/1642859833266/2.5+hwt+solving+inequalities.pdf","ans"],
    ]},
    {d:4, iso:"2026-10-19", topic:"Challenge Quiz", flag:"quiz",
      noteLabel:"Challenge Quiz", ansLabel:"Answers", note:D("1qd-WIoGN1solgGV6TcJ0MqHNnjyHv0OA"), ans:"" /* key: D("1OxETkLGCc6AyHxZi8EEGWHxhX5d1MqeI") */, extras:[
      ["Factorable Polynomials Practice",D("1-YHrHcxBborXOI8-f7tzpKXQnjbOQSpl"),"doc"],
    ]},
    {d:5, iso:"2026-10-20", topic:"Average Rates of Change", num:"3.4", note:D("1fFcwEQMvImukYrouFZfzavJvZSs22PcF"), ans:"" /* key: D("1XnOJJ5mH1pLn3nMVgDczSZVluuqqO7oF") */, extras:[
      ["Jensen: Average Rate of Change","https://www.youtube.com/watch?v=7nQoJI_bNuk","vid"],
      ["Jensen: Instantaneous ROC","https://www.youtube.com/watch?v=KLTq4Kyo7ZU","vid"],
      ["Practice AROC","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed5f15caace83d20b3ab15/1642946326039/hw1s++1.5+average+rate+of+change.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed5f1aed236a1f9a395dc6/1642946331129/hw1t++1.5+average+rate+of+change.pdf","ans"],
      ["Practice IROC","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed5f65557fe87e3711c1f6/1642946406385/hw2s++1.6+instantaneous+rate+of+change.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed5f6be05d8d4b38d4a1d6/1642946411452/hw2t++1.6+instantaneous+rate+of+change.pdf","ans"],
    ]},
    {d:6, iso:"2026-10-21", topic:"Instantaneous Rates of Change", num:"3.5", note:D("1IMxJnzHKujUAvBAE3VKJERlJ9B9DQflj"), ans:"" /* key: D("10LGI5t_1gI4pC8c4ymcdexGAe8nXTqdF") */, extras:[
      ["Forward Difference on Desmos","https://www.desmos.com/calculator/ckzy8wij4n","doc"],
    ]},
    {d:7, iso:"2026-10-22", topic:"Representing ROC & Graphing", num:"3.6", note:D("1Nw2EJCRdRzc9WtFaoEFDV5kr5Ll25DJ_"), ans:"" /* key: D("1Eez7rGEqkjGuB3-BvfQc3HDhehSg_nWM") */, extras:[
      ["Polynomial Inequalities (with solutions)",D("1PFSZJANtptlcvfcpjYn88cPJsIsEoaA6"),"doc"],
    ]},
    {d:8, iso:"2026-10-23", topic:"Problems Involving ROC", num:"3.7", note:D("1KZ9g64nEQeVFYP_9ERigRbHhQpR9tQGT"), ans:"" /* key: D("1cECWa3wx1ybkylh1R96hPrfleQ75KbgW") */, extras:[
      ["Solving Problems with ROC","https://www.youtube.com/watch?v=4SNAk2fSD58","vid"],
    ]},
    {d:9, iso:"2026-10-26", topic:"ROC in Polynomial Functions", num:"3.8", note:D("1gXvIIepA5MsDnjjJNRPA8XTLcUHKKoVo"), ans:"" /* key: D("1ZJvYO96RAjbX5s3M87Hfg0GuLHgMF2LR") */, extras:[
      ["Extra Question",D("1aBXsRzX4CcE-guWcFp-sip7J8gAH4a_0"),"doc"],
      ["Answers",D("1aC4TJKD2T56iRg7KR7Qjj3yTo4AtPLc8"),"ans"],
    ]},
    {d:10, iso:"2026-10-27", topic:"Review", flag:"review", noteLabel:"Unit Review", ansLabel:"Answers",
      note:D("1k5eP60CVoLjTEv0136fBr2AuzeJgEVCJ"), ans:"" /* key: D("1l7H1pC2Jfx0zHsHnr4QnpzWcBkdf7Rmn") */, extras:[
      ["Ms. Havrot: Chapter 4 Practice Test","https://www.youtube.com/watch?v=d6mpf7rwVQo","vid"],
      ["Ms. Havrot: Rates of Change Summary (2.3–2.5)","https://www.youtube.com/watch?v=bctH4jVfFKY","vid"],
    ]},
    {d:11, iso:"2026-10-28", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 4 ─────────────────────────────────────────────── */
  {name:"Rational Functions", days:[
    {d:1, iso:"2026-10-29", topic:"Graphs of Reciprocal Functions", num:"4.1", note:D("1v3uYh0ks822Fcu2m5xjxZAGVLksTXGb4"), ans:"" /* key: D("1UBof53_Zraqx8MZKqdxZmfIOsQ8ukrSo") */, extras:[
      ["Ms. Havrot’s Videos: Rational Functions","https://www.youtube.com/watch?v=QT2hD5EnHAs&list=PLGinkJ_ZMO2FE8EzZwCSUIPxOmMxmrzVv","vid"],
      ["Jensen: Reciprocal Functions","https://www.youtube.com/watch?v=CoqCJQMt8JU","vid"],
      ["Practice Problems","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed62523ad0a2796cf8ce9a/1642947155249/hw1t+3.1+reciprocal+of+linear+and+quadratic.pdf","doc"],
    ]},
    {d:2, iso:"2026-10-30", topic:"Quotients of Polynomials", num:"4.2", note:D("1u9Nq16zcFvx14-wkn29AZP1mskKvoycT"), ans:"" /* key: D("1eCUo0YIJF3nj8sYRuwS1aeXXSLe6vv6V") */, extras:[
      ["Completing the Square","https://www.youtube.com/watch?v=JIoW2AnQyXQ","vid"],
      ["Visual Explanation of Completing the Square","https://www.youtube.com/watch?v=McDdEw_Fb5E","vid"],
      ["Fun Quotients Questions",D("1_jtA6W6U0wv2zYZAmW91WyTRv9wAMV4U"),"doc"],
      ["Answers",D("1jKzPJVo_AvVXglVr5jLT3bLyUhtm8uJ8"),"ans"],
    ]},
    {d:3, iso:"2026-11-02", topic:"Graphs of Rational Functions", num:"4.3", note:D("1DEeUe-E2jh7d7OWaj4YFpaKBNadu94fh"), ans:"" /* key: D("1U3fMF6QS2l934V7U4-2LCmfRVWOXjV2W") */, extras:[
      ["Practice Problems (Linear)","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed62a13e485b16c508d2bb/1642947233229/hw2s++3.3+quotient+of+linear+functions.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed62a70a718a6aa7c0bdaf/1642947240026/hw2t++3.3+quotient+of+linear+functions.pdf","ans"],
    ]},
    {d:4, iso:"2026-11-03", topic:"Solving Rational Equations", num:"4.4", note:D("123k_oXfImSYXnP7mCd96mv9O3SdRBP2O"), ans:"" /* key: D("1UjxLzPO0X8UtcYNxJgpw0tC0XNLo8Atv") */, extras:[
      ["Jensen: Solving Rational Equations","https://www.youtube.com/watch?v=i2WksNaT4wQ","vid"],
      ["Rational Equations with Word Problems",D("1dK64Bgy3Ihi8pkdWfSd_9GPsB_JGb7bR"),"doc"],
      ["Answers",D("1dCjIgI2sgSf_AerOVxZiRDdgo5JBbCnP"),"ans"],
      ["Solving Rational Equations Extra Practice",D("1be_IW9jyXjymPKMs8ysSCxmbIKdTdgsW"),"doc"],
      ["Answers",D("1bijU5OfLsC9aKn-jomwvgCqXa_MGNMBS"),"ans"],
    ]},
    {d:5, iso:"2026-11-04", topic:"Practice Quiz", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:D("12wy0AHs1s7eyUwKQfMcuilLW_rR3C8ND"), ans:"" /* key: D("1tDJWaoQ-9lFXilup013ULs9b1FEocW6Q") */, extras:[
      ["Graphing Quotients Extra Practice",D("1ci6x8Ho84QyRjt2Md36oG0eMYbmTAtsy"),"doc"],
      ["Answers",D("1cj4bBx3CRvnfRXAb9EFQ-LOPLjsmGjoJ"),"ans"],
    ]},
    {d:6, iso:"2026-11-05", topic:"Solving Rational Inequalities", num:"4.5", note:D("17lV1ceNe0A1SSiUezlT29zaKCS77oDV2"), ans:"" /* key: D("1Pi4ikNGUpII811Vtj6MoLBtdVfYmnh1R") */, extras:[
      ["Jensen: Solving Rational Inequalities","https://www.youtube.com/watch?v=_U8lOBTvfNs","vid"],
      ["Practice Solving Rational Inequalities",D("1befmdB8vadxFu9GD8gmcUqvcW9CLbQR_"),"doc"],
      ["Answers",D("1bwJUEgfAJcjL_xL_KtGBEIAf5C9oEpEi"),"ans"],
    ]},
    {d:7, iso:"2026-11-06", topic:"ROC of Rational Functions", num:"4.6", note:D("1BeV9c6pNy4keGAvy5OQEc1W6WyJCENGT"), ans:"" /* key: D("1Aznrwdff0F847zqGImye8wusiKZnukPQ") */, extras:[
      ["Ms. Havrot: Rates of Change in Rational Functions (5.6)","https://www.youtube.com/watch?v=T4GJeS4G9gc","vid"],
    ]},
    {d:8, iso:"2026-11-09", topic:"Review", flag:"review", noteLabel:"Unit Review", ansLabel:"Answers",
      note:D("11QfKVMMvpuMlT_0x8pkdsPZi8DpsAoGM"), ans:"" /* key: D("1DLPWZsEq_su7EidEkFEsM_65C8GNfq3Y") */, extras:[
      ["Challenge Questions",D("1es6G1-ukzAGTbwJ5Vv_nPvFkKEk7ltxc"),"doc"],
      ["Answers",D("10PWXTJC3uXKDcmb_l4CIvDhr2aPQ-R8k"),"ans"],
    ]},
    {d:9, iso:"2026-11-10", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 5 ─────────────────────────────────────────────── */
  {name:"Trigonometric Functions", days:[
    {d:1, iso:"2026-11-11", topic:"Trig Ratios with Radians", num:"5.1", note:D("1cpBf-ZAo3wBeYz_cD_8NmTjRBQkWzQuK"), ans:"" /* key: D("1VJ01PJlASW7IQonyXXCgjID7ktpIcI4b") */ /* v2 draft: note D("1te8V5N0hDsien243k54Km_QQhqe35SRx") key D("1FpF9cPMy814vCkLPAlTXnIhtOTBZ0_yz") */, extras:[
      ["SOH CAH TOA Song","https://www.youtube.com/watch?v=PIWJo5uK3Fo","vid"],
    ]},
    {d:2, iso:"2026-11-12", topic:"Graphs of Trig Functions", num:"5.2", note:D("1PQeZqLfoUBYUJqciw9lIuTeAHeZ7XSkj"), ans:"" /* key: D("1XQpDtB3WzBuOT7RByKFLFbiY6QvqsKSH") */, extras:[
      ["Trig Angles Simulation","https://phet.colorado.edu/sims/html/trig-tour/latest/trig-tour_en.html","doc"],
      ["Transformations Review",D("1R_qADObrxDzdGpxFfIlRo2uUdJdsdo9z"),"doc"],
      ["Answers",D("1RUav7ZtepkNj-XT8Z3Q1G_Qf1_wkyxBv"),"ans"],
    ]},
    {d:3, iso:"2026-11-13", topic:"Practice Quiz", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:D("1tvwsl0GfosQUaTvTnjCqMZO2ARUoId0r"), ans:"" /* key: D("1zbCDkQqXrRgmBgrODCS749jcahZtgwlA") */, extras:[
      ["Trig Ratios & Special Angles Worksheet","https://www.jensenmath.ca/s/hw2s-42-Trig-Ratios-and-Special-Angles.pdf","doc"],
      ["Answers","https://www.jensenmath.ca/s/hw2t-42-Trig-Ratios-and-Special-Angles.pdf","ans"],
    ]},
    {d:4, iso:"2026-11-16", topic:"Transformations of Trig Functions", num:"5.3", note:D("1LHPj-C7CJRD72NMhpbGAHUYLQF75pXzK"), ans:"" /* key: D("1AcO7kAsXFy-nvyMq67dPFx1Zq5njHysx") */, extras:[
      ["Graphing Extra Practice (with answers)",D("1R8ytvzOWMppeLJhsje4RBBroGERjIdL5"),"doc"],
    ]},
    {d:5, iso:"2026-11-17", topic:"Reciprocal Trig Functions", num:"5.4", note:D("12xbvlEsXneDTaxFcPfh4fCnJAN9gKHX_"), ans:"" /* key: D("1PLIPXSFCCtClYbfcX2pwl1ASbhq8Zd-F") */, extras:[
      ["Graphing All Trig Functions Worksheet","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed517c0e1ca17f50545404/1642942844717/hw3s++Graphing+Trig+Functions.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed5182684ee5656cdedfea/1642942850446/hw3t++Graphing+Trig+Functions.pdf","ans"],
    ]},
    {d:6, iso:"2026-11-18", topic:"Modelling with Trig Functions", num:"5.5", note:D("1BfMa7IWpbXSLuDuV2Yf9NB2l-uuIMs3R"), ans:"" /* key: D("1-WlIZ94TNAkcbg9BcFyADNKlT5CnXiba") */, extras:[
      ["Trig Applications Worksheet","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed520c2d3b9c7554d007c3/1642942988894/hw5s++Trig+Applications.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed52117618b227cf316b53/1642942994194/hw5t++Trig+Applications.pdf","ans"],
    ]},
    {d:7, iso:"2026-11-19", topic:"Review", flag:"review", noteLabel:"Unit Review", ansLabel:"Answers",
      note:D("1N7_8Ab3iv1zEAZi4hD4mzpNDQn4nz82j"), ans:"" /* key: D("1JFR7n-bSlIMg46fqeI90IcYMOpRCm3qF") */, extras:[
      ["Extra Review Questions","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed524a1f188b0ab84d4079/1642943050935/Unit+4+Review++Trig+in+Radians.pdf","doc"],
      ["Answers","https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ed525acc0eeb42ab7837de/1642943066952/Unit+4+Review++Trig+in+Radians+SOLUTIONS.pdf","ans"],
    ]},
    {d:8, iso:"2026-11-20", topic:"Trig Rates of Change", num:"5.6", note:D("1WIvfHkdMB0-DS-JCB8KqHr150GWeYfwf"), ans:"" /* key: D("1e4rjqZ_2_I2qwl1Va-LK0GQpRUZs4gbC") */, extras:[
      ["Ms. Havrot: Rates of Change in Trig Functions (6.7)","https://www.youtube.com/watch?v=_wvW1D-EBuQ","vid"],
    ]},
    {d:9, iso:"2026-11-24", topic:"Trig Functions Test (without calculators)", flag:"test", extras:[]},
    {d:10, iso:"2026-11-25", topic:"Trig Functions Test (with calculators)", flag:"test", extras:[]},
  ]},

  /* ── UNIT 6 ─────────────────────────────────────────────── */
  {name:"Trig Identities & Equations", days:[
    {d:1, iso:"2026-11-26", topic:"Trig & Equivalent Functions Review", num:"6.1", note:D("1A3toLNq8yTAbDxIRizPybUdOi1zkMq8r"), ans:"" /* key: D("1Yc0VQhaeeN4uF1NpOBTWt-CQES-oa5Jo") */, extras:[
      ["Review: Trig Identities",D("1YI0Zr7DZkqQc6hdEzJChXoMJbCP0Mo1w"),"doc"],
      ["Answers",D("1-bzNcIKgWX7rfzqmbfDr2CpYS7zi0NNr"),"ans"],
      ["Solving Trig Identities","https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:trig/x9e81a4f98389efdf:using-trig-id/v/examples-using-pythagorean-identities-to-simplify-trigonometric-expressions","vid"],
      ["Verifying a Trig Identity","https://www.youtube.com/watch?v=AzP3-KLqy8k","vid"],
      ["Trigonometry Review","https://www.youtube.com/watch?v=mhd9FXYdf4s","vid"],
      ["Trig Fundamentals","https://www.youtube.com/watch?v=yBw67Fb31Cs","vid"],
    ]},
    {d:2, iso:"2026-11-27", topic:"Equivalent Trig Functions", num:"6.2", note:D("1ELwi1OrzH0sTgDod8ets-8WqV0jSDlxv"), ans:"" /* key: D("1pORaiLhsfDekXtUmGZhyXSTAbfWVm2Tb") */, extras:[
      ["Lesson Video","https://youtu.be/TyZBzrScTy0","vid"],
    ]},
    {d:3, iso:"2026-11-30", topic:"Compound Angle Formulas", num:"6.3", note:D("1OEooe5ssfaX5nYtddw2CKdRanFwHW0D6"), ans:"" /* key: D("1sNg8aOicWr4-MF0h1kLS9cl3eZeb1-KR") */, extras:[
      ["Trig Formula Sheet (given on test)","https://docs.google.com/document/d/1gyyytcT3ASFSil86hQ84eD7yX9DD2_iU4d2CCzgui9I/edit","doc"],
      ["Proving Compound Angle Formulas","https://www.youtube.com/watch?v=zpyPTBgUqkQ","vid"],
      ["Using Compound Angles to Solve Problems","https://www.youtube.com/watch?v=sU2pyMR8GZ4","vid"],
    ]},
    {d:4, iso:"2026-12-01", topic:"Double Angle Formula", num:"6.4", note:D("1U2wjAsyDjIhPXm5KqTjlYSv4IrXLas_k"), ans:"" /* key: D("1DhO0vzkdSt_9E2L-DArnoJDAUCx2wOZw") */, extras:[
      ["Double Angle Identities & Examples","https://www.youtube.com/watch?v=SE5SBTgrwH8","vid"],
    ]},
    {d:5, iso:"2026-12-02", topic:"Practice Quiz", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:D("1z6NUzENqs39aipBO5bpczEc8pFVC0WbM"), ans:"" /* key: D("1pP6X7ZGWfwwgMNiHyzGHrKmwsQww61-D") */, extras:[
      ["Trig Identities Check-in Answers",D("18_76pPLZVhYuaka0JyO-pr3pnX7PZovZ"),"ans"],
    ]},
    {d:6, iso:"2026-12-03", topic:"Proving Trig Identities", num:"6.5", note:D("1Qs4QCd-Cw1YBduSUpx01uYVRpD135657"), ans:"" /* key: D("122Ndao4yP2mlKPYRJf4TQ60FVLI5xSC0") */, extras:[
      ["Proving Trig Identities","https://www.youtube.com/watch?v=iG5KxwvOINQ","vid"],
      ["Proving More Trig Identities","https://www.youtube.com/watch?v=rqOynMOkAXQ","vid"],
    ]},
    {d:7, iso:"2026-12-04", topic:"Proving Trig Identities II", num:"6.6", note:D("1f_Kq1nVU7L5UB0hKF_4_hUsdIhvKtQi1"), ans:"" /* key: D("1QyOQRE0TpppesZYGsd5OEvdpIcrtBKhe") */, extras:[
      ["Extra Trig Identities",D("1XGtsmcXo3n9EVhrQxQgqYJLtGStxaCMv"),"doc"],
      ["Answers",D("1aXSMy1NrcpMiX3HuSC0NwWUAfkYrblxT"),"ans"],
      ["Level 5 Trig Identities",D("1ehIH3B6lwez7d03K2_XIc-IjOSHkgIs9"),"doc"],
      ["Answers",D("1fJ_IjgjEK8NXMVhjlg2WMfGleUcJ3WNM"),"ans"],
    ]},
    {d:8, iso:"2026-12-07", topic:"Solving Linear Trig Equations", num:"6.7", note:D("1xW-ARnAbyATAGYQY-d4y6TlbwMaO_-YS"), ans:"" /* key: D("1a-IyCdKuPTSp9TU-Ro6IE91IT_bIlX6S") */, extras:[
      ["Solving Linear Trig Equations","https://www.youtube.com/watch?v=Z2z5zm-sCFE","vid"],
    ]},
    {d:9, iso:"2026-12-08", topic:"Solving Quadratic Trig Equations", num:"6.8", note:D("1SBTGaXhhlp1psDTaLqmUCjJncLOasp9D"), ans:"" /* key: D("1D0INtlTpRHaLohs-0v9O_jNPzzUbmd4M") */, extras:[
      ["Solving Quadratic Trig Equations","https://www.youtube.com/watch?v=NqxLu7E00uE","vid"],
    ]},
    {d:10, iso:"2026-12-09", topic:"Review", flag:"review", noteLabel:"Unit Review", ansLabel:"Answers",
      note:D("1uJx3N_X6mKxbAb8XT_pL9mipogQUqMeU"), ans:"" /* key: D("1b582rBAF_MYPpYrQc9Io9W7CJXUzhCNI") */, extras:[
      ["Practice Tests (Hudgin)",D("1VLV6ITAq9IWBPbJSdsq7pi8pbk2b9plT"),"doc"],
      ["Answers",D("16nDXz6px2P8KvPCcWEcVTxbvwvFQUHu0"),"ans"],
    ]},
    {d:11, iso:"2026-12-10", topic:"Review II", flag:"review", note:"", ans:"", extras:[
      ["Ms. Havrot: Chapter 7 Practice Test","https://www.youtube.com/watch?v=Wo06EElyhKw","vid"],
    ]},
    {d:12, iso:"2026-12-11", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 7 ─────────────────────────────────────────────── */
  {name:"Exponentials & Logarithms", days:[
    {d:1, iso:"2026-12-14", topic:"Log Review", num:"7.1", note:D("17g_TdvGCblRGAC7l1xb63KZUgtPXaXLn"), ans:"" /* key: D("1ZQL_FSBBJsillhQZUvsbEYzPEijx1Exb") */, extras:[
      ["Short-cut to Solve ANY Problem","https://www.youtube.com/watch?v=dQw4w9WgXcQ","vid"],
      ["Ms. Havrot’s Videos: Exponentials & Logs","https://www.youtube.com/watch?v=w-2ku9QNYlA&list=PLGinkJ_ZMO2HQwGf8mAmHGPQTJr1_faeF","vid"],
    ]},
    {d:2, iso:"2026-12-15", topic:"Transformations of Log Functions", num:"7.2", note:D("13GOiPK5boMj3sWbcmcJg4zxp3xS1dkzx"), ans:"" /* key: D("1GbWlKu3l3Wxj8E3eqgRmJCj4eSYyZ-uL") */, extras:[
      ["Ms. Havrot: Transformations of Log Functions (8.2)","https://www.youtube.com/watch?v=VkzUJunpmgs","vid"],
      ["Transformations of Exp & Log Functions Worksheet","https://www.jensenmath.ca/s/hw7s-63-transformations-of-expo-and-log.pdf","doc"],
      ["Answers","https://www.jensenmath.ca/s/hw7t-63-transformations-of-expo-and-log.pdf","ans"],
    ]},
    {d:3, iso:"2026-12-16", topic:"Exploring Graphs of Log Functions", num:"7.3", note:"", ans:"", extras:[
      ["Distance vs Loudness Data","https://docs.google.com/spreadsheets/d/1OgkZH9FMYJVyvrgC8vwtPE4-Mu4557iTJfTDcoIydb4/edit","doc"],
      ["Santa’s Chaotic Workshop Challenge",D("1jIIr6PjZ_w66MxFeNeXYxWYJC2coJdIc"),"doc"],
    ]},
    {d:4, iso:"2026-12-17", topic:"Evaluating Logs", num:"7.4", note:D("1QfuP6rJMxqeXOHv1qE5UaC7Nxbja21vP"), ans:"" /* key: D("18VPreJkgoufWHNsm6HniWOoSaYBdPBMG") */, extras:[
      ["Ms. Havrot: Evaluating Logarithms (8.3)","https://www.youtube.com/watch?v=QpM1d3eEwxk","vid"],
      ["Change of Base Rule","https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:change-of-base/v/change-of-base-formula","vid"],
    ]},
    {d:5, iso:"2026-12-18", topic:"Work Period", note:"", ans:"", extras:[
      ["Old Note: Log Rates of Change",D("1gnuqeN1WbbUjxIX9tLh_tb5tg3sXRIws"),"doc"],
      ["Answers",D("1h7v7Zj_wGTyAIri-PhlrY2ZEmlv88zrA"),"ans"],
    ]},
    {d:6, iso:"2027-01-04", topic:"Quiz", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers",
      /* was the 2023 ocdsb quiz: note D("1me7CDpronCGi2rnlo8wh3ijM0VjYx4bP") ans D("1mjcaS7vcFV4Uk1fcIiTWJyMlchjOP_wm") */
      note:D("1jOCjHTmaM6XII_VxwfioKl9p1Lk3SDZj"), ans:"" /* key: D("1qavqL8b7sK06zZIzLuRPUmcbmn4pVpk2") */, extras:[
      ["Ms. Havrot: Chapter 8 Practice Test","https://www.youtube.com/watch?v=KiiSCpaPdj8","vid"],
    ]},
    {d:7, iso:"2027-01-05", topic:"Laws of Logs", num:"7.5", note:D("1_2W01Ch6TbxS6LdQrM51dXQ1-5Shn2qA"), ans:"" /* key: D("1yjfmYTvg2RGK4vlUxTDaZa_44Z-LAizM") */, extras:[
      ["Logarithm Fundamentals","https://www.youtube.com/watch?v=cEvgcoyZvB4","vid"],
    ]},
    {d:8, iso:"2027-01-06", topic:"Solving Exponential Equations", num:"7.6", note:D("1pru8L9Q0bSjRkSCQEmYeHLW8ZjuuRn81"), ans:"" /* key: D("1n_8CGUzH2NO4Zukqu_vtUNqoU3gbYMA9") */, extras:[
      ["Ms. Havrot: Solving Exponential Equations (8.5)","https://www.youtube.com/watch?v=jcuJ05GbtDM","vid"],
      ["Solving Exponential Equations Worksheet","https://www.jensenmath.ca/s/hw4s-71-and-72-solving-exponential-equations.pdf","doc"],
      ["Answers","https://www.jensenmath.ca/s/hw4t3-71-and-72-solving-exponential-equations.pdf","ans"],
    ]},
    {d:9, iso:"2027-01-07", topic:"In-Class Activity", extras:[]},
    {d:10, iso:"2027-01-08", topic:"In-Class Activity", extras:[]},
    {d:11, iso:"2027-01-11", topic:"Solving Logarithmic Equations", num:"7.7", note:D("1fBTwREDutzztfmUI0o53y1-5pmV8DRVJ"), ans:"" /* key: D("1Idya7RXInf_3LCldpxtSttUj9xz3Q3U1") */, extras:[
      ["Ms. Havrot: Solving Logarithmic Equations (8.6)","https://www.youtube.com/watch?v=vlDKADJsnXk","vid"],
      ["Solving Logarithmic Equations Worksheet","https://www.jensenmath.ca/s/hw5s-74-solving-logarithmic-equations.pdf","doc"],
      ["Answers","https://www.jensenmath.ca/s/hw5t-74-solving-logarithmic-equations.pdf","ans"],
    ]},
    {d:12, iso:"2027-01-12", topic:"Solving Problems with Log & Exp Functions", num:"7.8", note:D("18T8fp54x1aOBlmrjpGQNC_25DMnNEKLm"), ans:"" /* key: D("1PxdOQAmMqVg2X9atSYlPMFWv6DV_esMN") */, extras:[
      ["Extra Word Problems",D("1gYzFpvAb-EpoETfuOBKKMdGAGuzYaWt9"),"doc"],
    ]},
    {d:13, iso:"2027-01-13", topic:"Combining, Changing & Modelling with Log/Exp", num:"7.9", note:D("11DRJooLSkD4IV3elQna5Rxqf2SILXVrr"), ans:"" /* key: D("10_v64nKqmEeg8YS4q_ax6k0WKYId_-4K") */, extras:[
      ["Desmos Gas Model (from class)","https://www.desmos.com/calculator/q7zzmwdqy1","doc"],
    ]},
    {d:14, iso:"2027-01-14", topic:"Review", flag:"review", noteLabel:"Unit Review", ansLabel:"Answers",
      note:D("1cm1AvRoBoWyJu-9GPIUJElTpevDQohu-"), ans:"" /* key: D("1R1AOje26qC3tUhunqRbSEc_YkPz8vg_S") */, extras:[
      ["Practice Test",D("1iY7Fv4H4pvzIvH_DLZLPvPTvbUUQ1s9T"),"doc"],
      ["Answers",D("1iYTNlBzH-RTyQhQvvJOgV8ifTnTqBbJD"),"ans"],
    ]},
    {d:15, iso:"2027-01-15", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── EXAM REVIEW (no unit number) ───────────────────────── */
  {name:"Exam Review", noNumber:true, days:[
    {d:1, iso:"2027-01-18", topic:"Cumulative Review", note:"", ans:"", extras:[
      ["Exam Review",D("1m-RX1xdcaSuMp1bSJqrGqNvlZMiSzp1N"),"doc"],
      ["Answers",D("1m5U4kMUP8Uhzw2j55FfoPa4WSImO1JjO"),"ans"],
    ]},
    {d:2, iso:"2027-01-19", topic:"Exam Review", note:"", ans:"", extras:[
      ["Practice Test",D("1OnVgCckFxoISEBjxHrOhhOS_r96E2AzH"),"doc"],
      ["Answers",D("140pzzW2_QfeWExTQpXM3tPP9jIzaPV94"),"ans"],
    ]},
    {d:3, iso:"2027-01-20", topic:"Exam Review", note:"", ans:"", extras:[
      ["Practice Exam",D("1mIASdnvrZmnTukk7fkT0gY9qqpECVupa"),"doc"],
      ["Answers",D("1m7jOpO_t5Xtb4W1VJb-6mFB9CA4y0vGt"),"ans"],
    ]},
    {d:4, iso:"2027-01-21", topic:"Exam Review", note:"", ans:"", extras:[
      ["Exam Formula Sheet",D("1mwsClOqwXVcosKmqVRLTtenujljkhGND"),"doc"],
      ["Another Practice Exam",D("1m8wGqdzNpg_QN1qZ4PPi4zDCN24aDDh0"),"doc"],
      ["Answers",D("1m7RZHuk-ko30uuJKkk4jxRsuQpQ7I24_"),"ans"],
    ]},
  ]},
]};
