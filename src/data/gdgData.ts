/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventItem, Organizer, TechTrack, StudentProject } from '../types';

export const CHAPTER_INFO = {
  name: "Google Developer Groups on Campus",
  institution: "Techno India University",
  city: "Kolkata, India",
  portalUrl: "https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/",
  campusAddress: "Techno India University, EM-4, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
  coordinates: "22.5768° N, 88.4312° E",
  email: "gdg.tiu.kolkata@gmail.com",
  metrics: {
    membersCount: 1840,
    workshopsDelivered: 46,
    projectsBuilt: 32,
    hackathonsHosted: 7,
    communityHours: "420+"
  }
};

export const TECH_TRACKS: TechTrack[] = [
  {
    id: "ai-cloud",
    title: "AI & Google Cloud",
    subtitle: "Modern Machine Learning & Scalable Infrastructure",
    description: "Hands-on engineering with Google Vertex AI, Gemini models, Cloud Run, and BigQuery. We build autonomous agents and enterprise-grade distributed backends.",
    iconName: "Cloud",
    accentColor: "blue",
    technologies: ["Vertex AI", "Gemini 2.5", "Google Cloud Platform", "Kubernetes", "Firebase Genkit"],
    keyHighlights: [
      "Deploy production LLM pipelines with Gemini SDK",
      "Free GCP Cloud Credits for hackathon projects",
      "End-to-end vector embeddings & RAG workflows"
    ],
    workshopsCount: 14
  },
  {
    id: "android-kotlin",
    title: "Android & Jetpack Compose",
    subtitle: "Next-Generation Native Mobile Experiences",
    description: "Master modern declarative Android development with Kotlin, Jetpack Compose, Material Design 3, Coroutines, and offline-first Room databases.",
    iconName: "Smartphone",
    accentColor: "green",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Coroutines & Flow", "Ktor"],
    keyHighlights: [
      "Zero-boilerplate reactive UI architecture",
      "Hardware-accelerated animations & canvas",
      "Play Store deployment & optimization labs"
    ],
    workshopsCount: 12
  },
  {
    id: "flutter-multiplatform",
    title: "Flutter & Cross-Platform",
    subtitle: "Single Codebase for Web, Mobile & Desktop",
    description: "Build blazing-fast, beautiful applications running seamlessly across iOS, Android, macOS, and Web with Dart and the Flutter rendering engine.",
    iconName: "Layers",
    accentColor: "blue",
    technologies: ["Flutter 3.x", "Dart", "Bloc & Riverpod", "Skia / Impeller", "Firebase Suite"],
    keyHighlights: [
      "Custom 60fps gestures and tactile micro-interactions",
      "Fullstack reactive state synchronization with Firebase",
      "App Store & Google Play unified pipelines"
    ],
    workshopsCount: 10
  },
  {
    id: "web-open-source",
    title: "Web Standards & Open Source",
    subtitle: "High-Performance Modern Web & Collaborative Code",
    description: "Dive deep into modern TypeScript, React, Next.js, Chromium Web APIs, Core Web Vitals, and contributing to high-impact open source repositories.",
    iconName: "Globe",
    accentColor: "yellow",
    technologies: ["TypeScript", "Next.js & React 19", "WebAssembly", "Tailwind CSS", "Git & GitHub Actions"],
    keyHighlights: [
      "Master Sub-second Core Web Vitals optimization",
      "Git branch workflows & open source maintainer skills",
      "PWAs with background sync & service workers"
    ],
    workshopsCount: 10
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "devx-summit-2026",
    title: "DEVX SUMMIT 2026",
    category: "Conference",
    date: "September 13, 2026",
    time: "11:00 AM – 06:30 PM IST",
    venue: "Techno India University Campus, Kolkata",
    type: "In-Person",
    imageUrl: "/assets/official/event_devx_summit_2026.jpg",
    bannerUrl: "/assets/official/event_devx_summit_banner.jpg",
    shortDesc: "The Final Chapter of DEVX 2026. A premium technology summit bringing together students, professionals, and Google Developer Experts for innovation, AI/ML, and networking.",
    fullDesc: "DEVX SUMMIT 2026 is the premier annual gathering of student technologists, professionals, and industry leaders in Eastern India. Featuring keynotes from Google Developer Experts, hands-on masterclasses in on-device Gemma AI models with Transformers.js, distributed cloud architecture, and networking with top engineers across Kolkata.",
    accentColor: "blue",
    status: "Upcoming",
    attendeesCount: 250,
    maxSeats: 250,
    tags: ["Flagship", "DevX 2.0", "Gemma", "AI/ML", "Networking"],
    speakers: [
      {
        name: "Nitin Tiwari",
        role: "Google Developer Expert in ML",
        company: "Lead Data Scientist, Zelar",
        avatarUrl: "/assets/official/speaker_nitin_tiwari.jpg"
      },
      {
        name: "Kazi Haque",
        role: "Community Consultant",
        company: "Dify India",
        avatarUrl: "/assets/official/speaker_kazi_haque.jpg"
      },
      {
        name: "Md Nasirul Haque",
        role: "IT Analyst & Roboticist",
        company: "Tata Consultancy Services | GDG Cloud Kolkata Co-Organizer"
      },
      {
        name: "Pradip Sadhukhan",
        role: "GDG on Campus Organizer",
        company: "Techno India University",
        avatarUrl: "/assets/official/lead_pradip_sadhukhan.jpg"
      }
    ],
    agenda: [
      { time: "11:00 AM", title: "Registration, Welcome Breakfast & Swag Distribution", speaker: "GDG TIU Team" },
      { time: "11:45 AM", title: "Opening Keynote: Scaling Innovation Into Impact", speaker: "Pradip Sadhukhan" },
      { time: "12:30 PM", title: "Serving Gemma Models for On-Device Inference with Transformers.js & Cloud TPU", speaker: "Nitin Tiwari (GDE ML)" },
      { time: "01:45 PM", title: "Exclusive Networking Lunch & Speakers Interaction", speaker: "Community Hall" },
      { time: "02:45 PM", title: "Building Autonomous Agentic Workflows with Dify", speaker: "Kazi Haque (Dify India)" },
      { time: "04:00 PM", title: "Robotics & Distributed Cloud Edge Case Studies", speaker: "Md Nasirul Haque (TCS)" },
      { time: "05:15 PM", title: "DevX 2.0 Grand Awards Ceremony & Community Showcase", speaker: "Organizing Council" }
    ]
  },
  {
    id: "client-chaos-challenge",
    title: "Client Chaos Challenge — DevX 2.0",
    category: "Challenge",
    date: "September 10, 2026",
    time: "01:45 PM – 06:30 PM IST",
    venue: "Software Innovation Lab, Techno India University",
    type: "In-Person",
    imageUrl: "/assets/official/event_client_chaos_challenge.jpg",
    bannerUrl: "/assets/official/event_client_chaos_banner.jpg",
    shortDesc: "Welcome to the most chaotic client meeting of your life. Teams inherit realistic codebases while live 'clients' alter specs every 30 minutes.",
    fullDesc: "Real-world engineering rarely starts with a blank slate. In the Client Chaos Challenge, teams inherit a live buggy codebase with failing unit tests, undocumented endpoints, and conflicting feature requests. Live stakeholder roleplayers introduce unexpected scope changes, testing your refactoring agility, git discipline, and composure under pressure.",
    accentColor: "red",
    status: "Past",
    attendeesCount: 96,
    maxSeats: 120,
    tags: ["Debugging", "Refactoring", "Live Simulation", "DevX 2.0"],
    speakers: [
      {
        name: "Piush Bose",
        role: "Tech Head & DevOps Head",
        company: "GDG on Campus TIU",
        avatarUrl: "/assets/official/lead_piush_bose.jpg"
      },
      {
        name: "Anindo Neel Dutta",
        role: "Web Dev Head",
        company: "GDG on Campus TIU",
        avatarUrl: "/assets/official/lead_anindo_neel_dutta.jpeg"
      }
    ],
    agenda: [
      { time: "01:45 PM", title: "Rules Briefing & Repository Distribution", speaker: "Piush Bose" },
      { time: "02:15 PM", title: "Sprint 1: Bug Eradication & Triage", speaker: "All Teams" },
      { time: "03:30 PM", title: "Chaos Drop 1: The Urgent Regulatory Pivot", speaker: "Client Roleplayers" },
      { time: "04:45 PM", title: "Chaos Drop 2: Real-time WebSocket Overhaul", speaker: "Client Roleplayers" },
      { time: "06:00 PM", title: "Live Deployments & Code Review Showdown", speaker: "Judge Panel" }
    ]
  },
  {
    id: "zeal-of-code",
    title: "Zeal of Code — DevX 2.0",
    category: "Challenge",
    date: "September 10, 2026",
    time: "01:30 PM – 05:30 PM IST",
    venue: "Computing Center Lab, Techno India University",
    type: "In-Person",
    imageUrl: "/assets/official/event_zeal_of_code.jpg",
    bannerUrl: "/assets/official/event_zeal_of_code_banner.jpg",
    shortDesc: "Think fast. Code faster. Solve smarter. A high-stakes competitive programming tournament testing DSA intuition and algorithm efficiency.",
    fullDesc: "Zeal of Code brings collegiate algorithmic problem solvers together to battle over algorithmic puzzles ranging from dynamic programming and tree traversals to graph pathfinding. Built to simulate high-pressure tech recruitment rounds and international collegiate competitions.",
    accentColor: "yellow",
    status: "Past",
    attendeesCount: 140,
    maxSeats: 150,
    tags: ["Competitive Programming", "Algorithms", "DSA", "DevX 2.0"],
    speakers: [
      {
        name: "Mudit Tarway",
        role: "DSA Lead",
        company: "GDG on Campus TIU",
        avatarUrl: "/assets/official/lead_mudit_tarway.jpeg"
      },
      {
        name: "Shagun Shaw",
        role: "DSA Core Member",
        company: "GDG on Campus TIU"
      }
    ],
    agenda: [
      { time: "01:30 PM", title: "Algorithm Briefing & Arena Access", speaker: "Mudit Tarway" },
      { time: "02:00 PM", title: "Round 1: Rapid Arrays & Strings Sprint", speaker: "Contestants" },
      { time: "03:15 PM", title: "Round 2: Graph Theory & Dynamic Programming", speaker: "Contestants" },
      { time: "04:45 PM", title: "Final Leaderboard Reveal & Solution Walkthroughs", speaker: "DSA Mentors" }
    ]
  },
  {
    id: "mechverse",
    title: "MechVerse — DevX 2.0",
    category: "Workshop",
    date: "September 09, 2026",
    time: "11:00 AM – 04:30 PM IST",
    venue: "Robotics & IoT Innovation Hub, TIU",
    type: "In-Person",
    imageUrl: "/assets/official/event_mechverse.jpg",
    bannerUrl: "/assets/official/event_mechverse_banner.jpg",
    shortDesc: "Build it. Program it. Bring it to life. Exploring the frontier where hardware, robotics, embedded microcontrollers, and modern software intersect.",
    fullDesc: "MechVerse merges embedded systems development, robotic kinematics, and real-time sensory telemetry. Participants code microcontroller firmware, calibrate robotic servos, and stream sensor feeds over MQTT to custom cloud visualization dashboards.",
    accentColor: "green",
    status: "Past",
    attendeesCount: 110,
    maxSeats: 120,
    tags: ["Robotics", "Hardware", "IoT", "Embedded", "DevX 2.0"],
    speakers: [
      {
        name: "Sagnik Sarkar",
        role: "Design and Robotics Head",
        company: "GDG on Campus TIU",
        avatarUrl: "/assets/official/lead_sagnik_sarkar.png"
      }
    ],
    agenda: [
      { time: "11:00 AM", title: "Microcontroller Architecture & Sensor Interfacing", speaker: "Sagnik Sarkar" },
      { time: "12:30 PM", title: "Hands-on: Autonomous Line-Follower Calibration", speaker: "Robotics Leads" },
      { time: "02:30 PM", title: "Telemetry Streaming to Cloud Run via MQTT", speaker: "IoT Mentors" },
      { time: "04:00 PM", title: "Robo-Arena Autonomous Obstacle Run", speaker: "All Teams" }
    ]
  },
  {
    id: "capture-the-flag",
    title: "Capture The Flag — DevX 2.0",
    category: "Challenge",
    date: "September 10, 2026",
    time: "11:00 AM – 04:00 PM IST",
    venue: "Cybersecurity Security Operations Lab, TIU",
    type: "In-Person",
    imageUrl: "/assets/official/event_capture_the_flag.jpg",
    bannerUrl: "/assets/official/event_capture_the_flag_banner.jpg",
    shortDesc: "An ethical hacking and cybersecurity CTF challenge covering cryptography, web exploitation, reverse engineering, and digital forensics.",
    fullDesc: "A multi-stage jeopardy-style cybersecurity tournament designed by GDG TIU's cybersecurity domain. Students dissect vulnerable web targets, decrypt ciphertexts, inspect network packet captures, and analyze binary reverse engineering challenges.",
    accentColor: "red",
    status: "Past",
    attendeesCount: 95,
    maxSeats: 100,
    tags: ["Cybersecurity", "CTF", "Ethical Hacking", "Cryptography", "DevX 2.0"],
    speakers: [
      {
        name: "Anurag Roy",
        role: "Cybersecurity Head",
        company: "GDG on Campus TIU",
        avatarUrl: "/assets/official/lead_anurag_roy.jpeg"
      },
      {
        name: "Debayan Sahana",
        role: "Cybersecurity Core Member",
        company: "GDG on Campus TIU"
      }
    ],
    agenda: [
      { time: "11:00 AM", title: "CTF Rules of Engagement & Target Network Setup", speaker: "Anurag Roy" },
      { time: "11:30 AM", title: "Flag Capture Sprint: Web & Forensics", speaker: "All Teams" },
      { time: "01:30 PM", title: "Binary Exploitation & Cryptography Challenges", speaker: "All Teams" },
      { time: "03:30 PM", title: "Vulnerability Debrief & Defenses Walkthrough", speaker: "Security Leads" }
    ]
  },
  {
    id: "build-with-gemma",
    title: "Build with Gemma: GDG On Campus TIU Buildathon",
    category: "Bootcamp",
    date: "July 24 - 25, 2026",
    time: "01:00 PM – 07:00 PM IST",
    venue: "Auditorium & AI Lab, Techno India University",
    type: "Hybrid",
    imageUrl: "/assets/official/event_build_with_gemma.jpg",
    bannerUrl: "/assets/official/event_build_with_gemma_banner.jpg",
    shortDesc: "Official Google Buildathon focused on developing production AI solutions with Google's open-weights Gemma models.",
    fullDesc: "A 2-day hands-on AI sprint exploring fine-tuning, prompt engineering, and deploying Google Gemma 2 and Gemma multimodal models for healthcare, education, localized Indic languages, and smart productivity tools.",
    accentColor: "blue",
    status: "Past",
    attendeesCount: 165,
    maxSeats: 180,
    tags: ["Gemma", "GenAI", "Hackathon", "Open Source", "Google AI"],
    speakers: [
      {
        name: "SHUBHODEEP BANERJEE",
        role: "AI/ML Head",
        company: "GDG on Campus TIU",
        avatarUrl: "/assets/official/lead_shubhodeep_banerjee.jpg"
      },
      {
        name: "Pradip Sadhukhan",
        role: "GDG on Campus Organizer",
        company: "Techno India University",
        avatarUrl: "/assets/official/lead_pradip_sadhukhan.jpg"
      }
    ],
    agenda: [
      { time: "01:00 PM", title: "Deconstructing Gemma 2: Architecture & Distillation", speaker: "SHUBHODEEP BANERJEE" },
      { time: "02:30 PM", title: "Codelab: Fine-tuning Gemma on Vertex AI & Colab", speaker: "AI Team" },
      { time: "04:30 PM", title: "Team Buildathon Hacking Sprint", speaker: "Mentors" },
      { time: "06:30 PM", title: "Prototype Pitches & Community Showcase", speaker: "Judge Panel" }
    ]
  }
];

export const ORGANIZERS: Organizer[] = [
  {
    id: "pradip",
    name: "Pradip Sadhukhan",
    role: "GDGoC Organizer",
    domain: "Lead Organizer",
    focusArea: "Chapter Leadership & Full-Stack Systems",
    bio: "Computer Science & Engineering student leading Google Developer Groups on Campus at Techno India University. Passionate about web development, distributed architecture, and scaling student engineering communities.",
    avatarUrl: "/assets/official/lead_pradip_sadhukhan.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "blue"
  },
  {
    id: "piush",
    name: "Piush Bose",
    role: "Tech Head and DevOps Head",
    domain: "Technical & DevOps",
    focusArea: "Cloud Infrastructure, Containers & DevOps",
    bio: "Directs technical workshops and project roadmaps for GDG TIU. Specializes in DevOps automation, Docker containers, Kubernetes, and backend performance tuning.",
    avatarUrl: "/assets/official/lead_piush_bose.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "red"
  },
  {
    id: "anisha",
    name: "Anisha Sultana",
    role: "Android Head",
    domain: "Mobile & Android",
    focusArea: "Kotlin, Jetpack Compose & Android SDK",
    bio: "Drives mobile engineering initiatives and workshops. Guides students through modern Android application architecture, declarative UI design with Compose, and Google Play delivery.",
    avatarUrl: "/assets/official/lead_anisha_sultana.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "green"
  },
  {
    id: "anindo",
    name: "Anindo Neel Dutta",
    role: "Web Dev Head",
    domain: "Web Standards",
    focusArea: "TypeScript, React, Next.js & Performance",
    bio: "Directs web development curriculums and hackathon technical support. Experienced frontend engineer focused on high-performance web applications and open-source tooling.",
    avatarUrl: "/assets/official/lead_anindo_neel_dutta.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "yellow"
  },
  {
    id: "shubhodeep",
    name: "SHUBHODEEP BANERJEE",
    role: "AI/ML Head",
    domain: "AI & Machine Learning",
    focusArea: "Deep Learning, LLMs & Gemma Ecosystem",
    bio: "Leads Artificial Intelligence and Machine Learning tracks. Researches foundation model fine-tuning, computer vision architectures, and runs hands-on Gemma buildathons.",
    avatarUrl: "/assets/official/lead_shubhodeep_banerjee.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "blue"
  },
  {
    id: "sagnik",
    name: "Sagnik Sarkar",
    role: "Design and Robotics Head",
    domain: "Robotics & Hardware",
    focusArea: "Embedded Systems, IoT & Creative Design",
    bio: "Oversees hardware integration and creative design at GDG TIU. Bridges robotics, embedded microcontrollers, and human-centered user interface design.",
    avatarUrl: "/assets/official/lead_sagnik_sarkar.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "red"
  },
  {
    id: "anurag",
    name: "Anurag Roy",
    role: "Cybersecurity Head",
    domain: "Cybersecurity",
    focusArea: "Network Defense, CTF & Threat Intelligence",
    bio: "Heads the cybersecurity domain at GDG on Campus TIU. Directs Capture The Flag (CTF) tournaments and labs in digital forensics, ethical hacking, and web exploitation.",
    avatarUrl: "/assets/official/lead_anurag_roy.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "red"
  },
  {
    id: "mudit",
    name: "Mudit Tarway",
    role: "DSA Lead",
    domain: "Algorithms & DSA",
    focusArea: "Data Structures, Algorithms & Contest Programming",
    bio: "Coordinates algorithmic workshops, problem-solving bootcamps, and coding showdowns including Zeal of Code for competitive programming enthusiasts.",
    avatarUrl: "/assets/official/lead_mudit_tarway.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "yellow"
  },
  {
    id: "spandan",
    name: "Spandan Mozumder",
    role: "Web3 and Blockchain Lead",
    domain: "Web3 & Distributed Systems",
    focusArea: "Smart Contracts, Decentralized Apps & Cryptography",
    bio: "Leads decentralized web and blockchain research. Guides students in smart contract security, decentralized storage, and distributed state machine mechanics.",
    avatarUrl: "/assets/official/lead_spandan_mozumder.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "green"
  },
  {
    id: "ishan",
    name: "Ishan Ray Chaudhuri",
    role: "Operation Head",
    domain: "Operations",
    focusArea: "Campus Operations & Event Production",
    bio: "Coordinates event logistics, campus venue management, and production workflows for large-scale chapter summits across Techno India University.",
    avatarUrl: "/assets/official/lead_ishan_ray_chaudhuri.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "blue"
  },
  {
    id: "subhasish",
    name: "Subhasish Chanda",
    role: "Management Head",
    domain: "Management",
    focusArea: "Chapter Strategy & Team Coordination",
    bio: "Supervises multi-domain coordination, cross-team schedules, and community compliance across all academic departments at Techno India University.",
    avatarUrl: "/assets/official/lead_subhasish_chanda.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "yellow"
  },
  {
    id: "ayanka",
    name: "Ayanka Ghosh",
    role: "PR and Marketing Head",
    domain: "Marketing & PR",
    focusArea: "Public Relations, Community Outreach & Brand",
    bio: "Directs media presence, public relations, and campus communications, ensuring every student developer discovers opportunities and flagship events.",
    avatarUrl: "/assets/official/lead_ayanka_ghosh.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    accentColor: "red"
  }
];

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "project-campuspulse",
    title: "CampusPulse TIU",
    tagline: "Real-time campus transit & schedule companion",
    description: "Built by TIU students to solve daily shuttle tracking, live lecture room changes, and automated peer study group notifications with Firebase Cloud Messaging.",
    category: "Mobile & Real-time",
    techStack: ["Flutter", "Firebase", "Cloud Functions", "Google Maps"],
    stars: 128,
    sdgGoal: "SDG 9: Industry & Innovation",
    accentColor: "blue",
    metrics: "2,400+ Daily Active Campus Users"
  },
  {
    id: "project-agrivision",
    title: "AgriVision Bengal",
    tagline: "Multimodal crop blight detection for local farmers",
    description: "An offline-capable progressive web application and Android app utilizing Gemini Vision and TensorFlow Lite to detect pest infections in paddy crops across West Bengal.",
    category: "AI & Sustainable Tech",
    techStack: ["Gemini 2.5 Vision", "TensorFlow Lite", "Kotlin", "FastAPI"],
    stars: 215,
    sdgGoal: "SDG 2: Zero Hunger",
    accentColor: "green",
    metrics: "94.2% Field Diagnostic Accuracy"
  },
  {
    id: "project-ecoroute",
    title: "EcoRoute Kolkata",
    tagline: "Carbon-aware urban routing for Salt Lake Sector V",
    description: "Calculates the lowest carbon footprint commute by analyzing real-time metro, electric bus feeder lines, and shared e-rickshaw availability in the IT corridor.",
    category: "Smart Mobility",
    techStack: ["Google Maps Platform", "Python", "React 19", "Google Cloud Run"],
    stars: 94,
    sdgGoal: "SDG 11: Sustainable Cities",
    accentColor: "yellow",
    metrics: "18.4% Average CO2 Reduction"
  }
];

export const FAQS = [
  {
    q: "Who can join GDG on Campus at Techno India University?",
    a: "Any undergraduate or postgraduate student enrolled at Techno India University (and affiliated institutes in Kolkata) passionate about technology, regardless of your year or major. Beginners and seasoned developers are equally welcome."
  },
  {
    q: "Is membership free?",
    a: "Yes, 100% free. All GDG on Campus workshops, hackathons, speaker sessions, and study jams are completely free of charge, supported by Google Developer Groups community programs."
  },
  {
    q: "How often do you organize workshops?",
    a: "We host bi-weekly hands-on codelabs, monthly flagship tech meetups, and semesterly hackathons and design challenges in the Techno India University campus in Salt Lake Sector V."
  },
  {
    q: "How does this connect with Google Developer Groups globally?",
    a: "GDG on Campus TIU is part of the global Google Developer Groups network spanning 140+ countries. Our members get access to Google Cloud credits, official codelabs, and eligibility for the global Google Solution Challenge."
  }
];

export const EVENT_GALLERY_ITEMS = [
  {
    image: "/assets/official/event_devx_summit_2026.jpg",
    text: "DevX Summit 2026"
  },
  {
    image: "/assets/official/event_client_chaos_challenge.jpg",
    text: "Client Chaos Challenge"
  },
  {
    image: "/assets/official/event_zeal_of_code.jpg",
    text: "Zeal of Code"
  },
  {
    image: "/assets/official/event_mechverse.jpg",
    text: "Mechverse Robotics"
  },
  {
    image: "/assets/official/event_capture_the_flag.jpg",
    text: "Capture The Flag CTF"
  },
  {
    image: "/assets/official/event_build_with_gemma.jpg",
    text: "Build with Gemma Sprint"
  },
  {
    image: "/assets/official/event_devx_summit_banner.jpg",
    text: "Summit Keynote Stage"
  },
  {
    image: "/assets/official/event_client_chaos_banner.jpg",
    text: "Client Chaos 2.0"
  },
  {
    image: "/assets/official/event_zeal_of_code_banner.jpg",
    text: "Algorithmic Arena"
  },
  {
    image: "/assets/official/event_mechverse_banner.jpg",
    text: "Hardware Innovations"
  },
  {
    image: "/assets/official/event_capture_the_flag_banner.jpg",
    text: "Cyber Threat Defense"
  },
  {
    image: "/assets/official/event_build_with_gemma_banner.jpg",
    text: "Gemma Open Models Lab"
  }
];

