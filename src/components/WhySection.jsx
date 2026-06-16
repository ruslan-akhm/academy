const CARDS = [
    {
        icon: "📈",
        title: "AI literacy is the new literacy",
        body: "Within next few years, understanding how to work with AI won't be a career advantage — it'll be a baseline expectation. Your child can have a 5-year head start.",
    },
    {
        icon: "🧠",
        title: "This isn't gaming, it's thinking",
        body: "We build problem-solving habits and systems thinking — skills that transfer to every career path, whether they go into tech or not.",
    },
    {
        icon: "🌍",
        title: "Real tools, not toy projects",
        body: "Your child will use the same AI tools that engineers at top companies use today. Nothing stripped-down, nothing simplified into irrelevance.",
    },
    {
        icon: "💪",
        title: "Confidence that compounds",
        body: "When your child ships something real — an app they built, a problem they solved — that confidence carries into school, interviews, and life.",
    },
];

export default function WhySection() {
    return (
        <section className="for-parents" id="why">
            <div className="section-inner">
                <div className="section-tag">Why this matters</div>
                <h2 className="section-h2">
                    The kids who learn this now
                    <br />
                    <span className="cyan">
                        will be the ones building the future.
                    </span>
                </h2>
                <div className="parent-grid">
                    {CARDS.map((c, i) => (
                        <div key={i} className="parent-card">
                            <div className="parent-icon">{c.icon}</div>
                            <h3>{c.title}</h3>
                            <p>{c.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
