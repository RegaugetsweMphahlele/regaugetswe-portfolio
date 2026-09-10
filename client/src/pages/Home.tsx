/*
 * Editorial Atelier direction: contemporary editorial portfolio design with cream paper,
 * deep emerald ink, warm-gold annotations, asymmetric evidence-led layouts, and restrained motion.
 * This page uses curated uploaded assets while preserving the Editorial Atelier system.
 */

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  FileText,
  Github,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Plus,
  Send,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Users2,
  Wrench,
  X,
} from "lucide-react";

const HERO_TEXTURE = "/manus-storage/regaugetswe-hero-texture_cfa8fe7a.png";
const PROFILE_PLACEHOLDER = "/manus-storage/hero-headshot-transparent_271a6954.png";
const MENACARE_THUMB = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=88";
const CIVICTECH_THUMB = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=88";
const COMMUNITY_THUMB = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=88";
const FITNESS_THUMB = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=88";
const BEAUTY_THUMB = "/manus-storage/beauty-salon_fc970af3.jpg";
const CINEMA_THUMB = "/manus-storage/cinema-projector_f7d73d45.jpg";
const MARKETING_THUMB = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=88";
const PRODUCTIVITY_THUMB = "/manus-storage/ai-assistant_3a0556ae.png";
const CODE_THUMB = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=88";
const CALCULATOR_THUMB = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=88";
const TASK_THUMB = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=88";
const HOTEL_THUMB = "/manus-storage/hotel-booking_67378795.jpg";
const BRAND_STRATEGY_THUMB = "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=88";
const ZEROWASTE_THUMB = "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=88";
const BRAND_GUIDE_THUMB = "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=88";
const BUDGET_PLANNER_THUMB = "/manus-storage/fintech-ui_e8a873f4.jpg";
const CAREERBUDDY_THUMB = "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=88";
const MONOGRAM_MARK = "/manus-storage/regaugetswe-monogram_aec273ab.png";
const CV_PLACEHOLDER = "/manus-storage/Regaugetswe_Mphahlele_CV_2026_61300700.pdf";
const BRAND_STRATEGY_PDF = "/manus-storage/Brand-Strategy_351794ca.pdf";
const DEANS_CERTIFICATE_PDF = "/manus-storage/certificate-of-achievement_815c79fa.pdf";
const GIRLCODE_PROOF = "/manus-storage/GirlCode_93bd959c.png";
const AI_FOR_EVERYONE_PDF = "/manus-storage/ai-for-everyone_bc9dfb26.pdf";
const AI_FOR_EVERYONE_THUMB = "/manus-storage/ai-for-everyone-thumb_00815ea0.png";
const GENERATIVE_AI_LLMS_PDF = "/manus-storage/generative-ai-with-large-language-models_3024cab2.pdf";
const GENERATIVE_AI_LLMS_THUMB = "/manus-storage/generative-ai-with-large-language-models-thumb_5162ecb8.png";
const CERTIFICATE_ASSETS = {
  introAi: ["/manus-storage/introduction-to-artificial-intelligence-ai_c8f299cf.pdf", "/manus-storage/introduction-to-artificial-intelligence-ai-thumb_d7599236.png"],
  introAiShort: ["/manus-storage/introduction-to-ai_5b248e05.pdf", "/manus-storage/introduction-to-ai-thumb_6bc16241.png"],
  python: ["/manus-storage/python-for-data-science-ai-development_870dff8f.pdf", "/manus-storage/python-for-data-science-ai-development-thumb_25c3471d.png"],
  supervised: ["/manus-storage/supervised-machine-learning_e4d18e2d.pdf", "/manus-storage/supervised-machine-learning-thumb_5fc5be6d.png"],
  generative: ["/manus-storage/introduction-to-generative-ai_6230f85e.pdf", "/manus-storage/introduction-to-generative-ai-thumb_6fd3b146.png"],
  prompt: ["/manus-storage/generative-ai-prompt-engineering-basics_3e744cdd.pdf", "/manus-storage/generative-ai-prompt-engineering-basics-thumb_312f78f0.png"],
  unsupervised: ["/manus-storage/unsupervised-learning_018bb4ac.pdf", "/manus-storage/unsupervised-learning-thumb_b8c79210.png"],
  discover: ["/manus-storage/discover-the-art-of-prompting_8c69e080.pdf", "/manus-storage/discover-the-art-of-prompting-thumb_fdc11c90.png"],
  googleEssentials: ["/manus-storage/google-ai-essentials_79cf07be.pdf", "/manus-storage/google-ai-essentials-thumb_bd089bd0.png"],
  productivity: ["/manus-storage/maximize-productivity-with-ai-tools_cd12b478.pdf", "/manus-storage/maximize-productivity-with-ai-tools-thumb_9c68f50e.png"],
  ahead: ["/manus-storage/stay-ahead-of-the-ai-curve_773fcdbf.pdf", "/manus-storage/stay-ahead-of-the-ai-curve-thumb_6a75cf68.png"],
  responsible: ["/manus-storage/use-ai-responsibly_4ddf1908.pdf", "/manus-storage/use-ai-responsibly-thumb_37fd5b2c.png"],
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
] as const;

const skills = {
  "Programming Languages": ["HTML", "CSS", "JavaScript", "PHP", "Java", "SQL", "Laravel", "MySQL", "React", "Bootstrap"],
  "Databases & CMS": ["MongoDB", "WordPress", "Joomla", "Express.js"],
  Tools: ["Figma", "Visual Studio Code", "Docker", "GitLab", "MS Office"],
  "Adobe Creative Suite": ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
  "Soft Skills": ["Attention to Detail", "Problem Solving", "Analytical Thinking", "Planning & Organising", "Communication", "Teamwork", "Adaptability"],
};

const experience = [
  {
    year: "Jul 2026 — Present",
    role: "Digital Associate — Software Development",
    company: "Capaciti · Cape Town",
    detail: "Developing skills and delivering software projects through CAPACITI’s Digital Associate programme, applying full stack development practices in a professional team environment.",
    current: true,
  },
  {
    year: "Jan 2025 — Dec 2025",
    role: "Intern Web Developer",
    company: "Plum Systems · Cape Town",
    detail: "Developed and maintained business websites using Joomla, HTML, CSS, JavaScript and PHP. Coordinated website updates and new features against client and project requirements. Carried out troubleshooting and bug fixing with MySQL, set up environments using Docker, and collaborated through GitLab to support deployment and go-live processes.",
    current: false,
  },
];

type Project = {
  title: string;
  meta: string;
  stack: string[];
  description: string;
  link: string;
  thumb: string;
  label: string;
  proof: string;
  pdf?: string;
  pdfTitle?: string;
};

const projects: Project[] = [
  {
    title: "Brand Strategy",
    meta: "Individual · Adobe InDesign",
    stack: ["Brand strategy", "Adobe InDesign", "Editorial design"],
    description: "A branding strategy document created in Adobe InDesign, presenting the thinking, direction, and visual decisions behind a considered brand identity.",
    link: "https://github.com/RegaugetsweMphahlele/Brand-Strategy",
    thumb: BRAND_STRATEGY_THUMB,
    label: "Brand strategy",
    proof: "Individual / Adobe InDesign",
    pdf: BRAND_STRATEGY_PDF,
    pdfTitle: "Brand Strategy",
  },
  {
    title: "MenaCare",
    meta: "Group · Girlcode Hackathon 2026",
    stack: ["React", "Health-tech", "Community"],
    description: "An empathetic, youth friendly menstrual health web application that helps young people track cycles, access age appropriate education, find community support, and connect with health resources.",
    link: "https://menacare-hrzae37u.manus.space/",
    thumb: MENACARE_THUMB,
    label: "Hackathon highlight",
    proof: "Group project / youth health",
  },
  {
    title: "Western Cape Public Hospital Feedback System",
    meta: "Group · Civic tech platform",
    stack: ["AI", "Sentiment analysis", "Reporting"],
    description: "An AI powered civic tech platform that gathers public hospital feedback, identifies recurring issues through sentiment analysis, and produces monthly reports to help prioritise improvements.",
    link: "https://wc-hospital-feedback.vercel.app/",
    thumb: CIVICTECH_THUMB,
    label: "Civic intelligence",
    proof: "Group project / monthly reports",
  },
  {
    title: "Vixen Cinema",
    meta: "Group · Manus build",
    stack: ["React", "UX", "Admin"],
    description: "A warm, editorial movie-rental experience with responsive browsing, detailed movie pages, watchlists, rental checkout, and an admin dashboard for content management.",
    link: "https://vixencinema-8htb4pqn.manus.space/",
    thumb: CINEMA_THUMB,
    label: "Product experience",
    proof: "Group project / admin flow",
  },
  {
    title: "Ad Luxe Studio",
    meta: "Individual · AI marketing",
    stack: ["AI", "Brand systems", "Web"],
    description: "An AI powered marketing platform for small and emerging businesses, generating advertising posters, social content, and websites from a business's own information.",
    link: "https://adluxe-studio-ai.lovable.app/",
    thumb: MARKETING_THUMB,
    label: "Entrepreneurship",
    proof: "Individual / AI platform",
  },
  {
    title: "Blossom Nail Studio",
    meta: "Individual · HTML and Tailwind CSS",
    stack: ["HTML", "Tailwind", "Responsive"],
    description: "A mobile friendly salon landing page with a floral inspired identity, service showcase, gallery, and smooth scroll navigation.",
    link: "https://regaugetswemphahlele.github.io/blossom-nail-studio/",
    thumb: BEAUTY_THUMB,
    label: "Brand led web",
    proof: "Individual / mobile-first",
  },
  {
    title: "ZeroWaste Connect",
    meta: "Group · HTML, CSS and JavaScript",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "A community platform that connects food donors with people in need, helping reduce food waste through donations, resources, and impact tracking.",
    link: "https://github.com/RegaugetsweMphahlele/ZeroWaste-Connect-Website",
    thumb: ZEROWASTE_THUMB,
    label: "Community platform",
    proof: "Group project / food access",
  },
  {
    title: "Brand Guide",
    meta: "Individual · Personal brand system",
    stack: ["Brand identity", "Typography", "Visual systems"],
    description: "A visual and strategic foundation for my personal brand, covering the logo, typography, colour palette, design principles, and additional design work.",
    link: "https://github.com/RegaugetsweMphahlele/Brand-Guide",
    thumb: BRAND_GUIDE_THUMB,
    label: "Personal brand",
    proof: "Individual / visual system",
  },
  {
    title: "AI Budget Planner",
    meta: "Group · AI finance platform",
    stack: ["Claude", "Groq", "Vercel", "Supabase"],
    description: "An AI powered budget planner that helps users manage income and expenses, detect overspending, receive personalised saving recommendations, set financial goals, track progress, analyse spending patterns, and export spending reports as PDFs in one intuitive platform.",
    link: "https://ai-budget-planner-wine.vercel.app/",
    thumb: BUDGET_PLANNER_THUMB,
    label: "AI finance platform",
    proof: "Group project / financial planning",
  },
  {
    title: "CareerBuddy SA",
    meta: "AI career guidance platform · South Africa",
    stack: ["AI chat", "Education", "Bursary guidance"],
    description: "An AI powered career guidance platform for South African Grade 9 to 12 pupils, helping them explore subjects, careers, study paths, and bursary opportunities through a conversational chat experience.",
    link: "https://grade-genius-mentor.lovable.app/",
    thumb: CAREERBUDDY_THUMB,
    label: "Career guidance",
    proof: "Education platform / South Africa",
  },
  {
    title: "AI Productivity Dashboard",
    meta: "Individual · CAPACITI accelerator",
    stack: ["AI", "Dashboard", "Productivity"],
    description: "A responsive workplace productivity dashboard combining an email generator, meeting notes summariser, task planner, research assistant, and AI chatbot.",
    link: "https://github.com/RegaugetsweMphahlele/AI-Productivity-Assistant",
    thumb: PRODUCTIVITY_THUMB,
    label: "Applied AI",
    proof: "Individual / five AI tools",
  },
  {
    title: "Smart Calculator",
    meta: "Individual · Python",
    stack: ["Python", "CLI", "Validation"],
    description: "A command-line calculator supporting a full range of arithmetic operations with comprehensive error handling and input validation.",
    link: "https://github.com/RegaugetsweMphahlele/Smart-Calculator",
    thumb: CALCULATOR_THUMB,
    label: "Foundations",
    proof: "Individual / validation",
  },
  {
    title: "EliteGym",
    meta: "Individual · HTML, CSS, JavaScript",
    stack: ["JavaScript", "Interaction", "Fitness"],
    description: "A fitness focused website that helps users explore programmes and stay motivated through a clean, energetic layout and interactive JavaScript elements.",
    link: "https://github.com/RegaugetsweMphahlele/EliteGym",
    thumb: FITNESS_THUMB,
    label: "Interactive web",
    proof: "Individual / JS interaction",
  },
  {
    title: "Laravel Task Management App",
    meta: "Individual · Laravel",
    stack: ["Laravel", "Database", "CRUD"],
    description: "A database driven task management application that lets users create, organise, and track tasks through a structured Laravel backend.",
    link: "https://github.com/RegaugetsweMphahlele/Laravel-Projects",
    thumb: TASK_THUMB,
    label: "Backend systems",
    proof: "Individual / CRUD workflow",
  },
  {
    title: "StayHub — Booking System",
    meta: "Group · React, MongoDB, Express",
    stack: ["React", "Express", "MongoDB"],
    description: "An Airbnb style booking platform where property owners list accommodations and guests search, view, and book stays with secure authentication and listing management.",
    link: "https://github.com/RegaugetsweMphahlele/StayHub-Website",
    thumb: HOTEL_THUMB,
    label: "Hotel booking",
    proof: "Group project / auth and listings",
  },
];

type Certification = {
  title: string;
  issuer: string;
  meta: string;
  link?: string;
  pdf?: string;
  thumb?: string;
  state: string;
  icon: typeof BrainCircuit;
};

const certifications: Certification[] = [
  { title: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", meta: "Coursera certification", pdf: CERTIFICATE_ASSETS.introAi[0], thumb: CERTIFICATE_ASSETS.introAi[1], state: "Certificate available", icon: BrainCircuit },
  { title: "AI For Everyone", issuer: "DeepLearning.AI", meta: "Coursera certification", pdf: AI_FOR_EVERYONE_PDF, thumb: AI_FOR_EVERYONE_THUMB, state: "Certificate available", icon: HeartHandshake },
  { title: "Python for Data Science, AI & Development", issuer: "IBM", meta: "Coursera certification", pdf: CERTIFICATE_ASSETS.python[0], thumb: CERTIFICATE_ASSETS.python[1], state: "Certificate available", icon: Terminal },
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI & Stanford University", meta: "Coursera certification", pdf: CERTIFICATE_ASSETS.supervised[0], thumb: CERTIFICATE_ASSETS.supervised[1], state: "Certificate available", icon: BrainCircuit },
  { title: "Introduction to Generative AI", issuer: "Google Cloud", meta: "Coursera certification", pdf: CERTIFICATE_ASSETS.generative[0], thumb: CERTIFICATE_ASSETS.generative[1], state: "Certificate available", icon: Sparkles },
  { title: "Generative AI: Prompt Engineering Basics", issuer: "IBM", meta: "Coursera certification", pdf: CERTIFICATE_ASSETS.prompt[0], thumb: CERTIFICATE_ASSETS.prompt[1], state: "Certificate available", icon: Code2 },
  { title: "Generative AI with Large Language Models", issuer: "DeepLearning.AI & Amazon Web Services", meta: "Coursera certification", pdf: GENERATIVE_AI_LLMS_PDF, thumb: GENERATIVE_AI_LLMS_THUMB, state: "Certificate available", icon: Layers3 },
  { title: "Unsupervised Learning, Recommenders, Reinforcement Learning", issuer: "DeepLearning.AI & Stanford Online", meta: "Andrew Ng · Completed 24 August 2026", pdf: CERTIFICATE_ASSETS.unsupervised[0], thumb: CERTIFICATE_ASSETS.unsupervised[1], state: "Certificate available", icon: Trophy },
  { title: "Introduction to AI", issuer: "IBM", meta: "Additional AI learning", pdf: CERTIFICATE_ASSETS.introAiShort[0], thumb: CERTIFICATE_ASSETS.introAiShort[1], state: "Certificate available", icon: BrainCircuit },
  { title: "Discover the Art of Prompting", issuer: "Additional learning", meta: "AI skills certificate", pdf: CERTIFICATE_ASSETS.discover[0], thumb: CERTIFICATE_ASSETS.discover[1], state: "Certificate available", icon: Sparkles },
  { title: "Google AI Essentials", issuer: "Google", meta: "AI skills certificate", pdf: CERTIFICATE_ASSETS.googleEssentials[0], thumb: CERTIFICATE_ASSETS.googleEssentials[1], state: "Certificate available", icon: BadgeCheck },
  { title: "Maximize Productivity With AI Tools", issuer: "Additional learning", meta: "AI skills certificate", pdf: CERTIFICATE_ASSETS.productivity[0], thumb: CERTIFICATE_ASSETS.productivity[1], state: "Certificate available", icon: Wrench },
  { title: "Stay Ahead of the AI Curve", issuer: "Additional learning", meta: "AI skills certificate", pdf: CERTIFICATE_ASSETS.ahead[0], thumb: CERTIFICATE_ASSETS.ahead[1], state: "Certificate available", icon: Layers3 },
  { title: "Use AI Responsibly", issuer: "Additional learning", meta: "AI skills certificate", pdf: CERTIFICATE_ASSETS.responsible[0], thumb: CERTIFICATE_ASSETS.responsible[1], state: "Certificate available", icon: HeartHandshake },
];

const stats = [
  { value: "01", label: "ICT Diploma Graduate", icon: GraduationCap },
  { value: "02", label: "Full-Stack Developer", icon: Layers3 },
  { value: "03", label: "AI & Python Certified", icon: BadgeCheck },
  { value: "04", label: "Hackathon Participant", icon: Trophy },
];

function CountUpNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  const target = Number.parseInt(value, 10);
  const [displayValue, setDisplayValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationTimer = 0;
    let fallbackTimer = 0;
    let started = false;

    const finish = () => setDisplayValue(target);
    const start = () => {
      if (started) return;
      started = true;
      window.clearTimeout(fallbackTimer);
      if (reducedMotion) {
        finish();
        return;
      }
      const startedAt = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(target * eased));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      animationTimer = window.setTimeout(() => { frame = window.requestAnimationFrame(tick); }, delay);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start();
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(node);
    fallbackTimer = window.setTimeout(start, 420 + delay);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.clearTimeout(animationTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, [delay, target]);

  return <span ref={numberRef} className="stat-count" aria-label={value}>{String(displayValue).padStart(2, "0")}</span>;
}

function SectionHeading({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <div className="section-kicker"><span>{index}</span><i />{eyebrow}</div>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

const sectionSequence = ["home", "about", "skills", "experience", "education", "certifications", "projects", "contact"] as const;

function SectionNavigator({ current, onNavigate }: { current: (typeof sectionSequence)[number]; onNavigate: (id: string) => void }) {
  const index = sectionSequence.indexOf(current);
  const previous = sectionSequence[(index - 1 + sectionSequence.length) % sectionSequence.length];
  const next = sectionSequence[(index + 1) % sectionSequence.length];
  return <nav className="section-navigator" aria-label={`${current} section navigation`}>
    <button type="button" onClick={() => onNavigate(previous)}><ArrowLeft size={13} /> Previous</button>
    <button type="button" onClick={() => onNavigate("home")}><ArrowUpRight size={13} /> Back to top</button>
    <button type="button" onClick={() => onNavigate(next)}>Next <ArrowRight size={13} /></button>
  </nav>;
}

function LogoSlot({ compact = false, footer = false }: { compact?: boolean; footer?: boolean }) {
  return (
    <div className={`logo-slot ${compact ? "logo-slot--compact" : ""} ${footer ? "logo-slot--footer" : ""}`} aria-label="Regaugetswe logo">
      <img src={MONOGRAM_MARK} alt="Temporary monogram mark; replace with uploaded logo" />
      {!compact && !footer && <span>Logo slot</span>}
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return (window.localStorage.getItem("regaugetswe-theme") as "light" | "dark") || "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [taglineText, setTaglineText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [openProject, setOpenProject] = useState<string | null>(null);
  const taglines = useMemo(() => ["Software Engineer", "Full-Stack Web Developer", "Creative Technologist", "UX/UI Designer", "AI Enthusiast", "Problem Solver"], []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("regaugetswe-theme", theme);
  }, [theme]);

  useEffect(() => {
    const current = taglines[taglineIndex];
    const complete = taglineText === current;
    const delay = complete && !isDeleting ? 2100 : isDeleting ? 48 : 78;
    const timer = window.setTimeout(() => {
      if (!isDeleting && !complete) {
        setTaglineText(current.slice(0, taglineText.length + 1));
      } else if (!isDeleting && complete) {
        setIsDeleting(true);
      } else if (isDeleting && taglineText.length > 0) {
        setTaglineText(taglineText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setTaglineIndex((index) => (index + 1) % taglines.length);
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [isDeleting, taglineIndex, taglineText, taglines]);

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -58% 0px", threshold: [0.08, 0.2, 0.5] },
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeline = document.querySelector(".timeline") as HTMLElement | null;
    if (!timeline) return;
    let frame = 0;
    const updateProgress = () => {
      const rect = timeline.getBoundingClientRect();
      const viewportPoint = window.innerHeight * 0.58;
      const progress = Math.max(0, Math.min(1, (viewportPoint - rect.top) / rect.height));
      timeline.style.setProperty("--timeline-progress", String(progress));
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("sending");
    const form = event.currentTarget;
    const payload = new FormData(form);
    payload.append("_subject", `Portfolio enquiry from ${payload.get("name") || "a visitor"}`);
    payload.append("_captcha", "false");
    try {
      const response = await fetch("https://formsubmit.co/ajax/regaogetswemphahlele@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      if (!response.ok) throw new Error("Contact submission failed");
      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); scrollTo("home"); }} aria-label="Regaugetswe Mphahlele home">
            <LogoSlot compact />
            <span className="brand-copy"><strong>Regaugetswe Mphahlele</strong></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} className={activeSection === id ? "is-active" : ""} href={`#${id}`} onClick={(event) => { event.preventDefault(); scrollTo(id); }}>
                {label}
              </a>
            ))}
          </nav>
            <div className="header-actions">
              <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
                <span>{theme === "light" ? "Night" : "Day"}</span>
              </button>
              <a className="resume-action" href={CV_PLACEHOLDER} target="_blank" rel="noreferrer" aria-label="View resume PDF">View CV <FileText size={15} /></a>
              <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" style={{ backgroundImage: `url(${HERO_TEXTURE})` }}>
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow eyebrow--light"><span>01</span><i /> Portfolio / South Africa</div>
              <p className="hero-pretitle">Aspiring software engineer &amp; creative technologist</p>
              <h1>Regaugetswe <em>Mphahlele</em></h1>
              <p className="hero-lede">I am an aspiring Software Engineer and Creative Technologist with an ICT qualification in Multimedia Applications. I build responsive web applications, create digital brand identities, and design user focused experiences that make practical ideas easier to use. I bring development and design together, collaborate thoughtfully, and turn clear briefs into useful digital solutions.</p>
              <div className="type-line"><span className="type-label">I’m a</span><strong>{taglineText}<b aria-hidden="true" /></strong></div>
              <div className="hero-actions">
                <button className="button button--gold" type="button" onClick={() => scrollTo("projects")}>View my work <ArrowUpRight size={16} /></button>
                <a className="button button--ghost" href={CV_PLACEHOLDER} target="_blank" rel="noreferrer" aria-label="View CV PDF">View CV <FileText size={16} /></a>
              </div>
              <div className="hero-note"><span className="note-dot" /> Available for thoughtful collaborations</div>
              <div className="asset-note">View the current 2026 CV above for a complete profile of experience and capabilities.</div>
            </div>
            <div className="hero-portrait reveal reveal-delay-2">
              <div className="portrait-frame">
                <div className="portrait-index">RM / 01</div>
                <img src={PROFILE_PLACEHOLDER} alt="Professional headshot of Regaugetswe Mphahlele" />
                <div className="portrait-caption"><span>Professional profile</span><strong>Regaugetswe Mphahlele</strong></div>
              </div>
              <div className="portrait-annotation"><span>01</span><p>Curious by nature.<br />Precise by practice.</p></div>
            </div>
          </div>
          <button className="scroll-cue" type="button" onClick={() => scrollTo("about")} aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDown size={15} /></button>
        </section>

        <section className="section section--about" id="about">
          <div className="container about-layout">
            <SectionHeading index="02" eyebrow="A little context" title="Thoughtful technology, grounded in people." intro="An aspiring Software Engineer and Creative Technologist with an ICT qualification in Multimedia Applications and practical experience across responsive web development, digital brand identity, and user focused design." />
            <div className="about-body reveal reveal-delay-1">
              <p className="lead-paragraph">I enjoy working where technology, communication, and visual thinking meet.</p>
              <p>My experience includes developing and maintaining business websites, contributing to full stack applications, shaping digital brand identities, and collaborating on projects that respond to real needs. I bring curiosity, care, and a practical mindset to each brief, supported by industry recognised certifications in artificial intelligence and Python.</p>
              <div className="about-signature"><span>—</span><span>Regaugetswe Mphahlele</span><small>Developer / learner / problem solver</small></div>
            </div>
          </div>
          <div className="container stats-grid">
            {stats.map(({ value, label, icon: Icon }, index) => (
              <div className={`stat-card reveal reveal-delay-${Math.min(index + 1, 3)}`} key={label}>
                <div className="stat-top"><CountUpNumber value={value} delay={index * 120} /><Icon size={19} strokeWidth={1.5} /></div>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
          <div className="container"><SectionNavigator current="about" onNavigate={scrollTo} /></div>
        </section>

        <section className="section section--sage" id="skills">
          <div className="container">
            <SectionHeading index="03" eyebrow="Working toolkit" title="A practical stack with room to grow." intro="The technologies, creative tools, and working habits I use to turn ideas into clear, useful digital experiences." />
            <div className="skills-layout">
              <div className="skill-intro reveal"><div className="skill-quote">“<span>Good work is part craft, part curiosity, and a lot of careful listening.</span>”</div><div className="skill-caption">How I like to work</div></div>
              <div className="skills-groups">
                {Object.entries(skills).map(([group, items], index) => (
                  <div className={`skill-group reveal reveal-delay-${Math.min(index + 1, 3)}`} key={group}>
                    <div className="skill-group-head"><span>0{index + 1}</span><h3>{group}</h3></div>
                    <div className="skill-pills">{items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container"><SectionNavigator current="skills" onNavigate={scrollTo} /></div>
        </section>

        <section className="section section--experience" id="experience">
          <div className="container">
            <SectionHeading index="04" eyebrow="The path so far" title="Learning through real delivery." intro="Experience shaped by client work, structured teams, and the willingness to keep asking better questions." />
            <div className="timeline">
              {experience.map((item, index) => (
                <article className={`timeline-item reveal reveal-delay-${index + 1}`} key={item.role}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-card">
                    <div className="timeline-card-top"><span className={item.current ? "status status--current" : "status"}>{item.current ? "Current chapter" : "Experience"}</span><time>{item.year}</time></div>
                    <h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="container"><SectionNavigator current="experience" onNavigate={scrollTo} /></div>
        </section>

        <section className="section section--cream" id="education">
          <div className="container education-layout">
            <SectionHeading index="05" eyebrow="Foundations" title="Education that connects design and technology." intro="A multimedia-first foundation with a growing focus on software systems and applied intelligence." />
            <div className="education-list reveal reveal-delay-1">
              <div className="education-item"><div className="education-icon"><GraduationCap size={20} /></div><div><span className="education-year">Completed 2025</span><h3>Cape Peninsula University of Technology</h3><p>Diploma in Information Communication Technology, Multimedia Applications</p></div></div>
              <div className="education-item"><div className="education-icon"><FileCode2 size={20} /></div><div><span className="education-year">2021</span><h3>Kgagatlou Secondary School</h3><p>Senior Certificate</p></div></div>
              <div className="award-card"><Trophy size={20} /><div><span>Dean’s Special Award · 2025</span><p>Faculty of Informatics and Design, CPUT — Creative Art and Design on the Pick n Pay project, FID Brand Promotion.</p><a className="award-link" href={DEANS_CERTIFICATE_PDF} target="_blank" rel="noreferrer">View Certificate <ExternalLink size={13} /></a></div></div>
            </div>
          </div>
          <div className="container"><SectionNavigator current="education" onNavigate={scrollTo} /></div>
        </section>

        <section className="section section--dark" id="certifications">
          <div className="container">
            <SectionHeading index="06" eyebrow="Signals of practice" title="Fourteen certificates. One practical direction." />
            <div className="cert-grid">
              {certifications.map(({ title, issuer, meta, link, pdf, thumb, state, icon: Icon }, index) => (
                <article className={`cert-card reveal reveal-delay-${Math.min((index % 3) + 1, 3)}`} key={title}>
                  <div className="cert-card-top"><span className="cert-number">0{index + 1}</span><Icon size={22} strokeWidth={1.4} /></div>
                  <div className={`cert-thumb ${thumb ? "cert-thumb--image" : ""}`} style={thumb ? { backgroundImage: `url(${thumb})` } : undefined}>{!thumb && <span>Certificate thumbnail<br />will be added here</span>}</div>
                  <h3>{title}</h3><p className="cert-issuer">{issuer}</p><p className="cert-meta">{meta}</p>
                  {pdf ? <a className="cert-link" href={pdf} target="_blank" rel="noreferrer">View Certificate <ExternalLink size={13} /></a> : link ? <a className="cert-link" href={link} target="_blank" rel="noreferrer">View Certificate <ExternalLink size={13} /></a> : <span className="cert-state">{state}</span>}
                </article>
              ))}
            </div>
          </div>
          <div className="container"><SectionNavigator current="certifications" onNavigate={scrollTo} /></div>
        </section>

        <section className="section section--feature" id="hackathon">
          <div className="container feature-card reveal">
            <div className="feature-mark"><Trophy size={26} /></div>
            <div><div className="section-kicker"><span>07</span><i /> Highlight</div><h2>Girlcode Hackathon <em>2026</em> Participant</h2><p>As part of a team at the Girlcode Hackathon, co-developed <strong>MenaCare</strong> — a youth-friendly menstrual health experience designed to make education, support, and care feel more approachable.</p><img className="feature-proof-image" src={GIRLCODE_PROOF} alt="GirlCode Hackathon supporting proof" /></div>
            <button className="button button--outline" type="button" onClick={() => scrollTo("projects")}>See MenaCare <ArrowUpRight size={16} /></button>
          </div>
        </section>

        <section className="section section--projects" id="projects">
          <div className="container">
            <div className="projects-heading"><SectionHeading index="08" eyebrow="Selected work" title="A portfolio in progress, built in public." /><div className="project-count">15<br /><small>projects</small></div></div>
            <a className="latest-project-note" href="https://ai-budget-planner-wine.vercel.app/" target="_blank" rel="noreferrer"><span>Featured project</span><strong>AI Budget Planner</strong><ArrowUpRight size={14} /></a>
            <div className="project-grid">
              {projects.map((project, index) => {
                return <article className={`project-card reveal reveal-delay-${Math.min((index % 3) + 1, 3)}`} key={project.title}>
                  <div className="project-card-inner">
                    <div className="project-face project-front">
                      <div className={`project-thumb ${project.thumb ? "project-thumb--image" : ""}`} style={project.thumb ? { backgroundImage: `url(${project.thumb})` } : undefined}><span className="project-thumb-label">{project.label}</span><span className="project-thumb-icon"><Code2 size={20} /></span><a className="project-view-button" href={project.link} target="_blank" rel="noreferrer">View Project <ArrowUpRight size={13} /></a></div>
                      <div className="project-info"><div className="project-topline"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.meta.split("·")[0].trim()}</span></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-proof"><FileText size={12} />{project.proof}</div>{project.pdf && <a className="project-pdf-button" href={project.pdf} target="_blank" rel="noreferrer">View {project.pdfTitle} <ExternalLink size={13} /></a>}<a className="project-repo-button" href={project.link} target="_blank" rel="noreferrer">{project.link.includes("github.com") ? <><Github size={13} /> GitHub repository</> : <>View Project <ExternalLink size={13} /> </>}</a></div>
                    </div>
                  </div>
                </article>;
              })}
            </div>
          </div>
          <div className="container"><SectionNavigator current="projects" onNavigate={scrollTo} /></div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy"><SectionHeading index="09" eyebrow="Start a conversation" title="Have a thoughtful brief in mind?" intro="Tell me what you’re working on, what needs untangling, or where you’d like a second pair of hands." /><div className="contact-details"><a href="tel:0657464059"><Phone size={17} /><span><small>Call me</small>065 746 4059</span></a><a href="mailto:regaogetswemphahlele@gmail.com"><Mail size={17} /><span><small>Email me</small>regaogetswemphahlele@gmail.com</span></a><a href="https://www.linkedin.com/in/regaugetswe-mphahlele" target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>Connect on LinkedIn</small>/regaugetswe-mphahlele</span></a><a href="https://github.com/RegaugetsweMphahlele" target="_blank" rel="noreferrer"><Github size={17} /><span><small>Browse GitHub</small>/RegaugetsweMphahlele</span></a></div></div>
            <form className="contact-form reveal reveal-delay-1" onSubmit={submitContact}>
              <div className="form-grid"><label><span>Name</span><input name="name" required placeholder="Your name" autoComplete="name" /></label><label><span>Email</span><input name="email" type="email" required placeholder="you@example.com" autoComplete="email" /></label></div>
              <label><span>Subject</span><input name="subject" required placeholder="A quick note about the project" /></label>
              <label><span>Message</span><textarea name="message" rows={6} required placeholder="What are you building, improving, or exploring?" /></label>
              <div className="form-submit-row"><button className="button button--gold" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending…" : <>Send message <Send size={15} /></>}</button><span className={`form-feedback ${formStatus}`} role="status" aria-live="polite">{formStatus === "success" && <><Check size={14} /> Thanks — your message is on its way.</>}{formStatus === "error" && "Something went wrong. Please email me directly instead."}</span></div>
              <small className="form-note">Messages are routed to my inbox through a secure form service. No account or download required.</small>
            </form>
          </div>
          <div className="container"><SectionNavigator current="contact" onNavigate={scrollTo} /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><LogoSlot footer /><div className="footer-copy"><p>Building useful systems with a human point of view.</p><small>© {new Date().getFullYear()} Regaugetswe Mphahlele. All rights reserved.</small></div><div className="footer-links"><a href="#home" onClick={(event) => { event.preventDefault(); scrollTo("home"); }}>Back to top <ChevronDown size={14} className="rotate-180" /></a><a href="https://github.com/RegaugetsweMphahlele" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a></div></div>
        <div className="container footer-bottom"><span>Portfolio / Software Development</span><span>Designed in the Editorial Atelier spirit</span><span>South Africa</span></div>
        <div className="container footer-assets" id="asset-slots"><span>Selected work · verified credentials · thoughtful systems</span><span>Portfolio / South Africa</span></div>
      </footer>
    </div>
  );
}
