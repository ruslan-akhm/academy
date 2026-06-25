export default function TeacherSection() {
    return (
        <section className="teacher">
            <div className="section-inner">
                <div className="section-tag">Your instructor</div>
                <h2 className="section-h2">
                    Taught by a real
                    <br />
                    <span className="cyan">software engineer.</span>
                </h2>
                <div className="teacher-inner">
                    <div className="teacher-photo">
                        <div className="teacher-photo-placeholder">
                            <span className="teacher-photo-icon">👤</span>
                        </div>
                    </div>
                    <div className="teacher-content">
                        <p className="teacher-intro">
                            Hi, I'm Ruslan — a software engineer with 5+ years
                            of hands-on experience in cybersecurity and
                            enterprise systems. I've shipped dozens of
                            applications across a wide range of technologies and
                            languages.
                        </p>
                        <p className="teacher-intro">
                            I built Main Branch Academy because the industry is
                            changing fast — AI is reshaping what engineers do
                            and what skills actually matter. I wanted to give
                            the next generation a genuine head start: not just
                            coding syntax, but how to think like an engineer and
                            work confidently with the tools professionals use
                            today.
                        </p>
                        <div className="teacher-badges">
                            <span className="teacher-badge">
                                💼 5+ years industry experience
                            </span>
                            <span className="teacher-badge">
                                🔐 Cybersecurity &amp; enterprise systems
                            </span>
                            <span className="teacher-badge">
                                🤖 AI-first engineering
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
