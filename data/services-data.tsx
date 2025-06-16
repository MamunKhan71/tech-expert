export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  slug: string
  subcategories?: ServiceSubcategory[]
}
export interface ServiceSubcategory {
  id: string
  icon: string
  title: string
  slug: string
  color: string // For the icon color
}

export const servicesData: ServiceItem[] = [
    {
        id: "mobile-app-development",
        icon: "Smartphone",
        title: "Mobile App Development",
        description: "Leading Mobile Application Development Services Provider",
        slug: "mobile-app-development",
        subcategories: [
            {
                id: "ios-development",
                icon: "Apple",
                title: "iOS Development",
                slug: "ios-development",
                color: "text-blue-500",
            },
            {
                id: "android-development",
                icon: "Smartphone",
                title: "Android Development",
                slug: "android-development",
                color: "text-green-500",
            },
            {
                id: "cross-platform",
                icon: "Layers",
                title: "Cross-Platform",
                slug: "cross-platform-apps",
                color: "text-purple-500",
            },
        ],
    },
    {
        id: "custom-software",
        icon: "Code",
        title: "Custom Software",
        description: "Software Development As A Service (SaaS) Corporation",
        slug: "custom-software",
        subcategories: [
            {
                id: "web-applications",
                icon: "Globe",
                title: "Web Applications",
                slug: "web-applications",
                color: "text-indigo-500",
            },
            {
                id: "desktop-software",
                icon: "Monitor",
                title: "Desktop Software",
                slug: "desktop-software",
                color: "text-amber-500",
            },
            {
                id: "saas-solutions",
                icon: "Cloud",
                title: "SaaS Solutions",
                slug: "saas-solutions",
                color: "text-rose-500",
            },
        ],
    },
    {
        id: "web-development",
        icon: "Globe",
        title: "Web Development",
        description: "Building scalable, secure, & user-friendly web solutions",
        slug: "web-development",
        subcategories: [
            {
                id: "frontend",
                icon: "Layout",
                title: "Frontend Development",
                slug: "frontend-development",
                color: "text-sky-500",
            },
            {
                id: "backend",
                icon: "Server",
                title: "Backend Development",
                slug: "backend-development",
                color: "text-emerald-500",
            },
            {
                id: "ecommerce",
                icon: "ShoppingCart",
                title: "E-commerce",
                slug: "ecommerce",
                color: "text-orange-500",
            },
            {
                id: "cms",
                icon: "FileText",
                title: "CMS Development",
                slug: "cms-development",
                color: "text-violet-500",
            },
        ],
    },
    {
        id: "ui-ux-design",
        icon: "Palette",
        title: "UI/UX Design",
        description: "Designing seamless, user-centric digital experiences",
        slug: "ui-ux-design",
        subcategories: [
            {
                id: "user-research",
                icon: "Search",
                title: "User Research",
                slug: "user-research",
                color: "text-yellow-500",
            },
            {
                id: "wireframing",
                icon: "PenTool",
                title: "Wireframing",
                slug: "wireframing",
                color: "text-slate-500",
            },
            {
                id: "prototyping",
                icon: "Layers",
                title: "Prototyping",
                slug: "prototyping",
                color: "text-pink-500",
            },
            {
                id: "usability-testing",
                icon: "CheckCircle",
                title: "Usability Testing",
                slug: "usability-testing",
                color: "text-teal-500",
            },
        ],
    },
    {
        id: "digital-marketing",
        icon: "BarChart",
        title: "Digital Marketing",
        description: "Result-driven digital marketing strategies for growth",
        slug: "digital-marketing",
        subcategories: [
            {
                id: "seo",
                icon: "Search",
                title: "SEO",
                slug: "seo",
                color: "text-green-500",
            },
            {
                id: "social-media",
                icon: "Share2",
                title: "Social Media",
                slug: "social-media",
                color: "text-blue-500",
            },
            {
                id: "ppc",
                icon: "MousePointer",
                title: "PPC",
                slug: "ppc",
                color: "text-purple-500",
            },
            {
                id: "content-marketing",
                icon: "FileText",
                title: "Content Marketing",
                slug: "content-marketing",
                color: "text-orange-500",
            },
            {
                id: "email-marketing",
                icon: "Mail",
                title: "Email Marketing",
                slug: "email-marketing",
                color: "text-red-500",
            },
        ],
    },
    {
        id: "ai-ml-solutions",
        icon: "Cpu",
        title: "AI/ML Solutions",
        description: "Intelligent automation and data-driven decision making",
        slug: "ai-ml-solutions",
        subcategories: [
            {
                id: "machine-learning",
                icon: "Brain",
                title: "Machine Learning",
                slug: "machine-learning",
                color: "text-violet-500",
            },
            {
                id: "computer-vision",
                icon: "Eye",
                title: "Computer Vision",
                slug: "computer-vision",
                color: "text-cyan-500",
            },
            {
                id: "nlp",
                icon: "MessageSquare",
                title: "NLP",
                slug: "nlp",
                color: "text-emerald-500",
            },
            {
                id: "predictive-analytics",
                icon: "TrendingUp",
                title: "Predictive Analytics",
                slug: "predictive-analytics",
                color: "text-amber-500",
            },
        ],
    },
    {
        id: "enterprise-solutions",
        icon: "Layers",
        title: "Enterprise Solutions",
        description: "Scalable enterprise-grade software solutions",
        slug: "enterprise-solutions",
        subcategories: [
            {
                id: "erp",
                icon: "Database",
                title: "ERP Systems",
                slug: "erp-systems",
                color: "text-blue-500",
            },
            {
                id: "crm",
                icon: "Users",
                title: "CRM Solutions",
                slug: "crm-solutions",
                color: "text-green-500",
            },
            {
                id: "business-intelligence",
                icon: "BarChart2",
                title: "Business Intelligence",
                slug: "business-intelligence",
                color: "text-purple-500",
            },
            {
                id: "cloud-solutions",
                icon: "Cloud",
                title: "Cloud Solutions",
                slug: "cloud-solutions",
                color: "text-orange-500",
            },
        ],
    },
    {
        "id": "bpo-services-1",
        "icon": "Database", 
        "title": "Data Entry",
        "description": "Efficient and accurate data entry services to streamline your operations.",
        "slug": "data-entry",
        "subcategories": [
            {
                "id": "online-data-entry",
                "icon": "Router", 
                "title": "Online Data Entry",
                "slug": "online-data-entry",
                "color": "#f0f8ff"
            },
            {
                "id": "offline-data-entry",
                "icon": "HardDrive", 
                "title": "Offline Data Entry",
                "slug": "offline-data-entry",
                "color": "#faebd7"
            }
        ]
    },
    {
        "id": "bpo-services-",
        "icon": "Cog",
        "title": "Data Processing",
        "description": "Comprehensive data processing services to transform raw data into valuable insights.",
        "slug": "data-processing",
        "subcategories": [
            {
                "id": "forms-processing-services",
                "icon": "ClipboardList", 
                "title": "Forms Processing Services",
                "slug": "forms-processing-services",
                "color": "#afeeee"
            },
            {
                "id": "data-cleansing",
                "icon": "FilterX", 
                "title": "Data Cleansing",
                "slug": "data-cleansing",
                "color": "#e0ffff"
            },
            {
                "id": "data-mining-extraction",
                "icon": "DatabaseZap", 
                "title": "Data Mining & Extraction",
                "slug": "data-mining-extraction",
                "color": "#f5f5dc"
            },
            {
                "id": "data-verification",
                "icon": "ShieldCheck",
                "title": "Data Verification",
                "slug": "data-verification",
                "color": "#ffe4c4"
            },
            {
                "id": "data-transformation",
                "icon": "ArrowRightLeft", 
                "title": "Data Transformation",
                "slug": "data-transformation",
                "color": "#d8bfd8"
            }
        ]
    },
    {
        "id": "bpo-services-2",
        "icon": "Building2", 
        "title": "Property Management",
        "description": "Efficient property management solutions to handle various aspects of your real estate.",
        "slug": "property-management",
        "subcategories": [
            {
                "id": "customer-support",
                "icon": "Headset",
                "title": "Customer Support",
                "slug": "customer-support",
                "color": "#f0fff0"
            },
            {
                "id": "vendor-management",
                "icon": "Handshake", 
                "title": "Vendor Management",
                "slug": "vendor-management",
                "color": "#fffacd"
            },
            {
                "id": "utility-bill-management",
                "icon": "Receipt", 
                "title": "Utility & Bill Management",
                "slug": "utility-bill-management",
                "color": "#add8e6"
            },
            {
                "id": "legal-compliance-support",
                "icon": "Scale", 
                "title": "Legal Compliance Support",
                "slug": "legal-compliance-support",
                "color": "#f08080"
            }
        ]
    },
    {
        "id": "bpo-services-3",
        "icon": "BarChart",
        "title": "Data & Analytics",
        "description": "Leverage the power of data to gain insights and drive business decisions.",
        "slug": "data-analytics",
        "subcategories": [
            {
                "id": "data-management",
                "icon": "Database",
                "title": "Data Management",
                "slug": "data-management",
                "color": "#e6e6fa"
            },
            {
                "id": "data-visualization",
                "icon": "PieChart",
                "title": "Data Visualization",
                "slug": "data-visualization",
                "color": "#7fffd4"
            },
            {
                "id": "business-reporting",
                "icon": "FileText",
                "title": "Business Reporting",
                "slug": "business-reporting",
                "color": "#d3d3d3"
            }
        ]
    },
    {
        "id": "bpo-services-4",
        "icon": "Calculator",
        "title": "Accounting & Bookkeeping",
        "description": "Reliable accounting and bookkeeping services to manage your financial records.",
        "slug": "accounting-bookkeeping",
        "subcategories": [
            {
                "id": "accounting",
                "icon": "Landmark",
                "title": "Accounting",
                "slug": "accounting",
                "color": "#faf0e6"
            },
            {
                "id": "bookkeeping",
                "icon": "BookOpen",
                "title": "Bookkeeping",
                "slug": "bookkeeping",
                "color": "#87cefa"
            }
        ]
    },
    {
        "id": "bpo-services-5",
        "icon": "ShoppingCart",
        "title": "E-commerce Services",
        "description": "Comprehensive support for your online business needs.",
        "slug": "ecommerce",
        "subcategories": [
            {
                "id": "order-management",
                "icon": "PackageCheck", 
                "title": "Order Management",
                "slug": "order-management",
                "color": "#f5f5f5"
            },
            {
                "id": "catalog-management",
                "icon": "LayoutList", 
                "title": "Catalog Management",
                "slug": "catalog-management",
                "color": "#98fb98"
            },
            {
                "id": "customer-support",
                "icon": "Headset", 
                "title": "Customer Support",
                "slug": "customer-support",
                "color": "#ffe4e1"
            }
        ]
    },
    {
        "id": "bpo-services-6",
        "icon": "SlidersHorizontal", 
        "title": "Back-Office Support",
        "description": "Efficient back-office solutions to streamline your internal processes.",
        "slug": "back-office-support",
        "subcategories": [
            {
                "id": "painless-payroll",
                "icon": "Banknote", 
                "title": "Painless Payroll",
                "slug": "painless-payroll",
                "color": "#ffdab9"
            },
            {
                "id": "invigorating-invoice-payment",
                "icon": "Receipt", 
                "title": "Invigorating Invoice & Payment",
                "slug": "invigorating-invoice-payment",
                "color": "#eee8aa"
            },
            {
                "id": "email-calendar-mastery",
                "icon": "CalendarDays", 
                "title": "Email & Calendar Mastery",
                "slug": "email-calendar-mastery",
                "color": "#b0e0e6"
            },
            {
                "id": "research-wizards",
                "icon": "Search", 
                "title": "Research Wizards",
                "slug": "research-wizards",
                "color": "#dda0dd"
            },
            {
                "id": "flawless-proofreading",
                "icon": "SpellCheck",
                "title": "Flawless Proofreading",
                "slug": "flawless-proofreading",
                "color": "#ffefd5"
            }
        ]
    },
    {
        "id": "bpo-services-7",
        "icon": "ShieldCheck",
        "title": "Content Moderation",
        "description": "Ensure a safe and positive online environment with our content moderation services.",
        "slug": "content-moderation",
        "subcategories": [
            {
                "id": "text-chat",
                "icon": "MessagesSquare",
                "title": "Text & Chat",
                "slug": "text-chat",
                "color": "#90ee90"
            },
            {
                "id": "image-video",
                "icon": "Image", 
                "title": "Image & Video",
                "slug": "image-video",
                "color": "#ffc0cb"
            },
            {
                "id": "audio-social-media",
                "icon": "Volume2",
                "title": "Audio & Social Media",
                "slug": "audio-social-media",
                "color": "#8fbc8f"
            },
            {
                "id": "e-commerce",
                "icon": "ShoppingCart",
                "title": "E-commerce",
                "slug": "e-commerce",
                "color": "#fa8072"
            },
            {
                "id": "real-time-moderation",
                "icon": "Zap",
                "title": "Real-time Moderation",
                "slug": "real-time-moderation",
                "color": "#b0c4de"
            }
        ]
    },
    {
        "id": "bpo-services-8",
        "icon": "Tags", 
        "title": "Annotation",
        "description": "High-quality data annotation services for your machine learning and AI projects.",
        "slug": "annotation",
        "subcategories": [
            {
                "id": "tagging-labelling",
                "icon": "Tag", 
                "title": "Tagging & Labelling",
                "slug": "tagging-labelling",
                "color": "#f4a460"
            },
            {
                "id": "image-annotation",
                "icon": "ImageUp", 
                "title": "Image Annotation",
                "slug": "image-annotation",
                "color": "#d2b48c"
            },
            {
                "id": "text-annotation",
                "icon": "Highlighter", 
                "title": "Text Annotation",
                "slug": "text-annotation",
                "color": "#bc8f8f"
            },
            {
                "id": "video-annotation",
                "icon": "Film",
                "title": "Video Annotation",
                "slug": "video-annotation",
                "color": "#a0522d"
            },
            {
                "id": "audio-annotation",
                "icon": "AudioLines", 
                "title": "Audio Annotation",
                "slug": "audio-annotation",
                "color": "#deb887"
            }
        ]
    },
    {
        "id": "bpo-services-9",
        "icon": "UserCog", 
        "title": "Virtual Assistant",
        "description": "Dedicated virtual assistant services to handle your administrative and personal tasks.",
        "slug": "virtual-assistant",
        "subcategories": [
            {
                "id": "administrative-support",
                "icon": "Clipboard", 
                "title": "Administrative Support",
                "slug": "administrative-support",
                "color": "#6495ed"
            },
            {
                "id": "email-calendar-management",
                "icon": "CalendarDays", 
                "title": "Email & Calendar Management",
                "slug": "email-calendar-management",
                "color": "#4682b4"
            },
            {
                "id": "social-media-management",
                "icon": "Share2", 
                "title": "Social Media Management",
                "slug": "social-media-management",
                "color": "#48d1cc"
            },
            {
                "id": "research-data-analysis",
                "icon": "FileSearch", 
                "title": "Research & Data Analysis",
                "slug": "research-data-analysis",
                "color": "#3cb371"
            },
            {
                "id": "project-coordination",
                "icon": "Network", 
                "title": "Project Coordination",
                "slug": "project-coordination",
                "color": "#20b2aa"
            }
        ]
    },
    {
        "id": "bpo-services-10",
        "icon": "Utensils", 
        "title": "Menu Building",
        "description": "Professional menu building services to attract and engage your customers.",
        "slug": "menu-building",
        "subcategories": [
            {
                "id": "menu-design-layout",
                "icon": "LayoutGrid", 
                "title": "Menu Design & Layout",
                "slug": "menu-design-layout",
                "color": "#f0e68c"
            },
            {
                "id": "menu-content-creation",
                "icon": "Pencil", 
                "title": "Menu Content Creation",
                "slug": "menu-content-creation",
                "color": "#e9967a"
            },
            {
                "id": "menu-engineering",
                "icon": "Target", 
                "title": "Menu Engineering",
                "slug": "menu-engineering",
                "color": "#b8860b"
            },
            {
                "id": "menu-item-categorization",
                "icon": "ListTree", 
                "title": "Menu Item Categorization",
                "slug": "menu-item-categorization",
                "color": "#bdb76b"
            },
            {
                "id": "menu-digitization",
                "icon": "QrCode", 
                "title": "Menu Digitization",
                "slug": "menu-digitization",
                "color": "#8b4513"
            },
            {
                "id": "menu-maintenance-updates",
                "icon": "RefreshCw", 
                "title": "Menu Maintenance & Updates",
                "slug": "menu-maintenance-updates",
                "color": "#a9a9a9"
            }
        ]
    },
    {
        "id": "bpo-services-11",
        "icon": "Magnet", 
        "title": "Lead Generation",
        "description": "Effective lead generation strategies to grow your business.",
        "slug": "lead-generation",
        "subcategories": [
            {
                "id": "b2b-lead-generation",
                "icon": "Briefcase", 
                "title": "B2B Lead Generation",
                "slug": "b2b-lead-generation",
                "color": "#6b8e23"
            },
            {
                "id": "email-audience",
                "icon": "Contact", 
                "title": "Email Audience",
                "slug": "email-audience",
                "color": "#556b2f"
            },
            {
                "id": "email-marketing",
                "icon": "Send", 
                "title": "Email Marketing",
                "slug": "email-marketing",
                "color": "#2e8b57"
            },
            {
                "id": "talent-recruitment",
                "icon": "UserSearch", 
                "title": "Talent Recruitment",
                "slug": "talent-recruitment",
                "color": "#008080"
            }
        ]
    },
    {
        "id": "network-security",
        "icon": "Network",
        "title": "Network Security",
        "description": "Protecting your network from unauthorized access and threats.",
        "slug": "network-security"
      },
      {
        "id": "endpoint-security",
        "icon": "MonitorSmartphone",
        "title": "Endpoint Security",
        "description": "Securing devices like computers and smartphones from cyber threats.",
        "slug": "endpoint-security"
      },
      {
        "id": "cloud-security",
        "icon": "ServerCrash",
        "title": "Cloud Security",
        "description": "Ensuring the safety of your cloud-based systems and data.",
        "slug": "cloud-security"
      },
      {
        "id": "email-security",
        "icon": "MailWarning",
        "title": "Email Security",
        "description": "Preventing phishing and other email-based threats.",
        "slug": "email-security"
      }
]