export default function PricingSection() {
    return (
        <section className="pricing-section" id="pricing">
            <div className="section-inner pricing-inner">
                <div className="section-tag">Pricing</div>
                <h2 className="section-h2">
                    Simple, transparent
                    <br />
                    <span className="amber">pricing.</span>
                </h2>
                <p className="section-sub">
                    One plan, everything included. No hidden fees, no upsells.
                </p>
                <div className="pricing-card">
                    <div className="pricing-card-left">
                        <div className="pricing-badge">Cohort 1 Sale</div>
                        <div className="pricing-prices">
                            <span className="pricing-original">$299</span>
                            <span className="pricing-sale">$199</span>
                            <span className="pricing-period">/ month</span>
                        </div>
                        <p className="pricing-saving">
                            You save $100/month — locked in for the full cohort.
                        </p>
                        <a href="#enrol" className="pricing-cta">
                            Claim your spot
                        </a>
                    </div>
                    <div className="pricing-card-right">
                        <ul className="pricing-features">
                            <li>
                                <span className="check">✓</span> All 3 modules
                                included
                            </li>
                            <li>
                                <span className="check">✓</span> Max 10 students
                                per cohort
                            </li>
                            <li>
                                <span className="check">✓</span> 90-minute live
                                sessions
                            </li>
                            <li>
                                <span className="check">✓</span> Direct access
                                to your instructor
                            </li>
                            <li>
                                <span className="check">✓</span> Project review
                                &amp; feedback
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
