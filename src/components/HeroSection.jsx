const TERMINAL_LINES = [
    { prompt: "$ ", text: "What will your child build today?" },
    { prompt: "> ", text: "AI agents that solve real problems..." },
    { prompt: "> ", text: "Their own working app in 60 minutes..." },
    { prompt: "> ", text: "The confidence to say: I made this." },
    {
        prompt: "✓ ",
        text: "Enrolment now open — cohort starts September 2026",
        highlight: true,
    },
];

function Terminal() {
    return (
        <div className="terminal">
            <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">mainbranch_academy.sh</span>
            </div>
            <div className="terminal-body">
                {TERMINAL_LINES.map((l, i) => (
                    <div
                        key={i}
                        className={"terminal-line" + (l.highlight ? " hl" : "")}
                    >
                        <span className="prompt">{l.prompt}</span>
                        <span>{l.text}</span>
                    </div>
                ))}
                <span className="cursor blink">▋</span>
            </div>
        </div>
    );
}

export default function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-grid-bg" />
            <div className="hero-glow" />
            <div className="hero-inner">
                <div className="hero-text">
                    <div className="hero-eyebrow">
                        <span className="eyebrow-dot" />
                        Enrolment open now — limited spots
                    </div>
                    <h1 className="hero-h1">
                        Give your child a<br />
                        <span className="hero-accent">10-year head start</span>
                        <br />
                        in tech.
                    </h1>
                    <p className="hero-sub">
                        Main Branch Academy is a Toronto-based tech academy that
                        teaches early adolescents (10–14 year olds) how to think
                        like engineers, work with AI, and build real products —
                        before most of their peers even know these tools exist.
                    </p>
                    <div className="hero-actions">
                        <a href="#enrol" className="btn-primary">
                            Reserve your child's spot →
                        </a>
                        <a href="#courses" className="btn-ghost">
                            See what they'll learn
                        </a>
                    </div>
                </div>
                <div className="hero-terminal">
                    <Terminal />
                </div>
            </div>
            <div className="hero-scroll-hint">
                <span>Scroll to explore</span>
                <span className="scroll-arrow">↓</span>
            </div>
        </section>
    );
}
