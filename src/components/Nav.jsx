import { useState, useEffect } from "react";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);
    return (
        <nav className={"nav" + (scrolled ? " nav-solid" : "")}>
            <div className="nav-inner">
                <div className="logo">
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">
                        Main Branch<span className="logo-accent">Academy</span>
                    </span>
                </div>
                <div className="nav-links">
                    <a href="#courses">Courses</a>
                    <a href="#how">How it works</a>
                    <a href="#faq">FAQ</a>
                    <a href="#enrol" className="nav-cta">
                        Reserve a spot →
                    </a>
                </div>
            </div>
        </nav>
    );
}
