export type Lang = "en" | "jp";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      sswPrograms: "SSW Programs",
      japaneseHub: "Japanese Hub",
      whyUs: "Why Us",
      contact: "Contact",
      hotline: "Hotline",
      applyNow: "Apply Now",
      apply: "Apply",
    },
    hero: {
      eyebrow: "Dhaka · Tokyo · 未来へ",
      titleLine1: "Your Path to",
      titleLine2: "Japan Starts Here",
      subtitle: "Premium language & SSW training for careers built with dignity.",
      ctaPrimary: "Begin Your Journey",
      ctaSecondary: "Discover More",
    },
    japaneseHub: {
      eyebrow: "JAPANESE LANGUAGE IMMERSION • 日本語教育",
      title: "LEARN JAPANESE.",
      titleAccent: "OPEN NEW DOORS.",
      intro:
        "Language is the ultimate key to career success and respect in Japan. Our curriculum moves you beyond passing tests to confident, workplace-level spoken fluency.",
      mostChosen: "Most Chosen",
      applyBatch: "Apply for Batch",
      examCenterTitle: "JLPT & JFT-Basic Official Exam Simulation Center",
      examCenterDesc:
        "All enrolled students undergo 10+ mock audio-visual tests mirroring exact Japanese embassy test conditions.",
      freeLevelTest: "Take Free Level Test",
      levels: [
        {
          level: "Beginner & N5",
          badge: "FOUNDATION",
          kanji: "初級・N5",
          hours: "150h",
          targetAudience: "Complete Beginners",
          description:
            "Start from zero. Master Hiragana, Katakana, basic grammar, ~100 Kanji, and everyday conversational greetings for life in Japan.",
          capabilities: [
            "Read & write basic Japanese scripts",
            "Introduce yourself and ask common questions",
            "Understand basic train stations and store signage",
            "Qualify for entry-level visa requirements",
          ],
        },
        {
          level: "Intermediate N4",
          badge: "SSW BENCHMARK",
          kanji: "中級・N4",
          hours: "180h",
          targetAudience: "SSW Visa Aspirants",
          description:
            "The mandatory benchmark for SSW visa candidates. Master ~300 Kanji, 1,500 vocabulary words, and standard workplace conversations.",
          capabilities: [
            "Eligible for SSW Specified Skilled Worker Visas",
            "Comprehend spoken Japanese at standard speed",
            "Understand everyday workplace tasks & instructions",
            "JFT-Basic A2 clearance ready",
          ],
        },
        {
          level: "Advanced N3",
          badge: "CAREER ACCELERATOR",
          kanji: "上級・N3",
          hours: "220h",
          targetAudience: "Corporate & Tech Professionals",
          description:
            "Bridge into professional fluency. Comprehend complex newspaper headlines, technical instructions, and hold nuanced discussions with Japanese colleagues.",
          capabilities: [
            "Direct eligibility for higher-tier corporate roles",
            "Understand workplace meetings and technical reports",
            "650+ Kanji and 3,500+ vocabulary mastery",
            "Significantly higher starting salary negotiation",
          ],
        },
        {
          level: "Business & Kaiwa",
          badge: "COMMUNICATION",
          kanji: "ビジネス会話",
          hours: "80h",
          targetAudience: "Interview & Placement Ready",
          description:
            "Dedicated conversational immersion (Kaiwa) focusing on Keigo, telephoning manners, email etiquette, and client handling.",
          capabilities: [
            "Fluency in Sonkeigo & Kenjougo (honorifics)",
            "High-pressure interview response confidence",
            "Cross-cultural workplace conflict resolution",
            "Polite business email & messaging standards",
          ],
        },
      ],
    },
    about: {
      eyebrow: "INSTITUTIONAL FOUNDATION • 創設理念",
      title: "PREPARE TODAY.",
      titleAccent: "BUILD YOUR FUTURE",
      titleEnd: "IN JAPAN.",
      cta: "Schedule Free Counseling",
      lead: "Kawaii Tredmig Training Institute is a premier international career and language academy in Dhaka, engineered to connect ambitious Bangladeshi talent with genuine, high-dignity professional careers in Japan.",
      body: "We reject the generic “coaching center” model. Instead, we operate as an authentic Japanese corporate training academy, fusing rigorous JLPT language immersion with Ministry-compliant Specified Skilled Worker (SSW) skill frameworks, Japanese work ethics (5S & Kaizen), and direct employer alignment.",
      features: [
        {
          title: "SSW Government Standard",
          desc: "Curricula tailored directly to official Prometric skill tests",
        },
        {
          title: "Native & N1/N2 Senseis",
          desc: "Daily pronunciation and conversational Kaiwa coaching",
        },
        {
          title: "Zero Brokerage Exploitation",
          desc: "100% legal, transparent corporate recruitment pathway",
        },
        {
          title: "Pre & Post Arrival Support",
          desc: "Dhaka training through Tokyo & Osaka settlement",
        },
      ],
      admissionsTitle: "Official Admissions Office",
      admissionsSubtitle: "Dhaka Campus & Tokyo Liaison Network",
      heroCard: {
        badge: "ACCREDITED ACADEMY",
        campusLabel: "DHAKA TRAINING CAMPUS",
        title: "Disciplined Japanese Learning Environment",
        imageAlt: "Students in modern Japanese training session",
      },
      networkCard: {
        label: "JAPAN NETWORK",
        title: "Direct Employer Link",
        body: "Active connections with accepting companies across Tokyo, Nagoya & Osaka.",
      },
      passCard: {
        label: "HIGH PASS RATE",
        title: "96% JLPT & Skill Pass",
        body: "Proven curriculum with weekly full-length audio-visual mock tests.",
      },
    },
    programs: {
      eyebrow: "ACADEMIC & VOCATIONAL DISCIPLINES • 専門課程",
      title: "TRAINING THAT",
      titleAccent: "TAKES YOU FURTHER.",
      applyNow: "Apply Now",
      intro:
        "Our intensive curricula are engineered to meet strict Japanese immigration criteria, ensuring every graduate is linguistically fluent, culturally adept, and technically certified.",
      highlightsLabel: "CORE SYLLABUS HIGHLIGHTS",
      viewDetails: "View Curriculum Details",
      items: [
        {
          id: "ssw-training",
          title: "SSW Specialized Skill Training",
          subtitle: "Specified Skilled Worker (特定技能) Fast-Track",
          tag: "HIGH DEMAND",
          duration: "4 - 6 Months",
          japaneseTitle: "特定技能訓練",
          description:
            "Comprehensive skill training designed according to Japan's Prometric and OTIT testing frameworks. Covers nursing caregiving, food service, construction, and hospitality with hands-on practical labs.",
          highlights: [
            "Prometric Skill Test Syllabus Preparation",
            "Sector-Specific Japanese Terminology",
            "Standard Operating Procedures (5S & Kaizen)",
            "Official Mock Skill Assessments",
          ],
        },
        {
          id: "japanese-language",
          title: "Japanese Language Academy",
          subtitle: "JLPT N5, N4, N3 & NAT-Test Mastery",
          tag: "CORE FOUNDATION",
          duration: "3 - 8 Months",
          japaneseTitle: "日本語アカデミー",
          description:
            "Rigorous grammatical foundation, Kanji retention systems, listening labs, and conversational fluency taught by JLPT N1/N2 certified and native Japanese instructors.",
          highlights: [
            "Daily Kanji & Vocabulary Drills",
            "Native Sensei Pronunciation Coaching",
            "Weekly Mock JLPT & NAT Examinations",
            "Interactive Audio-Visual Listening Labs",
          ],
        },
        {
          id: "job-preparation",
          title: "Corporate Interview & Workplace Readiness",
          subtitle: "Bicultural Competence & Interview Mastery",
          tag: "CAREER EDGE",
          duration: "4 - 8 Weeks",
          japaneseTitle: "就職面接準備",
          description:
            "Master Japanese business manners (Hou-Ren-So, Ojigi bow etiquette, corporate hierarchy), resume formulation (Rirekisho / Shokumu-keirekisho), and real simulation interviews with Japanese recruiters.",
          highlights: [
            "Rirekisho (履歴書) Writing & Polishing",
            "Live Video Interview Simulations",
            "Business Manner & Corporate Culture",
            "Hou-Ren-So (Report-Communicate-Consult) Training",
          ],
        },
        {
          id: "japan-career-prep",
          title: "Japan Career & Settlement Pathway",
          subtitle: "Visa Support, Placement & Life Orientation",
          tag: "FULL SUPPORT",
          duration: "Ongoing",
          japaneseTitle: "日本キャリア支援",
          description:
            "End-to-end guidance from skill qualification to Certificate of Eligibility (COE), embassy visa processing, flight departure briefing, and arrival acclimation support in Japan.",
          highlights: [
            "Direct Japanese Employer Matching",
            "COE & Visa Documentation Guidance",
            "Pre-Departure Lifestyle & Legal Orientation",
            "Alumni Support Network in Major Japanese Cities",
          ],
        },
      ],
    },
    ssw: {
      eyebrow: "SPECIFIED SKILLED WORKER ROADMAP • 特定技能への道",
      title: "YOUR SSW JOURNEY",
      titleAccent: "STARTS WITH THE RIGHT PREPARATION.",
      cta: "Start Your SSW Preparation",
      intro:
        "The Specified Skilled Worker (SSW) visa grants direct employment rights with Japanese equal-pay legislation. Here is our structured, foolproof 6-step roadmap to Japan.",
      stepPrefix: "STEP",
      stepOf: "OF 06",
      timelineLabel: "ESTIMATED TIMELINE:",
      milestonesLabel: "KEY MILESTONES & DELIVERABLES",
      assessmentNote: "Includes free language & skill assessment test.",
      sidebar: {
        targetStandardLabel: "Target Standard",
        targetStandardValue: "Prometric & OTIT Framework",
        visaLabel: "Visa Classification",
        visaValue: "特定技能 1号 (SSW-1 Visa)",
        salaryLabel: "Japanese Salary",
        salaryValue: "¥180,000 ~ ¥260,000 / Mo",
        overtimeLabel: "Overtime & Insurance",
        overtimeValue: "Full Standard Japanese Benefits",
      },
      steps: [
        {
          number: "01",
          title: "Japanese Language (N4/JFT)",
          japanese: "日本語基礎",
          duration: "3-5 Months",
          description:
            "Achieve minimum JLPT N4 or JFT-Basic A2 proficiency, the mandatory foundational language prerequisite required by the Japanese immigration bureau.",
          details: [
            "Mastery of Hiragana, Katakana, and ~300 core Kanji",
            "Daily conversational listening & speaking practice",
            "Official JFT-Basic / JLPT N4 test clearance",
          ],
        },
        {
          number: "02",
          title: "SSW Industry Skill Training",
          japanese: "専門技能訓練",
          duration: "1-2 Months",
          description:
            "Intensive theoretical and practical preparation focused on your designated target industry (Caregiving, Food Service, Hospitality, Construction, etc.).",
          details: [
            "Official curriculum developed per Japanese industry norms",
            "Practical equipment handling and simulation",
            "Industry-specific technical Japanese terminology",
          ],
        },
        {
          number: "03",
          title: "Prometric Skill Assessment",
          japanese: "技能測定試験",
          duration: "Exam Day",
          description:
            "Sit for and pass the Prometric Specified Skilled Worker evaluation test conducted under Japanese government supervision.",
          details: [
            "CBT (Computer Based Testing) format simulation",
            "Pass certificate issuance recognized by OTIT/JITCO",
            "100% preparation with past exam analysis",
          ],
        },
        {
          number: "04",
          title: "Employer Interview Prep",
          japanese: "採用面接準備",
          duration: "2-3 Weeks",
          description:
            "Rigorous 1-on-1 interview practice with Japanese native trainers, mastering self-introductions (Jiko PR) and answering industry scenario questions.",
          details: [
            "Authentic video conference interview setup",
            "Posture, body language, and voice modulation coaching",
            "Personalized Q&A matrix tailored to employer profile",
          ],
        },
        {
          number: "05",
          title: "Job Matching & Contract Signing",
          japanese: "雇用契約締結",
          duration: "3-4 Weeks",
          description:
            "Connect with vetted Japanese recruiting organizations and accepting companies to secure a legally compliant, high-paying employment contract.",
          details: [
            "Direct interviews with Japanese corporate employers",
            "Equal wage guarantees matched with Japanese nationals",
            "Official Employment Conditional Offer (内定 - Naitei)",
          ],
        },
        {
          number: "06",
          title: "COE, Visa & Departure to Japan",
          japanese: "在留資格・渡航",
          duration: "2-3 Months",
          description:
            "Processing of Certificate of Eligibility (COE) through Japanese Immigration, visa stamping at the embassy, and departure to commence your career in Japan.",
          details: [
            "Immigration documentation & legal vetting",
            "Pre-departure flight orientation and packing guide",
            "Arrival reception and initial housing support in Japan",
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: "THE KAWAII TREDMIG ADVANTAGE • 強みと実績",
      title: "WHY TRAIN",
      titleAccent: "WITH US?",
      intro:
        "We hold our students to the highest standards of Japanese corporate discipline, ensuring our graduates are prioritized by leading employers across Japan.",
      points: [
        {
          number: "01",
          title: "Practical Japanese Immersion",
          japanese: "実践的日本語教育",
          description:
            "We focus on real conversational fluency and workplace comprehension rather than rote textbook memorization, ensuring you thrive from Day 1 in Japan.",
        },
        {
          number: "02",
          title: "SSW-Tailored Curriculum",
          japanese: "特定技能特化カリキュラム",
          description:
            "Our course materials are strictly aligned with Prometric test blueprints and Ministry of Health, Labour and Welfare (MHLW) standards.",
        },
        {
          number: "03",
          title: "Certified & Native Instructors",
          japanese: "認定講師陣とネイティブ指導",
          description:
            "Learn under certified JLPT N1/N2 masters and native Japanese instructors who bring authentic cultural immersion into every class.",
        },
        {
          number: "04",
          title: "Career & Interview Simulator",
          japanese: "模擬面接・就職対策",
          description:
            "Weekly mock video interviews with native corporate recruiters, personalized Japanese CV formulate (Rirekisho), and posture etiquette training.",
        },
        {
          number: "05",
          title: "Direct Japan Industry Linkages",
          japanese: "日本企業との直接連携",
          description:
            "Strong established ties with Japanese registered support organizations (RSO / 登録支援機関) and accepting companies across Tokyo, Osaka, and Nagoya.",
        },
        {
          number: "06",
          title: "End-to-End Visa & COE Guidance",
          japanese: "在留資格・渡航完全サポート",
          description:
            "Transparent, ethical, and complete assistance through embassy interviews, documentation, flight logistics, and post-arrival settlement.",
        },
      ],
      guaranteeEyebrow: "OUR PROMISE • 就職保証",
      guaranteeTitle: "job placement",
      guaranteeLead:
        "Follow the institute — complete training, attendance, and interviews as guided — and we stand behind your career with",
      guaranteeSupportTitle: "We stay with you in Japan.",
      guaranteeSupport:
        "If any issue arises with your company after you arrive, our team will step in and negotiate on your behalf. You are never left alone.",
    },
    japanBanner: {
      eyebrow: "INTERNATIONAL CAREER CORRIDOR",
      titleLine1: "FROM BANGLADESH",
      titleAccent: "TO JAPAN.",
      body: "Build the skills. Learn the language. Master the culture. Step into a world of dignity, high earnings, and long-term career growth in Japan.",
      cta: "Start Your Journey",
    },
    stats: {
      eyebrow: "MEASURABLE IMPACT • 実績と成果",
      title: "PROVEN TRACK RECORD IN JAPAN PLACEMENT",
      intro:
        "Real outcomes built on authentic Japanese language discipline and structured SSW government frameworks.",
      items: [
        {
          value: 500,
          suffix: "+",
          label: "Students Trained",
          sublabel: "Equipped with professional Japanese skills",
        },
        {
          value: 120,
          suffix: "+",
          label: "Placed in Japan",
          sublabel: "Working in SSW & corporate roles",
        },
        {
          value: 96,
          suffix: "%",
          label: "Exam Pass Rate",
          sublabel: "JLPT N5/N4 and Prometric skill evaluations",
        },
        {
          value: 14,
          suffix: "+",
          label: "Industry Sectors",
          sublabel: "Caregiving, Food, Tech, Construction & more",
        },
      ],
    },
    testimonials: {
      eyebrow: "SUCCESS STORIES • 卒業生の声",
      title: "STUDENT JOURNEYS",
      titleAccent: "TO JAPAN.",
      verifiedBadge: "5.0 VERIFIED GRADUATE",
      programCompleted: "PROGRAM COMPLETED",
      prevAria: "Previous testimonial",
      nextAria: "Next testimonial",
      items: [
        {
          id: 1,
          quote:
            "Kawaii Tredmig transformed my dream into reality. The rigorous N4 training and 1-on-1 interview drills prepared me so well that I passed my Caregiver SSW interview on the first attempt. I am now working happily in Tokyo!",
          name: "Tanvir Ahmed",
          role: "Specified Skilled Worker (Caregiver)",
          location: "Tokyo, Japan",
          program: "SSW Caregiver + JLPT N4",
        },
        {
          id: 2,
          quote:
            "Unlike generic coaching centers, Kawaii Tredmig treats training with true Japanese discipline. The senseis taught us Hou-Ren-So and actual workplace communication that made my transition to Nagoya completely seamless.",
          name: "Farhana Yasmin",
          role: "Food Service SSW Specialist",
          location: "Nagoya, Japan",
          program: "SSW Food Service + Business Kaiwa",
        },
        {
          id: 3,
          quote:
            "The instructors here do not just teach grammar; they prepare you for the real culture of Japan. From Rirekisho writing to COE visa stamping, the team supported me at every single milestone.",
          name: "Mahmudul Hasan",
          role: "Construction Engineering Trainee",
          location: "Osaka, Japan",
          program: "SSW Construction + JLPT N4",
        },
      ],
    },
    faq: {
      eyebrow: "FREQUENTLY ASKED QUESTIONS • よくある質問",
      title: "EVERYTHING YOU NEED TO KNOW ABOUT JAPAN SSW",
      intro:
        "Clear, transparent answers regarding eligibility, language certification, visa procedures, and job placement.",
      items: [
        {
          question: "What is the SSW (Specified Skilled Worker) Visa?",
          answer:
            "The Specified Skilled Worker (SSW - 特定技能) is an official Japanese visa status introduced by the Government of Japan to welcome qualified foreign nationals in designated high-demand industries such as Nursing Care, Food Service, Hospitality, Construction, Agriculture, and Manufacturing.",
        },
        {
          question: "What are the basic educational and language requirements?",
          answer:
            "Minimum requirements include passing JLPT N4 or JFT-Basic A2 in Japanese language, and passing the Prometric Skill Assessment for your designated field. Candidates must be at least 18 years old with completed HSC or equivalent background.",
        },
        {
          question: "How long does the training at Kawaii Tredmig take?",
          answer:
            "Typically, an intensive full-time course takes 4 to 6 months to complete both Japanese language (N5 to N4) and the specialized SSW skill curriculum. Fast-track batches are also available for candidates with prior Japanese knowledge.",
        },
        {
          question: "Does Kawaii Tredmig provide direct interview support?",
          answer:
            "Yes! We work directly with licensed Japanese Registered Support Organizations (RSO) and accepting corporate employers. We arrange direct interviews, conduct simulated practice sessions, and assist through the employment contract signing.",
        },
        {
          question: "How do I apply for an upcoming batch?",
          answer:
            "You can click on 'Apply Now' on our website, fill in your details, or visit our training campus in Dhaka for a free career counseling session and preliminary assessment.",
        },
      ],
    },
    finalCta: {
      eyebrow: "ADMISSIONS OPEN FOR NEXT BATCH",
      title: "READY TO START",
      titleAccent: "YOUR JAPAN JOURNEY?",
      applyNow: "Apply Now",
      talkAdmissions: "Talk to Admissions",
      body: "Join Kawaii Tredmig Training Institute and take the definitive first step toward your high-earning, fulfilling career in Japan.",
      trust: [
        "Direct Employment Contracts",
        "No Hidden Brokerage Fees",
        "Japanese Embassy Approved Syllabus",
      ],
    },
    footer: {
      blurb:
        "Premier Japanese language and Specified Skilled Worker (SSW) vocational academy empowering Bangladeshi candidates for dignified, high-income careers in Japan.",
      quickNav: "QUICK NAVIGATION",
      sswDisciplines: "SSW DISCIPLINES",
      contactCampus: "CONTACT & CAMPUS",
      authorized: "Authorized SSW Preparation & JLPT Training Center",
      copyright: "© 2026 Kawaii Tredmig Training Institute. All Rights Reserved.",
      navLinks: [
        { label: "Home Overview", href: "#home" },
        { label: "About Institute", href: "#about" },
        { label: "Academic Courses", href: "#programs" },
        { label: "SSW Roadmap", href: "#ssw" },
        { label: "Japanese Academy", href: "#japanese" },
        { label: "Why Choose Us", href: "#why-us" },
      ],
      disciplines: [
        "Caregiver (Nursing Care)",
        "Food Service & Restaurant",
        "Hotel & Hospitality Management",
        "Construction & Civil Engineering",
        "Agriculture & Food Processing",
        "IT & Technical Specialist",
      ],
      campusAddress: "Kawaii Tredmig Training Campus, Dhaka, Bangladesh",
      hotlineSuffix: "(Hotline)",
      tokyoLiaison: "Tokyo Liaison Network (Japan)",
      scrollTopAria: "Scroll to top",
      locationsHeading: "OUR LOCATIONS",
      contactHeading: "CONTACT",
      locations: [
        {
          name: "Training Center (Aftabnagar)",
          address:
            "House 26/10, Level 8 & 9, Plot 13 & 15, Block-B, Zahurul Islam City Gate, Main Road, Aftabnagar, Dhaka-1212",
        },
        {
          name: "Head Office",
          address: "Taj Casilina, L-2, 25 Gulshan Avenue, Gulshan-1, Dhaka 1212",
        },
      ],
    },
    applyModal: {
      eyebrow: "ADMISSIONS & CAREER COUNSELING",
      title: "Apply to Kawaii Tredmig Institute",
      subtitle: "Take your first definitive step toward a high-paying career in Japan.",
      closeAria: "Close modal",
      successTitle: "Application Submitted Successfully!",
      successBody:
        "Thank you, {name}. Our senior Japan admissions counselor will review your profile and contact you via phone or WhatsApp within 24 hours.",
      connectWhatsApp: "Connect on WhatsApp Now",
      closeWindow: "Close Window",
      fullName: "Full Name *",
      fullNamePlaceholder: "e.g. Tanvir Ahmed",
      phone: "Phone / WhatsApp *",
      phonePlaceholder: "e.g. +880 1712 345678",
      email: "Email Address",
      emailPlaceholder: "e.g. tanvir@example.com",
      targetProgram: "Target Program *",
      preferredIndustry: "Preferred Industry *",
      japaneseLevel: "Current Japanese Level",
      messageLabel: "Additional Questions or Background",
      messagePlaceholder:
        "Share any past qualifications, diplomas, or specific questions...",
      submitting: "Submitting Application...",
      submit: "Submit Application",
      whatsappInstant: "WhatsApp Instant",
      privacy:
        "🔒 Your personal information is kept strictly confidential and only used for admissions counseling.",
      whatsappTemplate:
        "Hello Kawaii Tredmig Training Institute, I would like to inquire about {program}. My name is {name}.",
      interestedCandidate: "Interested Candidate",
      programs: [
        {
          value: "SSW Specialized Skill Training",
          label: "SSW Skill Training",
        },
        {
          value: "Japanese Language Academy",
          label: "Japanese Language Academy",
        },
        {
          value: "Corporate Interview & Workplace Readiness",
          label: "Job & Interview Preparation",
        },
        {
          value: "Japan Career & Settlement Pathway",
          label: "Full Japan Career Package",
        },
      ],
      industries: [
        "Caregiver / Nursing Care",
        "Food Service & Restaurant",
        "Hospitality & Hotels",
        "Construction & Civil Works",
        "Agriculture & Farming",
        "IT & Engineering",
      ],
      levels: ["Zero / Beginner", "Learning N5", "Passed N5", "Passed N4 / Above"],
    },
    common: {
      applyNow: "Apply Now",
      apply: "Apply",
      hotline: "Hotline",
    },
  },
  jp: {
    nav: {
      home: "ホーム",
      about: "当校について",
      courses: "コース",
      sswPrograms: "特定技能",
      japaneseHub: "日本語教育",
      whyUs: "選ばれる理由",
      contact: "お問い合わせ",
      hotline: "ホットライン",
      applyNow: "今すぐ申し込む",
      apply: "申し込む",
    },
    hero: {
      eyebrow: "ダッカ · 東京 · 未来へ",
      titleLine1: "日本への道は、",
      titleLine2: "ここから始まる",
      subtitle:
        "尊厳あるキャリアのための、本格的な日本語教育と特定技能（SSW）訓練。",
      ctaPrimary: "旅を始める",
      ctaSecondary: "詳しく見る",
    },
    japaneseHub: {
      eyebrow: "JAPANESE LANGUAGE IMMERSION • 日本語教育",
      title: "日本語を学び、",
      titleAccent: "新しい扉を開く。",
      intro:
        "日本でのキャリア成功と信頼の鍵は、言葉です。試験合格にとどまらず、職場で自信を持って話せる実践力まで導きます。",
      mostChosen: "最も選ばれている",
      applyBatch: "クラスに申し込む",
      examCenterTitle: "JLPT・JFT-Basic 公式形式模擬試験センター",
      examCenterDesc:
        "在籍生は、大使館試験に準じた視聴覚模擬試験を10回以上受験します。",
      freeLevelTest: "無料レベル診断を受ける",
      levels: [
        {
          level: "初級・N5",
          badge: "基礎",
          kanji: "初級・N5",
          hours: "150時間",
          targetAudience: "完全初心者",
          description:
            "ゼロからスタート。ひらがな・カタカナ、基礎文法、約100字の漢字、日本生活に必要な日常あいさつを習得します。",
          capabilities: [
            "基本的な日本語の読み書き",
            "自己紹介とよくある質問への対応",
            "駅・店舗の基本的な案内表示の理解",
            "入門レベルのビザ要件への対応力",
          ],
        },
        {
          level: "中級・N4",
          badge: "特定技能の基準",
          kanji: "中級・N4",
          hours: "180時間",
          targetAudience: "特定技能ビザ志望者",
          description:
            "特定技能ビザに必須の到達目標。約300字の漢字、1,500語の語彙、標準的な職場会話をマスターします。",
          capabilities: [
            "特定技能ビザ申請の語学要件を満たす",
            "通常速度の話し言葉を理解する",
            "日常の職場指示・業務内容を把握する",
            "JFT-Basic A2合格レベルの準備完了",
          ],
        },
        {
          level: "上級・N3",
          badge: "キャリア加速",
          kanji: "上級・N3",
          hours: "220時間",
          targetAudience: "企業・技術職志望者",
          description:
            "実務レベルの運用力へ。新聞見出しや技術指示を理解し、日本人同僚と丁寧な議論ができるようになります。",
          capabilities: [
            "上位企業職への直接的な適格性",
            "会議や技術レポートの理解",
            "漢字650字以上・語彙3,500語以上",
            "初任給交渉における優位性",
          ],
        },
        {
          level: "ビジネス会話",
          badge: "コミュニケーション",
          kanji: "ビジネス会話",
          hours: "80時間",
          targetAudience: "面接・就職準備段階",
          description:
            "敬語、電話応対、メールマナー、顧客対応に特化した会話集中コース。",
          capabilities: [
            "尊敬語・謙譲語の運用力",
            "緊張下でも自信ある面接応答",
            "異文化職場でのトラブル対応",
            "丁寧なビジネスメール・メッセージ",
          ],
        },
      ],
    },
    about: {
      eyebrow: "INSTITUTIONAL FOUNDATION • 創設理念",
      title: "今日の準備が、",
      titleAccent: "日本での未来を",
      titleEnd: "築く。",
      cta: "無料カウンセリングを予約",
      lead: "カワイ・トレドミッグ・トレーニング・インスティテュートは、ダッカを拠点とする国際キャリア・語学専門アカデミーです。意欲あるバングラデシュの人材と、日本での尊厳ある本格的なキャリアを結びます。",
      body: "当校は一般的な「コーチングセンター」とは一線を画します。厳格なJLPT語学研修に、省令に準拠した特定技能（SSW）の技能訓練体系、日本式の労働倫理（5S・改善）、そして受入企業との直接連携を融合させた、本格的な日本企業型の訓練機関です。",
      features: [
        {
          title: "特定技能の国家基準に準拠",
          desc: "プロメトリック技能試験に完全対応したカリキュラム",
        },
        {
          title: "ネイティブ講師とN1/N2認定講師",
          desc: "発音指導と会話練習を毎日実施",
        },
        {
          title: "仲介搾取ゼロ",
          desc: "完全に合法かつ透明性の高い企業採用ルート",
        },
        {
          title: "渡航前後の一貫サポート",
          desc: "ダッカでの訓練から東京・大阪での生活定着まで",
        },
      ],
      admissionsTitle: "公式入学相談窓口",
      admissionsSubtitle: "ダッカ校舎・東京連携ネットワーク",
      heroCard: {
        badge: "認定アカデミー",
        campusLabel: "ダッカ訓練キャンパス",
        title: "規律ある日本語学習環境",
        imageAlt: "近代的な日本語研修を受ける学生たち",
      },
      networkCard: {
        label: "日本ネットワーク",
        title: "受入企業との直接連携",
        body: "東京・名古屋・大阪の受入企業と常時つながっています。",
      },
      passCard: {
        label: "高い合格率",
        title: "JLPT・技能試験 合格率96%",
        body: "毎週の本番形式による視聴覚模擬試験に裏付けられた実績あるカリキュラム。",
      },
    },
    programs: {
      eyebrow: "ACADEMIC & VOCATIONAL DISCIPLINES • 専門課程",
      title: "さらなる先へ",
      titleAccent: "導く訓練。",
      applyNow: "今すぐ申し込む",
      intro:
        "当校の集中カリキュラムは、日本の厳格な入国管理基準を満たすよう設計されています。修了生の誰もが、語学力・文化理解・技能資格のすべてを備えます。",
      highlightsLabel: "主要カリキュラムのポイント",
      viewDetails: "カリキュラム詳細を見る",
      items: [
        {
          id: "ssw-training",
          title: "特定技能スキル訓練",
          subtitle: "特定技能ファストトラック",
          tag: "需要多数",
          duration: "4〜6ヶ月",
          japaneseTitle: "特定技能訓練",
          description:
            "日本のプロメトリックおよびOTITの試験制度に沿って設計された総合技能訓練。介護、外食業、建設、宿泊の各分野を、実技演習を交えて習得します。",
          highlights: [
            "プロメトリック技能試験の出題範囲対策",
            "分野別の専門日本語用語",
            "標準作業手順（5S・改善）",
            "公式形式の技能模擬評価",
          ],
        },
        {
          id: "japanese-language",
          title: "日本語アカデミー",
          subtitle: "JLPT N5・N4・N3およびNAT-TEST対策",
          tag: "基礎課程",
          duration: "3〜8ヶ月",
          japaneseTitle: "日本語アカデミー",
          description:
            "JLPT N1/N2認定講師と日本人ネイティブ講師による、徹底した文法基礎、漢字定着システム、聴解演習、会話運用力の指導。",
          highlights: [
            "漢字・語彙の毎日演習",
            "ネイティブ講師による発音指導",
            "毎週のJLPT・NAT模擬試験",
            "視聴覚教材を用いた双方向リスニング演習",
          ],
        },
        {
          id: "job-preparation",
          title: "企業面接・就業準備",
          subtitle: "異文化対応力と面接力の習得",
          tag: "キャリア強化",
          duration: "4〜8週間",
          japaneseTitle: "就職面接準備",
          description:
            "報連相、お辞儀の作法、企業階層といった日本のビジネスマナー、履歴書・職務経歴書の作成、そして日本人採用担当者との実践的な模擬面接を徹底指導します。",
          highlights: [
            "履歴書の作成と添削指導",
            "オンライン面接の実践シミュレーション",
            "ビジネスマナーと企業文化",
            "報連相（報告・連絡・相談）研修",
          ],
        },
        {
          id: "japan-career-prep",
          title: "日本キャリア・定着支援",
          subtitle: "ビザ支援・就職斡旋・生活オリエンテーション",
          tag: "総合サポート",
          duration: "継続サポート",
          japaneseTitle: "日本キャリア支援",
          description:
            "技能資格の取得から在留資格認定証明書（COE）、大使館でのビザ申請、出発前説明会、そして日本到着後の生活適応支援まで、一貫してサポートします。",
          highlights: [
            "日本企業との直接マッチング",
            "COE・ビザ書類の作成指導",
            "渡航前の生活・法令オリエンテーション",
            "日本主要都市の卒業生サポート網",
          ],
        },
      ],
    },
    ssw: {
      eyebrow: "SPECIFIED SKILLED WORKER ROADMAP • 特定技能への道",
      title: "特定技能への道は、",
      titleAccent: "正しい準備から始まる。",
      cta: "特定技能の準備を始める",
      intro:
        "特定技能（SSW）ビザは、日本人と同等の賃金が法律で保障された直接雇用の在留資格です。日本への道を、確実な6つのステップでご案内します。",
      stepPrefix: "ステップ",
      stepOf: "／ 全06",
      timelineLabel: "想定期間：",
      milestonesLabel: "主要な到達目標と成果物",
      assessmentNote: "無料の語学・技能診断テストが含まれます。",
      sidebar: {
        targetStandardLabel: "準拠基準",
        targetStandardValue: "プロメトリック・OTIT制度",
        visaLabel: "在留資格区分",
        visaValue: "特定技能1号",
        salaryLabel: "日本での給与",
        salaryValue: "月額 18万円 〜 26万円",
        overtimeLabel: "残業・社会保険",
        overtimeValue: "日本の標準的な待遇を完備",
      },
      steps: [
        {
          number: "01",
          title: "日本語基礎（N4／JFT）",
          japanese: "日本語基礎",
          duration: "3〜5ヶ月",
          description:
            "出入国在留管理庁が必須要件とする語学水準、JLPT N4またはJFT-Basic A2の合格を目指します。",
          details: [
            "ひらがな・カタカナと基礎漢字約300字の習得",
            "日常会話の聴解・発話を毎日練習",
            "JFT-Basic／JLPT N4の公式試験合格",
          ],
        },
        {
          number: "02",
          title: "特定技能の専門技能訓練",
          japanese: "専門技能訓練",
          duration: "1〜2ヶ月",
          description:
            "希望する分野（介護、外食業、宿泊、建設など）に特化した、理論と実技の集中訓練を行います。",
          details: [
            "日本の業界基準に沿った公式カリキュラム",
            "実機を用いた実技演習",
            "分野別の専門日本語用語",
          ],
        },
        {
          number: "03",
          title: "技能測定試験（プロメトリック）",
          japanese: "技能測定試験",
          duration: "試験当日",
          description:
            "日本政府の監督下で実施される特定技能評価試験を受験し、合格を目指します。",
          details: [
            "CBT（コンピュータ試験）形式の模擬演習",
            "OTIT／JITCO認定の合格証明書を取得",
            "過去問分析による万全の対策",
          ],
        },
        {
          number: "04",
          title: "採用面接対策",
          japanese: "採用面接準備",
          duration: "2〜3週間",
          description:
            "日本人講師とのマンツーマン面接練習を徹底的に行い、自己PRや業務場面の質問への対応力を磨きます。",
          details: [
            "実際のビデオ面接環境を再現",
            "姿勢・所作・声の出し方の指導",
            "企業ごとに最適化した想定問答集",
          ],
        },
        {
          number: "05",
          title: "就職マッチングと雇用契約締結",
          japanese: "雇用契約締結",
          duration: "3〜4週間",
          description:
            "審査済みの登録支援機関および受入企業と面談し、法令に適合した高待遇の雇用契約を締結します。",
          details: [
            "日本企業の採用担当者との直接面接",
            "日本人と同等の賃金保証",
            "正式な内定の取得",
          ],
        },
        {
          number: "06",
          title: "在留資格・ビザ取得と渡航",
          japanese: "在留資格・渡航",
          duration: "2〜3ヶ月",
          description:
            "出入国在留管理庁での在留資格認定証明書（COE）取得、大使館でのビザ発給、そして日本でのキャリア開始に向けた渡航手続きを行います。",
          details: [
            "入管書類の作成と法的確認",
            "渡航前オリエンテーションと持ち物案内",
            "日本到着時の出迎えと初期住居支援",
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: "THE KAWAII TREDMIG ADVANTAGE • 強みと実績",
      title: "なぜ",
      titleAccent: "当校で学ぶのか？",
      intro:
        "当校は日本企業水準の規律を学生に求めます。それが、日本各地の優良企業から修了生が優先的に選ばれる理由です。",
      points: [
        {
          number: "01",
          title: "実践的な日本語習得",
          japanese: "実践的日本語教育",
          description:
            "教科書の暗記ではなく、実際に使える会話力と職場での理解力を重視します。日本での初日から活躍できる力を養います。",
        },
        {
          number: "02",
          title: "特定技能に特化したカリキュラム",
          japanese: "特定技能特化カリキュラム",
          description:
            "教材はプロメトリック試験の出題構成と厚生労働省の基準に厳密に準拠しています。",
        },
        {
          number: "03",
          title: "認定講師とネイティブ指導",
          japanese: "認定講師陣とネイティブ指導",
          description:
            "JLPT N1/N2認定講師と日本人ネイティブ講師が、毎回の授業で本物の日本文化に触れる機会を提供します。",
        },
        {
          number: "04",
          title: "就職・面接シミュレーター",
          japanese: "模擬面接・就職対策",
          description:
            "日本企業の採用担当者による模擬ビデオ面接を毎週実施。履歴書の個別添削と所作・マナー指導も行います。",
        },
        {
          number: "05",
          title: "日本企業との直接連携",
          japanese: "日本企業との直接連携",
          description:
            "東京・大阪・名古屋の登録支援機関および受入企業と、強固な連携関係を築いています。",
        },
        {
          number: "06",
          title: "在留資格・渡航の完全支援",
          japanese: "在留資格・渡航完全サポート",
          description:
            "大使館面接、書類準備、渡航手配、到着後の生活定着まで、透明性と倫理性をもって全面的に支援します。",
        },
      ],
      guaranteeEyebrow: "OUR PROMISE • 就職保証",
      guaranteeTitle: "保証します",
      guaranteeLead:
        "当校の指導どおりに訓練・出席・面接を完了していただければ、就職は",
      guaranteeSupportTitle: "日本到着後も、ずっと伴走します。",
      guaranteeSupport:
        "渡日後に受入企業との間で問題が起きても、当校が間に入り交渉します。一人で抱え込む必要はありません。",
    },
    japanBanner: {
      eyebrow: "国際キャリアの架け橋",
      titleLine1: "バングラデシュから",
      titleAccent: "日本へ。",
      body: "技能を身につけ、言葉を学び、文化を理解する。尊厳と高収入、そして長期的なキャリア成長が待つ日本へ踏み出しましょう。",
      cta: "旅を始める",
    },
    stats: {
      eyebrow: "MEASURABLE IMPACT • 実績と成果",
      title: "日本就職における確かな実績",
      intro:
        "本格的な日本語教育の規律と、国の特定技能制度に沿った体系的な訓練が生む、確かな成果です。",
      items: [
        {
          value: 500,
          suffix: "+",
          label: "訓練修了者数",
          sublabel: "実務レベルの日本語力を習得",
        },
        {
          value: 120,
          suffix: "+",
          label: "日本への就職者数",
          sublabel: "特定技能・企業職として就業中",
        },
        {
          value: 96,
          suffix: "%",
          label: "試験合格率",
          sublabel: "JLPT N5/N4および技能測定試験",
        },
        {
          value: 14,
          suffix: "+",
          label: "対応業種数",
          sublabel: "介護・外食・IT・建設ほか",
        },
      ],
    },
    testimonials: {
      eyebrow: "SUCCESS STORIES • 卒業生の声",
      title: "日本へ渡った",
      titleAccent: "卒業生の歩み。",
      verifiedBadge: "5.0 認定卒業生",
      programCompleted: "修了コース",
      prevAria: "前の体験談",
      nextAria: "次の体験談",
      items: [
        {
          id: 1,
          quote:
            "カワイ・トレドミッグは私の夢を現実に変えてくれました。徹底したN4対策とマンツーマンの面接練習のおかげで、介護分野の特定技能面接に一度で合格。今は東京で充実した毎日を送っています。",
          name: "タンビル・アハメド",
          role: "特定技能（介護）",
          location: "日本・東京",
          program: "特定技能 介護 ＋ JLPT N4",
        },
        {
          id: 2,
          quote:
            "一般的な予備校とは違い、カワイ・トレドミッグは本物の日本式の規律をもって訓練にあたります。先生方が報連相や実際の職場コミュニケーションを教えてくれたおかげで、名古屋での生活も滞りなく始められました。",
          name: "ファルハナ・ヤスミン",
          role: "特定技能（外食業）",
          location: "日本・名古屋",
          program: "特定技能 外食業 ＋ ビジネス会話",
        },
        {
          id: 3,
          quote:
            "ここの講師は文法を教えるだけでなく、日本の本当の文化まで伝えてくれます。履歴書の書き方からCOE・ビザの発給まで、すべての節目でチームが支えてくれました。",
          name: "マハムドゥル・ハサン",
          role: "建設エンジニアリング研修生",
          location: "日本・大阪",
          program: "特定技能 建設 ＋ JLPT N4",
        },
      ],
    },
    faq: {
      eyebrow: "FREQUENTLY ASKED QUESTIONS • よくある質問",
      title: "日本の特定技能について知っておくべきこと",
      intro:
        "受験資格、語学認定、ビザ手続き、就職斡旋について、明確で透明性のある回答をご案内します。",
      items: [
        {
          question: "特定技能ビザとは何ですか？",
          answer:
            "特定技能は、介護、外食業、宿泊、建設、農業、製造業など人材確保が必要な分野において、一定の技能を持つ外国人材を受け入れるために日本政府が創設した正式な在留資格です。",
        },
        {
          question: "基本的な学歴・語学の要件は何ですか？",
          answer:
            "日本語能力についてはJLPT N4またはJFT-Basic A2の合格、加えて希望分野の技能測定試験（プロメトリック）の合格が必要です。年齢は18歳以上で、HSC（高校卒業）相当の学歴が求められます。",
        },
        {
          question: "カワイ・トレドミッグでの訓練期間はどのくらいですか？",
          answer:
            "通常、日本語（N5からN4）と特定技能の専門カリキュラムを合わせて、フルタイムの集中コースで4〜6ヶ月です。日本語の学習経験がある方向けの短期集中クラスもご用意しています。",
        },
        {
          question: "面接のサポートは直接受けられますか？",
          answer:
            "はい。当校は認定を受けた日本の登録支援機関（RSO）および受入企業と直接連携しています。面接の手配、模擬練習の実施、雇用契約の締結まで一貫してサポートいたします。",
        },
        {
          question: "次期クラスへの申し込み方法を教えてください。",
          answer:
            "ウェブサイトの「今すぐ申し込む」からお申し込みいただけます。ダッカの訓練キャンパスにご来校いただければ、無料のキャリアカウンセリングと事前診断も受けられます。",
        },
      ],
    },
    finalCta: {
      eyebrow: "次期クラス募集中",
      title: "日本への旅を、",
      titleAccent: "始める準備はできましたか？",
      applyNow: "今すぐ申し込む",
      talkAdmissions: "入学相談に話す",
      body: "カワイ・トレドミッグ・トレーニング・インスティテュートで、日本での高収入で充実したキャリアへの確かな第一歩を踏み出しましょう。",
      trust: [
        "直接雇用契約",
        "仲介手数料は一切なし",
        "日本大使館基準に準拠したカリキュラム",
      ],
    },
    footer: {
      blurb:
        "バングラデシュの候補者を、日本での尊厳ある高収入キャリアへと導く、日本語教育および特定技能（SSW）の専門アカデミーです。",
      quickNav: "クイックナビ",
      sswDisciplines: "特定技能の分野",
      contactCampus: "お問い合わせ・キャンパス",
      authorized: "特定技能準備・JLPT対策 認定トレーニングセンター",
      copyright: "© 2026 Kawaii Tredmig Training Institute. All Rights Reserved.",
      navLinks: [
        { label: "ホーム概要", href: "#home" },
        { label: "当校について", href: "#about" },
        { label: "開講コース", href: "#programs" },
        { label: "特定技能ロードマップ", href: "#ssw" },
        { label: "日本語アカデミー", href: "#japanese" },
        { label: "選ばれる理由", href: "#why-us" },
      ],
      disciplines: [
        "介護",
        "外食業・飲食料品",
        "宿泊・ホテル運営",
        "建設・土木",
        "農業・飲食料品製造",
        "IT・技術専門職",
      ],
      campusAddress: "カワイ・トレドミッグ訓練キャンパス（バングラデシュ・ダッカ）",
      hotlineSuffix: "（ホットライン）",
      tokyoLiaison: "東京連携ネットワーク（日本）",
      scrollTopAria: "ページ先頭へ戻る",
      locationsHeading: "拠点",
      contactHeading: "お問い合わせ",
      locations: [
        {
          name: "トレーニングセンター（アフタブナガル）",
          address:
            "House 26/10, Level 8 & 9, Plot 13 & 15, Block-B, Zahurul Islam City Gate, Main Road, Aftabnagar, Dhaka-1212",
        },
        {
          name: "本社",
          address: "Taj Casilina, L-2, 25 Gulshan Avenue, Gulshan-1, Dhaka 1212",
        },
      ],
    },
    applyModal: {
      eyebrow: "入学・キャリア相談",
      title: "カワイ・トレドミッグへのお申し込み",
      subtitle: "日本での高収入キャリアへ、確かな第一歩を踏み出しましょう。",
      closeAria: "閉じる",
      successTitle: "お申し込みを受け付けました",
      successBody:
        "{name}様、ありがとうございます。日本担当の入学カウンセラーがプロフィールを確認のうえ、24時間以内にお電話またはWhatsAppでご連絡いたします。",
      connectWhatsApp: "WhatsAppで今すぐ相談",
      closeWindow: "ウィンドウを閉じる",
      fullName: "お名前 *",
      fullNamePlaceholder: "例：タンビル・アハメド",
      phone: "電話／WhatsApp *",
      phonePlaceholder: "例：+880 1712 345678",
      email: "メールアドレス",
      emailPlaceholder: "例：tanvir@example.com",
      targetProgram: "希望コース *",
      preferredIndustry: "希望分野 *",
      japaneseLevel: "現在の日本語レベル",
      messageLabel: "ご質問・これまでの経歴",
      messagePlaceholder: "保有資格や学歴、ご質問などをご記入ください...",
      submitting: "送信中...",
      submit: "申し込みを送信",
      whatsappInstant: "WhatsAppで即相談",
      privacy:
        "🔒 ご入力いただいた個人情報は厳重に管理し、入学相談の目的のみに使用します。",
      whatsappTemplate:
        "カワイ・トレドミッグ・トレーニング・インスティテュート御中。{program}について詳しく伺いたく、ご連絡いたしました。私の名前は{name}です。",
      interestedCandidate: "入学希望者",
      programs: [
        {
          value: "SSW Specialized Skill Training",
          label: "特定技能スキル訓練",
        },
        {
          value: "Japanese Language Academy",
          label: "日本語アカデミー",
        },
        {
          value: "Corporate Interview & Workplace Readiness",
          label: "就職・面接対策",
        },
        {
          value: "Japan Career & Settlement Pathway",
          label: "日本キャリア総合支援",
        },
      ],
      industries: [
        "介護",
        "外食業・飲食料品",
        "宿泊・ホテル",
        "建設・土木",
        "農業",
        "IT・エンジニアリング",
      ],
      levels: ["初心者・未学習", "N5学習中", "N5合格", "N4以上合格"],
    },
    common: {
      applyNow: "今すぐ申し込む",
      apply: "申し込む",
      hotline: "ホットライン",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
