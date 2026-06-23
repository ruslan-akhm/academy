import { useState } from "react";

const FAQS = [
    {
        q: "Does my child need any prior coding experience?",
        a: "None at all. We start from zero and move at a pace that keeps things challenging without being overwhelming. Kids who've never typed a line of code ship their first app in module 3.",
    },
    {
        q: "What age range is this designed for?",
        a: "Ages 10–14 is the sweet spot. Young enough that these habits shape how they think; old enough to engage seriously with real tools. We group kids thoughtfully to keep sessions engaging for everyone.",
    },
    {
        q: "How are classes structured?",
        a: "Small cohorts (max 10 students) run in focused 90-minute sessions. We keep them small on purpose — every child gets individual attention, not just a seat in a lecture.",
    },
    {
        q: "Will my child actually use the things being taught in the real world?",
        a: "Yes — by design. Every tool in the curriculum is something professionals use today. We teach AI agents, engineering workflows, and app building because these are the literacy skills of the next decade.",
    },
    {
        q: "What makes this different from other coding classes?",
        a: "Most coding schools teach syntax. We teach how to think. The focus is on using AI as a collaborator, understanding systems, and building real things — not memorising commands.",
    },
];

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={"faq-item" + (open ? " open" : "")}
            onClick={() => setOpen((o) => !o)}
        >
            <div className="faq-q">
                <span>{q}</span>
                <span className="faq-arrow">{open ? "−" : "+"}</span>
            </div>
            {open && <div className="faq-a">{a}</div>}
        </div>
    );
}

export default function FaqSection() {
    const [selected, setSelected] = useState(0); //

    return (
        <section className="faq-section" id="faq">
            <div className="section-inner faq-inner">
                <div className="section-tag">Common questions</div>
                <h2 className="section-h2">
                    Everything you
                    <br />
                    <span className="cyan">need to know</span>
                </h2>

                {/* Desktop: split panel */}
                <div className="faq-desktop">
                    <div className="faq-questions">
                        {FAQS.map((f, i) => (
                            <button
                                key={i}
                                className={
                                    "faq-question-btn" +
                                    (selected === i ? " active" : "")
                                }
                                onClick={() => setSelected(i)}
                            >
                                <span>{f.q}</span>
                                <span className="faq-chevron">
                                    {selected === i ? "→" : "›"}
                                </span>
                            </button>
                        ))}
                    </div>
                    <div className="faq-answer-panel">
                        <p className="faq-answer-q">{FAQS[selected].q}</p>
                        <p className="faq-answer-a">{FAQS[selected].a}</p>
                    </div>
                </div>

                {/* Mobile: accordion */}
                <div className="faq-mobile">
                    {FAQS.map((f, i) => (
                        <FaqItem key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
}
