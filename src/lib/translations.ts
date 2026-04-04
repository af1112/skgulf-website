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
          title: "Buildings & Industrial",
          description:
            "Civil, MEP, and construction services for high-performance industrial and operational buildings.",
          bullet: "Constructability-led design support and multidisciplinary site delivery.",
        },
        {
          title: "Asset Integrity & HSE",
          description:
            "Risk-based integrity management with HAZOP, QRA, SIMOPS, and reliability-centered maintenance programs.",
          bullet:
            "Data-backed interventions that reduce downtime and elevate compliance maturity.",
        },
        {
          title: "Digital & Low Carbon",
          description:
            "AI-enabled operations, carbon solutions, and practical decarbonization pathways for industrial portfolios.",
          bullet:
            "Field-ready technology strategies with measurable operational and environmental returns.",
        },
      ],
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
          title: "الطاقة والكيماويات",
          description: "دعم متكامل للمقاولات والتنفيذ لبيئات المعالجة العليا والسفلى والمتخصصة.",
          bullet: "تحديث المنشآت القائمة وتخطيط البناء وتنسيق السلامة بلا تنازلات.",
        },
        {
          title: "الطاقة المتجددة والمياه",
          description: "بنية تحتية للطاقة الشمسية والرياح والمياه على نطاق واسع مع التركيز على الجدول الزمني ودورة الحياة.",
          bullet: "من الاستعداد الميداني والأعمال المدنية إلى دعم التسليم وتحسين الأداء.",
        },
        {
          title: "خطوط الأنابيب وأنظمة التدفق",
          description: "سلامة خطوط الأنابيب وتنفيذ المسارات وتسليم النطاق الميكانيكي للأصول الحيوية.",
          bullet: "تخطيط من مستوى التنفيذ للموثوقية والسلامة والثقة التشغيلية طويلة المدى.",
        },
        {
          title: "المباني والصناعة",
          description: "خدمات مدنية وكهروميكانيكية وبناء للمباني الصناعية عالية الأداء.",
          bullet: "دعم التصميم القائم على القابلية للبناء والتسليم متعدد التخصصات.",
        },
        {
          title: "سلامة الأصول والسلامة المهنية",
          description: "إدارة السلامة القائمة على المخاطر مع HAZOP وQRA وSIMOPS وبرامج الصيانة المرتكزة على الموثوقية.",
          bullet: "تدخلات مدعومة بالبيانات تقلل التوقف وترفع مستوى الامتثال.",
        },
        {
          title: "الرقمنة وخفض الكربون",
          description: "عمليات مدعومة بالذكاء الاصطناعي وحلول الكربون ومسارات عملية لإزالة الكربون.",
          bullet: "استراتيجيات تقنية جاهزة للميدان بعوائد تشغيلية وبيئية قابلة للقياس.",
        },
      ],
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
