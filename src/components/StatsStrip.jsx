import { useState, useEffect, useRef } from "react";

function Counter({ to, suffix }) {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (!e.isIntersecting) return;
                obs.disconnect();
                let start = null;
                const dur = 1200;
                const step = (ts) => {
                    if (!start) start = ts;
                    const p = Math.min((ts - start) / dur, 1);
                    setVal(Math.floor(p * to));
                    if (p < 1) requestAnimationFrame(step);
                    else setVal(to);
                };
                requestAnimationFrame(step);
            },
            { threshold: 0.5 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [to]);
    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    );
}

const STATS = [
    { n: 10, suffix: " students", label: "Max cohort size" },
    { n: 90, suffix: " min", label: "Session time" },
    { n: 0, suffix: " required", label: "Coding experience" },
];

export default function StatsStrip() {
    return (
        <section className="stats-strip">
            <div className="stats-inner">
                {STATS.map((s, i) => (
                    <div key={i} className="stat">
                        <div className="stat-n">
                            <Counter to={s.n} suffix={s.suffix} />
                        </div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
