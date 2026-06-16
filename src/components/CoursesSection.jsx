function CourseCard({ icon, tag, title, description, outcomes, accent }) {
    return (
        <div className="course-card" style={{ "--accent": accent }}>
            <div className="card-icon">{icon}</div>
            <div className="card-tag">{tag}</div>
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>
            <ul className="card-outcomes">
                {outcomes.map((o, i) => (
                    <li key={i}>
                        <span className="check">✓</span>
                        {o}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const COURSES = [
    {
        icon: "🤖",
        tag: "Module 01",
        title: "AI Agents — Your Child's New Superpower",
        description:
            "Kids discover what AI agents actually are, how they reason and take action, and how to direct them like a pro — not just use them like a search engine.",
        outcomes: [
            "Build a personal AI assistant in class",
            "Understand how agents chain tasks together",
            "Know when to trust AI (and when not to)",
        ],
        accent: "#00E5FF",
    },
    {
        icon: "🛠️",
        tag: "Module 02",
        title: "Engineering with AI — How Professionals Build",
        description:
            "The same workflow used at Google, Shopify, and startups worldwide — adapted for curious 10–14 year olds ready to think like engineers.",
        outcomes: [
            "Write, debug, and improve real code with AI",
            "Understand what software engineers actually do",
            "Complete a mini engineering project",
        ],
        accent: "#FFB830",
    },
    {
        icon: "🚀",
        tag: "Module 03",
        title: "Build an Application — In 60 Minutes",
        description:
            "From idea to working product in a single session. Kids leave with something they built, something they can show off, and proof they can do it again.",
        outcomes: [
            "Ship a real, working web app",
            "Understand how apps are structured",
            "Present their app to the group",
        ],
        accent: "#B47DFF",
    },
];

export default function CoursesSection() {
    return (
        <section className="courses" id="courses">
            <div className="section-inner">
                <div className="section-tag">The curriculum</div>
                <h2 className="section-h2">
                    Multiple modules.
                    <br />
                    <span className="cyan">One transformative term.</span>
                </h2>
                <p className="section-sub">
                    Each module builds on the last. By the end of term, your
                    child understands AI, thinks like an engineer, and has built
                    a real app from scratch.
                </p>
                <div className="courses-grid">
                    {COURSES.map((c, i) => (
                        <CourseCard key={i} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}
