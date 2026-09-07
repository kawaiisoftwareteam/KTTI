export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  location: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "YOUR PATH TO JAPAN STARTS HERE.",
    subtitle:
      "Professional SSW preparation and Japanese language training designed to prepare you for high-demand, real career opportunities in Japan.",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2070&auto=format&fit=crop", // Tokyo skyscraper skyline twilight
    tag: "DISCIPLINE & EXCELLENCE",
    location: "Tokyo, Japan",
  },
  {
    id: 2,
    title: "MASTER THE LANGUAGE. OWN THE WORKPLACE.",
    subtitle:
      "Intensive JLPT & NAT-Test preparation combined with Japanese business etiquette, direct sensei interactions, and real conversational training.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", // Modern collaborative classroom
    tag: "LANGUAGE IMMERSION",
    location: "Kawaii Tredmig Training Campus",
  },
  {
    id: 3,
    title: "SPECIFIED SKILLED WORKER (SSW) PATHWAY.",
    subtitle:
      "Government-recognized specialized skill training tailored for Caregiving, Food Service, Hospitality, Construction, and Tech sectors in Japan.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Modern corporate architecture
    tag: "SSW ACCELERATOR",
    location: "Osaka & Nagoya Corporate Network",
  },
  {
    id: 4,
    title: "1-ON-1 SENSEI MENTORSHIP & INTERVIEW PREP.",
    subtitle:
      "Learn directly from native Japanese educators and certified instructors with direct corporate placement guidance.",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2070&auto=format&fit=crop", // Professional one-on-one session
    tag: "INTERVIEW READINESS",
    location: "Executive Mentorship Hub",
  },
  {
    id: 5,
    title: "FROM BANGLADESH TO HIGH-EARNING JAPANESE CAREERS.",
    subtitle:
      "Empowering Bangladeshi youths and ambitious professionals with visa clearance, direct matching, and long-term career stability.",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop", // Shibuya Tokyo cinematic
    tag: "GLOBAL OPPORTUNITIES",
    location: "Tokyo Metropolis",
  },
];

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
  japaneseTitle: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "ssw-training",
    title: "SSW Specialized Skill Training",
    subtitle: "Specified Skilled Worker (特定技能) Fast-Track",
    tag: "HIGH DEMAND",
    duration: "4 - 6 Months",
    japaneseTitle: "特定技能訓練",
    description:
      "Comprehensive skill training designed according to Japan's Prometric and OTIT testing frameworks. Covers nursing caregiving, food service, construction, and hospitality with hands-on practical labs.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", // Modern medical care / skill training
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
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop", // Study desk / books / focus
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
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", // Corporate professional suit
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
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop", // Kyoto / Japan lifestyle
    highlights: [
      "Direct Japanese Employer Matching",
      "COE & Visa Documentation Guidance",
      "Pre-Departure Lifestyle & Legal Orientation",
      "Alumni Support Network in Major Japanese Cities",
    ],
  },
];

export interface SswStep {
  number: string;
  title: string;
  japanese: string;
  duration: string;
  description: string;
  details: string[];
}

export const SSW_TIMELINE: SswStep[] = [
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
];

export interface LanguageLevel {
  level: string;
  badge: string;
  kanji: string;
  hours: string;
  targetAudience: string;
  description: string;
  capabilities: string[];
}

export const LANGUAGE_LEVELS: LanguageLevel[] = [
  {
    level: "Beginner & N5",
    badge: "FOUNDATION",
    kanji: "初級・N5",
    hours: "150 Hours",
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
    hours: "180 Hours",
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
    hours: "220 Hours",
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
    hours: "80 Hours",
    targetAudience: "Interview & Placement Ready",
    description:
      "Dedicated conversational immersion (Kaiwa) focusing on Keigo (polite honorific language), telephoning manners, email etiquette, and client handling.",
    capabilities: [
      "Fluency in Sonkeigo & Kenjougo (honorifics)",
      "High-pressure interview response confidence",
      "Cross-cultural workplace conflict resolution",
      "Polite business email & messaging standards",
    ],
  },
];

export interface WhyUsPoint {
  number: string;
  title: string;
  japanese: string;
  description: string;
  iconName: string;
}

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    number: "01",
    title: "Practical Japanese Immersion",
    japanese: "実践的日本語教育",
    description:
      "We focus on real conversational fluency and workplace comprehension rather than rote textbook memorization, ensuring you thrive from Day 1 in Japan.",
    iconName: "MessageSquareText",
  },
  {
    number: "02",
    title: "SSW-Tailored Curriculum",
    japanese: "特定技能特化カリキュラム",
    description:
      "Our course materials are strictly aligned with Prometric test blueprints and Ministry of Health, Labour and Welfare (MHLW) standards.",
    iconName: "Briefcase",
  },
  {
    number: "03",
    title: "Certified & Native Instructors",
    japanese: "認定講師陣とネイティブ指導",
    description:
      "Learn under certified JLPT N1/N2 masters and native Japanese instructors who bring authentic cultural immersion into every class.",
    iconName: "GraduationCap",
  },
  {
    number: "04",
    title: "Career & Interview Simulator",
    japanese: "模擬面接・就職対策",
    description:
      "Weekly mock video interviews with native corporate recruiters, personalized Japanese CV formulate (Rirekisho), and posture etiquette training.",
    iconName: "Users",
  },
  {
    number: "05",
    title: "Direct Japan Industry Linkages",
    japanese: "日本企業との直接連携",
    description:
      "Strong established ties with Japanese registered support organizations (RSO / 登録支援機関) and accepting companies across Tokyo, Osaka, and Nagoya.",
    iconName: "Building2",
  },
  {
    number: "06",
    title: "End-to-End Visa & COE Guidance",
    japanese: "在留資格・渡航完全サポート",
    description:
      "Transparent, ethical, and complete assistance through embassy interviews, documentation, flight logistics, and post-arrival settlement.",
    iconName: "ShieldCheck",
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export const STATS: StatItem[] = [
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
];

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  rating: number;
  program: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Kawaii Tredmig transformed my dream into reality. The rigorous N4 training and 1-on-1 interview drills prepared me so well that I passed my Caregiver SSW interview on the first attempt. I am now working happily in Tokyo!",
    name: "Tanvir Ahmed",
    role: "Specified Skilled Worker (Caregiver)",
    company: "Social Welfare Care Home",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
    program: "SSW Caregiver + JLPT N4",
  },
  {
    id: 2,
    quote:
      "Unlike generic coaching centers, Kawaii Tredmig treats training with true Japanese discipline. The senseis taught us Hou-Ren-So and actual workplace communication that made my transition to Nagoya completely seamless.",
    name: "Farhana Yasmin",
    role: "Food Service SSW Specialist",
    company: "Global Dining Hospitality Group",
    location: "Nagoya, Japan",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
    program: "SSW Food Service + Business Kaiwa",
  },
  {
    id: 3,
    quote:
      "The instructors here do not just teach grammar; they prepare you for the real culture of Japan. From Rirekisho writing to COE visa stamping, the team supported me at every single milestone.",
    name: "Mahmudul Hasan",
    role: "Construction Engineering Trainee",
    company: "Taisei Subcontractor Partner",
    location: "Osaka, Japan",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    rating: 5,
    program: "SSW Construction + JLPT N4",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
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
];
