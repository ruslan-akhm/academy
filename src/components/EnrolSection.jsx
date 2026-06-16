import { useState } from "react";

export default function EnrolSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        childAge: "",
        classFormat: "",
        submitted: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState((s) => ({ ...s, submitted: true }));
    };

    return (
        <section className="enrol" id="enrol">
            <div className="enrol-glow" />
            <div className="section-inner enrol-inner">
                <div className="enrol-left">
                    <div className="section-tag">Reserve a spot</div>
                    <h2 className="section-h2" style={{ marginBottom: "1rem" }}>
                        Cohort 1 has
                        <br />
                        <span className="amber">limited seats.</span>
                    </h2>
                    <p className="enrol-sub">
                        We're keeping the first cohort intentionally small — 10
                        students max — so every child gets the attention they
                        deserve. Drop your details and we'll get in touch.
                    </p>
                    <div className="enrol-features">
                        <div className="ef">
                            ✓ No upfront payment required to reserve
                        </div>
                        <div className="ef">
                            ✓ Full details sent before commitment
                        </div>
                        <div className="ef">
                            ✓ Spots confirmed on a first-come basis
                        </div>
                    </div>
                </div>
                <div className="enrol-right">
                    {formState.submitted ? (
                        <div className="form-success">
                            <div className="success-icon">🎉</div>
                            <h3>You're on the list!</h3>
                            <p>
                                We'll be in touch within 24 hours with full
                                details about cohort 1. Your child's spot is
                                reserved.
                            </p>
                        </div>
                    ) : (
                        <form className="enrol-form" onSubmit={handleSubmit}>
                            <div className="form-field">
                                <label>Your name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Smith"
                                    required
                                    value={formState.name}
                                    onChange={(e) =>
                                        setFormState((s) => ({
                                            ...s,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="form-field">
                                <label>Your email</label>
                                <input
                                    type="email"
                                    placeholder="jane@example.com"
                                    required
                                    value={formState.email}
                                    onChange={(e) =>
                                        setFormState((s) => ({
                                            ...s,
                                            email: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="form-field">
                                <label>Child's age</label>
                                <select
                                    required
                                    value={formState.childAge}
                                    onChange={(e) =>
                                        setFormState((s) => ({
                                            ...s,
                                            childAge: e.target.value,
                                        }))
                                    }
                                >
                                    <option value="">Select age</option>
                                    {[10, 11, 12, 13, 14].map((a) => (
                                        <option key={a} value={a}>
                                            {a} years old
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-field">
                                <label>Preferred class (optional)</label>
                                <select
                                    value={formState.classFormat}
                                    onChange={(e) =>
                                        setFormState((s) => ({
                                            ...s,
                                            classFormat: e.target.value,
                                        }))
                                    }
                                >
                                    <option value="">No preference</option>
                                    <option value="in-person">In person</option>
                                    <option value="online">Online</option>
                                </select>
                            </div>
                            <button type="submit" className="btn-primary full">
                                Reserve my child's spot →
                            </button>
                            <p className="form-note">
                                No payment needed. We'll send full details
                                before asking for anything.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
