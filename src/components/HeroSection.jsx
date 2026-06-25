import { useState, useEffect } from "react";

const TERMINAL_LINES = [
    { prompt: "$ ", text: "What will your child build today?", delay: 60 },
    { prompt: "> ", text: "AI agents that solve real problems...", delay: 50 },
    { prompt: "> ", text: "Their own working app in 60 minutes...", delay: 50 },
    { prompt: "> ", text: "The confidence to say: I made this.", delay: 60 },
    {
        prompt: "✓ ",
        text: "Enrolment now open — cohort starts September 2026",
        delay: 40,
        highlight: true,
    },
];

function Terminal() {
    const [lines, setLines] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (done) return;
        if (currentLine >= TERMINAL_LINES.length) {
            setDone(true);
            return;
        }
        const line = TERMINAL_LINES[currentLine];
        if (currentChar <= line.text.length) {
            const t = setTimeout(() => {
                setLines((prev) => {
                    const next = [...prev];
                    next[currentLine] = {
                        ...line,
                        typed: line.text.slice(0, currentChar),
                    };
                    return next;
                });
                setCurrentChar((c) => c + 1);
            }, line.delay);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => {
                setCurrentLine((l) => l + 1);
                setCurrentChar(0);
            }, 420);
            return () => clearTimeout(t);
        }
    }, [currentLine, currentChar, done]);

    return (
        <div className="terminal">
            <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-title">mainbranch_academy.sh</span>
            </div>
            <div className="terminal-body">
                {lines.map(
                    (l, i) =>
                        l && (
                            <div
                                key={i}
                                className={
                                    "terminal-line" + (l.highlight ? " hl" : "")
                                }
                            >
                                <span className="prompt">{l.prompt}</span>
                                <span>{l.typed}</span>
                                {i === currentLine && !done && (
                                    <span className="cursor">▋</span>
                                )}
                            </div>
                        )
                )}
                {done && <span className="cursor blink">▋</span>}
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
