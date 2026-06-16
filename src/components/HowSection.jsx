const STEPS = [
    {
        n: 1,
        title: "Reserve a spot",
        body: "Fill in the short form below. We'll confirm your child's place and send you everything you need ahead of the first session.",
    },
    {
        n: 2,
        title: "Learn from a real software engineer",
        body: "Every session is taught directly by an experienced software engineer — not a teaching assistant or a script. Hands-on, project-driven, 90-minute group session.",
    },
    {
        n: 3,
        title: "Watch them build something real",
        body: "By end of term, your child has a portfolio — an AI project, an engineering challenge, and a working app they built themselves.",
    },
];

export default function HowSection() {
    return (
        <section className="how" id="how">
            <div className="section-inner">
                <div className="section-tag">How it works</div>
                <h2 className="section-h2">
                    Simple for parents.
                    <br />
                    <span className="amber">Transformative for kids.</span>
                </h2>
                <div className="how-steps">
                    {STEPS.map((s, i, arr) => (
                        <>
                            <div key={s.n} className="how-step">
                                <div className="step-num">{s.n}</div>
                                <div className="step-content">
                                    <h3>{s.title}</h3>
                                    <p>{s.body}</p>
                                </div>
                            </div>
                            {i < arr.length - 1 && (
                                <div key={"c" + i} className="how-connector" />
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}
