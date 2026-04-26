export type Locale = "en" | "ar";

export const translations = {
  en: {
    dir: "ltr" as const,
    nav: {
      about: "About",
      markets: "Markets",
      capabilities: "Capabilities",
      technologies: "Technologies",
      projects: "Projects",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      badge: "100% Omani-Owned · Engineering Excellence",
      titleLine1: "Engineering the",
      titleLine2: "Future of Energy",
      description:
        "Integrated solutions across Oil & Gas, Renewable Energy, AI-driven operations, and sustainable asset integrity — building resilient energy infrastructure for the Middle East and beyond.",
      cta1: "Our Capabilities →",
      cta2: "Get in Touch",
      statYears: "Years Experience",
      statProjects: "Projects Delivered",
      statEngineers: "Expert Engineers",
      statSatisfaction: "Client Satisfaction",
      successRate: "Project Success Rate",
      isoCertified: "ISO 9001 Certified",
    },
    markets: {
      label: "Markets Overview",
      heading: "Core sectors where we engineer, execute & optimize.",
      description:
        "Deep domain expertise across energy, sustainability, and intelligent systems — delivering measurable outcomes for complex industrial challenges.",
      learnMore: "Learn More →",
      items: [
        {
          title: "Oil & Gas Contracting",
          desc: "Field execution, brownfield upgrades, and industrial EPC support for mission-critical energy assets.",
        },
        {
          title: "Renewable Energy",
          desc: "Utility-scale solar, wind deployment, and grid-integration for a cleaner energy future.",
        },
        {
          title: "AI & Smart Systems",
          desc: "Predictive analytics, autonomous inspection, and operational intelligence for industrial performance.",
        },
      ],
    },
    stats: {
      years: "Years Experience",
      projects: "Projects Delivered",
      engineers: "Expert Engineers",
      satisfaction: "Client Satisfaction",
    },
    capabilities: {
      label: "Capabilities Snapshot",
      heading: "Deep multidisciplinary engineering for critical projects.",
      description:
        "From concept to commissioning — our integrated capabilities span the full project lifecycle across energy and industrial sectors.",
      learnMore: "Learn More",
      categories: "Categories",
      ourCapabilities: "Our Capabilities",
      items: [
        {
          title: "Construction",
          description:
            "Comprehensive construction services for industrial and commercial infrastructure, ensuring structural integrity and excellence.",
          bullet: "Industrial facilities, commercial buildings, and infrastructure development.",
        },
        {
          title: "Interior Designing",
          description:
            "Creative and functional interior design and decoration solutions that blend aesthetics with operational efficiency.",
          bullet: "Office spaces, industrial interiors, and custom decoration concepts.",
        },
        {
          title: "Furniture Work",
          description:
            "Bespoke furniture solutions and fit-out works tailored to industrial and commercial requirements.",
          bullet: "Custom furniture design, installation, and high-quality finishes.",
        },
        {
          title: "Ideation",
          description:
            "Strategic brainstorming and conceptual development to solve complex industrial challenges.",
          bullet: "Creative problem solving, feasibility studies, and innovation workshops.",
        },
        {
          title: "Design",
          description:
            "Detailed engineering and architectural design services focused on precision and performance.",
          bullet: "3D modeling, technical drafting, and architectural planning.",
        },
        {
          title: "Automation",
          description:
            "Advanced industrial automation solutions to optimize processes, reduce costs, and enhance safety.",
          bullet: "Robotics, control systems, and smart factory integration.",
        },
        {
          title: "Software Development",
          description:
            "Custom software solutions for industrial monitoring, asset management, and digital transformation.",
          bullet: "Enterprise software, IoT platforms, and data analytics tools.",
        },
        {
          title: "Energy & Chemicals",
          description:
            "Integrated contracting and execution support for upstream, downstream, and specialty process environments.",
          bullet:
            "Brownfield upgrades, construction planning, and zero-compromise safety orchestration.",
        },
        {
          title: "Renewables, Power & Water",
          description:
            "Utility-scale solar, wind, and power-water infrastructure delivered with schedule and lifecycle focus.",
          bullet:
            "From site readiness and civil works to handover support and performance optimization.",
        },
        {
          title: "Pipelines & Flow Systems",
          description:
            "Pipeline integrity, route execution, and mechanical scope delivery for critical transmission assets.",
          bullet:
            "Execution-grade planning for reliability, safety, and long-term operational confidence.",
        },
        {
          title: "Asset Integrity & HSE",
          description:
            "Risk-based integrity management with HAZOP, QRA, SIMOPS, and reliability-centered maintenance programs.",
          bullet:
            "Data-backed interventions that reduce downtime and elevate compliance maturity.",
        },
      ],
    },
    partners: {
      label: "Strategic Partners",
      heading: "Our Partnerships",
      description: "Collaborating with industry leaders to deliver excellence.",
    },
    clients: {
      label: "Experience & Track Record",
      heading: "Companies We've Worked With",
      description: "A history of successful collaborations and project deliveries across various sectors.",
    },
    technologies: {
      label: "Technologies & Innovation",
      heading: "AI, robotics & digital engineering for industry.",
      description:
        "Our technology teams design intelligent workflows for inspection, predictive maintenance, and performance optimization across complex energy assets.",
      features: [
        {
          icon: "🤖",
          title: "AI-Powered Diagnostics",
          desc: "Machine learning models that predict equipment failures before they happen, reducing downtime by up to 60%.",
        },
        {
          icon: "📡",
          title: "IoT Sensor Networks",
          desc: "Real-time monitoring infrastructure connecting thousands of data points across distributed assets.",
        },
        {
          icon: "🔬",
          title: "Digital Twin Modeling",
          desc: "Virtual replicas of physical assets enabling simulation, optimization, and predictive scenario planning.",
        },
      ],
    },
    integrity: {
      label: "Sustainable Asset Integrity",
      heading: "Smart monitoring, inspection & reliability operations.",
      description:
        "We combine inspection engineering, real-time monitoring, and AI diagnostics to reduce risk, extend asset life, and support low-carbon operational performance.",
      cta: "Learn About Our Approach →",
    },
    projectsSection: {
      label: "Projects Gallery",
      heading: "Selected project environments & execution contexts.",
      description:
        "A portfolio of engineering excellence across energy, industrial, and sustainability sectors.",
      items: [
        {
          title: "SADAD EDF NORTH, SOLAR GAS TURBINE",
          description:
            "Engineering, procurement, and construction support for the SADAD EDF North Solar Gas Turbine project — integrating solar-thermal and gas turbine technologies for efficient hybrid power generation.",
        },
        {
          title: "IBRI IPP II PV PLANT",
          description:
            "Large-scale photovoltaic power plant project at Ibri, contributing to Oman's renewable energy capacity with advanced tracker systems and grid synchronization.",
        },
        {
          title: "SOHAR GAS SUPPLY STATION",
          description:
            "Gas supply station project in the Sohar industrial zone — piping, mechanical, and civil works for reliable gas distribution infrastructure.",
        },
        {
          title: "SADAD EDF NORTH",
          description:
            "Comprehensive EPC execution for the SADAD EDF North facility, including civil, mechanical, and electrical works for upstream energy production.",
        },
        {
          title: "SOHAR 35 MW PV POWER PLANT",
          description:
            "35 MW solar photovoltaic power plant in Sohar — full construction and commissioning support for utility-scale renewable energy generation.",
        },
        {
          title: "ACCOMODATION FACILITIES",
          description:
            "Design-build delivery of accommodation and welfare facilities for large-scale industrial and energy project sites.",
        },
      ],
    },
    vision: {
      label: "Vision & Sustainability",
      heading: "An intelligent energy future built on sustainability & trust.",
      description:
        "Our long-term strategy blends engineering discipline with innovation to deliver measurable value for clients, communities, and the environment.",
      values: [
        { icon: "🌱", title: "Carbon Reduction", desc: "Committed to measurable emissions reduction across all project operations." },
        { icon: "♻️", title: "Circular Economy", desc: "Designing for asset longevity, reuse, and minimal environmental footprint." },
        { icon: "🤝", title: "Community Impact", desc: "Creating local employment and transferring knowledge to build regional capacity." },
      ],
    },
    cta: {
      heading: "Let's Build the Future of Energy Together",
      description:
        "Partner with SK-GULF INTEGRATED LLC for engineering excellence, technology innovation, and sustainable energy solutions that deliver real results.",
      contactUs: "Contact Us →",
    },
    footer: {
      brand:
        "SK-GULF INTEGRATED LLC — A 100% Omani company delivering integrated engineering, contracting, and technology solutions across the Middle East.",
      services: "Services",
      company: "Company",
      contactTitle: "Contact",
      aboutUs: "About Us",
      sustainability: "Sustainability",
      copyright: "SK-GULF INTEGRATED LLC. All rights reserved.",
    },
  },

  ar: {
    dir: "rtl" as const,
    nav: {
      about: "من نحن",
      markets: "الأسواق",
      capabilities: "القدرات",
      technologies: "التقنيات",
      projects: "المشاريع",
      contact: "اتصل بنا",
      getInTouch: "تواصل معنا",
    },
    hero: {
      badge: "شركة عُمانية 100% · التميز الهندسي",
      titleLine1: "هندسة",
      titleLine2: "مستقبل الطاقة",
      description:
        "حلول متكاملة في النفط والغاز، والطاقة المتجددة، والعمليات المدعومة بالذكاء الاصطناعي، وسلامة الأصول المستدامة — لبناء بنية تحتية مرنة للطاقة في الشرق الأوسط وخارجه.",
      cta1: "← قدراتنا",
      cta2: "تواصل معنا",
      statYears: "سنوات الخبرة",
      statProjects: "مشروع منجز",
      statEngineers: "مهندس خبير",
      statSatisfaction: "رضا العملاء",
      successRate: "نسبة نجاح المشاريع",
      isoCertified: "شهادة ISO 9001",
    },
    markets: {
      label: "نظرة عامة على الأسواق",
      heading: "القطاعات الأساسية التي نصممها وننفذها ونحسّنها.",
      description:
        "خبرة عميقة في مجالات الطاقة والاستدامة والأنظمة الذكية — لتقديم نتائج قابلة للقياس للتحديات الصناعية المعقدة.",
      learnMore: "← اعرف المزيد",
      items: [
        {
          title: "مقاولات النفط والغاز",
          desc: "التنفيذ الميداني وتحديث المنشآت القائمة ودعم EPC الصناعي للأصول الحيوية.",
        },
        {
          title: "الطاقة المتجددة",
          desc: "الطاقة الشمسية والرياح على نطاق واسع وتكامل الشبكة لمستقبل أنظف للطاقة.",
        },
        {
          title: "الذكاء الاصطناعي والأنظمة الذكية",
          desc: "التحليلات التنبؤية والفحص الذاتي والذكاء التشغيلي للأداء الصناعي.",
        },
      ],
    },
    stats: {
      years: "سنوات الخبرة",
      projects: "مشروع منجز",
      engineers: "مهندس خبير",
      satisfaction: "رضا العملاء",
    },
    capabilities: {
      label: "لمحة عن القدرات",
      heading: "هندسة متعددة التخصصات للمشاريع الحيوية.",
      description:
        "من المفهوم إلى التشغيل — قدراتنا المتكاملة تغطي دورة حياة المشروع الكاملة عبر قطاعات الطاقة والصناعة.",
      learnMore: "اعرف المزيد",
      categories: "الفئات",
      ourCapabilities: "قدراتنا",
      items: [
        {
          title: "الإنشاءات",
          description:
            "خدمات إنشائية شاملة للبنية التحتية الصناعية والتجارية، مع ضمان السلامة الهيكلية والتميز.",
          bullet: "المنشآت الصناعية، المباني التجارية، وتطوير البنية التحتية.",
        },
        {
          title: "التصميم الداخلي والديكور",
          description:
            "حلول تصميم داخلي وديكور مبتكرة وعملية تمزج بين الجمال والكفاءة التشغيلية.",
          bullet: "المساحات المكتبية، التصميمات الصناعية، ومفاهيم الديكور المخصصة.",
        },
        {
          title: "أعمال الأثاث",
          description:
            "حلول أثاث مخصصة وأعمال التجهيز المصممة لتلبية المتطلبات الصناعية والتجارية.",
          bullet: "تصميم الأثاث المخصص، التركيب، والتشطيبات عالية الجودة.",
        },
        {
          title: "الابتكار والفكر (Ideation)",
          description:
            "جلسات العصف الذهني الاستراتيجي والتطوير المفاهيمي لحل التحديات الصناعية المعقدة.",
          bullet: "حل المشكلات الإبداعي، دراسات الجدوى، وورش عمل الابتكار.",
        },
        {
          title: "التصميم",
          description:
            "خدمات التصميم الهندسي والمعماري التفصيلي التي تركز على الدقة والأداء.",
          bullet: "النمذجة ثلاثية الأبعاد، الرسم الفني، والتخطيط المعماري.",
        },
        {
          title: "الأتمتة",
          description:
            "حلول أتمتة صناعية متقدمة لتحسين العمليات وتقليل التكاليف وتعزيز السلامة.",
          bullet: "الروبوتات، أنظمة التحكم، وتكامل المصانع الذكية.",
        },
        {
          title: "تطوير البرمجيات",
          description:
            "حلول برمجية مخصصة للمراقبة الصناعية وإدارة الأصول والتحول الرقمي.",
          bullet: "برمجيات المؤسسات، منصات إنترنت الأشياء، وأدوات تحليل البيانات.",
        },
        {
          title: "الطاقة والكيماويات",
          description:
            "دعم متكامل للمقاولات والتنفيذ لبيئات العمليات في قطاعات الاستكشاف والإنتاج والتكرير.",
          bullet:
            "تحديث المنشآت القائمة، تخطيط الإنشاءات، وإدارة السلامة دون تقديم أي تنازلات.",
        },
        {
          title: "الطاقة المتجددة والمياه",
          description:
            "مشاريع الطاقة الشمسية والرياح والبنية التحتية للطاقة والمياه على نطاق واسع.",
          bullet: "من جاهزية الموقع والأعمال المدنية إلى دعم التسليم وتحسين الأداء.",
        },
        {
          title: "خطوط الأنابيب وأنظمة التدفق",
          description:
            "سلامة خطوط الأنابيب، تنفيذ المسارات، وتسليم النطاق الميكانيكي للأصول الحيوية.",
          bullet: "تخطيط بمستوى التنفيذ للموثوقية والسلامة والتشغيل طويل الأمد.",
        },
        {
          title: "سلامة الأصول والبيئة والصحة",
          description:
            "إدارة النزاهة القائمة على المخاطر مع برامج HAZOP و QRA و SIMOPS والصيانة المرتكزة على الموثوقية.",
          bullet: "التدخلات المدعومة بالبيانات التي تقلل من وقت التوقف عن العمل وترفع مستوى الامتثال.",
        },
      ],
    },
    partners: {
      label: "الشركاء الاستراتيجيون",
      heading: "شراكاتنا",
      description: "نحن نتعاون مع قادة الصناعة لتقديم التميز في كل مشروع.",
    },
    clients: {
      label: "الخبرة وسجل الأعمال",
      heading: "شركات عملنا معها",
      description: "تاریخ من التعاون الناجح وتسلیم المشاريع في مختلف القطاعات.",
    },
    technologies: {
      label: "التقنيات والابتكار",
      heading: "الذكاء الاصطناعي والروبوتات والهندسة الرقمية للصناعة.",
      description:
        "فرقنا التقنية تصمم سير عمل ذكي للفحص والصيانة التنبؤية وتحسين الأداء عبر أصول الطاقة المعقدة.",
      features: [
        {
          icon: "🤖",
          title: "تشخيصات بالذكاء الاصطناعي",
          desc: "نماذج تعلم آلي تتنبأ بأعطال المعدات قبل حدوثها، مما يقلل وقت التوقف بنسبة تصل إلى 60%.",
        },
        {
          icon: "📡",
          title: "شبكات أجهزة IoT",
          desc: "بنية تحتية للمراقبة في الوقت الحقيقي تربط آلاف نقاط البيانات عبر الأصول الموزعة.",
        },
        {
          icon: "🔬",
          title: "نمذجة التوأم الرقمي",
          desc: "نسخ افتراضية من الأصول المادية تتيح المحاكاة والتحسين والتخطيط التنبؤي.",
        },
      ],
    },
    integrity: {
      label: "سلامة الأصول المستدامة",
      heading: "المراقبة الذكية والفحص وعمليات الموثوقية.",
      description:
        "نجمع بين هندسة الفحص والمراقبة في الوقت الحقيقي وتشخيصات الذكاء الاصطناعي لتقليل المخاطر وإطالة عمر الأصول ودعم الأداء التشغيلي منخفض الكربون.",
      cta: "← تعرّف على نهجنا",
    },
    projectsSection: {
      label: "معرض المشاريع",
      heading: "بيئات مشاريع مختارة وسياقات تنفيذية.",
      description:
        "محفظة من التميز الهندسي عبر قطاعات الطاقة والصناعة والاستدامة.",
      items: [
        {
          title: "SADAD EDF NORTH, SOLAR GAS TURBINE",
          description: "دعم هندسي وتدارکاتی و ساخت برای پروژه توربین گازی خورشیدی SADAD EDF North — ترکیب فناوری‌های حرارتی-خورشیدی و توربین گازی برای تولید برق ترکیبی کارآمد.",
        },
        {
          title: "IBRI IPP II PV PLANT",
          description: "مشروع محطة طاقة كهروضوئية واسعة النطاق في عبري، يساهم في قدرة عُمان من الطاقة المتجددة مع أنظمة تتبع متقدمة ومزامنة الشبكة.",
        },
        {
          title: "SOHAR GAS SUPPLY STATION",
          description: "مشروع محطة إمداد الغاز في المنطقة الصناعية بصحار — أعمال الأنابيب والميكانيكية والمدنية لبنية تحتية موثوقة لتوزيع الغاز.",
        },
        {
          title: "SADAD EDF NORTH",
          description: "تنفيذ EPC شامل لمنشأة SADAD EDF North، بما في ذلك الأعمال المدنية والميكانيكية والكهربائية لإنتاج الطاقة.",
        },
        {
          title: "SOHAR 35 MW PV POWER PLANT",
          description: "محطة طاقة شمسية كهروضوئية بقدرة 35 ميجاوات في صحار — دعم كامل للبناء والتشغيل لتوليد الطاقة المتجددة على نطاق واسع.",
        },
        {
          title: "ACCOMODATION FACILITIES",
          description: "تسليم تصميم-بناء لمرافق الإقامة والرفاهية لمواقع المشاريع الصناعية والطاقوية الكبرى.",
        },
      ],
    },
    vision: {
      label: "الرؤية والاستدامة",
      heading: "مستقبل طاقة ذكي مبني على الاستدامة والثقة.",
      description:
        "استراتيجيتنا طويلة المدى تمزج الانضباط الهندسي مع الابتكار لتقديم قيمة قابلة للقياس للعملاء والمجتمعات والبيئة.",
      values: [
        { icon: "🌱", title: "خفض الكربون", desc: "ملتزمون بخفض قابل للقياس في الانبعاثات عبر جميع عمليات المشاريع." },
        { icon: "♻️", title: "الاقتصاد الدائري", desc: "التصميم لطول عمر الأصول وإعادة الاستخدام والحد الأدنى من البصمة البيئية." },
        { icon: "🤝", title: "الأثر المجتمعي", desc: "خلق فرص عمل محلية ونقل المعرفة لبناء القدرات الإقليمية." },
      ],
    },
    cta: {
      heading: "لنبنِ مستقبل الطاقة معاً",
      description:
        "شاركنا في SK-GULF INTEGRATED LLC للتميز الهندسي والابتكار التقني وحلول الطاقة المستدامة التي تحقق نتائج حقيقية.",
      contactUs: "← اتصل بنا",
    },
    footer: {
      brand:
        "SK-GULF INTEGRATED LLC — شركة عُمانية 100% تقدم حلول هندسية ومقاولات وتقنية متكاملة في الشرق الأوسط.",
      services: "الخدمات",
      company: "الشركة",
      contactTitle: "اتصل بنا",
      aboutUs: "من نحن",
      sustainability: "الاستدامة",
      copyright: "SK-GULF INTEGRATED LLC. جميع الحقوق محفوظة.",
    },
  },
} as const;
